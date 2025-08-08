# UI Layer Documentation

This directory contains the complete UI layer for the application, built with modern tools and best practices.

## Structure

```
src/components/
├── providers/          # Context providers (Theme, etc.)
├── ui/                 # Base UI components
│   ├── button.tsx     # Button component with variants
│   ├── card.tsx       # Card layout components
│   ├── theme-toggle.tsx # Theme switching component
│   └── index.ts       # Component exports
└── README.md          # This documentation
```

## Technology Stack

- **Tailwind CSS v4** - Utility-first CSS framework
- **Radix UI** - Headless UI primitives for accessibility
- **shadcn/ui** - Component patterns and variants
- **next-themes** - Theme switching with system preference detection
- **Lucide React** - Beautiful, customizable icons
- **class-variance-authority** - Type-safe component variants

## Key Features

### 🎨 **Theme System**
- Light/dark mode support
- System preference detection
- Smooth transitions
- CSS custom properties for theming

### ♿ **Accessibility**
- Radix UI primitives ensure WCAG compliance
- Proper ARIA labels and keyboard navigation
- Focus management and screen reader support

### 🧩 **Component Architecture**
- Variant-based styling with TypeScript support
- Slot pattern for maximum flexibility
- Consistent design tokens
- Reusable utility functions

### 📱 **Responsive Design**
- Mobile-first approach
- Flexible grid systems
- Consistent spacing scale

## Usage Examples

### Basic Button
```tsx
import { Button } from "@/components/ui"

<Button>Click me</Button>
```

### Button with Variants
```tsx
<Button variant="outline" size="lg">
  Large Outline Button
</Button>
```

### Card Layout
```tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content here
  </CardContent>
</Card>
```

### Theme Toggle
```tsx
import { ThemeToggle } from "@/components/ui"

<ThemeToggle />
```

## Design Tokens

The application uses CSS custom properties for consistent theming:

- `--primary` - Main brand color
- `--secondary` - Secondary actions
- `--muted` - Subtle backgrounds
- `--destructive` - Error states
- `--border` - Borders and dividers
- `--radius` - Border radius values

## Adding New Components

1. Create the component in `src/components/ui/`
2. Use Radix primitives for complex interactions
3. Implement variants using `class-variance-authority`
4. Export from `src/components/ui/index.ts`
5. Document in the Style Guide at `/style-guide`

## Best Practices

- Always use semantic HTML elements
- Implement proper TypeScript interfaces
- Test with screen readers and keyboard navigation
- Follow the established variant patterns
- Use the `cn()` utility for class merging
- Keep components focused and composable
