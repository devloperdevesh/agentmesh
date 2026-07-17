import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {

      animation: {
        movePacket:
          "movePacket 2s linear infinite",
      },


      keyframes: {

        movePacket: {

          "0%": {
            transform: "translateX(0)",
          },


          "100%": {
            transform: "translateX(600px)",
          },

        },

      },

    },
  },


  plugins: [],
};


export default config;