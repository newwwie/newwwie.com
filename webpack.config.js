"use strict";

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: ["./src/js/main.ts", "./src/scss/main.scss"],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "dist/"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("sass"),
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json", ".scss", ".css"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      inject: "body",
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
      directory: path.resolve(__dirname, "dist/"),
    },
    compress: true,
    host: "0.0.0.0",
    port: 9000,
  },
};
