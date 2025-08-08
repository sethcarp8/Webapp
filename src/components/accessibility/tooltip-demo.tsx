"use client"

import * as React from "react"
import * as Tooltip from "@radix-ui/react-tooltip"

export default function TooltipAccessibilityDemo() {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button className="px-3 py-2 rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-ring">
            Hover or focus me
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="rounded bg-foreground text-background text-xs px-2 py-1 shadow motion-reduce:transition-none"
            sideOffset={6}
          >
            Accessible tooltip content
            <Tooltip.Arrow className="fill-foreground" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}


