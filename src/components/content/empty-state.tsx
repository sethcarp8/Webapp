import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui"

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  icon?: React.ComponentType<{ className?: string }>
  action?: {
    label: string
    href: string
    variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link"
  }
  variant?: "default" | "minimal" | "centered"
  size?: "sm" | "md" | "lg"
}

const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ 
    className, 
    title, 
    description, 
    icon: Icon, 
    action, 
    variant = "default",
    size = "md",
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: "py-8",
      md: "py-12", 
      lg: "py-16"
    }

    const variantClasses = {
      default: "text-center",
      minimal: "text-center",
      centered: "text-center max-w-md mx-auto"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col items-center justify-center",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {Icon && (
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-6">
            <Icon className="w-8 h-8 text-muted-foreground" />
          </div>
        )}
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          
          {description && (
            <p className="text-muted-foreground">
              {description}
            </p>
          )}
          
          {action && (
            <Button 
              asChild 
              variant={action.variant || "default"}
            >
              <a href={action.href}>
                {action.label}
              </a>
            </Button>
          )}
        </div>
      </div>
    )
  }
)
EmptyState.displayName = "EmptyState"

export { EmptyState }
