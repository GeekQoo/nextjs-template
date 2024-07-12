/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: {
        "@unocss/postcss": {
            content: [
                "./pages/**/*.{js,ts,jsx,tsx,mdx}",
                "./components/**/*.{js,ts,jsx,tsx,mdx}",
                "./app/**/*.{js,ts,jsx,tsx,mdx}"
            ]
        }
    }
};

export default config;
