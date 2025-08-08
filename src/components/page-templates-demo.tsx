import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Badge, Button } from "@/components/ui"
import { 
  Calendar, 
  MapPin, 
  CheckCircle,
  MessageSquare,
  Search,
  AlertTriangle,
  Home,
  ArrowLeft,
  RefreshCw
} from "lucide-react"

export function PageTemplatesDemo() {
  return (
    <div className="space-y-8">
      
      {/* Guest Dashboard Template */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Guest Dashboard</CardTitle>
            <CardDescription>
              Comprehensive dashboard for guests to manage their stays, view messages, and access property information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-8">
                <h2 className="text-2xl font-bold mb-2">Welcome back, Sarah Johnson</h2>
                <p className="text-primary-foreground/80">Manage your upcoming stays, view past trips, and stay connected with our team.</p>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Quick Actions */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">Upcoming Stay</h3>
                        <p className="text-xs text-muted-foreground">View details</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">Messages</h3>
                        <p className="text-xs text-muted-foreground">2 unread</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Current Stay */}
                <div className="border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold">Beachfront Villa - Poipu</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span>Mar 15-22, 2024</span>
                        <span>4 guests</span>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Confirmed
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm">View Details</Button>
                    <Button size="sm" variant="outline">Download Instructions</Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-muted p-4 rounded-lg">
              <h5 className="font-medium mb-2">Key Features</h5>
              <ul className="text-sm space-y-1">
                <li>• <strong>Quick Actions:</strong> Easy access to common tasks</li>
                <li>• <strong>Current Stay:</strong> Detailed information about upcoming reservations</li>
                <li>• <strong>Messages:</strong> Communication hub with unread indicators</li>
                <li>• <strong>Past Stays:</strong> History with review functionality</li>
                <li>• <strong>Responsive Design:</strong> Works on all device sizes</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Order Confirmation Template */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Order Confirmation</CardTitle>
            <CardDescription>
              Success page after booking confirmation with detailed reservation information and next steps.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 text-center">
                <div className="mx-auto w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
                <p className="text-white/80">Your reservation has been successfully confirmed.</p>
              </div>
              
              <div className="p-6 space-y-6">
                {/* Property Details */}
                <div className="flex items-start gap-4 p-4 rounded-lg border">
                  <div className="w-16 h-16 bg-muted rounded-lg flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold">Beachfront Villa - Poipu</h3>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>123 Beach Road, Poipu, HI 96756</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800 mt-2">Confirmed</Badge>
                  </div>
                </div>

                {/* Stay Details */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Check-in</p>
                    <p className="font-medium">March 15, 2024</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Check-out</p>
                    <p className="font-medium">March 22, 2024</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Guests</p>
                    <p className="font-medium">4 (2 adults, 2 children)</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Total</p>
                    <p className="font-medium">$3,230</p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button className="flex-1">Download Confirmation</Button>
                  <Button variant="outline" className="flex-1">Share Details</Button>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-muted p-4 rounded-lg">
              <h5 className="font-medium mb-2">Key Features</h5>
              <ul className="text-sm space-y-1">
                <li>• <strong>Success Confirmation:</strong> Clear confirmation with visual feedback</li>
                <li>• <strong>Property Details:</strong> Complete reservation information</li>
                <li>• <strong>Pricing Breakdown:</strong> Transparent cost structure</li>
                <li>• <strong>Next Steps:</strong> Clear guidance on what to expect</li>
                <li>• <strong>Action Buttons:</strong> Download and share functionality</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Admin Arrivals Template */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Admin Arrivals</CardTitle>
            <CardDescription>
              Administrative dashboard for managing guest arrivals, contact status, and check-in operations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6">
                <h2 className="text-xl font-bold mb-2">Today&apos;s Arrivals</h2>
                <p className="text-white/80">Manage guest arrivals and ensure smooth check-ins</p>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold">Today&apos;s Arrivals</h3>
                    <p className="text-sm text-muted-foreground">March 15, 2024 • 2 guests</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">View Calendar</Button>
                    <Button size="sm">Send Reminders</Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Arrival Card 1 */}
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">Sarah Johnson</h4>
                        <p className="text-sm text-muted-foreground">sarah.johnson@email.com</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Confirmed
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><strong>Property:</strong> Beachfront Villa - Poipu</p>
                      <p><strong>Check-in:</strong> Mar 15, 2024</p>
                      <p><strong>Guests:</strong> 4</p>
                      <p><strong>Method:</strong> Self check-in</p>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline">Contact</Button>
                      <Button size="sm" variant="outline">Message</Button>
                    </div>
                  </div>

                  {/* Arrival Card 2 */}
                  <div className="border rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">Michael Chen</h4>
                        <p className="text-sm text-muted-foreground">michael.chen@email.com</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Confirmed
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <p><strong>Property:</strong> Ocean View Condo - Kapaa</p>
                      <p><strong>Check-in:</strong> Mar 15, 2024</p>
                      <p><strong>Guests:</strong> 2</p>
                      <p><strong>Method:</strong> Meet & greet</p>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" variant="outline">Contact</Button>
                      <Button size="sm" variant="outline">Message</Button>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">2</div>
                    <p className="text-sm text-muted-foreground">Confirmed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-600">0</div>
                    <p className="text-sm text-muted-foreground">Pending</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">1</div>
                    <p className="text-sm text-muted-foreground">Meet & Greet</p>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">1</div>
                    <p className="text-sm text-muted-foreground">Self Check-in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-muted p-4 rounded-lg">
              <h5 className="font-medium mb-2">Key Features</h5>
              <ul className="text-sm space-y-1">
                <li>• <strong>Arrival Cards:</strong> Detailed guest information with contact status</li>
                <li>• <strong>Contact Management:</strong> Track communication attempts and status</li>
                <li>• <strong>Check-in Methods:</strong> Self check-in vs meet & greet options</li>
                <li>• <strong>Quick Actions:</strong> Contact, message, and view details</li>
                <li>• <strong>Statistics:</strong> Overview of arrival operations</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Not Found Template */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Not Found (404)</CardTitle>
            <CardDescription>
              Error page for when users navigate to non-existent pages with helpful navigation options.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Page Not Found</h2>
                <p className="text-muted-foreground mb-6">
                  The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button>
                    <Home className="w-4 h-4 mr-2" />
                    Go Home
                  </Button>
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Go Back
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-muted p-4 rounded-lg">
              <h5 className="font-medium mb-2">Key Features</h5>
              <ul className="text-sm space-y-1">
                <li>• <strong>Clear Messaging:</strong> Explains the error without technical jargon</li>
                <li>• <strong>Helpful Actions:</strong> Multiple navigation options for users</li>
                <li>• <strong>Consistent Design:</strong> Matches the overall design system</li>
                <li>• <strong>Accessibility:</strong> Proper error handling and navigation</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Error Template */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Error (500)</CardTitle>
            <CardDescription>
              Error page for application errors with retry functionality and development details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border rounded-lg overflow-hidden">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-muted-foreground" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Something went wrong</h2>
                <p className="text-muted-foreground mb-6">
                  We encountered an unexpected error. Please try again or contact support if the problem persists.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button>
                    <RefreshCw className="w-4 h-4 mr-2" />
                    Try Again
                  </Button>
                  <Button variant="outline">
                    <Home className="w-4 h-4 mr-2" />
                    Go Home
                  </Button>
                </div>

                {/* Development Error Details */}
                <div className="mt-6 p-4 bg-muted rounded-lg text-left max-w-md mx-auto">
                  <p className="text-sm font-medium mb-2">Error Details (Development)</p>
                  <p className="text-xs text-muted-foreground font-mono break-all">
                    TypeError: Cannot read property &apos;map&apos; of undefined
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Error ID: abc123def456
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-muted p-4 rounded-lg">
              <h5 className="font-medium mb-2">Key Features</h5>
              <ul className="text-sm space-y-1">
                <li>• <strong>Error Recovery:</strong> Retry functionality for transient errors</li>
                <li>• <strong>Development Details:</strong> Error information in development mode</li>
                <li>• <strong>User Guidance:</strong> Clear instructions on what to do next</li>
                <li>• <strong>Support Contact:</strong> Information for persistent issues</li>
                <li>• <strong>Error Tracking:</strong> Error IDs for support reference</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

    </div>
  )
}
