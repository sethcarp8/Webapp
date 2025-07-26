import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";      // ✅ import the type directly

/* ––––– Google Fonts ––––– */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ––––– SEO / Meta ––––– */
export const metadata: Metadata = {
  title: "Kauai Property Solutions",
  description: "Personal home and guest care",
};

/* ––––– Root Layout ––––– */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
