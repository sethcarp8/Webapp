import * as React from "react"
import { cn } from "@/lib/utils"

export interface StepListProps extends React.HTMLAttributes<HTMLOListElement> {
  steps: Array<{ title: string; description?: string }>
}

export const StepList = React.forwardRef<HTMLOListElement, StepListProps>(
  ({ className, steps, ...props }, ref) => {
    return (
      <ol ref={ref} className={cn("space-y-4", className)} {...props}>
        {steps.map((s, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-semibold">
              {i + 1}
            </span>
            <div>
              <p className="font-medium">{s.title}</p>
              {s.description && <p className="text-sm text-muted-foreground">{s.description}</p>}
            </div>
          </li>
        ))}
      </ol>
    )
  }
)
StepList.displayName = "StepList"


