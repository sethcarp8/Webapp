import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Button } from "@/components/ui"
import { cn } from "@/lib/utils"

export interface UpsellCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  cta?: { label: string; href: string; variant?: "default" | "secondary" | "outline" }
}

export const UpsellCard = React.forwardRef<HTMLDivElement, UpsellCardProps>(
  ({ className, title, description, cta, ...props }, ref) => {
    return (
      <Card ref={ref} className={cn("border-primary/20", className)} {...props}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
        {cta && (
          <CardContent>
            <Button asChild variant={cta.variant || "default"}>
              <a href={cta.href}>{cta.label}</a>
            </Button>
          </CardContent>
        )}
      </Card>
    )
  }
)
UpsellCard.displayName = "UpsellCard"


