const webpack = require('webpack')

module.exports = {
  publicPath: '/',
  lintOnSave: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(
        new webpack.IgnorePlugin({
          resourceRegExp: /[\\/]previewRoute$/,
        })
      )
    }
  },
}
