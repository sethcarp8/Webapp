import * as React from "react"
import { cn } from "@/lib/utils"

export interface InfoCalloutProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  children: React.ReactNode
  tone?: "info" | "success" | "warning" | "error"
}

export const InfoCallout = React.forwardRef<HTMLDivElement, InfoCalloutProps>(
  ({ className, title, children, tone = "info", ...props }, ref) => {
    const toneClasses = {
      info: "border-sky-300/60 bg-sky-50 text-sky-900 dark:bg-sky-950/30 dark:border-sky-700/40 dark:text-sky-100",
      success: "border-emerald-300/60 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/30 dark:border-emerald-700/40 dark:text-emerald-100",
      warning: "border-amber-300/60 bg-amber-50 text-amber-900 dark:bg-amber-950/30 dark:border-amber-700/40 dark:text-amber-100",
      error: "border-red-300/60 bg-red-50 text-red-900 dark:bg-red-950/30 dark:border-red-700/40 dark:text-red-100",
    }
    return (
      <div ref={ref} className={cn("rounded-md border p-4", toneClasses[tone], className)} {...props}>
        {title && <p className="font-medium mb-1">{title}</p>}
        <div className="text-sm opacity-90">{children}</div>
      </div>
    )
  }
)
InfoCallout.displayName = "InfoCallout"


