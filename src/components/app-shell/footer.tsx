import * as React from "react"
import { cn } from "@/lib/utils"
import { Container, Stack, Inline, Divider } from "@/components/layout"

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode
  links?: React.ReactNode
  copyright?: React.ReactNode
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, logo, links, copyright, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn(
          "bg-background/95 backdrop-blur border-t border-border/30",
          className
        )}
        {...props}
      >
        <Container>
          <Stack className="py-8 md:py-10 gap-6">
            <Inline className="items-center justify-between">
              {logo && (
                <div className="flex items-center">
                  {logo}
                </div>
              )}
              {links && (
                <nav className="flex flex-wrap gap-6 md:gap-8" aria-label="Footer navigation">
                  {links}
                </nav>
              )}
            </Inline>
            
            <Divider className="opacity-50" />
            
            {copyright && (
              <div className="text-center text-xs text-muted-foreground leading-tight">
                {copyright}
              </div>
            )}
          </Stack>
        </Container>
      </footer>
    )
  }
)
Footer.displayName = "Footer"

export { Footer }
