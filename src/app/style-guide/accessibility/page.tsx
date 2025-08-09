"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui"
import ReducedMotionDemo from "@/components/accessibility/reduced-motion-demo"
import DialogAccessibilityDemo from "@/components/accessibility/dialog-demo"
import DrawerAccessibilityDemo from "@/components/accessibility/drawer-demo"
import TooltipAccessibilityDemo from "@/components/accessibility/tooltip-demo"
import TabsAccessibilityDemo from "@/components/accessibility/tabs-demo"

export default function AccessibilityPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Accessibility</h1>
        <p className="text-muted-foreground">Checklist, reduced motion, and interactive component behaviors.</p>
      </div>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Checklist</CardTitle>
            <CardDescription>Expectations for building inclusive components</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-sm space-y-1">
              <li>• Provide visible focus outlines and keyboard operability</li>
              <li>• Use semantic roles and ARIA attributes only as needed</li>
              <li>• Modals/Drawers: role=dialog, aria-modal, trap focus, Escape closes, restore focus</li>
              <li>• Tabs: proper roles and keyboard arrow navigation</li>
              <li>• Tooltips: descriptive content, shown on focus and hover, hidden from reading order</li>
              <li>• Honor prefers-reduced-motion</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Reduced Motion</CardTitle>
            <CardDescription>Toggle OS setting to see animations pause</CardDescription>
          </CardHeader>
          <CardContent>
            <ReducedMotionDemo />
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Dialog Focus & Escape</CardTitle>
            <CardDescription>Trap focus and close with Escape</CardDescription>
          </CardHeader>
          <CardContent>
            <DialogAccessibilityDemo />
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Drawer Focus & Escape</CardTitle>
            <CardDescription>Trap focus and close with Escape</CardDescription>
          </CardHeader>
          <CardContent>
            <DrawerAccessibilityDemo />
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Tooltip</CardTitle>
            <CardDescription>Keyboard-focusable and announces content</CardDescription>
          </CardHeader>
          <CardContent>
            <TooltipAccessibilityDemo />
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>Semantic roles with keyboard navigation</CardDescription>
          </CardHeader>
          <CardContent>
            <TabsAccessibilityDemo />
          </CardContent>
        </Card>
      </section>
    </div>
  )
}


