import * as React from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui"
import { Container, Grid, Stack } from "@/components/layout"
import Image from "next/image"

export interface TestimonialItem {
  quote: string
  author: {
    name: string
    title?: string
    company?: string
    avatar?: string
  }
  rating?: 1 | 2 | 3 | 4 | 5 | number
}

export interface TestimonialProps extends React.HTMLAttributes<HTMLElement> {
  title?: string
  subtitle?: string
  description?: string
  testimonials: TestimonialItem[]
  columns?: 1 | 2 | 3
  variant?: "default" | "cards" | "minimal"
  showRating?: boolean
}

const Testimonial = React.forwardRef<HTMLElement, TestimonialProps>(
  ({ 
    className, 
    title, 
    subtitle, 
    description, 
    testimonials, 
    columns = 3,
    variant = "default",
    showRating = true,
    ...props 
  }, ref) => {
    const StarIcon = ({ filled }: { filled: boolean }) => (
      <svg
        className={cn(
          "w-4 h-4",
          filled ? "text-yellow-400 fill-current" : "text-gray-300"
        )}
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    )

    const TestimonialCard = ({ testimonial }: { testimonial: TestimonialItem }) => {
      const content = (
        <div className="space-y-4">
          {showRating && testimonial.rating && (
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} filled={i < testimonial.rating!} />
              ))}
            </div>
          )}
          
          <blockquote className="text-lg italic">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          
          <div className="flex items-center gap-3">
            {testimonial.author.avatar && (
              <Image
                src={testimonial.author.avatar}
                alt={testimonial.author.name}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
            )}
            <div>
              <div className="font-semibold">{testimonial.author.name}</div>
              {(testimonial.author.title || testimonial.author.company) && (
                <div className="text-sm text-muted-foreground">
                  {testimonial.author.title}
                  {testimonial.author.title && testimonial.author.company && " at "}
                  {testimonial.author.company}
                </div>
              )}
            </div>
          </div>
        </div>
      )

      if (variant === "cards") {
        return (
          <Card className="h-full">
            <CardContent className="p-6">
              {content}
            </CardContent>
          </Card>
        )
      }

      return (
        <div className="p-6 rounded-lg border border-border bg-card">
          {content}
        </div>
      )
    }

    return (
      <section
        ref={ref}
        className={cn("py-16 lg:py-24", className)}
        {...props}
      >
        <Container>
          <Stack className="max-w-4xl mx-auto text-center" gap="lg">
            {subtitle && (
              <p className="text-sm font-medium text-primary uppercase tracking-wide">
                {subtitle}
              </p>
            )}
            
            {title && (
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                {title}
              </h2>
            )}
            
            {description && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </Stack>

          <div className="mt-16">
            <Grid cols={columns} className="gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </Grid>
          </div>
        </Container>
      </section>
    )
  }
)
Testimonial.displayName = "Testimonial"

export { Testimonial }
