import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                "#1677ff": "#1677ff",
                "#1890ff": "#1890ff",
                "#409EFF": "#409EFF",
                "#2d8cf0": "#2d8cf0",
                "#007AFF": "#007AFF",
                "#5ac8fa": "#5ac8fa",
                "#5856D6": "#5856D6",
                "#536dfe": "#536dfe",
                "#9c27b0": "#9c27b0",
                "#AF52DE": "#AF52DE",
                "#0096c7": "#0096c7",
                "#00C1D4": "#00C1D4",
                "#34C759": "#34C759",
                "#43a047": "#43a047",
                "#7cb342": "#7cb342",
                "#c0ca33": "#c0ca33",
                "#78DEC7": "#78DEC7",
                "#e53935": "#e53935",
                "#d81b60": "#d81b60",
                "#f4511e": "#f4511e",
                "#fb8c00": "#fb8c00",
                "#ffb300": "#ffb300",
                "#fdd835": "#fdd835",
                "#6d4c41": "#6d4c41",
                "#546e7a": "#546e7a"
            }
        }
    },
    plugins: []
};
export default config;
