import mdx from '@astrojs/mdx'
import node from '@astrojs/node'
import sitemap from '@astrojs/sitemap'
import starlight from '@astrojs/starlight'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import vue from '@astrojs/vue'
import expressiveCode from 'astro-expressive-code'
import liveCode from 'astro-live-code'
import { defineConfig } from 'astro/config'
import starlightBlog from 'starlight-blog'
import starlightLinksValidator from 'starlight-links-validator'
import AutoImport from 'unplugin-auto-import/astro'
import Icons from 'unplugin-icons/vite'
import imagemin from 'unplugin-imagemin/vite'
import LightningCSS from 'unplugin-lightningcss/vite'
import { viteVueCE } from 'unplugin-vue-ce'
import CSSExtractorPlugin from '@master/css-extractor.vite'

// https://astro.build/config
export default defineConfig({
  site: 'https://sveltestar.vercel.com',
  output: 'hybrid',
  adapter: node({
    mode: 'middleware',
  }),
  vite: {
    css: {
      transformer: "lightningcss",
    },
    plugins: [
      CSSExtractorPlugin({
        module: '.virtual/master.css'
    }),
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

    AutoImport({
      imports: ['vue', 'vue/macros', 'svelte', 'svelte/store', 'react'],
      dts: './src/auto-imports.d.ts',
    }),
    liveCode({
      layout: './src/layouts/LiveCodeLayout.astro',
      wrapper: './src/components/MyWrapper.jsx',
    }),
    starlight({
      head: [
        // Add a custom meta tag to define the author of all pages.
        {
          tag: 'meta',
          attrs: {
            name: 'author',
            content: 'Devopsick',
          },
        },
        {
          tag: 'link',
          attrs: {
            rel: 'icon',
            href:'/favicon.ico',
            sizes: '32x32',
          },
        },
      ],
      components: {
        // Relative path to the custom component.
        Head: './src/components/Head.astro',
      },
      customCss: [
        // Path to your Tailwind base styles:
        './src/styles/tailwind.css',
      ],
      plugins: [
        starlightLinksValidator({
          errorOnFallbackPages: false,
          errorOnInconsistentLocale: true,
          errorOnRelativeLinks: false,
        }),
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
