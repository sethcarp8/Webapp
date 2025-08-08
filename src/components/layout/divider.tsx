import * as React from "react"
import { cn } from "@/lib/utils"

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical"
  size?: "sm" | "md" | "lg"
  as?: React.ElementType
}

const Divider = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, orientation = "horizontal", size = "md", as: Component = "hr", ...props }, ref) => {
    const sizeClasses = {
      sm: orientation === "horizontal" ? "h-px" : "w-px",
      md: orientation === "horizontal" ? "h-0.5" : "w-0.5",
      lg: orientation === "horizontal" ? "h-1" : "w-1"
    }

    return (
      <Component
        ref={ref}
        className={cn(
          "border-0 bg-border",
          sizeClasses[size],
          orientation === "vertical" ? "mx-4" : "my-4",
          className
        )}
        {...props}
      />
    )
  }
)
Divider.displayName = "Divider"

export { Divider }
