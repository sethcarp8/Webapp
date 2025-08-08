import * as React from "react"
import { cn } from "@/lib/utils"

export interface KeyValueProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<{ label: string; value: React.ReactNode }>
  twoColumn?: boolean
}

export const KeyValue = React.forwardRef<HTMLDivElement, KeyValueProps>(
  ({ className, items, twoColumn = false, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(twoColumn ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-3", className)} {...props}>
        {items.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <p className="text-xs text-muted-foreground">{item.label}</p>
            <div className="text-sm font-medium break-words">{item.value}</div>
          </div>
        ))}
      </div>
    )
  }
)
KeyValue.displayName = "KeyValue"


