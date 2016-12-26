var path = require('path');

module.exports = {

    entry: './index.js',

    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, 'dist')
    }
}