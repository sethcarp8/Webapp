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
          "border-t bg-background",
          className
        )}
        {...props}
      >
        <Container>
          <Stack className="py-12 gap-8">
            <Inline className="items-start justify-between">
              {logo && (
                <div className="flex items-center">
                  {logo}
                </div>
              )}
              {links && (
                <nav className="flex flex-wrap gap-8" aria-label="Footer navigation">
                  {links}
                </nav>
              )}
            </Inline>
            
            <Divider />
            
            {copyright && (
              <div className="text-center text-sm text-muted-foreground">
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
