import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "md" | "lg" | "xl" | "2xl"
  as?: React.ElementType
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "lg", as: Component = "section", ...props }, ref) => {
    const spacingClasses = {
      sm: "py-8",
      md: "py-12", 
      lg: "py-16 lg:py-24",
      xl: "py-20 lg:py-32",
      "2xl": "py-24 lg:py-40"
    }

    return (
      <Component
        ref={ref}
        className={cn(
          spacingClasses[spacing],
          className
        )}
        {...props}
      />
    )
  }
)
Section.displayName = "Section"

export { Section }
