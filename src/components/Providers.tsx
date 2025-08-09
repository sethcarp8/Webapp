"use client"

import React from "react"
import { ThemeProvider } from "@/components/providers/theme-provider"

type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange value={{ light: 'light', dark: 'dark' }}>
      {children}
    </ThemeProvider>
  )
}

export default Providers


