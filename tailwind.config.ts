import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cinema: {
          black: '#0a0a0a',
          dark: '#121212',
          charcoal: '#1a1a1a',
          gold: '#d4af37',
          amber: '#ffbf00',
          silver: '#c0c0c0',
          cream: '#f5f5dc',
          red: '#8b0000',
          burgundy: '#722f37',
        }
      },
      fontFamily: {
        cinematic: ['Playfair Display', 'serif'],
        credits: ['Bebas Neue', 'sans-serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "spotlight": "radial-gradient(ellipse at center, rgba(212, 175, 55, 0.15) 0%, transparent 70%)",
        "film-vignette": "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)",
      },
      animation: {
        'flicker': 'flicker 3s linear infinite',
        'spotlight': 'spotlight 8s ease-in-out infinite',
        'film-roll': 'filmRoll 20s linear infinite',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in-down': 'fadeInDown 1s ease-out forwards',
        'fade-in-left': 'fadeInLeft 1s ease-out forwards',
        'fade-in-right': 'fadeInRight 1s ease-out forwards',
        'zoom-in': 'zoomIn 1.5s ease-out forwards',
        'typewriter': 'typewriter 4s steps(40) 1s forwards',
        'blink': 'blink 1s step-end infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'curtain-left': 'curtainLeft 2s ease-out forwards',
        'curtain-right': 'curtainRight 2s ease-out forwards',
        'dramatic-reveal': 'dramaticReveal 1.5s ease-out forwards',
        'lens-flare': 'lensFlare 4s ease-in-out infinite',
        'projector-dust': 'projectorDust 15s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '0.99' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.4' },
        },
        spotlight: {
          '0%, 100%': { transform: 'translateX(-20%) scale(1)', opacity: '0.3' },
          '50%': { transform: 'translateX(20%) scale(1.2)', opacity: '0.5' },
        },
        filmRoll: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 -1000px' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#d4af37' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.6)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        curtainLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        curtainRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        dramaticReveal: {
          '0%': { opacity: '0', transform: 'scale(1.1)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'scale(1)', filter: 'blur(0)' },
        },
        lensFlare: {
          '0%, 100%': { opacity: '0.2', transform: 'translate(0, 0) scale(1)' },
          '50%': { opacity: '0.6', transform: 'translate(20px, -20px) scale(1.5)' },
        },
        projectorDust: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(212, 175, 55, 0.5), 0 0 20px rgba(212, 175, 55, 0.3)' },
          '100%': { textShadow: '0 0 20px rgba(212, 175, 55, 0.8), 0 0 40px rgba(212, 175, 55, 0.5), 0 0 60px rgba(212, 175, 55, 0.3)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'cinema': '0 25px 50px -12px rgba(212, 175, 55, 0.15)',
        'spotlight': '0 0 60px 30px rgba(212, 175, 55, 0.1)',
        'glow-gold': '0 0 30px rgba(212, 175, 55, 0.4)',
        'inner-cinema': 'inset 0 0 100px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
export default config;
