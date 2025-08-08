import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "@/components/providers";
import { AppShell, Header, Footer } from "@/components/app-shell";
import { Inline } from "@/components/layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kauai Property Solutions",
  description: "Professional property management and real estate services in Kauai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppShell
            header={
              <Header
                logo={
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">K</span>
                    </div>
                    <span className="font-semibold text-lg">Kauai Property Solutions</span>
                  </div>
                }
                navigation={
                  <Inline className="gap-6">
                    <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                      Home
                    </Link>
                    <Link href="/style-guide" className="text-sm font-medium hover:text-primary transition-colors">
                      Style Guide
                    </Link>
                  </Inline>
                }
              />
            }
            footer={
              <Footer
                logo={
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xs">K</span>
                    </div>
                    <span className="font-semibold">Kauai Property Solutions</span>
                  </div>
                }
                links={
                  <>
                    <Link href="/" className="text-sm hover:text-primary transition-colors">
                      Home
                    </Link>
                    <Link href="/style-guide" className="text-sm hover:text-primary transition-colors">
                      Style Guide
                    </Link>
                    <Link href="/contact" className="text-sm hover:text-primary transition-colors">
                      Contact
                    </Link>
                  </>
                }
                copyright={
                  <p>© 2024 Kauai Property Solutions. All rights reserved.</p>
                }
              />
            }
          >
            {children}
          </AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
