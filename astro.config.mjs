import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://nfx.my.id",
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
