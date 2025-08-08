"use client"

import * as React from "react"
import * as Tabs from "@radix-ui/react-tabs"

export default function TabsAccessibilityDemo() {
  return (
    <Tabs.Root defaultValue="tab1" className="w-full">
      <Tabs.List aria-label="Demo tabs" className="flex gap-2 mb-3">
        <Tabs.Trigger value="tab1" className="px-3 py-2 rounded border data-[state=active]:bg-muted focus:outline-none focus:ring-2 focus:ring-ring">Overview</Tabs.Trigger>
        <Tabs.Trigger value="tab2" className="px-3 py-2 rounded border data-[state=active]:bg-muted focus:outline-none focus:ring-2 focus:ring-ring">Details</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1" className="rounded border p-3">Tab one content</Tabs.Content>
      <Tabs.Content value="tab2" className="rounded border p-3">Tab two content</Tabs.Content>
    </Tabs.Root>
  )
}


