import * as React from "react"
import { cn } from "@/lib/utils"

export interface PageTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  align?: "left" | "center"
}

export const PageTitle = React.forwardRef<HTMLDivElement, PageTitleProps>(
  ({ className, title, subtitle, align = "left", ...props }, ref) => {
    return (
      <div ref={ref} className={cn(align === "center" ? "text-center" : "text-left", className)} {...props}>
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
      </div>
    )
  }
)
PageTitle.displayName = "PageTitle"


