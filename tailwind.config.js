/** @type {import('tailwindcss').Config}*/
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,svg}',
    ],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require("daisyui")
    ],
    daisyui: {
        styled: true,
        themes: ["light", "dark"],
        base: false,
        utils: true,
        logs: true,
        rtl: false,
        prefix: "",
        darkTheme: "dark"
    },
    darkMode: 'class',
    theme: {
        screens: {
            'xxs': '280px',
            'xs': '475px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
}
