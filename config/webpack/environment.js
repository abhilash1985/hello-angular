const { environment } = require('@rails/webpacker')

module.exports = environment

environment.loaders.append('html', {
  test: /\.html$/i,
  use: [{
    loader: 'html-loader',
    options: {
      minimize: true,
      // removeAttributeQuotes: false,
      // caseSensitive: true,
      // customAttrSurround: [ [/#/, /(?:)/], [/\*/, /(?:)/], [/\[?\(?/, /(?:)/] ],
      // customAttrAssign: [ /\)?\]?=/ ]
    }
  }]
})
