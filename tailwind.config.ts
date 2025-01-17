import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import aspectRatio from '@tailwindcss/aspect-ratio';
import type { Config } from 'tailwindcss';


const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Todos los archivos relevantes en src
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#050a30',
        navyBlue: '#000c66',
        turquoiseBlue: '#00b4d8',
        skyBlue: '#90e0ef',
        accentGlow: '#00509d',
        border: 'hsl(217.2, 32.6%, 17.5%)',
        foreground: 'hsl(210, 40%, 98%)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #050a30, #000c66)',
        'button-gradient': 'linear-gradient(90deg, #00509d, #00b4d8)',
      },
      boxShadow: {
        glow: '0 0 10px #00b4d8, 0 0 20px #00509d',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
    },
  },
  plugins: [forms, typography, aspectRatio], // Usando los imports
};

export default config;
