import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: "https://odranoel998.github.io",
  integrations: [tailwind()]
});