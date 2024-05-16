"use strict";

const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: ["./src/js/main.ts", "./src/scss/main.scss"],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    (compiler) => {
      new TerserPlugin({
        terserOptions: {
          compress: {},
        },
      }).apply(compiler);
    },
  ],
  // @see https://webpack.js.org/configuration/dev-server/
  devServer: {
    static: {
      directory: __dirname,
    },
    compress: true,
    host: "0.0.0.0",
    port: 9000,
  },
};
