import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui"
import { Container, Stack, Inline } from "@/components/layout"

export interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  subtitle?: string
  description?: string
  primaryAction?: {
    label: string
    href: string
    variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
  }
  secondaryAction?: {
    label: string
    href: string
    variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
  }
  background?: "default" | "gradient" | "image"
  alignment?: "left" | "center" | "right"
  size?: "sm" | "md" | "lg" | "xl"
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  ({ 
    className, 
    title, 
    subtitle, 
    description, 
    primaryAction, 
    secondaryAction, 
    background = "default",
    alignment = "center",
    size = "lg",
    ...props 
  }, ref) => {
    const alignmentClasses = {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }

    const sizeClasses = {
      sm: "py-12 lg:py-16",
      md: "py-16 lg:py-24", 
      lg: "py-20 lg:py-32",
      xl: "py-24 lg:py-40"
    }

    const backgroundClasses = {
      default: "bg-background",
      gradient: "bg-gradient-to-br from-primary/5 to-secondary/5",
      image: "bg-background"
    }

    return (
      <section
        ref={ref}
        className={cn(
          "relative overflow-hidden",
          sizeClasses[size],
          backgroundClasses[background],
          className
        )}
        {...props}
      >
        <Container>
          <Stack className="max-w-4xl mx-auto" gap="lg">
            {subtitle && (
              <p className="text-sm font-medium text-primary uppercase tracking-wide">
                {subtitle}
              </p>
            )}
            
            <div className={cn("space-y-4", alignmentClasses[alignment])}>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                {title}
              </h1>
              
              {description && (
                <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
                  {description}
                </p>
              )}
            </div>

            {(primaryAction || secondaryAction) && (
              <Inline className="justify-center lg:justify-start" gap="md">
                {primaryAction && (
                  <Button 
                    asChild 
                    size="lg"
                    variant={primaryAction.variant || "default"}
                  >
                    <a href={primaryAction.href}>
                      {primaryAction.label}
                    </a>
                  </Button>
                )}
                
                {secondaryAction && (
                  <Button 
                    asChild 
                    size="lg"
                    variant={secondaryAction.variant || "outline"}
                  >
                    <a href={secondaryAction.href}>
                      {secondaryAction.label}
                    </a>
                  </Button>
                )}
              </Inline>
            )}
          </Stack>
        </Container>
      </section>
    )
  }
)
Hero.displayName = "Hero"

export { Hero }
