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
        'warm-50': '#fffaf5',
        'warm-100': '#fff8f0',
        'warm-200': '#ffeedd',
        'warm-300': '#ffcc99',
        'warm-400': 'rgba(255, 200, 150, 0.9)',
        'warm-500': 'rgba(255, 180, 120, 0.8)',
        'warm-glow': 'rgba(255, 180, 120, 0.15)',

        // Warm Active States (from IDEClean.tsx)
        'warm-active-bg': 'rgba(255, 200, 150, 0.08)', // File tree active
        'warm-active-hover': 'rgba(255, 200, 150, 0.12)', // Activity bar active
        'warm-active-subtle': 'rgba(255, 200, 150, 0.04)', // AI chat background
        'warm-active-border': 'rgba(255, 200, 150, 0.15)', // Subtle borders

        // Gradient Stops (for bg-gradient-to-br, bg-gradient-to-r)
        'gradient-warm-start': 'rgba(255, 200, 150, 0.3)',
        'gradient-warm-end': 'rgba(255, 180, 120, 0.2)',
        'gradient-warm-button-start': 'rgba(255, 200, 150, 0.15)',
        'gradient-warm-button-end': 'rgba(255, 180, 120, 0.08)',

        // Text
        'text-primary': 'rgba(255, 240, 220, 0.95)',
        'text-secondary': 'rgba(255, 250, 245, 0.7)',
        'text-tertiary': 'rgba(255, 250, 245, 0.5)',
        'text-muted': 'rgba(255, 250, 245, 0.35)',
        'text-faint': 'rgba(255, 250, 245, 0.2)',

        // Status
        'status-success': '#4ade80',
        'status-success-bg': 'rgba(74, 222, 128, 0.1)',
        'status-warning': '#fbbf24',
        'status-warning-bg': 'rgba(251, 191, 36, 0.1)',
        'status-error': '#f87171',
        'status-error-bg': 'rgba(248, 113, 113, 0.1)',
        'status-info': '#60a5fa',

        // Border
        'border-subtle': 'rgba(255, 255, 255, 0.04)',
        'border-DEFAULT': 'rgba(255, 255, 255, 0.06)',
        'border-light': 'rgba(255, 255, 255, 0.08)',
        'border-medium': 'rgba(255, 255, 255, 0.1)',
        'border-warm': 'rgba(255, 200, 150, 0.2)',
        'border-active': 'rgba(255, 200, 150, 0.3)',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Noto Sans KR', 'sans-serif'],
        mono: ['SF Mono', 'Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        // Note: text-2xs is 10px, commonly used for labels and small UI text
        '2xs': ['10px', { lineHeight: '14px' }],
        xs: ['11px', { lineHeight: '16px' }],
        sm: ['12px', { lineHeight: '18px' }],
        base: ['13px', { lineHeight: '20px' }],  // Default IDE text size
        md: ['14px', { lineHeight: '21px' }],
        lg: ['15px', { lineHeight: '22px' }],    // Command palette input
        xl: ['18px', { lineHeight: '26px' }],
        '2xl': ['20px', { lineHeight: '28px' }],
      },
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
