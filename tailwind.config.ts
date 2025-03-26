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
                primary: {
                    DEFAULT: '#6A0DAD', // Deep Purple
                    light: '#8A2BE2',
                    dark: '#4B0082',
                },
                secondary: {
                    DEFAULT: '#0099FF', // Electric Blue
                    light: '#00BFFF',
                    dark: '#0077CC',
                },
                accent: {
                    DEFAULT: '#FF3B8D', // Neon Pink
                    light: '#FF69B4',
                    dark: '#FF1493',
                },
                corporate: {
                    gray: '#4A5568',
                    light: '#F7FAFC',
                    dark: '#2D3748',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-in-out',
                'slide-up': 'slideUp 0.5s ease-out',
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
            },
        },
    },
    plugins: [],
}

export default config 