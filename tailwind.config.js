/* eslint-disable prettier/prettier */
module.exports = {
    purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'hero-pattern': "url('/img/hero-pattern.svg')",
                'footer-texture': "url('/img/footer-texture.png')",
            },
            colors: {
                "regal-blue": "#243c5a",
            },
        },

    },
    variants: {
        extend: {},
    },
    plugins: [],
};