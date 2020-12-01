const path = require('path')

module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-custom-properties-fallback': {
      importFrom: {
        customProperties: {
          '--rsbs-max-w': 'auto',
          '--rsbs-ml': 'env(safe-area-inset-left)',
          '--rsbs-mr': 'env(safe-area-inset-right)',
          '--rsbs-bg': '#fff',
          '--rsbs-backdrop-bg': 'rgba(0, 0, 0, 0.6)',
          '--rsbs-handle-bg': 'hsla(0, 0%, 0%, 0.25)',
          '--rsbs-y': '0px',
          '--rsbs-rounded': '16px',
          '--rsbs-content-opacity': '1',
        },
      },
    },
    'postcss-preset-env': { stage: 0 },
    'postcss-import-svg': {
      paths: [path.resolve(__dirname, 'docs')],
      svgo: {
        plugins: [
          {
            removeUnknownsAndDefaults: {
              // On by default, disabled as it breaks the frame.svg
              unknownAttrs: false,
            },
          },
        ],
      },
    },
    autoprefixer: {},
  },
}
