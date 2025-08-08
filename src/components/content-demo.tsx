import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui"
import { 
  Hero, 
  FeatureGrid, 
  Testimonial, 
  CTA, 
  EmptyState 
} from "@/components/content"
import { 
  Home, 
  Shield, 
  Users, 
  CheckCircle, 
  Package,
  Heart,
  MessageCircle
} from "lucide-react"

export function ContentComponentsDemo() {
  const sampleFeatures = [
    {
      title: "Property Management",
      description: "Comprehensive property management services including maintenance, tenant screening, and rent collection.",
      icon: Home
    },
    {
      title: "Security & Safety",
      description: "24/7 security monitoring and safety protocols to protect your property and tenants.",
      icon: Shield
    },
    {
      title: "Tenant Support",
      description: "Dedicated support team to assist tenants with any questions or concerns.",
      icon: Users
    }
  ]

  const sampleTestimonials = [
    {
      quote: "Kauai Property Solutions has been managing our vacation rental for over 2 years. Their attention to detail and guest satisfaction is outstanding.",
      author: {
        name: "Sarah Johnson",
        title: "Property Owner",
        company: "Beachfront Villa"
      },
      rating: 5
    },
    {
      quote: "The team is incredibly responsive and professional. They've helped us maximize our rental income while maintaining high guest satisfaction.",
      author: {
        name: "Michael Chen",
        title: "Real Estate Investor",
        company: "Kauai Properties LLC"
      },
      rating: 5
    },
    {
      quote: "Outstanding service! They handle everything from maintenance to guest communication, making property ownership truly hands-off.",
      author: {
        name: "Lisa Rodriguez",
        title: "Property Owner",
        company: "Paradise Rentals"
      },
      rating: 5
    }
  ]

  return (
    <div className="space-y-8">
      
      {/* Hero Section */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Hero</CardTitle>
            <CardDescription>
              Landing page hero sections with customizable content, actions, and styling options.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Default Hero */}
            <div>
              <h4 className="font-semibold mb-3">Default Hero</h4>
              <div className="border rounded-lg overflow-hidden">
                <Hero
                  subtitle="Welcome to"
                  title="Kauai Property Solutions"
                  description="Professional property management and guest care services for your Kauai vacation rental. We handle everything from maintenance to guest communication, so you can enjoy hands-off ownership."
                  primaryAction={{
                    label: "Get Started",
                    href: "/contact"
                  }}
                  secondaryAction={{
                    label: "Learn More",
                    href: "/services"
                  }}
                />
              </div>
            </div>

            {/* Minimal Hero */}
            <div>
              <h4 className="font-semibold mb-3">Minimal Hero</h4>
              <div className="border rounded-lg overflow-hidden">
                <Hero
                  title="Professional Property Management"
                  description="Let us handle the details while you enjoy the benefits of property ownership."
                  primaryAction={{
                    label: "Contact Us",
                    href: "/contact"
                  }}
                  size="md"
                  alignment="left"
                />
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h5 className="font-medium mb-2">Usage Guidelines</h5>
              <ul className="text-sm space-y-1">
                <li>• <strong>Landing Pages:</strong> Use for main page introductions</li>
                <li>• <strong>Service Pages:</strong> Highlight specific services or offerings</li>
                <li>• <strong>Product Pages:</strong> Showcase key features and benefits</li>
                <li>• <strong>Marketing Campaigns:</strong> Drive conversions with clear CTAs</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Feature Grid Section */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Feature Grid</CardTitle>
            <CardDescription>
              Showcase features, services, or benefits in a responsive grid layout.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Default Feature Grid */}
            <div>
              <h4 className="font-semibold mb-3">Default Feature Grid</h4>
              <div className="border rounded-lg overflow-hidden">
                <FeatureGrid
                  subtitle="Our Services"
                  title="Comprehensive Property Management"
                  description="We provide end-to-end property management services to maximize your rental income and minimize your stress."
                  features={sampleFeatures}
                  columns={3}
                />
              </div>
            </div>

            {/* Card Variant */}
            <div>
              <h4 className="font-semibold mb-3">Card Variant</h4>
              <div className="border rounded-lg overflow-hidden">
                <FeatureGrid
                  title="Why Choose Us"
                  description="Discover what makes us the preferred choice for property management in Kauai."
                  features={[
                    {
                      title: "Local Expertise",
                      description: "Deep knowledge of Kauai's rental market and local regulations.",
                      icon: CheckCircle
                    },
                    {
                      title: "24/7 Support",
                      description: "Round-the-clock assistance for both property owners and guests.",
                      icon: MessageCircle
                    },
                    {
                      title: "Premium Care",
                      description: "Exceptional attention to detail in property maintenance and guest experience.",
                      icon: Heart
                    }
                  ]}
                  variant="cards"
                  columns={3}
                />
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h5 className="font-medium mb-2">Usage Guidelines</h5>
              <ul className="text-sm space-y-1">
                <li>• <strong>Service Pages:</strong> Highlight key services and benefits</li>
                <li>• <strong>Product Features:</strong> Showcase product capabilities</li>
                <li>• <strong>Company Benefits:</strong> Explain value propositions</li>
                <li>• <strong>Comparison Pages:</strong> Compare different options or tiers</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Testimonial Section */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Testimonial</CardTitle>
            <CardDescription>
              Display customer reviews and testimonials to build trust and credibility.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Default Testimonials */}
            <div>
              <h4 className="font-semibold mb-3">Default Testimonials</h4>
              <div className="border rounded-lg overflow-hidden">
                <Testimonial
                  subtitle="Testimonials"
                  title="What Our Clients Say"
                  description="Hear from property owners who trust us with their investments."
                  testimonials={sampleTestimonials}
                  columns={3}
                />
              </div>
            </div>

            {/* Card Variant */}
            <div>
              <h4 className="font-semibold mb-3">Card Variant</h4>
              <div className="border rounded-lg overflow-hidden">
                <Testimonial
                  title="Client Success Stories"
                  description="Real experiences from satisfied property owners."
                  testimonials={sampleTestimonials.slice(0, 2)}
                  variant="cards"
                  columns={2}
                />
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h5 className="font-medium mb-2">Usage Guidelines</h5>
              <ul className="text-sm space-y-1">
                <li>• <strong>Trust Building:</strong> Showcase customer satisfaction and results</li>
                <li>• <strong>Social Proof:</strong> Demonstrate real customer experiences</li>
                <li>• <strong>Conversion Pages:</strong> Use on pricing or service pages</li>
                <li>• <strong>About Pages:</strong> Highlight company reputation and expertise</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Call-to-Action</CardTitle>
            <CardDescription>
              Drive conversions with compelling call-to-action sections.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Default CTA */}
            <div>
              <h4 className="font-semibold mb-3">Default CTA</h4>
              <div className="border rounded-lg overflow-hidden">
                <CTA
                  title="Ready to Get Started?"
                  description="Join hundreds of property owners who trust us with their investments."
                  primaryAction={{
                    label: "Contact Us Today",
                    href: "/contact"
                  }}
                  secondaryAction={{
                    label: "Learn More",
                    href: "/services"
                  }}
                />
              </div>
            </div>

            {/* Primary Background CTA */}
            <div>
              <h4 className="font-semibold mb-3">Primary Background CTA</h4>
              <div className="border rounded-lg overflow-hidden">
                <CTA
                  title="Start Your Free Consultation"
                  description="No commitment required. Let&apos;s discuss how we can help maximize your rental income."
                  primaryAction={{
                    label: "Schedule Consultation",
                    href: "/consultation"
                  }}
                  background="primary"
                  variant="centered"
                />
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h5 className="font-medium mb-2">Usage Guidelines</h5>
              <ul className="text-sm space-y-1">
                <li>• <strong>Conversion Pages:</strong> Drive specific actions like sign-ups or purchases</li>
                <li>• <strong>Service Pages:</strong> Encourage contact or consultation requests</li>
                <li>• <strong>Blog Posts:</strong> Promote related services or content</li>
                <li>• <strong>Landing Pages:</strong> Create urgency and drive immediate action</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Empty State Section */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Empty State</CardTitle>
            <CardDescription>
              Provide helpful guidance when there&apos;s no content to display.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            
            {/* Default Empty State */}
            <div>
              <h4 className="font-semibold mb-3">Default Empty State</h4>
              <div className="border rounded-lg p-8">
                <EmptyState
                  title="No Properties Found"
                  description="You haven&apos;t added any properties yet. Get started by adding your first property."
                  icon={Package}
                  action={{
                    label: "Add Property",
                    href: "/properties/add"
                  }}
                />
              </div>
            </div>

            {/* Minimal Empty State */}
            <div>
              <h4 className="font-semibold mb-3">Minimal Empty State</h4>
              <div className="border rounded-lg p-8">
                <EmptyState
                  title="No Reviews Yet"
                  description="Be the first to leave a review for this property."
                  action={{
                    label: "Write Review",
                    href: "/review"
                  }}
                  variant="minimal"
                  size="sm"
                />
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg">
              <h5 className="font-medium mb-2">Usage Guidelines</h5>
              <ul className="text-sm space-y-1">
                <li>• <strong>Dashboard Pages:</strong> Guide users when no data is available</li>
                <li>• <strong>Search Results:</strong> Provide helpful context when no matches found</li>
                <li>• <strong>User Onboarding:</strong> Guide new users through first-time actions</li>
                <li>• <strong>Error Recovery:</strong> Help users understand and resolve issues</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

    </div>
  )
}
