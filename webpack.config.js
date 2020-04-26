const path = require('path');

module.exports = {
    entry: './src/index.js',
    devServer: {
        stats: 'minimal',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        library: 'Shashki',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.js'],
    },
};
