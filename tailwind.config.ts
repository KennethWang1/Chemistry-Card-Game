import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary (Cerulean)
        'primary': '#006293',
        'primary-container': '#2a7bb0',
        'on-primary': '#ffffff',

        // Secondary (Emerald)
        'secondary': '#006e1c',
        'secondary-container': '#98f994',
        'on-secondary': '#ffffff',

        // Tertiary (Amber)
        'tertiary': '#7f5300',
        'on-tertiary': '#ffffff',

        // Surfaces
        'surface': '#f7f9fb',
        'surface-dim': '#d8dadc',
        'surface-container': '#eceef0',
        'surface-bright': '#ffffff',
        'on-surface': '#191c1e',
        'on-surface-variant': '#40484f',

        // Outline
        'outline': '#707880',
        'outline-variant': '#c0c7d0',

        // Error
        'error': '#ba1a1a',
        'on-error': '#ffffff',
        'error-container': '#ffdad6',

        // Success
        'success': '#006e1c',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'grotesk': ['Hanken Grotesk', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'headline-lg': ['32px', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.02em' }],
        'headline-md': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'headline-sm': ['18px', { lineHeight: '1.4', fontWeight: '500' }],
        'body-lg': ['16px', { lineHeight: '1.6' }],
        'body-md': ['14px', { lineHeight: '1.5' }],
        'label-caps': ['12px', { lineHeight: '1', fontWeight: '700', letterSpacing: '0.05em' }],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2.5rem',
        'xl': '4rem',
      },
      borderRadius: {
        'sm': '0.25rem',
        'DEFAULT': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
      },
      boxShadow: {
        'elevation': '0px 4px 20px rgba(0, 0, 0, 0.05)',
        'subtle': '0px 1px 3px rgba(0, 0, 0, 0.08)',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
