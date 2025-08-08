import * as React from "react"
import { cn } from "@/lib/utils"

export interface ErrorStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  action?: { label: string; onClick?: () => void }
}

export const ErrorState = React.forwardRef<HTMLDivElement, ErrorStateProps>(
  ({ className, title, description, action, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("text-center py-12", className)} {...props}>
        <div className="w-16 h-16 mx-auto rounded-full bg-destructive/15 text-destructive flex items-center justify-center mb-4">
          <span className="text-2xl">!</span>
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && <p className="text-muted-foreground mt-1">{description}</p>}
        {action && (
          <button onClick={action.onClick} className="mt-4 inline-flex px-4 py-2 rounded-md bg-destructive text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring">
            {action.label}
          </button>
        )}
      </div>
    )
  }
)
ErrorState.displayName = "ErrorState"


