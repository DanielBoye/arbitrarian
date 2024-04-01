/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {},
        },
    },
    daisyui: {
        themes: [
            {
                dark: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    primary: "white",
                    "primary-content": "#121215",
                    secondary: "#202023",
                    "secondary-content": "#d4d4d8",
                    accent: "white",
                    neutral: "#a1a1aa",
                    "base-100": "#18181b",
                    info: "#0067ff",
                    success: "#00fa9f",
                    warning: "#be4f00",
                    error: "#ff6581",
                },
            },
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    primary: "white",
                    secondary: "teal",
                },
            },
        ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
        darkTheme: "dark", // name of one of the included themes for dark mode
        base: true, // applies background color and foreground color for root element by default
        styled: true, // include daisyUI colors and design decisions for all components
        utils: true, // adds responsive and modifier utility classes
        prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
        logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
        themeRoot: ":root", // The element that receives theme color CSS variables
    },
    plugins: [require("daisyui")],

};
