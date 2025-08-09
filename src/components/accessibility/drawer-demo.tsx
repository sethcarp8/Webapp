"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { Button } from "@/components/ui"
import { cn } from "@/lib/utils"

function useFocusTrap<T extends HTMLElement>(enabled: boolean, ref: React.RefObject<T | null>) {
  React.useEffect(() => {
    if (!enabled) return
    const el = ref.current
    if (!el) return
    const selectors = [
      'a[href]','button:not([disabled])','textarea:not([disabled])','input:not([disabled])','select:not([disabled])','[tabindex]:not([tabindex="-1"])'
    ]
    const getFocusable = () => Array.from(el.querySelectorAll<HTMLElement>(selectors.join(',')))
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const focusable = getFocusable()
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const active = document.activeElement as HTMLElement | null
      if (e.shiftKey) {
        if (active === first || !el.contains(active)) {
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
    el.addEventListener('keydown', onKeyDown)
    return () => el.removeEventListener('keydown', onKeyDown)
  }, [enabled, ref])
}

export default function DrawerAccessibilityDemo() {
  const [open, setOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)
  const drawerRef = React.useRef<HTMLDivElement>(null)
  const triggerRef = React.useRef<HTMLButtonElement | null>(null)
  const closeButtonRef = React.useRef<HTMLButtonElement>(null)

  useFocusTrap(open, drawerRef)

  React.useEffect(() => setMounted(true), [])

  React.useEffect(() => {
    if (open) {
      const prev = document.activeElement as HTMLElement | null
      triggerRef.current = prev as HTMLButtonElement | null
      document.body.style.overflow = 'hidden'
      setTimeout(() => closeButtonRef.current?.focus(), 0)
      const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
      document.addEventListener('keydown', onKey)
      return () => document.removeEventListener('keydown', onKey)
    } else {
      document.body.style.overflow = ''
      triggerRef.current?.focus()
    }
  }, [open])

  const node = (
    <div className={cn("fixed inset-0 z-[1400]", open ? "block" : "hidden")} aria-hidden={!open}>
      <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Accessible Drawer"
        className="absolute right-0 top-0 h-full w-[85vw] max-w-sm bg-background border-l shadow-xl p-4"
        tabIndex={-1}
      >
        <h2 className="text-lg font-semibold">Accessible Drawer</h2>
        <p className="text-sm text-muted-foreground mb-3">Focus is trapped here. Press Escape or click overlay to close.</p>
        <div className="flex gap-2">
          <Button ref={closeButtonRef} onClick={() => setOpen(false)}>Close</Button>
          <Button variant="outline">Another Action</Button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <span className="text-sm text-muted-foreground">Press Esc to close. Try Tab/Shift+Tab to verify focus trap.</span>
      </div>
      {mounted ? createPortal(node, document.body) : null}
    </div>
  )
}


