import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind classes with proper conflict resolution
 * Uses clsx for conditional classes and tailwind-merge for deduplication
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Detects if the user has requested reduced motion via media query.
 * Returns false on server; true/false on client based on preference.
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined') {
    return false
  }
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  } catch {
    return false
  }
}

/**
 * Compute WCAG contrast ratio for two colors.
 * Accepts any CSS color that can be resolved to sRGB via canvas.
 */
export function computeContrastRatio(foreground: string, background: string): number {
  const toSRGB = (color: string): [number, number, number] => {
    if (typeof document === 'undefined') return [0, 0, 0]
    const ctx = document.createElement('canvas').getContext('2d')
    if (!ctx) return [0, 0, 0]
    ctx.fillStyle = color
    const computed = ctx.fillStyle as string
    // computed is in rgb(a)
    const m = computed.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i)
    if (!m) return [0, 0, 0]
    return [parseInt(m[1], 10) / 255, parseInt(m[2], 10) / 255, parseInt(m[3], 10) / 255]
  }

  const luminance = ([r, g, b]: [number, number, number]): number => {
    const lin = (u: number) => (u <= 0.03928 ? u / 12.92 : Math.pow((u + 0.055) / 1.055, 2.4))
    const [R, G, B] = [lin(r), lin(g), lin(b)]
    return 0.2126 * R + 0.7152 * G + 0.0722 * B
  }

  const L1 = luminance(toSRGB(foreground))
  const L2 = luminance(toSRGB(background))
  const lighter = Math.max(L1, L2)
  const darker = Math.min(L1, L2)
  const ratio = (lighter + 0.05) / (darker + 0.05)
  return Math.round(ratio * 100) / 100
}
