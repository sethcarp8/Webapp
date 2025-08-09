"use client"

import React from "react"
import { cn } from "@/lib/utils"

export function ReducedMotionDemo() {
  const [isReduced, setIsReduced] = React.useState(false)
  const [forced, setForced] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia === "undefined") return
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setIsReduced(mq.matches)
    update()
    mq.addEventListener?.("change", update)
    return () => mq.removeEventListener?.("change", update)
  }, [])

  React.useEffect(() => {
    if (typeof document === 'undefined') return
    const root = document.documentElement
    if (forced) {
      root.setAttribute('data-reduce-motion', 'true')
    } else {
      root.removeAttribute('data-reduce-motion')
    }
  }, [forced])

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-medium">OS preference:</span>
          <span
            className={cn(
              "px-2 py-0.5 rounded border",
              isReduced ? "bg-muted text-muted-foreground" : "bg-background"
            )}
            aria-live="polite"
          >
            {isReduced ? "Reduced" : "No preference"}
          </span>
        </div>
        <button
          className="px-2 py-1 rounded border text-xs hover:bg-accent hover:text-accent-foreground"
          onClick={() => setForced((v) => !v)}
          aria-pressed={forced}
        >
          {forced ? "Disable demo reduced motion" : "Enable demo reduced motion"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* CSS-only example using motion-reduce */}
        <div className="p-4 border rounded-lg">
          <p className="text-sm text-muted-foreground mb-3">CSS-only: uses Tailwind’s motion-reduce variant</p>
          <div className="h-24 flex items-center justify-center">
            <div
              className={cn(
                // animate with bounce but disable when user prefers reduced motion
                "w-10 h-10 rounded-full bg-primary animate-bounce motion-reduce:animate-none"
              )}
              role="img"
              aria-label="Bouncing dot that stops when reduced motion is enabled"
            />
          </div>
        </div>

        {/* JS-aware example reacting to media query in real time */}
        <div className="p-4 border rounded-lg">
          <p className="text-sm text-muted-foreground mb-3">JS-aware: reacts to OS change immediately</p>
          <div className="h-24 flex items-center justify-center">
            <div
              className={cn(
                "w-10 h-10 rounded bg-primary",
                isReduced ? "" : "animate-pulse"
              )}
              role="img"
              aria-label={
                isReduced
                  ? "Static block because reduced motion is enabled"
                  : "Pulsing block indicating animation is enabled"
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReducedMotionDemo


