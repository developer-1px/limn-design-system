/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Background
        'bg-deep': '#0d0d12',
        'bg-base': '#0f0f16',
        'bg-surface': 'rgba(20, 20, 28, 0.95)',
        'bg-elevated': '#14141c',
        'bg-overlay': 'rgba(0, 0, 0, 0.6)',

        // Warm Accent
        warm: {
          50: '#fffaf5',
          100: '#fff8f0',
          200: '#ffeedd',
          300: '#ffcc99',
          400: 'rgba(255, 200, 150, 0.9)',
          500: 'rgba(255, 180, 120, 0.8)',
          glow: 'rgba(255, 180, 120, 0.15)',
        },

        // Text
        text: {
          primary: 'rgba(255, 240, 220, 0.95)',
          secondary: 'rgba(255, 250, 245, 0.7)',
          tertiary: 'rgba(255, 250, 245, 0.5)',
          muted: 'rgba(255, 250, 245, 0.35)',
          faint: 'rgba(255, 250, 245, 0.2)',
        },

        // Status
        status: {
          success: '#4ade80',
          'success-bg': 'rgba(74, 222, 128, 0.1)',
          warning: '#fbbf24',
          'warning-bg': 'rgba(251, 191, 36, 0.1)',
          error: '#f87171',
          'error-bg': 'rgba(248, 113, 113, 0.1)',
          info: '#60a5fa',
        },

        // Border
        border: {
          subtle: 'rgba(255, 255, 255, 0.04)',
          DEFAULT: 'rgba(255, 255, 255, 0.06)',
          light: 'rgba(255, 255, 255, 0.08)',
          medium: 'rgba(255, 255, 255, 0.1)',
          warm: 'rgba(255, 200, 150, 0.2)',
          active: 'rgba(255, 200, 150, 0.3)',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Noto Sans KR', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        '2xs': ['10px', { lineHeight: '14px' }],
        xs: ['11px', { lineHeight: '16px' }],
        sm: ['12px', { lineHeight: '18px' }],
        base: ['13px', { lineHeight: '20px' }],
        md: ['14px', { lineHeight: '21px' }],
        lg: ['15px', { lineHeight: '22px' }],
        xl: ['18px', { lineHeight: '26px' }],
        '2xl': ['20px', { lineHeight: '28px' }],
      },
      // Keep Tailwind default spacing (4px scale: 1=4px, 2=8px, etc.)
      borderRadius: {
        xs: '2px',
        sm: '4px',
        md: '6px',
        lg: '8px',
        xl: '10px',
        '2xl': '12px',
        '3xl': '14px',
        '4xl': '16px',
      },
      boxShadow: {
        sm: '0 4px 16px rgba(0, 0, 0, 0.2)',
        DEFAULT: '0 8px 32px rgba(0, 0, 0, 0.3)',
        md: '0 8px 32px rgba(0, 0, 0, 0.3)',
        lg: '0 16px 48px rgba(0, 0, 0, 0.4)',
        xl: '0 24px 80px rgba(0, 0, 0, 0.5)',
        inset: 'inset 0 1px 2px rgba(0, 0, 0, 0.2)',
        'glow-sm': '0 0 8px rgba(255, 200, 150, 0.6)',
        'glow-md': '0 0 12px rgba(255, 200, 150, 0.5)',
        'glow-lg': '0 0 24px rgba(255, 180, 120, 0.3)',
        'glow-xl': '0 0 40px rgba(255, 180, 120, 0.15)',
        'glow-success': '0 0 8px rgba(74, 222, 128, 0.5)',
        'glow-warning': '0 0 8px rgba(251, 191, 36, 0.5)',
        'glow-error': '0 0 8px rgba(248, 113, 113, 0.5)',
      },
      animation: {
        'spin': 'spin 1s linear infinite',
        'pulse': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-end infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 180, 120, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 180, 120, 0.4)' },
        },
      },
      transitionDuration: {
        instant: '0ms',
        fast: '100ms',
        normal: '200ms',
        slow: '300ms',
        slower: '500ms',
        slowest: '1000ms',
      },
    },
  },
  plugins: [],
}
