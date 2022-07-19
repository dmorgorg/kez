import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';
import {
	mdsvex
} from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			default: true,
		}
	},
	extensions: ['.svelte', '.md'], // THIS LINE ADDED

	preprocess: [
		sveltePreprocess(),
		mdsvex({ // THIS LINE ADDED
			extensions: ['.md'] // THIS LINE ADDED
		}) // THIS LINE ADDED
	],
};

export default config;