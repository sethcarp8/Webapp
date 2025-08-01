import { onDocumentCreated } from "firebase-functions/v2/firestore";
import { defineSecret } from "firebase-functions/params";
import { onRequest } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import { google } from "googleapis";
import OpenAI from "openai";

admin.initializeApp();
const db = admin.firestore();

// Secret definitions for Firebase Functions v2
const OPENAI_API_KEY = defineSecret("OPENAI_API_KEY");
const GMAIL_CLIENT_ID = defineSecret("GMAIL_CLIENT_ID");
const GMAIL_CLIENT_SECRET = defineSecret("GMAIL_CLIENT_SECRET");

async function saveTokens(tokens: any): Promise<void> {
  try {
    await db.doc("__gmail/tokens").set(tokens, { merge: true });
  } catch (error) {
    console.error("Error saving Gmail tokens:", error);
  }
}

// Step 1: Consent URL for Gmail authorization
export const gmailAuthURL = onRequest({ 
  region: "us-central1",
  cors: true,
  secrets: [GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET]
}, (_req, res) => {
  try {
    // Initialize OAuth2 client at runtime
    const oAuth2Client = new google.auth.OAuth2(
      GMAIL_CLIENT_ID.value(),
      GMAIL_CLIENT_SECRET.value(),
      "https://oauthcallback-5pqizxxvlq-uc.a.run.app"
    );

    const url = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["https://mail.google.com/"],
      prompt: "consent",
    });
    res.status(200).send(`<a href="${url}">Authorize Gmail</a>`);
  } catch (error) {
    console.error("Error generating auth URL:", error);
    res.status(500).send("Error generating authorization URL");
  }
});

// Step 2: OAuth callback handler
export const oauthCallback = onRequest({ 
  region: "us-central1",
  cors: true,
  secrets: [GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET]
}, async (req, res) => {
  try {
    const { code } = req.query;
    if (!code || typeof code !== "string") {
      res.status(400).send("Missing authorization code");
      return;
    }

    // Initialize OAuth2 client at runtime
    const oAuth2Client = new google.auth.OAuth2(
      GMAIL_CLIENT_ID.value(),
      GMAIL_CLIENT_SECRET.value(),
      "https://oauthcallback-5pqizxxvlq-uc.a.run.app"
    );

    const { tokens } = await oAuth2Client.getToken(code);
    await saveTokens(tokens);
    res.status(200).send("✅ Gmail token stored successfully. You can close this tab.");
  } catch (error: any) {
    console.error("OAuth token exchange error:", error);
    res.status(500).send(`❌ Token exchange failed: ${error.message}`);
  }
});

// Contact form interface
interface Contact {
  name: string;
  email: string;
  message: string;
  createdAt?: admin.firestore.Timestamp;
}

// Firestore trigger for auto-drafting email replies
export const contactAutoDraft = onDocumentCreated(
  {
    region: "us-central1",
    document: "contacts/{id}",
    concurrency: 10,
    secrets: [OPENAI_API_KEY, GMAIL_CLIENT_ID, GMAIL_CLIENT_SECRET],
  },
  async (event) => {
    try {
      // Initialize OpenAI
      const openai = new OpenAI({ 
        apiKey: OPENAI_API_KEY.value() 
      });

      // Initialize OAuth2 client at runtime
      const oAuth2Client = new google.auth.OAuth2(
        GMAIL_CLIENT_ID.value(),
        GMAIL_CLIENT_SECRET.value(),
        "https://oauthcallback-5pqizxxvlq-uc.a.run.app"
      );

      // Load Gmail tokens
      const snap = await db.doc("__gmail/tokens").get();
      if (snap.exists) {
        const tokens = snap.data();
        if (tokens) {
          oAuth2Client.setCredentials(tokens);
        }
      }

      const gmail = google.gmail({ version: "v1", auth: oAuth2Client });

      // Get contact data
      const data = event.data?.data() as Contact;
      if (!data) {
        throw new Error("No contact data found");
      }

      // Generate AI reply
      const chat = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
          { 
            role: "system", 
            content: "You are Kauai Property Solutions. Write professional but warm replies to property owner inquiries. Keep it under 5 sentences. Close with 'Best regards, Seth.'" 
          },
          { 
            role: "user",   
            content: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}\n\nWrite a reply.` 
          },
        ],
        max_tokens: 200,
        temperature: 0.7,
      });

      const reply = chat.choices[0]?.message?.content ?? 
        "Thank you for your message. We'll be in touch soon.";

      // Create email draft
      const emailContent = [
        "From: Kauai Property Solutions <contact@kauaipropertysolutions.com>",
        `To: ${data.email}`,
        "Subject: Re: Your message to Kauai Property Solutions",
        "Content-Type: text/plain; charset=UTF-8",
        "",
        reply,
      ].join("\r\n");

      const raw = Buffer.from(emailContent)
        .toString("base64")
        .replace(/\+/g, "-")
        .replace(/\//g, "_")
        .replace(/=+$/, "");

      const draft = await gmail.users.drafts.create({
        userId: "me",
        requestBody: { message: { raw } },
      });

      // Save updated tokens
      const newTokens = oAuth2Client.credentials;
      if (newTokens.access_token) {
        await saveTokens(newTokens);
      }

      console.log(`✅ Draft created: https://mail.google.com/mail/u/0/#drafts?compose=${draft.data.id}`);
      
      // Log success for monitoring
      await db.doc("__logs/contact_drafts").set({
        contactId: event.data?.id,
        draftId: draft.data.id,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        success: true,
      });

    } catch (error: any) {
      console.error("❌ contactAutoDraft error:", error);
      
      // Log error for monitoring
      try {
        await db.doc("__logs/contact_drafts").set({
          contactId: event.data?.id,
          error: error.message,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
          success: false,
        });
      } catch (logError) {
        console.error("Failed to log error:", logError);
      }
    }
  }
);
