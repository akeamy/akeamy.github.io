import { defineConfig } from 'astro/config';

/**
 * If your repo is named akeamy.github.io, keep base = '/'
 */
export default defineConfig({
  site: 'https://akeamy.github.io',
  base: '/',
  output: 'static'
});
