import * as React from "react"
import { Container, Section, Grid, Stack } from "@/components/layout"
import { PageTitle, KeyValue, OrderSummary, InfoCallout } from "@/components/content"

export interface OrderConfirmationTemplateProps {
  orderNumber: string
  property: { name: string; address?: string }
  dates: { checkIn: string; checkOut: string; nights: number }
  guests: { adults: number; children: number; total: number }
  pricing: Array<{ label: string; amount: number }>
}

export function OrderConfirmationTemplate({ orderNumber, property, dates, guests, pricing }: OrderConfirmationTemplateProps) {
  return (
    <div className="bg-background">
      <Container>
        <Stack gap="lg">
          <Section spacing="sm">
            <PageTitle title="Booking Confirmed" subtitle={`Order #${orderNumber}`} align="center" />
          </Section>
          <Section spacing="sm">
            <Grid cols={2} className="gap-6">
              <KeyValue twoColumn items={[
                { label: "Property", value: property.name },
                { label: "Address", value: property.address || "—" },
                { label: "Check-in", value: dates.checkIn },
                { label: "Check-out", value: dates.checkOut },
                { label: "Nights", value: String(dates.nights) },
                { label: "Guests", value: `${guests.total} (${guests.adults} adults, ${guests.children} children)` },
              ]} />
              <OrderSummary items={pricing} />
            </Grid>
          </Section>
          <Section spacing="sm">
            <InfoCallout tone="info" title="What’s next?">You’ll receive arrival instructions 48 hours before check-in.</InfoCallout>
          </Section>
        </Stack>
      </Container>
    </div>
  )
}


