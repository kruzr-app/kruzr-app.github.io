// @ts-check
import { defineConfig } from 'astro/config';
import { MagicRegExpTransformPlugin } from 'magic-regexp/transform'
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output:"static",
  vite: {
    plugins: [MagicRegExpTransformPlugin.vite()],
  }
});