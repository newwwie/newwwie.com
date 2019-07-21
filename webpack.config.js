'use strict';

const path                    = require('path');
const autoprefixer            = require("autoprefixer");
const MiniCssExtractPlugin    = require("mini-css-extract-plugin");
const MinifyPlugin            = require("babel-minify-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


module.exports = {
    mode: "production",
    entry: ['./src/js/main.js', './src/scss/main.scss'],
    optimization: {
        minimizer: [
          new OptimizeCSSAssetsPlugin({})
        ]
      },
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'dist/'),
        publicPath: "/dist",
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 
                    MiniCssExtractPlugin.loader, 
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                          plugins: () => [autoprefixer()]
                        }
                    },
                    'sass-loader' 
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        }),
        new MinifyPlugin({})
    ],
    // @see https://webpack.js.org/configuration/dev-server/ 
    devServer: {
        contentBase: __dirname,
        compress: true,
        host: '0.0.0.0',
        port: 9000
    }
};