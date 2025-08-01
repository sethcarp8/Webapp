"use client";

import { useState, type FormEvent } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Home() {
  // ──────────────────────────────────────────────────────────────
  // local state
  // ──────────────────────────────────────────────────────────────
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // ──────────────────────────────────────────────────────────────
  // submit handler  →  writes a document to  contacts  collection
  // ──────────────────────────────────────────────────────────────
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    const data = Object.fromEntries(new FormData(e.currentTarget)) as {
      name: string;
      email: string;
      message: string;
    };

    try {
      await addDoc(collection(db, "contacts"), data);
      setSubmitted(true);
    } catch (err) {
      console.error("Contact form error:", err);
      alert("Sorry, something went wrong. Please email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ──────────────────────────────────────────────────────────────
  // page markup
  // ──────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen flex flex-col bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 px-6 text-center flex-grow">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Kauai Property Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Trusted home care and guest services on Kauai — peace of mind for every property owner.
          </p>
          <a
            href="#contact"
            aria-label="Jump to contact form"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-colors"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-white" aria-labelledby="services-heading">
        <div className="max-w-6xl mx-auto">
          <h2 id="services-heading" className="text-4xl font-bold text-center mb-16 text-gray-900">
            What We Include
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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
              <article
                key={card.title}
                className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 bg-gray-50" aria-labelledby="contact-heading">
        <div className="max-w-2xl mx-auto">
          <h2 id="contact-heading" className="text-4xl font-bold mb-8 text-center text-gray-900">
            Send us a message
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Ready to get started? We&apos;d love to hear from you.
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
              <p className="text-green-700">
                Thanks for reaching out — we&apos;ll reply within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder="Enter your full name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  disabled={isSubmitting}
                  placeholder="you@example.com"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  disabled={isSubmitting}
                  placeholder="Tell us about your property needs..."
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                aria-label="Submit contact form"
                className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">Kauai Property Solutions</h3>
          <p className="text-gray-300 mb-6">Personal home and guest care</p>
          <a
            href="mailto:contact@kauaipropertysolutions.com"
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            contact@kauaipropertysolutions.com
          </a>
          <hr className="border-gray-700 my-8" />
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Kauai Property Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
