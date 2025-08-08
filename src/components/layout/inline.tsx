import * as React from "react"
import { cn } from "@/lib/utils"

export interface InlineProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  align?: "start" | "center" | "end" | "stretch" | "baseline"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
  wrap?: boolean
  as?: React.ElementType
}

const Inline = React.forwardRef<HTMLDivElement, InlineProps>(
  ({ className, gap = "md", align = "start", justify = "start", wrap = true, as: Component = "div", ...props }, ref) => {
    const gapClasses = {
      xs: "space-x-1",
      sm: "space-x-2", 
      md: "space-x-4",
      lg: "space-x-6",
      xl: "space-x-8",
      "2xl": "space-x-12"
    }

    const alignClasses = {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline"
    }

    const justifyClasses = {
      start: "justify-start",
      center: "justify-center", 
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly"
    }

    return (
      <Component
        ref={ref}
        className={cn(
          "flex",
          wrap ? "flex-wrap" : "flex-nowrap",
          gapClasses[gap],
          alignClasses[align],
          justifyClasses[justify],
          className
        )}
        {...props}
      />
    )
  }
)
Inline.displayName = "Inline"

export { Inline }
