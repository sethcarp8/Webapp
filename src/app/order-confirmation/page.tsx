import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Badge, Button } from "@/components/ui"
import { Container, Stack, Section, Divider } from "@/components/layout"
import { Hero, CTA } from "@/components/content"
import { 
  CheckCircle, 
  Calendar, 
  MapPin, 
  Download,
  Share2,
  MessageSquare,
  Phone
} from "lucide-react"

// Placeholder data
const orderData = {
  orderNumber: "KPS-2024-001",
  status: "confirmed",
  property: {
    name: "Beachfront Villa - Poipu",
    address: "123 Beach Road, Poipu, HI 96756",
    image: "/screenshots/order-confirmation.svg"
  },
  dates: {
    checkIn: "March 15, 2024",
    checkOut: "March 22, 2024",
    nights: 7
  },
  guests: {
    adults: 2,
    children: 2,
    total: 4
  },
  pricing: {
    subtotal: 2800,
    taxes: 280,
    fees: 150,
    total: 3230,
    deposit: 646,
    balance: 2584
  },
  contact: {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567"
  }
}

export default function OrderConfirmation() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero
        title="Booking Confirmed!"
        description="Your reservation has been successfully confirmed. Here are all the details you need."
        size="md"
        alignment="center"
        background="gradient"
      />

      <Container>
        <Stack gap="xl">
          
          {/* Confirmation Summary */}
          <Section>
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Booking Confirmed</CardTitle>
                <CardDescription>
                  Order #{orderData.orderNumber} • Confirmed on March 10, 2024
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Property Details */}
                  <div className="flex items-start gap-4 p-4 rounded-lg border">
                    <div className="w-20 h-20 bg-muted rounded-lg flex-shrink-0"></div>
                    <div className="flex-1 space-y-2">
                      <h3 className="font-semibold text-lg">{orderData.property.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{orderData.property.address}</span>
                      </div>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        Confirmed
                      </Badge>
                    </div>
                  </div>

                  {/* Stay Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Stay Details</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Check-in</span>
                          <span className="font-medium">{orderData.dates.checkIn}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Check-out</span>
                          <span className="font-medium">{orderData.dates.checkOut}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Nights</span>
                          <span className="font-medium">{orderData.dates.nights}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Guests</span>
                          <span className="font-medium">{orderData.guests.total} ({orderData.guests.adults} adults, {orderData.guests.children} children)</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Contact Information</h4>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-muted-foreground">Primary Guest</p>
                          <p className="font-medium">{orderData.contact.name}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Email</p>
                          <p className="font-medium">{orderData.contact.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Phone</p>
                          <p className="font-medium">{orderData.contact.phone}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Section>

          {/* Pricing Breakdown */}
          <Section>
            <Card>
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
                <CardDescription>
                  Detailed breakdown of your charges
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Subtotal</span>
                      <span className="font-medium">${orderData.pricing.subtotal.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Taxes</span>
                      <span className="font-medium">${orderData.pricing.taxes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Service Fees</span>
                      <span className="font-medium">${orderData.pricing.fees.toLocaleString()}</span>
                    </div>
                    <Divider />
                    <div className="flex items-center justify-between text-lg font-semibold">
                      <span>Total</span>
                      <span>${orderData.pricing.total.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="bg-muted p-4 rounded-lg space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Deposit Paid</span>
                      <span className="text-green-600 font-medium">-${orderData.pricing.deposit.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Balance Due</span>
                      <span className="font-medium">${orderData.pricing.balance.toLocaleString()}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Balance due 30 days before check-in
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Section>

          {/* Next Steps */}
          <Section>
            <Card>
              <CardHeader>
                <CardTitle>What&apos;s Next?</CardTitle>
                <CardDescription>
                  Here&apos;s what you can expect before your stay
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 rounded-lg border">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">Check-in Instructions</h4>
                      <p className="text-sm text-muted-foreground">
                        You&apos;ll receive detailed check-in instructions 48 hours before your arrival.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg border">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">Welcome Message</h4>
                      <p className="text-sm text-muted-foreground">
                        Our team will send you a welcome message with local recommendations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-lg border">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-medium">24/7 Support</h4>
                      <p className="text-sm text-muted-foreground">
                        Our support team is available 24/7 for any questions or assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Section>

          {/* Action Buttons */}
          <Section>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1" size="lg">
                <Download className="w-4 h-4 mr-2" />
                Download Confirmation
              </Button>
              <Button variant="outline" className="flex-1" size="lg">
                <Share2 className="w-4 h-4 mr-2" />
                Share Details
              </Button>
            </div>
          </Section>

        </Stack>
      </Container>

      {/* CTA Section */}
      <CTA
        title="Questions about your booking?"
        description="Our team is here to help with any questions or special requests."
        primaryAction={{
          label: "Contact Support",
          href: "/contact"
        }}
        secondaryAction={{
          label: "View Dashboard",
          href: "/guest-dashboard"
        }}
        background="default"
        variant="centered"
      />
    </div>
  )
}
