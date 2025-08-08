import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui"
import { Container, Stack, Inline, Cluster, Grid, Section, Divider, VisuallyHidden, SkipToContent } from "@/components/layout"

export default function LayoutPrimitivesPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Layout Primitives</h1>
        <p className="text-muted-foreground">Responsive building blocks for consistent spacing and alignment.</p>
      </div>

      {/* Container */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Container</CardTitle>
            <CardDescription>Responsive width constraints with padding</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Container size="sm" className="bg-muted p-4 rounded">Small (max-w-sm)</Container>
            <Container className="bg-muted p-4 rounded">Default (max-w-lg)</Container>
            <Container size="full" className="bg-muted p-4 rounded">Full width</Container>
          </CardContent>
        </Card>
      </section>

      {/* Stack & Inline */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Stack & Inline</CardTitle>
            <CardDescription>Vertical and horizontal spacing</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Stack gap="sm" className="bg-muted p-4 rounded">
              <div className="bg-background p-2 rounded">Stack item 1</div>
              <div className="bg-background p-2 rounded">Stack item 2</div>
              <div className="bg-background p-2 rounded">Stack item 3</div>
            </Stack>
            <Inline className="bg-muted p-4 rounded">
              <div className="bg-background p-2 rounded">Inline 1</div>
              <div className="bg-background p-2 rounded">Inline 2</div>
              <div className="bg-background p-2 rounded">Inline 3</div>
              <div className="bg-background p-2 rounded">Inline 4</div>
            </Inline>
          </CardContent>
        </Card>
      </section>

      {/* Cluster & Grid */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Cluster & Grid</CardTitle>
            <CardDescription>Flexible wrapping rows and responsive grids</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Cluster className="bg-muted p-4 rounded">
              <span className="bg-background p-2 rounded">Tag</span>
              <span className="bg-background p-2 rounded">Tag</span>
              <span className="bg-background p-2 rounded">Tag</span>
              <span className="bg-background p-2 rounded">Tag</span>
              <span className="bg-background p-2 rounded">Tag</span>
            </Cluster>
            <Grid cols={3} className="bg-muted p-4 rounded">
              <div className="bg-background p-3 rounded">1</div>
              <div className="bg-background p-3 rounded">2</div>
              <div className="bg-background p-3 rounded">3</div>
              <div className="bg-background p-3 rounded">4</div>
              <div className="bg-background p-3 rounded">5</div>
              <div className="bg-background p-3 rounded">6</div>
            </Grid>
          </CardContent>
        </Card>
      </section>

      {/* Section & Divider */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Section & Divider</CardTitle>
            <CardDescription>Semantic spacing and separators</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Section spacing="sm" className="bg-muted rounded">
              <div className="bg-background p-4 rounded">Small spacing section</div>
            </Section>
            <div className="bg-muted p-4 rounded">
              <p className="text-sm">Divider examples</p>
              <Divider size="sm" />
              <Divider size="lg" />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Accessibility */}
      <section>
        <Card>
          <CardHeader>
            <CardTitle>Accessibility helpers</CardTitle>
            <CardDescription>VisuallyHidden, SR-only, and Skip link</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">VisuallyHidden hides content visually but keeps it accessible:</p>
            <div className="bg-muted p-4 rounded">
              <span>Visible text</span>
              <VisuallyHidden>Hidden but accessible text</VisuallyHidden>
            </div>
            <div className="bg-muted p-4 rounded">
              <SkipToContent href="#main-content">Skip to main content</SkipToContent>
              <p className="text-sm text-muted-foreground">Press Tab to reveal skip link</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}


