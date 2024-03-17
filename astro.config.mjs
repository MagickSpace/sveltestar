import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightBlog from 'starlight-blog';
import expressiveCode from "astro-expressive-code";
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import liveCode from 'astro-live-code';
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [liveCode({
    layout: './src/layouts/LiveCodeLayout.astro',
    wrapper: './src/components/MyWrapper.jsx',
  }),
    starlight({
    plugins: [starlightBlog({
      authors: {
        hideoo: {
          name: 'Devopsick',
          title: 'Sveltestar Blog',
          picture: '/apple-touch-icon.webp',
          // Images in the `public` directory are supported.
          url: 'https://sveltestar.vercel.app'
        }
      },
      recentPostCount: 7
    })],
    title: 'Sveltestar',
    social: {
      github: 'https://github.com/withastro/starlight'
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), expressiveCode({}), sitemap(), mdx(), svelte()]
});