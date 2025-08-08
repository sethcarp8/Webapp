import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui";

/**
 * Style Guide Page
 * 
 * This page serves as a living documentation for all UI components,
 * design tokens, and design system patterns used throughout the application.
 * 
 * Structure:
 * - Typography
 * - Colors
 * - Components
 * - Layout patterns
 * - Spacing
 * - Animations
 */
export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-card-foreground">
            Style Guide
          </h1>
          <p className="mt-2 text-muted-foreground">
            Design system documentation and component library
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="grid gap-8">
          {/* Typography Section */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Typography</CardTitle>
                <CardDescription>
                  Font families, sizes, and text styles used throughout the application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h1 className="text-4xl font-bold">Heading 1</h1>
                    <p className="text-sm text-muted-foreground">text-4xl font-bold</p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">Heading 2</h2>
                    <p className="text-sm text-muted-foreground">text-3xl font-bold</p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold">Heading 3</h3>
                    <p className="text-sm text-muted-foreground">text-2xl font-semibold</p>
                  </div>
                  <div>
                    <p className="text-lg">Body Large</p>
                    <p className="text-sm text-muted-foreground">text-lg</p>
                  </div>
                  <div>
                    <p className="text-base">Body</p>
                    <p className="text-sm text-muted-foreground">text-base</p>
                  </div>
                  <div>
                    <p className="text-sm">Body Small</p>
                    <p className="text-sm text-muted-foreground">text-sm</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Colors Section */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Colors</CardTitle>
                <CardDescription>
                  Color palette and semantic color tokens
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <div className="h-12 bg-primary rounded-md"></div>
                    <p className="text-sm font-medium">Primary</p>
                    <p className="text-xs text-muted-foreground">bg-primary</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 bg-secondary rounded-md"></div>
                    <p className="text-sm font-medium">Secondary</p>
                    <p className="text-xs text-muted-foreground">bg-secondary</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 bg-muted rounded-md"></div>
                    <p className="text-sm font-medium">Muted</p>
                    <p className="text-xs text-muted-foreground">bg-muted</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-12 bg-destructive rounded-md"></div>
                    <p className="text-sm font-medium">Destructive</p>
                    <p className="text-xs text-muted-foreground">bg-destructive</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Components Section */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Components</CardTitle>
                <CardDescription>
                  Reusable UI components and their variants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Cards</h4>
                    <div className="grid gap-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>Card Title</CardTitle>
                          <CardDescription>Card description text</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p>Card content goes here</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Spacing Section */}
          <section>
            <Card>
              <CardHeader>
                <CardTitle>Spacing</CardTitle>
                <CardDescription>
                  Consistent spacing scale and layout patterns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="h-2 bg-primary/20 rounded"></div>
                    <p className="text-sm">4px (space-1)</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-primary/20 rounded"></div>
                    <p className="text-sm">16px (space-4)</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-6 bg-primary/20 rounded"></div>
                    <p className="text-sm">24px (space-6)</p>
                  </div>
                  <div className="space-y-2">
                    <div className="h-8 bg-primary/20 rounded"></div>
                    <p className="text-sm">32px (space-8)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
