const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Production',
        }),
        new ESLintPlugin({
            extensions: "js",
            exclude: [
                "/node_modules/",
                "/.gitignore/"
            ],
            files: "./src/"
        }),
    ],

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};