import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from "@/components/ui"
import { GuestDashboardTemplate, OrderConfirmationTemplate, AdminArrivalsTemplate } from "@/components/templates"

const demoGuest = {
  userName: "Sarah Johnson",
  upcomingStay: {
    property: "Beachfront Villa - Poipu",
    checkIn: "Mar 15, 2024",
    checkOut: "Mar 22, 2024",
    guests: 4,
    confirmationNumber: "KPS-2024-001",
  },
  wifi: { network: "KPS-Guest", password: "Aloha2024!" },
}

const demoOrder = {
  orderNumber: "KPS-2024-001",
  property: { name: "Beachfront Villa - Poipu", address: "123 Beach Road, Poipu, HI" },
  dates: { checkIn: "Mar 15, 2024", checkOut: "Mar 22, 2024", nights: 7 },
  guests: { adults: 2, children: 2, total: 4 },
  pricing: [ { label: "Subtotal", amount: 2800 }, { label: "Taxes", amount: 280 }, { label: "Fees", amount: 150 } ]
}

const demoArrivals = {
  today: [
    { id: 1, guest: { name: "Sarah Johnson", email: "sarah@email.com", phone: "+1 555-123" }, property: { name: "Beachfront Villa - Poipu", address: "123 Beach" }, stay: { checkIn: "2024-03-15", checkOut: "2024-03-22", guests: 4 }, arrival: { time: "3:00 PM", method: "self-checkin" }, contact: { attempts: 1, lastAttempt: "2024-03-14 10:00", status: "confirmed" } },
  ],
  tomorrow: []
}

export default function TemplatesPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Page Templates</h1>
        <p className="text-muted-foreground">Composed from layout primitives and content components.</p>
      </div>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Guest Dashboard</CardTitle>
            <CardDescription>Summary header, quick actions, details, upsells, and contact</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <GuestDashboardTemplate {...demoGuest} />
            <div className="flex gap-2">
              <Button asChild variant="outline"><a href="/guest-dashboard">Open page</a></Button>
              <Button asChild variant="outline"><a href="/style-guide">Screenshots</a></Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Order Confirmation</CardTitle>
            <CardDescription>Reservation details and payment summary</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <OrderConfirmationTemplate {...demoOrder} />
            <div className="flex gap-2">
              <Button asChild variant="outline"><a href="/order-confirmation">Open page</a></Button>
              <Button asChild variant="outline"><a href="/style-guide">Screenshots</a></Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Admin Arrivals</CardTitle>
            <CardDescription>Cards for arrivals with contact status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <AdminArrivalsTemplate {...demoArrivals} />
            <div className="flex gap-2">
              <Button asChild variant="outline"><a href="/admin-arrivals">Open page</a></Button>
              <Button asChild variant="outline"><a href="/style-guide">Screenshots</a></Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}


