/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#0B0D10",
        ink: "#050505",
        graphite: "#111318",
        champagne: "#D6B46A",
        softgold: "#E8C878",
        deepgold: "#B88A3A",
        pearl: "#F5F1E8",
      },
      boxShadow: {
        gold: "0 18px 70px rgba(214, 180, 106, 0.18)",
        "gold-soft": "0 8px 28px rgba(214, 180, 106, 0.13)",
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #F3D98D 0%, #D6B46A 44%, #A4772E 100%)",
        "dark-radial":
          "radial-gradient(circle at top, rgba(214,180,106,0.18), transparent 34%), radial-gradient(circle at 80% 20%, rgba(55,78,111,0.24), transparent 26%), linear-gradient(180deg, #050505 0%, #0B0D10 52%, #050505 100%)",
      },
    },
  },
  plugins: [],
};
