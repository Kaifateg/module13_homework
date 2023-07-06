const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',

    devtool: 'inline-source-map',

    devServer: {
        static: './dist',
        hot: true,
        client: {
            logging: 'error',
            overlay: {
                errors: true,
                warnings: false,
                runtimeErrors: true,
            },
            progress: true,
        },
        https: true,
    },
});