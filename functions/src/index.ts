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
      // Get contact data
      const data = event.data?.data() as Contact;
      if (!data) {
        throw new Error("No contact data found");
      }

      console.log(`✅ Contact received from ${data.name} (${data.email}): ${data.message}`);

      // Log success for monitoring
      await db.doc("__logs/contact_drafts").set({
        contactId: event.data?.id,
        timestamp: admin.firestore.FieldValue.serverTimestamp(),
        success: true,
        message: "Contact logged successfully"
      });

      // Try to generate AI reply if OpenAI is configured
      try {
        // Initialize OpenAI
        const openai = new OpenAI({ 
          apiKey: OPENAI_API_KEY.value() 
        });

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

        console.log(`✅ AI reply generated: ${reply}`);

        // Try to create email draft if Gmail is configured
        try {
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

          // Create or get the KPS label
          let kpsLabelId: string;
          try {
            // Try to find existing KPS label
            const labelsResponse = await gmail.users.labels.list({ userId: 'me' });
            const kpsLabel = labelsResponse.data.labels?.find(label => label.name === 'KPS');
            
            if (kpsLabel?.id) {
              kpsLabelId = kpsLabel.id;
              console.log(`✅ Found existing KPS label: ${kpsLabelId}`);
            } else {
              // Create KPS label
              const createKpsResponse = await gmail.users.labels.create({
                userId: 'me',
                requestBody: {
                  name: 'KPS',
                  labelListVisibility: 'labelShow',
                  messageListVisibility: 'show'
                }
              });
              kpsLabelId = createKpsResponse.data.id!;
              console.log(`✅ Created KPS label: ${kpsLabelId}`);
            }
          } catch (labelError) {
            console.log(`⚠️ Error with KPS label: ${labelError}`);
            kpsLabelId = 'INBOX'; // Fallback to inbox
          }

          // Create or get the Contact Form sublabel
          let contactFormLabelId: string;
          try {
            // Try to find existing Contact Form label
            const labelsResponse = await gmail.users.labels.list({ userId: 'me' });
            const contactFormLabel = labelsResponse.data.labels?.find(label => 
              label.name === 'Contact Form'
            );
            
            if (contactFormLabel?.id) {
              contactFormLabelId = contactFormLabel.id;
              console.log(`✅ Found existing Contact Form label: ${contactFormLabelId}`);
            } else {
              // Create Contact Form label
              const createContactFormResponse = await gmail.users.labels.create({
                userId: 'me',
                requestBody: {
                  name: 'Contact Form',
                  labelListVisibility: 'labelShow',
                  messageListVisibility: 'show'
                }
              });
              contactFormLabelId = createContactFormResponse.data.id!;
              console.log(`✅ Created Contact Form label: ${contactFormLabelId}`);
            }
          } catch (sublabelError) {
            console.log(`⚠️ Error with Contact Form label: ${sublabelError}`);
            contactFormLabelId = kpsLabelId; // Fallback to KPS label
          }

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

          // Move the draft to the Contact Form label
          try {
            await gmail.users.messages.modify({
              userId: 'me',
              id: draft.data.message?.id!,
              requestBody: {
                addLabelIds: [contactFormLabelId]
              }
            });
            console.log(`✅ Draft moved to Contact Form label`);
          } catch (moveError) {
            console.log(`⚠️ Could not move draft to label: ${moveError}`);
          }

          // Save updated tokens
          const newTokens = oAuth2Client.credentials;
          if (newTokens.access_token) {
            await saveTokens(newTokens);
          }

          console.log(`✅ Draft created and organized: https://mail.google.com/mail/u/0/#drafts?compose=${draft.data.id}`);
          
          // Update log with draft info
          await db.doc("__logs/contact_drafts").update({
            draftId: draft.data.id,
            aiReply: reply,
            emailDraftCreated: true,
            labelId: contactFormLabelId,
            labelName: 'KPS/Contact Form'
          });

        } catch (gmailError) {
          console.log(`⚠️ Gmail draft creation failed: ${gmailError}`);
          // Update log with Gmail error
          await db.doc("__logs/contact_drafts").update({
            gmailError: gmailError instanceof Error ? gmailError.message : String(gmailError),
            emailDraftCreated: false
          });
        }

      } catch (openaiError) {
        console.log(`⚠️ OpenAI reply generation failed: ${openaiError}`);
        // Update log with OpenAI error
        await db.doc("__logs/contact_drafts").update({
          openaiError: openaiError instanceof Error ? openaiError.message : String(openaiError),
          aiReplyGenerated: false
        });
      }

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
