var path = require('path');

modulex.exports = {

    entry: './index.js',

    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    }
}