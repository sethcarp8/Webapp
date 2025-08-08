import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui"
import { PageTitle, KeyValue, InfoCallout, Stat, StepList, PropertyCard, UpsellCard, OrderSummary, EmptyState, Testimonial, CTA, FeatureGrid, Hero } from "@/components/content"
import { Calendar } from "lucide-react"

export default function ContentPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <PageTitle title="Content Components" subtitle="Presentational components driven by props" />

      {/* Hero & CTA */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Hero & CTA</CardTitle>
            <CardDescription>Page-level promotional blocks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Hero title="Welcome to Kauai" description="Discover beachfront villas and mountain retreats" size="md" alignment="left" />
            <CTA title="Have questions?" description="Our team can help you choose the perfect stay" primaryAction={{ label: "Contact", href: "/contact" }} />
          </CardContent>
        </Card>
      </section>

      {/* Property & Upsell */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Property & Upsell</CardTitle>
            <CardDescription>Cards with title, tags and actions</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PropertyCard title="Beachfront Villa - Poipu" location="Poipu, HI" tags={["4 guests", "3 bed"]} price="$450/night" />
            <UpsellCard title="Late checkout" description="Add late checkout to extend your stay" cta={{ label: "Add", href: "#" }} />
          </CardContent>
        </Card>
      </section>

      {/* Key/Value & Stat */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Key/Value & Stat</CardTitle>
            <CardDescription>Display key facts and metrics</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <KeyValue twoColumn items={[{ label: "Check-in", value: "Mar 15, 3:00 PM" }, { label: "Check-out", value: "Mar 22, 11:00 AM" }, { label: "Guests", value: "4" }]} />
            <div className="grid grid-cols-2 gap-4">
              <Stat label="Nights" value={7} helperText="on schedule" trend="up" />
              <Stat label="Messages" value={2} helperText="new" trend="neutral" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Steps & Order Summary */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Steps & Order Summary</CardTitle>
            <CardDescription>Process guidance and pricing breakdown</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StepList steps={[{ title: "Confirm booking", description: "You’ll receive an email confirmation" }, { title: "Get instructions", description: "Access details 48 hours before arrival" }, { title: "Enjoy your stay" }]} />
            <OrderSummary items={[{ label: "Subtotal", amount: 2800 }, { label: "Taxes", amount: 280 }, { label: "Fees", amount: 150 }]} />
          </CardContent>
        </Card>
      </section>

      {/* Empty & Error */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Empty & Error States</CardTitle>
            <CardDescription>Communicate clearly and offer next steps</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <EmptyState title="No messages yet" description="We’ll notify you when you receive a new message" icon={Calendar} action={{ label: "Go Home", href: "/" }} />
            <div>
              <InfoCallout title="Heads up" tone="info">We automatically save your progress.</InfoCallout>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Social Proof */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Social Proof</CardTitle>
            <CardDescription>Testimonials and feature lists</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <FeatureGrid features={[{ title: "Beachfront", description: "Steps from the sand" }, { title: "Mountain views", description: "Panoramic vistas" }, { title: "Pool access", description: "Resort amenities" }]} />
            <Testimonial quote="Amazing stay!" author="Sarah Johnson" role="Guest" />
          </CardContent>
        </Card>
      </section>
    </div>
  )
}


