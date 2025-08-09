import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Button component with full variant support
 * Built on Radix Slot primitive for maximum flexibility
 */
const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 no-underline",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline focus-visible:ring-0",
      },
      size: {
        // Align to 44px minimum target size by default
        default: "h-11 px-4 py-2",
        sm: "h-10 rounded-md px-3",
        lg: "h-12 rounded-md px-6",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  leadingIcon?: React.ReactNode
  trailingIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, isLoading = false, leadingIcon, trailingIcon, children, ...props }, ref) => {
    if (asChild) {
      // When rendering as child, ensure exactly one child element is passed
      return (
        <Slot
          className={cn(buttonVariants({ variant, size, className }))}
          aria-busy={isLoading || undefined}
          data-button
          data-variant={variant || 'default'}
          style={{ textDecoration: 'none' }}
          {...(props as any)}
        >
          {children}
        </Slot>
      )
    }

    const contentOpacity = isLoading ? "opacity-0" : "opacity-100"
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        aria-busy={isLoading || undefined}
        data-variant={variant || 'default'}
        {...props}
      >
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <svg className="h-4 w-4 animate-spin text-current motion-reduce:animate-none" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
            </svg>
          </span>
        )}
        <span className={cn("inline-flex items-center gap-2", contentOpacity)}>
          {leadingIcon}
          <span>{children}</span>
          {trailingIcon}
        </span>
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
