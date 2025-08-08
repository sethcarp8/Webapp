import * as React from "react"
import { Container, Section, Grid, Stack, Divider } from "@/components/layout"
import { PageTitle, KeyValue, InfoCallout, StepList, UpsellCard, PropertyCard } from "@/components/content"

export interface GuestDashboardTemplateProps {
  userName: string
  upcomingStay: {
    property: string
    checkIn: string
    checkOut: string
    guests: number
    confirmationNumber: string
  }
  messages: Array<{ id: number; subject: string; preview: string; date: string; unread?: boolean }>
}

export function GuestDashboardTemplate({ userName, upcomingStay, messages }: GuestDashboardTemplateProps) {
  return (
    <div className="bg-background">
      <Container>
        <Stack gap="lg">
          <Section spacing="sm">
            <PageTitle title={`Welcome back, ${userName}`} subtitle="Manage your stays and messages" />
          </Section>

          {/* Quick actions (upsells) */}
          <Section spacing="sm">
            <Grid cols={3} className="gap-4">
              <UpsellCard title="Late checkout" description="Extend your stay by 2 hours" cta={{ label: "Add", href: "#" }} />
              <UpsellCard title="Mid-stay clean" description="Schedule an extra cleaning" cta={{ label: "Schedule", href: "#", variant: "secondary" }} />
              <UpsellCard title="Airport pickup" description="Private transfer on arrival" cta={{ label: "Book", href: "#", variant: "outline" }} />
            </Grid>
          </Section>

          {/* Details grid */}
          <Section spacing="sm">
            <Grid cols={2} className="gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold">Upcoming stay</h3>
                <PropertyCard title={upcomingStay.property} location={`${upcomingStay.checkIn} – ${upcomingStay.checkOut}`} tags={[`${upcomingStay.guests} guests`, `CN ${upcomingStay.confirmationNumber}`]} />
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold">Details</h3>
                <KeyValue twoColumn items={[
                  { label: "Check-in", value: upcomingStay.checkIn },
                  { label: "Check-out", value: upcomingStay.checkOut },
                  { label: "Guests", value: String(upcomingStay.guests) },
                  { label: "Confirmation", value: upcomingStay.confirmationNumber },
                ]} />
              </div>
            </Grid>
          </Section>

          <Section spacing="sm">
            <Stack gap="sm">
              <h3 className="font-semibold">Messages</h3>
              <div className="space-y-3">
                {messages.map((m) => (
                  <div key={m.id} className="p-4 rounded-md border">
                    <div className="flex items-center justify-between">
                      <p className="font-medium">{m.subject}</p>
                      <span className="text-xs text-muted-foreground">{m.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{m.preview}</p>
                  </div>
                ))}
              </div>
            </Stack>
          </Section>

          {/* Contact */}
          <Section spacing="sm">
            <InfoCallout title="Need help?" tone="info">
              Our support team is available 24/7 for any questions about your stay.
            </InfoCallout>
          </Section>
        </Stack>
      </Container>
    </div>
  )
}


