import * as React from "react"
import { cn } from "@/lib/utils"

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: React.ReactNode
  trend?: "up" | "down" | "neutral"
  helperText?: string
}

export const Stat = React.forwardRef<HTMLDivElement, StatProps>(
  ({ className, label, value, trend = "neutral", helperText, ...props }, ref) => {
    const trendColor = trend === 'up' ? 'text-emerald-600' : trend === 'down' ? 'text-red-600' : 'text-muted-foreground'
    return (
      <div ref={ref} className={cn("p-4 rounded-md border", className)} {...props}>
        <p className="text-xs text-muted-foreground mb-1">{label}</p>
        <div className="text-2xl font-semibold">{value}</div>
        {helperText && <p className={cn("text-xs mt-1", trendColor)}>{helperText}</p>}
      </div>
    )
  }
)
Stat.displayName = "Stat"


