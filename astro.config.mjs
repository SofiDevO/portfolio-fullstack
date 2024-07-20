import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import basicSsl from '@vitejs/plugin-basic-ssl';
import sitemap from '@astrojs/sitemap';
import fs from 'fs';

// https://astro.build/config
export default defineConfig({
  devServer:{
    https: {
      key: fs.readFileSync('localhost-key.pem'),
      cert: fs.readFileSync('localhost.pem'),
    },
  },
	devToolbar: {
		enabled: false,
	},
	site: 'https://salchipapas.com/',

	integrations: [react(), tailwind(), sitemap()],
});