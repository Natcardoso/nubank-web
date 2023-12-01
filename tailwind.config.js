/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            gridTemplateColumns: {
                custom: "2fr 3fr",
            },
            gridTemplateRows: {
                custom1: "0fr 1fr",
                custom2: "0fr 2fr 3fr",
            },
            maxWidth: {
                custom: "57.7%",
            },
            backgroundColor: {
                customBgOpacity: "rgba(0, 0, 0, 0.51)",
            },
            width: {
                custom: "550px",
                customModal: "30%",
            },
            keyframes: {
                drag: {
                    "0%": { transform: "translateX(20rem)" },
                    "100%": { transform: "translateX(0)" },
                },
                show: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
            animation: {
                drag: "drag 0.3s ease",
                show: "show 0.3s ease-in",
            },
        },
    },
    plugins: [],
};
