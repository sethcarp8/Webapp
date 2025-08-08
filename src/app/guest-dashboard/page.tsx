"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Badge, Button } from "@/components/ui"
import { Container, Stack, Grid, Section, Divider } from "@/components/layout"
import { Hero } from "@/components/content"
import { 
  Calendar, 
  Users, 
  CreditCard, 
  MessageSquare, 
  Settings,
  CheckCircle,
  Star
} from "lucide-react"

// Placeholder data
const guestData = {
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  phone: "+1 (555) 123-4567",
  upcomingStay: {
    property: "Beachfront Villa - Poipu",
    checkIn: "2024-03-15",
    checkOut: "2024-03-22",
    guests: 4,
    confirmationNumber: "KPS-2024-001"
  },
  recentStays: [
    {
      property: "Ocean View Condo - Kapaa",
      dates: "Jan 15-22, 2024",
      rating: 5,
      status: "completed"
    },
    {
      property: "Mountain Retreat - Waimea",
      dates: "Nov 10-17, 2023",
      rating: 4,
      status: "completed"
    }
  ],
  upcomingStays: [
    {
      property: "Luxury Beach House - Hanalei",
      checkIn: "2024-04-10",
      checkOut: "2024-04-17",
      guests: 6,
      status: "confirmed"
    }
  ],
  messages: [
    {
      id: 1,
      subject: "Welcome to your upcoming stay!",
      preview: "We're excited to host you at Beachfront Villa. Here's everything you need to know...",
      date: "2024-03-10",
      unread: true
    },
    {
      id: 2,
      subject: "Property access instructions",
      preview: "Your check-in instructions and property access details are ready...",
      date: "2024-03-08",
      unread: false
    }
  ]
}

export default function GuestDashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero
        title={`Welcome back, ${guestData.name}`}
        description="Manage your upcoming stays, view past trips, and stay connected with our team."
        size="md"
        alignment="left"
      />

      <Container>
        <Stack gap="xl">
          
          {/* Quick Actions */}
          <Section>
            <Grid cols={4} className="gap-6">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Upcoming Stay</h3>
                      <p className="text-sm text-muted-foreground">View details</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Messages</h3>
                      <p className="text-sm text-muted-foreground">2 unread</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Billing</h3>
                      <p className="text-sm text-muted-foreground">View invoices</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Settings className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Settings</h3>
                      <p className="text-sm text-muted-foreground">Preferences</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Section>

          {/* Current Stay */}
          <Section>
            <Card>
              <CardHeader>
                <CardTitle>Current Stay</CardTitle>
                <CardDescription>
                  Your upcoming stay at Beachfront Villa - Poipu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold">{guestData.upcomingStay.property}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{guestData.upcomingStay.checkIn} - {guestData.upcomingStay.checkOut}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{guestData.upcomingStay.guests} guests</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="default" className="bg-green-100 text-green-800">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Confirmed
                    </Badge>
                  </div>

                  <Divider />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Confirmation Number</p>
                      <p className="text-sm text-muted-foreground">{guestData.upcomingStay.confirmationNumber}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Check-in Time</p>
                      <p className="text-sm text-muted-foreground">3:00 PM</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Check-out Time</p>
                      <p className="text-sm text-muted-foreground">11:00 AM</p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="default">
                      View Property Details
                    </Button>
                    <Button variant="outline">
                      Download Instructions
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Section>

          {/* Messages */}
          <Section>
            <Card>
              <CardHeader>
                <CardTitle>Recent Messages</CardTitle>
                <CardDescription>
                  Stay updated with important information about your stays
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {guestData.messages.map((message) => (
                    <div key={message.id} className="flex items-start gap-4 p-4 rounded-lg border hover:bg-accent/50 transition-colors cursor-pointer">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{message.subject}</h4>
                          <span className="text-sm text-muted-foreground">{message.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{message.preview}</p>
                        {message.unread && (
                          <Badge variant="secondary" className="text-xs">
                            New
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Button variant="outline" className="w-full">
                    View All Messages
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Section>

          {/* Past Stays */}
          <Section>
            <Card>
              <CardHeader>
                <CardTitle>Past Stays</CardTitle>
                <CardDescription>
                  Your previous stays and reviews
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {guestData.recentStays.map((stay, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="space-y-1">
                        <h4 className="font-medium">{stay.property}</h4>
                        <p className="text-sm text-muted-foreground">{stay.dates}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < stay.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Section>

        </Stack>
      </Container>
    </div>
  )
}
