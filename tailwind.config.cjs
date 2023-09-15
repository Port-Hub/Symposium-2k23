/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';

export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["luxury",
      {
        myBlue: {
          primary: "#06283D",
          secondary: "#256D85",
          accent: "#47B5FF",
          neutral: "#2C3035",
          "base-100": "#DFF6FF",
          info: "#13C1F1",
          success: "#34DA7C",
          warning: "#C19615",
          error: "#EF7696",
        },
      },
    ],
  },
  plugins: [daisyui],
};
