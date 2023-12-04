const generateColorClass = (variable) => {
  return ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`;
};

const textColor = {
  ["primary-grey"]: generateColorClass("text-primary-grey"),
  ["primary-green"]: generateColorClass("text-primary-green"),
};

const backgroundColor = {
  ["primary-light"]: generateColorClass("bg-primary-light"),
  ["primary-green"]: generateColorClass("bg-primary-green"),
  ["primary-brown"]: generateColorClass("bg-primary-brown"),
};

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor,
      backgroundColor,
      screens: {
        ml: "425px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
  darkMode: "class",
};

export default config;
