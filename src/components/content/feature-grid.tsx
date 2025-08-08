import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui"
import { Container, Grid, Stack } from "@/components/layout"

export interface Feature {
  title: string
  description: string
  icon?: React.ComponentType<{ className?: string }>
  href?: string
}

export interface FeatureGridProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
  subtitle?: string
  description?: string
  features: Feature[]
  columns?: 1 | 2 | 3 | 4
  variant?: "default" | "cards" | "minimal"
}

const FeatureGrid = React.forwardRef<HTMLElement, FeatureGridProps>(
  ({ 
    className, 
    title, 
    subtitle, 
    description, 
    features, 
    columns = 3,
    variant = "default",
    ...props 
  }, ref) => {
    const FeatureCard = ({ feature }: { feature: Feature }) => {
      const content = (
        <div className="space-y-4">
          {feature.icon && (
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
          )}
          <div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-muted-foreground mt-2">{feature.description}</p>
          </div>
        </div>
      )

      if (variant === "cards") {
        return (
          <Card className="h-full">
            <CardHeader>
              {feature.icon && (
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
              )}
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        )
      }

      if (feature.href) {
        return (
          <a 
            href={feature.href} 
            className="block p-6 rounded-lg border border-border hover:border-primary/20 hover:bg-accent/50 transition-colors"
          >
            {content}
          </a>
        )
      }

      return (
        <div className="p-6 rounded-lg border border-border">
          {content}
        </div>
      )
    }

    return (
      <section
        ref={ref}
        className={cn("py-16 lg:py-24", className)}
        {...props}
      >
        <Container>
          <Stack className="max-w-4xl mx-auto text-center" gap="lg">
            {subtitle && (
              <p className="text-sm font-medium text-primary uppercase tracking-wide">
                {subtitle}
              </p>
            )}
            
            {title && (
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                {title}
              </h2>
            )}
            
            {description && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </Stack>

          <div className="mt-16">
            <Grid cols={columns} className="gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </Grid>
          </div>
        </Container>
      </section>
    )
  }
)
FeatureGrid.displayName = "FeatureGrid"

export { FeatureGrid }
