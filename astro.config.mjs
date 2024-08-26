import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
// import yaml from '@rollup/plugin-yaml';
// import sitemap from '@astrojs/sitemap';
// import {sitemapPlugin} from '@astrojs/sitemap';

export default defineConfig({
  // vite: {
  //   plugins: [yaml()]
  // },
  output: 'hybrid',
  adapter: cloudflare({
    imageService: 'cloudflare',
  }),
  build: {
    client: './client'
  },
  integrations: [
    react(), 
    tailwind({
    }),
  ],
});