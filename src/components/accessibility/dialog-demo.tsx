"use client"

import React from "react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui"
import { cn } from "@/lib/utils"

function useFocusTrap<T extends HTMLElement>(
  enabled: boolean,
  containerRef: React.RefObject<T | null> | React.MutableRefObject<T | null>
) {
  React.useEffect(() => {
    if (!enabled) return
    const container = containerRef.current
    if (!container) return

    const focusableSelectors = [
      'a[href]','button:not([disabled])','textarea:not([disabled])','input:not([disabled])',
      'select:not([disabled])','[tabindex]:not([tabindex="-1"])'
    ]

    const getFocusable = () => Array.from(container.querySelectorAll<HTMLElement>(focusableSelectors.join(',')))

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const focusable = getFocusable()
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement as HTMLElement | null
      if (e.shiftKey) {
        if (active === first || !container.contains(active)) {
          last.focus()
          e.preventDefault()
        }
      } else {
        if (active === last) {
          first.focus()
          e.preventDefault()
        }
      }
    }

    container.addEventListener('keydown', handleKeyDown)
    return () => {
      container.removeEventListener('keydown', handleKeyDown)
    }
  }, [enabled, containerRef])
}

export default function DialogAccessibilityDemo() {
  const [open, setOpen] = React.useState(false)
  const dialogRef = React.useRef<HTMLDivElement>(null)
  const closeButtonRef = React.useRef<HTMLButtonElement>(null)
  const triggerRef = React.useRef<HTMLButtonElement | null>(null)
  const [mounted, setMounted] = React.useState(false)

  useFocusTrap(open, dialogRef)

  React.useEffect(() => setMounted(true), [])

  React.useEffect(() => {
    if (open) {
      const prev = document.activeElement as HTMLElement | null
      triggerRef.current = (prev as HTMLButtonElement | null)
      document.body.style.overflow = 'hidden'
      // Focus first interactive element (close button)
      setTimeout(() => closeButtonRef.current?.focus(), 0)
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setOpen(false)
      }
      document.addEventListener('keydown', onKey)
      return () => document.removeEventListener('keydown', onKey)
    } else {
      document.body.style.overflow = ''
      // Restore focus to trigger
      triggerRef.current?.focus()
    }
  }, [open])

  const modal = (
    <div
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-[1400]",
        open ? "block" : "hidden"
      )}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setOpen(false)}
      />
      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="a11y-dialog-title"
        aria-describedby="a11y-dialog-desc"
        className={cn(
          "relative mx-auto mt-[10vh] w-[90vw] max-w-md rounded-lg border bg-background p-6 shadow-lg",
          "focus:outline-none"
        )}
        tabIndex={-1}
      >
        <h2 id="a11y-dialog-title" className="text-lg font-semibold">Accessible Dialog</h2>
        <p id="a11y-dialog-desc" className="mt-1 text-sm text-muted-foreground">
          This dialog traps focus, closes on Escape and overlay click, and restores focus to the trigger.
        </p>
        <div className="mt-4 flex gap-2">
          <Button ref={closeButtonRef} onClick={() => setOpen(false)}>Close</Button>
          <Button variant="outline">Another Action</Button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <Button onClick={() => setOpen(true)}>Open Dialog</Button>
        <span className="text-sm text-muted-foreground">Press Esc to close. Try Tab/Shift+Tab to verify focus trap.</span>
      </div>
      {mounted ? createPortal(modal, document.body) : null}
    </div>
  )
}


