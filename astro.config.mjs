import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify/functions';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify({
    dist: new URL('./dist/', import.meta.url)
  }),
  integrations: [react()],
});