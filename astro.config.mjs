import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://benhuckvale.github.io/',
  base: '/greetings-card/',
  output: 'static',
  devToolbar: {
    enabled: false
  }
});
