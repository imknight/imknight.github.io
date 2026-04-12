import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://imknight.dev",
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [
      tailwindcss(),
      {
        name: "vite-env-shim",
        enforce: "pre",
        resolveId(id) {
          if (id === "@vite/env") return "\0vite-env-shim";
        },
        load(id) {
          if (id === "\0vite-env-shim") return "";
        },
      },
    ],
  },
});
