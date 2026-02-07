import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://openfredbot.github.io',
  base: '/fred_website',
  integrations: [
    tailwind(),
    sitemap(),
    icon(),
  ],
  output: 'static',
  build: {
    assets: 'assets'
  }
});