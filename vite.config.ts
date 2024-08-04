/// <reference type="vitest"/>
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	test: {
		global: true,
		environment: 'jsdom',
		coverage: {
			exclude: [
				'postcss.config.js',
				'svelte.config.js',
				"tailwind.config.ts",
				'vite.config.ts',
				'.svelte-kit/',
				'src/app.d.ts',
				'src/lib/index.ts',
				'src/pages/+layout.svelte',
				'src/pages/+page.svelte',
				'src/routes/+page.svelte',
			]
		}
	},
	plugins: [sveltekit()]
});
