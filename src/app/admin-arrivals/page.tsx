import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Badge, Button } from "@/components/ui"
import { Container, Stack, Grid, Section } from "@/components/layout"
import { Hero, EmptyState } from "@/components/content"
import { 
  Calendar, 
  MapPin, 
  CheckCircle,
  AlertCircle,
  Phone,
  MessageSquare,
  Car,
  User,
  Mail
} from "lucide-react"

// Placeholder data
const arrivalsData = {
  today: [
    {
      id: 1,
      guest: {
        name: "Sarah Johnson",
        email: "sarah.johnson@email.com",
        phone: "+1 (555) 123-4567"
      },
      property: {
        name: "Beachfront Villa - Poipu",
        address: "123 Beach Road, Poipu, HI 96756"
      },
      stay: {
        checkIn: "2024-03-15",
        checkOut: "2024-03-22",
        guests: 4,
        status: "confirmed"
      },
      arrival: {
        time: "3:00 PM",
        method: "self-checkin",
        notes: "Guest requested early check-in if possible"
      },
      contact: {
        attempts: 2,
        lastAttempt: "2024-03-14 10:30 AM",
        status: "confirmed"
      }
    },
    {
      id: 2,
      guest: {
        name: "Michael Chen",
        email: "michael.chen@email.com",
        phone: "+1 (555) 987-6543"
      },
      property: {
        name: "Ocean View Condo - Kapaa",
        address: "456 Kuhio Highway, Kapaa, HI 96746"
      },
      stay: {
        checkIn: "2024-03-15",
        checkOut: "2024-03-18",
        guests: 2,
        status: "confirmed"
      },
      arrival: {
        time: "4:00 PM",
        method: "meet-and-greet",
        notes: "First-time guest, needs orientation"
      },
      contact: {
        attempts: 1,
        lastAttempt: "2024-03-14 2:15 PM",
        status: "confirmed"
      }
    }
  ],
  tomorrow: [
    {
      id: 3,
      guest: {
        name: "Lisa Rodriguez",
        email: "lisa.rodriguez@email.com",
        phone: "+1 (555) 456-7890"
      },
      property: {
        name: "Mountain Retreat - Waimea",
        address: "789 Waimea Canyon Drive, Waimea, HI 96796"
      },
      stay: {
        checkIn: "2024-03-16",
        checkOut: "2024-03-23",
        guests: 6,
        status: "confirmed"
      },
      arrival: {
        time: "3:00 PM",
        method: "self-checkin",
        notes: "Large group, extra towels needed"
      },
      contact: {
        attempts: 0,
        lastAttempt: null,
        status: "pending"
      }
    }
  ]
}

interface ArrivalData {
  id: number
  guest: {
    name: string
    email: string
    phone: string
  }
  property: {
    name: string
    address: string
  }
  stay: {
    checkIn: string
    checkOut: string
    guests: number
    status: string
  }
  arrival: {
    time: string
    method: string
    notes?: string
  }
  contact: {
    attempts: number
    lastAttempt: string | null
    status: string
  }
}

