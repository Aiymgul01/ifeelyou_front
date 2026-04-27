    /** @type {import('tailwindcss').Config} */
    module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
        colors: {
            brand: {
            purple: '#5c6bc0', 
            dark: '#512da8',
            yellow: '#fcd34d', 
            light: '#f8f9fa',
            }
        }
        },
    },
    plugins: [],
    };
