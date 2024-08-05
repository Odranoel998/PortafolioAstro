import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // ...
  output:'server',
  build: {
    client: './client'
  },
  integrations: [react(), tailwind()],
});