let designTokens;

try {
  designTokens = require('./src/lib/tokens').designTokens;
} catch (error) {
  console.warn('Could not load design tokens, using fallback configuration');
  designTokens = {
    color: {
      primary: {},
      neutral: {},
      success: {},
      warning: {},
      error: {},
    },
    typography: {
      fontFamily: {},
      fontSize: {},
      fontWeight: {},
      lineHeight: {},
      letterSpacing: {},
    },
    spacing: {},
    radius: {},
    elevation: {},
    motion: {
      duration: {},
      easing: {},
    },
    zIndex: {},
  };
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        // Font families
        fontFamily: designTokens.typography.fontFamily,
        
        // Font sizes
        fontSize: designTokens.typography.fontSize,
        
        // Font weights
        fontWeight: designTokens.typography.fontWeight,
        
        // Line heights
        lineHeight: designTokens.typography.lineHeight,
        
        // Letter spacing
        letterSpacing: designTokens.typography.letterSpacing,
        
        // Spacing scale
        spacing: designTokens.spacing,
        
        // Border radius
        borderRadius: designTokens.radius,
        
        // Colors
        colors: {
          // Scales
          primary: { DEFAULT: 'var(--primary)', foreground: 'var(--primary-foreground)', ...designTokens.color.primary },
          neutral: designTokens.color.neutral,
          success: designTokens.color.success,
          warning: designTokens.color.warning,
          error: designTokens.color.error,

          // Surface tokens
          background: 'var(--background)',
          foreground: 'var(--foreground)',
          card: 'var(--card)',
          'card-foreground': 'var(--card-foreground)',
          popover: 'var(--popover)',
          'popover-foreground': 'var(--popover-foreground)',
          border: 'var(--border)',
          input: 'var(--input)',
          ring: 'var(--ring)',

          // UI role tokens
          secondary: { DEFAULT: 'var(--secondary)', foreground: 'var(--secondary-foreground)' },
          muted: { DEFAULT: 'var(--muted)', foreground: 'var(--muted-foreground)' },
          accent: { DEFAULT: 'var(--accent)', foreground: 'var(--accent-foreground)' },
          destructive: { DEFAULT: 'var(--destructive)', foreground: 'var(--destructive-foreground)' },
        },
        
        // Box shadow (elevation)
        boxShadow: designTokens.elevation,
        
        // Z-index
        zIndex: designTokens.zIndex,
        
        // Animation duration
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'slide-in': 'slideIn 0.3s ease-out',
          'scale-in': 'scaleIn 0.2s ease-out',
        },
        
        // Keyframes
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0', transform: 'translateY(10px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          slideIn: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          scaleIn: {
            '0%': { transform: 'scale(0.95)', opacity: '0' },
            '100%': { transform: 'scale(1)', opacity: '1' },
          },
        },
        
        // Transition duration
        transitionDuration: designTokens.motion.duration,
        
        // Transition timing function
        transitionTimingFunction: designTokens.motion.easing,
      },
    },
    plugins: [],
  };
  