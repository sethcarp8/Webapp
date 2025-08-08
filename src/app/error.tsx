"use client"

import React from "react"
import { Button } from "@/components/ui"
import { Container } from "@/components/layout"
import { EmptyState } from "@/components/content"
import { AlertTriangle, RefreshCw, Home } from "lucide-react"
import Link from "next/link"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Container>
        <div className="text-center">
          <EmptyState
            title="Something went wrong"
            description="We encountered an unexpected error. Please try again or contact support if the problem persists."
            icon={AlertTriangle}
            action={{
              label: "Try Again",
              href: "#"
            }}
            size="lg"
          />

          <div className="mt-8 space-y-4">
            {process.env.NODE_ENV === "development" && (
              <div className="p-4 bg-muted rounded-lg text-left max-w-md mx-auto">
                <p className="text-sm font-medium mb-2">Error Details (Development)</p>
                <p className="text-xs text-muted-foreground font-mono break-all">
                  {error.message}
                </p>
                {error.digest && (
                  <p className="text-xs text-muted-foreground mt-2">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>
            )}
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={reset}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              If this error persists, please contact our support team.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
