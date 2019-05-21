const CompressionPlugin = require("compression-webpack-plugin");
const zopfli = require("@gfx/zopfli");
const {GenerateSW} = require('workbox-webpack-plugin');

let plugins = [];
if (process.env.NODE_ENV === "production") {
    const compressionTest = /\.(js|css|json|txt|html|ico|svg|png|jpg|jpeg)(\?.*)?$/i;
    plugins = [
        new CompressionPlugin({
            algorithm(input, compressionOptions, callback) {
                return zopfli.gzip(input, compressionOptions, callback);
            },
            compressionOptions: {
                numiterations: 15
            },
            minRatio: 0.99,
            test: compressionTest,
        }),
        new GenerateSW({
            swDest: 'iuri.is-sw.js'
        })
    ];
}

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    configureWebpack: {
        plugins
    },
};
