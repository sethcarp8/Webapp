import * as React from "react"
import { cn } from "@/lib/utils"
import { SkipToContent } from "@/components/layout"

export interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
  skipToContentId?: string
}

const AppShell = React.forwardRef<HTMLDivElement, AppShellProps>(
  ({ className, header, footer, children, skipToContentId = "main-content", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "min-h-screen flex flex-col",
          className
        )}
        {...props}
      >
        <SkipToContent href={`#${skipToContentId}`} />
        
        {header}
        
        <main id={skipToContentId} className="flex-1">
          {children}
        </main>
        
        {footer}
      </div>
    )
  }
)
AppShell.displayName = "AppShell"

export { AppShell }
