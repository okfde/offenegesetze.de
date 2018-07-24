const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');

module.exports = withCSS(
  withFonts({
    webpack: config => {
      // next-fonts does not include SVG fonts which we need for FA
      config.module.rules.push({
        test: /\.(svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              publicPath: '/_next/static/fonts/',
              outputPath: 'static/fonts/',
              name: '[name]-[hash].[ext]',
            },
          },
        ],
      });
      return config;
    },
  })
);
