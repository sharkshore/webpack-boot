/**
 * Created by BF100395 on 2018/4/19.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 7777,
        contentBase: path.join(__dirname, "dist"),
        compress: true
    },
    module: {
        rules: [
            {test: /\.txt$/, use: 'raw-loader'},
            {test: /\.css$/, use: 'css-loader'},
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        minimize: true
                    }
                }
            }
        ]
    }
};
