/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Apple-like design system colors
        'apple': {
          'white': '#FFFFFF',
          'strip': '#F5F5F7',
          'primary-nav': "#F2A102",
          'black': '#000000',
          'near-black': '#0B0B0C',
          'primary': '#1D1D1F',
          'secondary': '#6E6E73',
          'tertiary': '#86868B',
          'inverse': '#FFFFFF',
          'link': '#0071E3',
          'link-hover': '#0077ED',
          'link-pressed': '#0060DF',
          'divider': '#E5E5EA',
          'hairline': '#D2D2D7',
          'tile-border': 'rgba(255,255,255,0.12)',
          'button-primary-bg': '#0071E3',
          'button-primary-text': '#FFFFFF',
          'button-secondary-bg': '#F5F5F7',
          'button-secondary-text': '#1D1D1F',
          'button-ghost-text': '#0071E3',
          'chip-bg': '#F5F5F7',
          'chip-text': '#1D1D1F',
          'input-bg': '#FFFFFF',
          'input-border': '#D2D2D7',
          'input-placeholder': '#86868B',
          'dot-inactive': '#D2D2D7',
          'dot-active': '#1D1D1F',
          'rating-star': '#FFB400'
        }
      },
      fontFamily: {
        'apple': ['system-ui', '-apple-system', 'SF Pro Text', 'SF Pro Display', 'Roboto', 'Arial', 'sans-serif']
      },
      fontSize: {
        'display': ['40px', { lineHeight: '1.1' }],
        'h1': ['32px', { lineHeight: '1.2' }],
        'h2': ['24px', { lineHeight: '1.3' }],
        'h3': ['19px', { lineHeight: '1.4' }],
        'body': ['17px', { lineHeight: '1.5' }],
        'subtext': ['15px', { lineHeight: '1.4' }],
        'caption': ['13px', { lineHeight: '1.3' }],
        'price': ['15px', { lineHeight: '1.4' }]
      },
      fontWeight: {
        'regular': '400',
        'medium': '500',
        'semibold': '600'
      },
      borderRadius: {
        'card': '18px',
        'tile': '20px',
        'button': '12px',
        'chip': '18px',
        'input': '12px',
        'image-thumb': '12px'
      },
      boxShadow: {
        'card': '0 1px 2px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.08)',
        'image': '0 8px 20px rgba(0,0,0,0.12)',
        'hover': '0 6px 16px rgba(0,0,0,0.10), 0 16px 32px rgba(0,0,0,0.12)',
        'focus-ring': '0 0 0 3px rgba(0,113,227,0.35)',
        'hero': '0 12px 40px rgba(0,0,0,0.35)',
        'hero-hover': '0 16px 48px rgba(0,0,0,0.40)'
      },
      backgroundImage: {
        'gradient-sphere-blue': 'linear-gradient(135deg, #1B69F6 0%, #2AA2FF 100%)',
        'gradient-sphere-orange': 'linear-gradient(135deg, #FF7A00 0%, #FF3B2F 100%)',
        'gradient-sphere-yellow': 'linear-gradient(135deg, #FFD60A 0%, #FFB800 100%)',
        'gradient-sphere-pink': 'linear-gradient(135deg, #FF6BCE 0%, #DA4DFF 100%)',
        'gradient-tile-glow': 'radial-gradient(60% 60% at 50% 100%, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 70%)'
      },
      spacing: {
        'section-y': ['48px', '64px', '96px'],
        'card-gap': '16px',
        'tile-gap': '24px',
        'control-gap': '8px'
      },
      maxWidth: {
        'content': '1100px'
      }
    }
  },
  plugins: []
}
