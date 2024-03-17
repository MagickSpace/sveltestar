import { vitePreprocess } from '@astrojs/svelte';
import adapter from "svelte-adapter-bun";

export default {
	preprocess: vitePreprocess(),
	adapter: adapter(),
}
