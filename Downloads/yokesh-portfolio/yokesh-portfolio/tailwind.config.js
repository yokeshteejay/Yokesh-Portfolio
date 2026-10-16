/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05060f',
          900: '#0a0c1c',
          800: '#10132b',
          700: '#181c3d',
        },
        brand: {
          violet: '#7c3aed',
          indigo: '#6366f1',
          cyan: '#22d3ee',
          pink: '#f472b6',
          amber: '#fbbf24',
          green: '#34d399',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        code: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatYReverse: {
          '0%, 100%': { transform: 'translateY(-10px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
        spinSlowReverse: {
          to: { transform: 'rotate(-360deg)' },
        },
        blobMorph: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
        auroraShift: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(6%, -4%, 0) scale(1.15)' },
          '66%': { transform: 'translate3d(-5%, 5%, 0) scale(0.95)' },
        },
        gradientSlide: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseRing: {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.9)', opacity: '0' },
        },
        blinkCursor: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'float-y': 'floatY 6s ease-in-out infinite',
        'float-y-reverse': 'floatYReverse 7s ease-in-out infinite',
        'spin-slow': 'spinSlow 28s linear infinite',
        'spin-slow-reverse': 'spinSlowReverse 22s linear infinite',
        'orbit-counter': 'spinSlowReverse 28s linear infinite',
        'blob-morph': 'blobMorph 9s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
        'marquee-reverse': 'marqueeReverse 44s linear infinite',
        'aurora-shift': 'auroraShift 18s ease-in-out infinite',
        'gradient-slide': 'gradientSlide 6s ease infinite',
        'pulse-ring': 'pulseRing 2s cubic-bezier(0.2,0.6,0.3,1) infinite',
        'blink-cursor': 'blinkCursor 1s steps(1) infinite',
        'scan-line': 'scanLine 4s linear infinite',
      },
    },
  },
  plugins: [],
}
