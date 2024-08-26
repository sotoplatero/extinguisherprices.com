import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: 'selector',
  theme: {
    extend: {}
  },

  plugins: [
    require('daisyui'),
    require('@tailwindcss/typography'),
  ]
} as Config;
