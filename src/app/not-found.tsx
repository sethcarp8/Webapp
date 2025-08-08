"use client"

import React from "react"
import { Button } from "@/components/ui"
import { Container } from "@/components/layout"
import { EmptyState } from "@/components/content"
import { Search, Home, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Container>
        <div className="text-center">
          <EmptyState
            title="Page Not Found"
            description="The page you&apos;re looking for doesn&apos;t exist or has been moved."
            icon={Search}
            action={{
              label: "Go Home",
              href: "/"
            }}
            size="lg"
          />

          <div className="mt-8 space-y-4">
            <p className="text-muted-foreground">
              You can try searching for what you&apos;re looking for or return to the homepage.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
