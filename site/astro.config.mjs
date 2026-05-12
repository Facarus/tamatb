// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://facarus.github.io',
  base: '/tamatb',
  vite: {
    plugins: [tailwindcss()]
  }
});