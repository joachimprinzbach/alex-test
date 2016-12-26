var path = require('path');
var ZipPlugin = require('zip-webpack-plugin');

module.exports = {

    entry: {
        'app': './index.js'
    },

    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    },

    plugins: [
        new ZipPlugin({
            filename: 'app.bundle.zip'
        })
    ]
}