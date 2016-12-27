var path = require('path');
var ZipPlugin = require('zip-webpack-plugin');

module.exports = {

    entry: {
        'app': './src/index.js'
    },

    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist')
    },

    plugins: [
        new ZipPlugin({
            filename: 'app.bundle.zip'
        })
    ]
}