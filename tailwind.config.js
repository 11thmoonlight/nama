// // tailwind.config.js
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx}",
//     "./pages/**/*.{js,ts,jsx,tsx}",
//     "./components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         gradientMotion: {
//           "0%, 100%": { backgroundPosition: "0% 0%" },
//           "50%": { backgroundPosition: "0% 100%" },
//         },
//         blurPulse: {
//           "0%, 100%": { filter: "blur(0px)" },
//           "50%": { filter: "blur(8px)" },
//         },
//       },
//       animation: {
//         gradientMotion: "gradientMotion 10s ease-in-out infinite",
//         blurPulse: "blurPulse 6s ease-in-out infinite",
//       },
//     },
//     filter: {
//       none: "none",
//       blur: "blur(8px)",
//     },
//   },
//   plugins: [],
// };

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dualMotion: {
          "0%, 100%": {
            backgroundPosition: "0% 0%",
            filter: "blur(0px)",
          },
          "50%": {
            backgroundPosition: "0% 100%",
            filter: "blur(8px)",
          },
        },
      },
      animation: {
        dualMotion: "dualMotion 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
