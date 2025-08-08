import * as React from "react"
import { cn } from "@/lib/utils"

export interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {
  as?: React.ElementType
}

const VisuallyHidden = React.forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ className, as: Component = "span", ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          "absolute w-px h-px p-0 -m-px overflow-hidden whitespace-nowrap border-0",
          "clip-[rect(0,0,0,0)]",
          className
        )}
        {...props}
      />
    )
  }
)
VisuallyHidden.displayName = "VisuallyHidden"

export { VisuallyHidden }
