const withFonts = require('next-fonts');
const withImages = require('next-images');

module.exports = withFonts(
  withImages({
    inlineImageLimit: 10,
    webpack: (config) => {
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
