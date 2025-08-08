import * as React from "react"
import { cn } from "@/lib/utils"

export interface OrderSummaryProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Array<{ label: string; amount: number }>
  totalLabel?: string
  currency?: string
}

export const OrderSummary = React.forwardRef<HTMLDivElement, OrderSummaryProps>(
  ({ className, items, totalLabel = "Total", currency = "$", ...props }, ref) => {
    const subtotal = items.reduce((acc, i) => acc + i.amount, 0)
    return (
      <div ref={ref} className={cn("rounded-md border p-4 space-y-3", className)} {...props}>
        <div className="space-y-2">
          {items.map((i, idx) => (
            <div key={idx} className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">{i.label}</span>
              <span className="font-medium">{currency}{i.amount.toLocaleString()}</span>
            </div>
          ))}
        </div>
        <div className="border-t pt-3 flex items-center justify-between font-semibold">
          <span>{totalLabel}</span>
          <span>{currency}{subtotal.toLocaleString()}</span>
        </div>
      </div>
    )
  }
)
OrderSummary.displayName = "OrderSummary"


