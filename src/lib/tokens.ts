/**
 * Design Tokens Contract
 * 
 * This file defines all design tokens as CSS custom properties
 * and provides TypeScript interfaces for type safety.
 * 
 * Tokens are organized by category:
 * - Colors (semantic and functional)
 * - Typography (font families, sizes, weights, line heights)
 * - Spacing (consistent spacing scale)
 * - Radius (border radius values)
 * - Elevation (shadows and depth)
 * - Motion (animation durations and easings)
 * - Z-Index (layering system)
 */

// =============================================================================
// COLOR TOKENS
// =============================================================================

export const colorTokens = {
  // Primary brand colors
  primary: {
    50: 'hsl(213, 100%, 96%)',
    100: 'hsl(214, 95%, 93%)',
    200: 'hsl(213, 97%, 87%)',
    300: 'hsl(212, 96%, 78%)',
    400: 'hsl(213, 94%, 68%)',
    500: 'hsl(217, 91%, 60%)',
    600: 'hsl(221, 83%, 53%)',
    700: 'hsl(224, 76%, 48%)',
    800: 'hsl(226, 71%, 40%)',
    900: 'hsl(224, 64%, 33%)',
    950: 'hsl(229, 84%, 5%)',
  },
  
  // Neutral grays
  neutral: {
    50: 'hsl(0, 0%, 98%)',
    100: 'hsl(0, 0%, 96%)',
    200: 'hsl(0, 0%, 90%)',
    300: 'hsl(0, 0%, 83%)',
    400: 'hsl(0, 0%, 64%)',
    500: 'hsl(0, 0%, 45%)',
    600: 'hsl(0, 0%, 32%)',
    700: 'hsl(0, 0%, 25%)',
    800: 'hsl(0, 0%, 15%)',
    900: 'hsl(0, 0%, 9%)',
    950: 'hsl(0, 0%, 4%)',
  },
  
  // Semantic colors
  success: {
    50: 'hsl(138, 76%, 97%)',
    100: 'hsl(141, 84%, 93%)',
    200: 'hsl(141, 79%, 85%)',
    300: 'hsl(142, 77%, 73%)',
    400: 'hsl(142, 69%, 58%)',
    500: 'hsl(142, 71%, 45%)',
    600: 'hsl(142, 76%, 36%)',
    700: 'hsl(142, 72%, 29%)',
    800: 'hsl(143, 64%, 24%)',
    900: 'hsl(144, 61%, 20%)',
    950: 'hsl(145, 80%, 10%)',
  },
  
  warning: {
    50: 'hsl(48, 100%, 96%)',
    100: 'hsl(48, 96%, 89%)',
    200: 'hsl(48, 97%, 77%)',
    300: 'hsl(49, 98%, 63%)',
    400: 'hsl(49, 98%, 49%)',
    500: 'hsl(49, 98%, 35%)',
    600: 'hsl(49, 98%, 28%)',
    700: 'hsl(49, 98%, 23%)',
    800: 'hsl(49, 98%, 19%)',
    900: 'hsl(49, 98%, 16%)',
    950: 'hsl(49, 98%, 8%)',
  },
  
  error: {
    50: 'hsl(0, 86%, 97%)',
    100: 'hsl(0, 93%, 94%)',
    200: 'hsl(0, 96%, 89%)',
    300: 'hsl(0, 93%, 82%)',
    400: 'hsl(0, 90%, 70%)',
    500: 'hsl(0, 84%, 60%)',
    600: 'hsl(0, 72%, 51%)',
    700: 'hsl(0, 74%, 42%)',
    800: 'hsl(0, 70%, 35%)',
    900: 'hsl(0, 63%, 31%)',
    950: 'hsl(0, 75%, 15%)',
  },
} as const;

// =============================================================================
// TYPOGRAPHY TOKENS
// =============================================================================

export const typographyTokens = {
  // Font families
  fontFamily: {
    sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
    mono: ['var(--font-geist-mono)', 'monospace'],
  },
  
  // Font sizes
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
    '8xl': '6rem',    // 96px
    '9xl': '8rem',    // 128px
  },
  
  // Font weights
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  
  // Line heights
  lineHeight: {
    none: '1',
    tight: '1.25',
    snug: '1.375',
    normal: '1.5',
    relaxed: '1.625',
    loose: '2',
  },
  
  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0em',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
} as const;

// =============================================================================
// SPACING TOKENS
// =============================================================================

export const spacingTokens = {
  0: '0px',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  7: '1.75rem',   // 28px
  8: '2rem',      // 32px
  9: '2.25rem',   // 36px
  10: '2.5rem',   // 40px
  11: '2.75rem',  // 44px
  12: '3rem',     // 48px
  14: '3.5rem',   // 56px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  28: '7rem',     // 112px
  32: '8rem',     // 128px
  36: '9rem',     // 144px
  40: '10rem',    // 160px
  44: '11rem',    // 176px
  48: '12rem',    // 192px
  52: '13rem',    // 208px
  56: '14rem',    // 224px
  60: '15rem',    // 240px
  64: '16rem',    // 256px
  72: '18rem',    // 288px
  80: '20rem',    // 320px
  96: '24rem',    // 384px
} as const;

// =============================================================================
// RADIUS TOKENS
// =============================================================================

export const radiusTokens = {
  none: '0px',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  '3xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

// =============================================================================
// ELEVATION TOKENS
// =============================================================================

export const elevationTokens = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
} as const;

// =============================================================================
// MOTION TOKENS
// =============================================================================

export const motionTokens = {
  // Duration
  duration: {
    75: '75ms',
    100: '100ms',
    150: '150ms',
    200: '200ms',
    300: '300ms',
    500: '500ms',
    700: '700ms',
    1000: '1000ms',
  },
  
  // Easing
  easing: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const;

// =============================================================================
// Z-INDEX TOKENS
// =============================================================================

export const zIndexTokens = {
  hide: '-1',
  auto: 'auto',
  base: '0',
  docked: '10',
  dropdown: '1000',
  sticky: '1100',
  banner: '1200',
  overlay: '1300',
  modal: '1400',
  popover: '1500',
  skipLink: '1600',
  toast: '1700',
  tooltip: '1800',
} as const;

// =============================================================================
// EXPORT ALL TOKENS
// =============================================================================

export const designTokens = {
  color: colorTokens,
  typography: typographyTokens,
  spacing: spacingTokens,
  radius: radiusTokens,
  elevation: elevationTokens,
  motion: motionTokens,
  zIndex: zIndexTokens,
} as const;

export type ColorToken = keyof typeof colorTokens;
export type TypographyToken = keyof typeof typographyTokens;
export type SpacingToken = keyof typeof spacingTokens;
export type RadiusToken = keyof typeof radiusTokens;
export type ElevationToken = keyof typeof elevationTokens;
export type MotionToken = keyof typeof motionTokens;
export type ZIndexToken = keyof typeof zIndexTokens;
