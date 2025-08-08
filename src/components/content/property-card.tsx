import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, Badge } from "@/components/ui"

export interface PropertyCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc?: string
  title: string
  location?: string
  tags?: string[]
  price?: string
}

export const PropertyCard = React.forwardRef<HTMLDivElement, PropertyCardProps>(
  ({ className, imageSrc = "/screenshots/guest-dashboard.svg", title, location, tags = [], price, ...props }, ref) => {
    return (
      <Card ref={ref} className={cn(className)} {...props}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {location && <CardDescription>{location}</CardDescription>}
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="w-full h-40 relative rounded-md overflow-hidden border">
            <Image src={imageSrc} alt={title} fill className="object-cover" />
          </div>
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((t, i) => (
                <Badge key={i} variant="secondary">{t}</Badge>
              ))}
            </div>
          )}
          {price && <p className="text-sm font-medium">{price}</p>}
        </CardContent>
      </Card>
    )
  }
)
PropertyCard.displayName = "PropertyCard"


