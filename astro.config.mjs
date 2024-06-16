import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://benhuckvale.github.io/greetings-card',
  output: 'static',
  outDir: 'docs',
  devToolbar: {
    enabled: false
  },
  build: {
    assets: './'
  }
});