export default function AdminArrivals() {
  const ArrivalCard = ({ arrival }: { arrival: ArrivalData }) => (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Guest Info */}
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">{arrival.guest.name}</h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Mail className="w-4 h-4" />
                  <span>{arrival.guest.email}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4" />
                  <span>{arrival.guest.phone}</span>
                </div>
              </div>
            </div>
            <Badge 
              variant={arrival.contact.status === "confirmed" ? "default" : "secondary"}
              className={arrival.contact.status === "confirmed" ? "bg-green-100 text-green-800" : ""}
            >
              {arrival.contact.status === "confirmed" ? (
                <CheckCircle className="w-3 h-3 mr-1" />
              ) : (
                <AlertCircle className="w-3 h-3 mr-1" />
              )}
              {arrival.contact.status}
            </Badge>
          </div>

          {/* Property Info */}
          <div className="space-y-2">
            <h4 className="font-medium">{arrival.property.name}</h4>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{arrival.property.address}</span>
            </div>
          </div>

          {/* Stay Details */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Check-in</p>
              <p className="font-medium">{arrival.stay.checkIn}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Check-out</p>
              <p className="font-medium">{arrival.stay.checkOut}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Guests</p>
              <p className="font-medium">{arrival.stay.guests}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Arrival Time</p>
              <p className="font-medium">{arrival.arrival.time}</p>
            </div>
          </div>

          {/* Arrival Method */}
          <div className="flex items-center gap-2">
            {arrival.arrival.method === "self-checkin" ? (
              <Car className="w-4 h-4 text-muted-foreground" />
            ) : (
              <User className="w-4 h-4 text-muted-foreground" />
            )}
            <span className="text-sm font-medium capitalize">
              {arrival.arrival.method.replace("-", " ")}
            </span>
          </div>

          {/* Notes */}
          {arrival.arrival.notes && (
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm text-muted-foreground">{arrival.arrival.notes}</p>
            </div>
          )}

          {/* Contact Status */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                {arrival.contact.attempts} contact attempts
              </span>
            </div>
            {arrival.contact.lastAttempt && (
              <span className="text-muted-foreground">
                Last: {arrival.contact.lastAttempt}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button size="sm" variant="outline">
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </Button>
            <Button size="sm" variant="outline">
              <MessageSquare className="w-4 h-4 mr-2" />
              Message
            </Button>
            <Button size="sm" variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Details
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero
        title="Today&apos;s Arrivals"
        description="Manage guest arrivals and ensure smooth check-ins"
        size="md"
        alignment="left"
      />

      <Container>
        <Stack gap="xl">
          
          {/* Today's Arrivals */}
          <Section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">Today&apos;s Arrivals</h2>
                <p className="text-muted-foreground">March 15, 2024 • {arrivalsData.today.length} guests</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  View Calendar
                </Button>
                <Button size="sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Send Reminders
                </Button>
              </div>
            </div>

            {arrivalsData.today.length > 0 ? (
              <Grid cols={2} className="gap-6">
                {arrivalsData.today.map((arrival) => (
                  <ArrivalCard key={arrival.id} arrival={arrival} />
                ))}
              </Grid>
            ) : (
              <EmptyState
                title="No arrivals today"
                description="No guests are scheduled to arrive today."
                icon={Calendar}
              />
            )}
          </Section>

          {/* Tomorrow's Arrivals */}
          <Section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold">Tomorrow&apos;s Arrivals</h2>
                <p className="text-muted-foreground">March 16, 2024 • {arrivalsData.tomorrow.length} guests</p>
              </div>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>

            {arrivalsData.tomorrow.length > 0 ? (
              <Grid cols={2} className="gap-6">
                {arrivalsData.tomorrow.map((arrival) => (
                  <ArrivalCard key={arrival.id} arrival={arrival} />
                ))}
              </Grid>
            ) : (
              <EmptyState
                title="No arrivals tomorrow"
                description="No guests are scheduled to arrive tomorrow."
                icon={Calendar}
              />
            )}
          </Section>

          {/* Quick Stats */}
          <Section>
            <Card>
              <CardHeader>
                <CardTitle>Arrival Summary</CardTitle>
                <CardDescription>
                  Overview of today&apos;s arrival operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Grid cols={4} className="gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {arrivalsData.today.filter(a => a.contact.status === "confirmed").length}
                    </div>
                    <p className="text-sm text-muted-foreground">Confirmed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">
                      {arrivalsData.today.filter(a => a.contact.status === "pending").length}
                    </div>
                    <p className="text-sm text-muted-foreground">Pending</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {arrivalsData.today.filter(a => a.arrival.method === "meet-and-greet").length}
                    </div>
                    <p className="text-sm text-muted-foreground">Meet & Greet</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {arrivalsData.today.filter(a => a.arrival.method === "self-checkin").length}
                    </div>
                    <p className="text-sm text-muted-foreground">Self Check-in</p>
                  </div>
                </Grid>
              </CardContent>
            </Card>
          </Section>

        </Stack>
      </Container>
    </div>
  )
}
