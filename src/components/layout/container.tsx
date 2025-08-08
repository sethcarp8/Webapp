import * as React from "react"
import { cn } from "@/lib/utils"

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl" | "full"
  as?: React.ElementType
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = "lg", as: Component = "div", ...props }, ref) => {
    const sizeClasses = {
      sm: "max-w-screen-sm",
      md: "max-w-screen-md", 
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      full: "max-w-none"
    }

    return (
      <Component
        ref={ref}
        className={cn(
          "w-full mx-auto px-4 sm:px-6 lg:px-8",
          sizeClasses[size],
          className
        )}
        {...props}
      />
    )
  }
)
Container.displayName = "Container"

export { Container }
