"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

/**
 * Theme toggle component
 * Allows users to switch between light, dark, and system themes
 */
export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  const nextTheme = resolvedTheme === "dark" ? "light" : "dark"

  if (!mounted) {
    // Render a hydration-safe placeholder so SSR and first client render match
    return (
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-hidden="true"
        tabIndex={-1}
        className="relative pointer-events-none"
        title="Toggle theme"
      >
        <Sun className="h-[1.2rem] w-[1.2rem]" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="relative pointer-events-auto cursor-pointer z-[100]"
      onClick={() => setTheme(nextTheme)}
      aria-label="Toggle theme"
      aria-pressed={resolvedTheme === "dark"}
      title={mounted ? `Switch to ${nextTheme} mode` : "Toggle theme"}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute inset-0 m-auto h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
