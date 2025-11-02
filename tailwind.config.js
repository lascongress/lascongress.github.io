/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    "bg-lassonde-grey",
    "bg-lassonde-blue",
    "bg-lassonde-red",
    "bg-lassonde-teal",
    "bg-lassonde-yellow",
    "bg-lassonde-green",
    "bg-lassonde-maroon",
    "bg-delegate-green",
    "bg-senate-red",
    "text-delegate-green",
    "text-senate-red",
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
        "lassonde-maroon": "#832057",
        "delegate-green": "#005434",
        "senate-red": "#9d0830"
      },
    },
  },
  plugins: [],
};
