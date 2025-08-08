import * as React from "react"
import { cn } from "@/lib/utils"

export interface SkipToContentProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string
  children?: React.ReactNode
}

const SkipToContent = React.forwardRef<HTMLAnchorElement, SkipToContentProps>(
  ({ className, href = "#main-content", children = "Skip to main content", ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn(
          "absolute top-4 left-4 z-50 px-4 py-2 text-sm font-medium",
          "bg-primary text-primary-foreground rounded-md",
          "transform -translate-y-full focus:translate-y-0",
          "transition-transform duration-200 ease-in-out",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          className
        )}
        {...props}
      >
        {children}
      </a>
    )
  }
)
SkipToContent.displayName = "SkipToContent"

export { SkipToContent }
