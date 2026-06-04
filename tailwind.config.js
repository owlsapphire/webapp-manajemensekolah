/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5B3EE5',
        secondary: '#8A7DFF',
        accent: '#FFB800',
        darkbg: '#0F0F1E',
        lightbg: '#F5F5F5',
        danger: '#DC2626',
        success: '#16A34A',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        display: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 40px rgba(0,0,0,0.08)',
        modal: '0 25px 50px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      spacing: {
        4.5: '1.125rem',
        7.5: '1.875rem',
        9.5: '2.375rem',
      },
    },
  },
  plugins: [],
}
