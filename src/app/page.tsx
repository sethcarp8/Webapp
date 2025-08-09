"use client";

import { useState, type FormEvent } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui";
import { InfoCallout } from "@/components/content";

export default function Home() {
  // ──────────────────────────────────────────────────────────────
  // local state
  // ──────────────────────────────────────────────────────────────
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [firebaseError, setFirebaseError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  // ──────────────────────────────────────────────────────────────
  // submit handler  →  writes a document to  contacts  collection
  // ──────────────────────────────────────────────────────────────
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setFirebaseError(null);
    setFormError(null);

    const data = Object.fromEntries(new FormData(e.currentTarget)) as {
      name: string;
      email: string;
      message: string;
    };

    try {
      // Add a timeout promise
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timed out after 30 seconds')), 30000);
      });

      // Add timestamp to the data
      const submissionData = {
        ...data,
        createdAt: new Date().toISOString(),
        timestamp: Date.now()
      };
      
      // Race between the actual submission and timeout
      await Promise.race([
        addDoc(collection(db, "contacts"), submissionData),
        timeoutPromise
      ]);
      
      setSubmitted(true);
      
      // Reset form after successful submission
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.error("Contact form error:", err);
      
      // Check if it's a Firebase configuration error
      if (err instanceof Error && err.message.includes('Firebase')) {
        setFirebaseError("Firebase is not configured. Please contact us directly at contact@kauaipropertysolutions.com");
        return;
      }
      
      // More detailed error messages
      let errorMessage = "Sorry, something went wrong. ";
      
      if (err instanceof Error) {
        if (err.message.includes('timeout')) {
          errorMessage += "The request timed out. Please check your internet connection and try again.";
        } else if (err.message.includes('Missing or insufficient permissions')) {
          errorMessage += "Permission denied. Please contact support.";
        } else if (err.message.includes('Failed to get document because the client is offline')) {
          errorMessage += "You appear to be offline. Please check your internet connection.";
        } else if (err.message.includes('Firebase')) {
          errorMessage += "Firebase configuration error. Please contact support.";
        } else {
          errorMessage += err.message || "Please email us directly at contact@kauaipropertysolutions.com";
        }
      } else {
        errorMessage += "Please email us directly at contact@kauaipropertysolutions.com";
      }
      
      setFormError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ──────────────────────────────────────────────────────────────
  // page markup
  // ──────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Hero */}
      <section className="hero-gradient relative overflow-hidden px-6 flex-grow">
        <div className="max-w-4xl mx-auto py-24 md:py-32">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl border bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 p-8 md:p-12 text-center shadow-md">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Kauai Property Solutions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Trusted home care and guest services on Kauai — peace of mind for every property owner.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
              <Button asChild size="lg" className="shadow-lg">
                <a href="#contact" aria-label="Jump to contact form">Get Started Today</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/style-guide" aria-label="View our style guide">Explore Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-gradient py-20 px-6" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id="services-heading" className="text-4xl md:text-5xl font-bold tracking-tight">
              What We Include
            </h2>
            <p className="mt-3 text-muted-foreground">A service stack designed for worry‑free ownership and great guest experiences.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏠",
                title: "Property Cleaning & Maintenance",
                desc: "Helping keep your home in pristine condition — inside and out.",
              },
              {
                icon: "👥",
                title: "Guest Support",
                desc: "Keeping things easy and comfortable for your family and guests.",
              },
              {
                icon: "📱",
                title: "Owner Communication",
                desc: "Helping you stay informed and connected, even from a distance.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-primary/25 to-transparent shadow-sm hover:shadow-md transition-all duration-300"
              >
                <article className="rounded-2xl bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 border border-border/50 p-8 h-full transform transition-transform duration-300 group-hover:-translate-y-0.5 motion-reduce:transform-none">
                  <div className="mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary grid place-items-center text-2xl">
                      <span aria-hidden>{card.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight mb-2">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.desc}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 bg-muted" aria-labelledby="contact-heading">
        <div className="max-w-2xl mx-auto">
          <h2 id="contact-heading" className="text-4xl font-bold tracking-tight mb-8 text-center">
            Send us a message
          </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
            Ready to get started? We&apos;d love to hear from you.
          </p>

          {firebaseError && (
            <InfoCallout title="⚠️ Development Mode" tone="warning" className="mb-8">
              <p className="mb-2">{firebaseError}</p>
              <a href="mailto:contact@kauaipropertysolutions.com" className="underline">Email us directly</a>
            </InfoCallout>
          )}

          {/* Live region for form errors */}
          {formError && (
            <div role="status" aria-live="polite" className="mb-6">
              <InfoCallout title="We couldn’t send your message" tone="error">
                {formError}
              </InfoCallout>
            </div>
          )}

          {submitted ? (
            <InfoCallout title="Message sent!" tone="success">
              Thanks for reaching out — we&apos;ll reply within 24 hours.
            </InfoCallout>
          ) : (
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-primary/25 to-transparent shadow-sm">
              <form onSubmit={handleSubmit} className="rounded-2xl bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/60 border border-border/50 p-6 md:p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      disabled={isSubmitting}
                      placeholder="Enter your full name"
                      autoComplete="name"
                      className="w-full h-12 px-4 rounded-xl border border-border/50 bg-background/80 placeholder:text-muted-foreground/60 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      disabled={isSubmitting}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="w-full h-12 px-4 rounded-xl border border-border/50 bg-background/80 placeholder:text-muted-foreground/60 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    disabled={isSubmitting}
                    placeholder="Tell us about your property needs..."
                    autoComplete="off"
                    className="w-full p-4 rounded-xl border border-border/50 bg-background/80 placeholder:text-muted-foreground/60 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-transparent resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                  aria-label="Submit contact form"
                  className="w-full shadow-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      {/* Global footer from AppShell will render below */}
    </main>
  );
}
