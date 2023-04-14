/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    base: "rgb(29 155 240)",
                    dark: "rgb(25 140 216)",
                    light: "rgb(150 197 236)",
                },
                gray: {
                    dark: "rgb(83, 100, 113)",
                    light: "#AAB8C2",
                    extraLight: "#E1E8ED",
                    lightest: "F5F8FA",
                },
                black: {
                    primary: "rgb(15 20 26)",
                },
            },
        },
    },
    plugins: [],
};
