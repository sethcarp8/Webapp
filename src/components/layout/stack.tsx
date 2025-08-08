import * as React from "react"
import { cn } from "@/lib/utils"

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  align?: "start" | "center" | "end" | "stretch"
  justify?: "start" | "center" | "end" | "between" | "around" | "evenly"
  as?: React.ElementType
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ className, gap = "md", align = "start", justify = "start", as: Component = "div", ...props }, ref) => {
    const gapClasses = {
      xs: "space-y-1",
      sm: "space-y-2", 
      md: "space-y-4",
      lg: "space-y-6",
      xl: "space-y-8",
      "2xl": "space-y-12"
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
          "flex flex-col",
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
Stack.displayName = "Stack"

export { Stack }
