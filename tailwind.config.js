/* eslint-disable prettier/prettier */
module.exports = {
    purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        screens: {
            'tablet': '640px',
            // => @media (min-width: 640px) { ... }

            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }

            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/img/hero-pattern.svg')",
                'footer-texture': "url('/img/footer-texture.png')",
            },
            colors: {
                "regal-blue": "#243c5a",
            },
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'white': '#ffffff',
            'purple': '#3f3cbb',
            'midnight': '#121063',
            'metal': '#565584',
            'tahiti': '#3ab7bf',
            'silver': '#ecebff',
            'bubble-gum': '#ff77e9',
            'bermuda': '#78dcca',
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};