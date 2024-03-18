import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import starlight from '@astrojs/starlight'
import svelte from '@astrojs/svelte'
import vue from '@astrojs/vue'
import expressiveCode from 'astro-expressive-code'
import liveCode from 'astro-live-code'
import { defineConfig } from 'astro/config'
import starlightBlog from 'starlight-blog'
import AutoImport from 'unplugin-auto-import/astro'
import Icons from 'unplugin-icons/vite'
import imagemin from 'unplugin-imagemin/vite'
import LightningCSS from 'unplugin-lightningcss/vite'
import TurboConsole from 'unplugin-turbo-console/astro'
import { viteVueCE } from 'unplugin-vue-ce'
import tailwind from '@astrojs/tailwind'
// https://astro.build/config
export default defineConfig({
  site: 'https://sveltestar.vercel.com',
  vite: {
    css: {
      transformer: "lightningcss",
    },
    plugins: [
      LightningCSS(),
      vue(),
      viteVueCE(),
      Icons({
        compiler: 'astro',
      }),
      imagemin({
        // Default mode sharp. support squoosh and sharp
        mode: 'sharp',
        beforeBundle: true,
        // Default configuration options for compressing different pictures
        compress: {
          jpg: {
            quality: 10,
          },
          jpeg: {
            quality: 10,
          },
          png: {
            quality: 10,
          },
          webp: {
            quality: 10,
          },
        },
        conversion: [
          {
            from: 'jpeg',
            to: 'webp',
          },
          {
            from: 'png',
            to: 'webp',
          },
          {
            from: 'JPG',
            to: 'jpeg',
          },
        ],
      }),
    ],
  },
  integrations: [
    TurboConsole({
    }),
    AutoImport({
      imports: ['vue', 'vue/macros', 'svelte', 'svelte/store', 'react'],
      dts: './src/auto-imports.d.ts',
    }),
    liveCode({
      layout: './src/layouts/LiveCodeLayout.astro',
      wrapper: './src/components/MyWrapper.jsx',
    }),
    starlight({
      components: {
        // Relative path to the custom component.
        Head: './src/components/Head.astro',
      },
      customCss: [
        // Path to your Tailwind base styles:
        './src/styles/tailwind.css',
      ],
      plugins: [
        starlightBlog({
          authors: {
            hideoo: {
              name: 'Devopsick',
              title: 'Sveltestar Blog',
              picture: '/apple-touch-icon.webp',
              // Images in the `public` directory are supported.
              url: 'https://sveltestar.vercel.app',
            },
          },
          recentPostCount: 7,
        }),
      ],
      title: 'Sveltestar',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Example Guide',
              link: '/guides/example/',
            },
          ],
        },
        {
          label: 'Reference',
          autogenerate: {
            directory: 'reference',
          },
        },
      ],
    }),
    expressiveCode({}),
    sitemap(),
    mdx(),
    svelte(),
    vue({
      reactivityTransform: true,
    }),
    tailwind({
      nesting: true,
      applyBaseStyles: false,
    }),
  ],
})
