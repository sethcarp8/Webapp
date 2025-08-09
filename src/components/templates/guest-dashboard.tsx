import * as React from "react"
import { Container, Section, Grid, Stack, Cluster } from "@/components/layout"
import { PageTitle, KeyValue, InfoCallout, UpsellCard, PropertyCard } from "@/components/content"
import { Button } from "@/components/ui"

export interface GuestDashboardTemplateProps {
  userName: string
  upcomingStay: {
    property: string
    checkIn: string
    checkOut: string
    guests: number
    confirmationNumber: string
  }
  wifi: { network: string; password: string }
}

export function GuestDashboardTemplate({ userName, upcomingStay, wifi }: GuestDashboardTemplateProps) {
  return (
    <div className="bg-background">
      <Container>
        <Stack gap="lg">
          <Section spacing="sm">
            <PageTitle
              title={`Welcome, ${userName}`}
              subtitle={`${upcomingStay.property} · ${upcomingStay.checkIn} – ${upcomingStay.checkOut}`}
            />
          </Section>

          {/* Quick actions */}
          <Section spacing="sm">
            <Cluster gap="md" justify="start" wrap>
              <Button asChild>
                <a href="#checkin">Check-in instructions</a>
              </Button>
              <Button asChild variant="secondary">
                <a href="#contact">Contact host</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#directions">Directions</a>
              </Button>
              <Button asChild variant="ghost">
                <a href="#itinerary">Add to calendar</a>
              </Button>
            </Cluster>
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
                  { label: "Wi‑Fi Network", value: wifi.network },
                  { label: "Wi‑Fi Password", value: wifi.password },
                ]} />
              </div>
            </Grid>
          </Section>

          {/* Upsells */}
          <Section spacing="sm">
            <Grid cols={3} className="gap-4">
              <UpsellCard title="Late checkout" description="Extend your stay by 2 hours" cta={{ label: "Add", href: "#" }} />
              <UpsellCard title="Mid-stay clean" description="Schedule an extra cleaning" cta={{ label: "Schedule", href: "#", variant: "secondary" }} />
              <UpsellCard title="Airport pickup" description="Private transfer on arrival" cta={{ label: "Book", href: "#", variant: "outline" }} />
            </Grid>
          </Section>

          {/* Contact */}
          <Section spacing="sm">
            <Stack gap="sm">
              <InfoCallout title="Need help?" tone="info">
                Our support team is available 24/7 for any questions about your stay.
              </InfoCallout>
              <Cluster gap="sm">
                <Button asChild variant="secondary"><a id="contact" href="tel:+18085551234">Call support</a></Button>
                <Button asChild variant="outline"><a href="mailto:support@kauaipropertysolutions.com">Email support</a></Button>
              </Cluster>
            </Stack>
          </Section>
        </Stack>
      </Container>
    </div>
  )
}


