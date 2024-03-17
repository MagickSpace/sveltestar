import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'

/** @type {import('@astrojs/starlight/expressive-code').StarlightExpressiveCodeOptions} */
export default {
  // Example: Using a custom plugin (which makes this `ec.config.mjs` file necessary)
    plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
    themes: ['material-theme-ocean', 'poimandres'],
    defaultProps: {
      // Disable line numbers by default
      showLineNumbers: false,
      // But enable line numbers for certain languages
      overridesByLang: {
        'js,ts,html': {
          showLineNumbers: true,
        },
      },
    },
    styleOverrides: {
      lineNumbers: {
        foreground: '#578298a6',
        highlightForeground: '#85c7ebb3',
      },
    },
      borderRadius: '0.5rem',
      frames: {
        shadowColor: '#124',
      },
    }
  