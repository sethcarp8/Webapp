import React from "react"
import { Container, Section, Stack } from "@/components/layout"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Alert } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export default function ComponentsGuidePage() {
  return (
    <Container>
      <Stack gap="xl">
        <Section>
          <h1 className="text-3xl font-bold tracking-tight">Components</h1>
          <p className="text-muted-foreground">Core UI components with stable demo states.</p>
        </Section>

        <Section>
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button disabled>Disabled</Button>
            </CardContent>
          </Card>
        </Section>

        <Section>
          <Card>
            <CardHeader>
              <CardTitle>Form Inputs</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Jane Doe" defaultValue="Jane Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@example.com" defaultValue="user@example.com" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" defaultValue="A short, deterministic message." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="select">Select</Label>
                <Select id="select" defaultValue="one">
                  <option value="one">Option one</option>
                  <option value="two">Option two</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Choices</Label>
                <div className="flex items-center gap-4">
                  <Checkbox id="chk" defaultChecked />
                  <RadioGroup aria-label="Group" defaultValue="a">
                    <input type="radio" name="rg" value="a" defaultChecked />
                    <input type="radio" name="rg" value="b" />
                  </RadioGroup>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </Section>

        <Section>
          <Card>
            <CardHeader>
              <CardTitle>Badges & Alerts</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
              <Alert title="Heads up" description="This is a deterministic alert state for snapshots." />
            </CardContent>
          </Card>
        </Section>

        <Section>
          <Card>
            <CardHeader>
              <CardTitle>Theme Toggle</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-3">
              <ThemeToggle />
              <span className="text-sm text-muted-foreground">Toggle theme to verify light/dark tokens.</span>
            </CardContent>
          </Card>
        </Section>
      </Stack>
    </Container>
  )
}


