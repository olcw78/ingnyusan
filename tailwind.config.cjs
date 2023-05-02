/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}" ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "pretendard": [
          "Pretendard Variable", "sans-serif", "roboto"
        ]
      }
    }
  },
  plugins: [ require("daisyui") ]
};
