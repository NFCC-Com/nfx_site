/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#020617",
        surface: "#070c18",
        "surface-elevated": "#0d1527",
        border: "rgba(255, 255, 255, 0.08)",
        "border-medium": "rgba(255, 255, 255, 0.16)",
        "nx-cyan": "#22d3ee",
        "nx-purple": "#a855f7",
        "nf-orange": "#ff7a00",
        "nf-orange-bright": "#ffa133",
        "nf-orange-deep": "#ea580c",
        "nf-navy": "#0f172a"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"]
      },
      boxShadow: {
        glow: "0 0 30px rgba(34, 211, 238, 0.25)",
        "orange-glow": "0 0 30px rgba(255, 122, 0, 0.35)",
        "purple-glow": "0 0 30px rgba(168, 85, 247, 0.25)"
      }
    }
  },
  plugins: []
};
