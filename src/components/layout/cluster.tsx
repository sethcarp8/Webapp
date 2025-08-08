import * as React from "react"
import { cn } from "@/lib/utils"

export interface ClusterProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  align?: "start" | "center" | "end" | "stretch" | "baseline"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
  wrap?: boolean
  as?: React.ElementType
}

const Cluster = React.forwardRef<HTMLDivElement, ClusterProps>(
  ({ className, gap = "md", align = "start", justify = "start", wrap = true, as: Component = "div", ...props }, ref) => {
    const gapClasses = {
      xs: "gap-1",
      sm: "gap-2", 
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
      "2xl": "gap-12"
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
Cluster.displayName = "Cluster"

export { Cluster }
