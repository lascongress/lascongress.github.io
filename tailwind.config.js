/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(135deg, #832057, #e02b38, #11345f, #39ad90, #ffb330)",
      },
      colors: {
        "lassonde-grey": "#4C4C4C",
        "lassonde-blue": "#11345F",
        "lassonde-red": "#e02b38",
        "lassonde-teal": "#39ad90",
        "lassonde-yellow": "#ffb330",
        "lassonde-green": "#1F6050",
      },
    },
  },
  plugins: [],
};
