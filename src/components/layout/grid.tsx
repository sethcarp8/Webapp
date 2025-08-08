import * as React from "react"
import { cn } from "@/lib/utils"

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
  gap?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  align?: "start" | "center" | "end" | "stretch"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
  as?: React.ElementType
}

const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ className, cols = 1, gap = "md", align = "start", justify = "start", as: Component = "div", ...props }, ref) => {
    const colsClasses = {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",
      6: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-6",
      7: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-7",
      8: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-8",
      9: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-9",
      10: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-10",
      11: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-11",
      12: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-12"
    }

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
      stretch: "items-stretch"
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
          "grid",
          colsClasses[cols],
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
Grid.displayName = "Grid"

export { Grid }
