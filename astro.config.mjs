// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to the final production domain before going live.
// This is used for sitemap, RSS, and canonical/SEO URLs.
export default defineConfig({
  site: 'https://www.thesummitchiropractic.com',
  integrations: [sitemap()],
});
