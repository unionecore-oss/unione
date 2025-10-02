import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Background Colors (Light Theme)
        background: {
          primary: '#FFFFFF',
          secondary: '#F5F5F7',
          accent: '#E5E5EA',
          card: '#FFFFFF',
        },
        // Text Colors
        text: {
          primary: '#1D1D1F',
          secondary: '#86868B',
          tertiary: '#C7C7CC',
          inverse: '#FFFFFF',
        },
        // Accent Colors (rain.xyz style)
        accent: {
          pink: '#FF006E',
          purple: '#8B00FF',
          hover: '#E5007A',
        },
        // UI Elements
        ui: {
          border: '#E5E5E7',
          buttonPrimary: '#000000',
          buttonSecondary: '#F5F5F7',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-pink-purple': 'linear-gradient(135deg, #FF006E 0%, #8B00FF 100%)',
        'gradient-hero': 'linear-gradient(135deg, rgba(255, 0, 110, 0.1) 0%, rgba(139, 0, 255, 0.1) 100%)',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.08)',
        'inner-soft': 'inset 0 2px 4px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
        '3xl': '32px',
        'full-btn': '40px',
      },
      backdropBlur: {
        '20': '20px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
