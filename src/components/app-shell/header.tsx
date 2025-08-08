import * as React from "react"
import { cn } from "@/lib/utils"
import { Container, Inline } from "@/components/layout"
import { ThemeToggle } from "@/components/ui"

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode
  navigation?: React.ReactNode
  actions?: React.ReactNode
}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, logo, navigation, actions, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          "sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          className
        )}
        {...props}
      >
        <Container>
          <Inline className="h-16 items-center justify-between">
            <div className="flex items-center gap-6">
              {logo && (
                <div className="flex items-center">
                  {logo}
                </div>
              )}
              {navigation && (
                <nav className="hidden md:flex" aria-label="Main navigation">
                  {navigation}
                </nav>
              )}
            </div>
            
            <Inline className="items-center gap-4">
              {actions}
              <ThemeToggle />
            </Inline>
          </Inline>
        </Container>
      </header>
    )
  }
)
Header.displayName = "Header"

export { Header }
