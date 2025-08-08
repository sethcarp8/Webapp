const { designTokens } = require('./src/lib/tokens');

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
          // Primary colors
          primary: designTokens.color.primary,
          
          // Neutral colors
          neutral: designTokens.color.neutral,
          
          // Semantic colors
          success: designTokens.color.success,
          warning: designTokens.color.warning,
          error: designTokens.color.error,
          
          // Legacy support for existing theme variables
          background: 'var(--background)',
          foreground: 'var(--foreground)',
          card: 'var(--card)',
          'card-foreground': 'var(--card-foreground)',
          popover: 'var(--popover)',
          'popover-foreground': 'var(--popover-foreground)',
          muted: 'var(--muted)',
          'muted-foreground': 'var(--muted-foreground)',
          accent: 'var(--accent)',
          'accent-foreground': 'var(--accent-foreground)',
          destructive: 'var(--destructive)',
          'destructive-foreground': 'var(--destructive-foreground)',
          border: 'var(--border)',
          input: 'var(--input)',
          ring: 'var(--ring)',
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
  