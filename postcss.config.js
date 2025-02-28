module.exports = {
    plugins: [
        require("postcss-import"),
        require("tailwindcss"), // This will automatically look for tailwind.config.js
        require("autoprefixer"),
        require("postcss-flexbugs-fixes"),
        require("postcss-preset-env")({
            autoprefixer: {
                flexbox: "no-2009",
            },
            stage: 3,
        }),
    ],
};