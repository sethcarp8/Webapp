import * as React from "react"
import { Container, Section, Grid, Stack } from "@/components/layout"
import { PageTitle, KeyValue, InfoCallout } from "@/components/content"

export interface ArrivalItem {
  id: number
  guest: { name: string; email: string; phone: string }
  property: { name: string; address: string }
  stay: { checkIn: string; checkOut: string; guests: number }
  arrival: { time: string; method: string; notes?: string }
  contact: { attempts: number; lastAttempt: string | null; status: string }
}

export function AdminArrivalsTemplate({ today, tomorrow }: { today: ArrivalItem[]; tomorrow: ArrivalItem[] }) {
  const ArrivalCard = ({ a }: { a: ArrivalItem }) => (
    <div className="p-4 rounded-md border space-y-3">
      <div>
        <p className="font-semibold">{a.guest.name}</p>
        <p className="text-xs text-muted-foreground">{a.guest.email} • {a.guest.phone}</p>
      </div>
      <KeyValue items={[
        { label: "Property", value: a.property.name },
        { label: "Check-in", value: a.stay.checkIn },
        { label: "Guests", value: String(a.stay.guests) },
        { label: "Method", value: a.arrival.method.replace('-', ' ') },
      ]} />
      {a.arrival.notes && <p className="text-sm text-muted-foreground">{a.arrival.notes}</p>}
      <p className="text-xs text-muted-foreground">Attempts: {a.contact.attempts}{a.contact.lastAttempt ? ` • Last: ${a.contact.lastAttempt}` : ''}</p>
    </div>
  )

  return (
    <div className="bg-background">
      <Container>
        <Stack gap="lg">
          <Section spacing="sm">
            <PageTitle title="Today’s Arrivals" subtitle="Manage guest arrivals and check-ins" />
          </Section>
          <Section spacing="sm">
            {today.length ? (
              <Grid cols={2} className="gap-6">
                {today.map((a) => (<ArrivalCard key={a.id} a={a} />))}
              </Grid>
            ) : (
              <InfoCallout tone="info">No arrivals today.</InfoCallout>
            )}
          </Section>
          <Section spacing="sm">
            <PageTitle title="Tomorrow’s Arrivals" />
            {tomorrow.length ? (
              <Grid cols={2} className="gap-6 mt-4">
                {tomorrow.map((a) => (<ArrivalCard key={a.id} a={a} />))}
              </Grid>
            ) : (
              <InfoCallout tone="info" className="mt-4">No arrivals tomorrow.</InfoCallout>
            )}
          </Section>
        </Stack>
      </Container>
    </div>
  )
}


