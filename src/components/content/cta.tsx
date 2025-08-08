import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui"
import { Container, Inline } from "@/components/layout"

export interface CTAProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  description?: string
  primaryAction: {
    label: string
    href: string
    variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
  }
  secondaryAction?: {
    label: string
    href: string
    variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
  }
  variant?: "default" | "centered" | "split"
  background?: "default" | "primary" | "gradient"
  size?: "sm" | "md" | "lg"
}

const CTA = React.forwardRef<HTMLElement, CTAProps>(
  ({ 
    className, 
    title, 
    description, 
    primaryAction, 
    secondaryAction, 
    variant = "default",
    background = "default",
    size = "md",
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: "py-12 lg:py-16",
      md: "py-16 lg:py-24", 
      lg: "py-20 lg:py-32"
    }

    const backgroundClasses = {
      default: "bg-background border-t border-border",
      primary: "bg-primary text-primary-foreground",
      gradient: "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground"
    }

    const variantClasses = {
      default: "text-center",
      centered: "text-center max-w-2xl mx-auto",
      split: "lg:flex lg:items-center lg:justify-between"
    }

    return (
      <section
        ref={ref}
        className={cn(
          sizeClasses[size],
          backgroundClasses[background],
          className
        )}
        {...props}
      >
        <Container>
          <div className={cn("space-y-6", variantClasses[variant])}>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                {title}
              </h2>
              {description && (
                <p className="mt-4 text-lg text-muted-foreground">
                  {description}
                </p>
              )}
            </div>

            <Inline className="justify-center lg:justify-start" gap="md">
              <Button 
                asChild 
                size="lg"
                variant={primaryAction.variant || "default"}
              >
                <a href={primaryAction.href}>
                  {primaryAction.label}
                </a>
              </Button>
              
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
          </div>
        </Container>
      </section>
    )
  }
)
CTA.displayName = "CTA"

export { CTA }
