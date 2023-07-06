const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
            filename: 'index.html',
            title: 'Development',
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