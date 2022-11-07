const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "/src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 9002,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: "ProductDetailsApp",
    //   filename: "productDetailsApp_remote.js",
    //   exposes: {
    //     "./ProductDetails": "./src/components/ProductDetails",
    //   },
    // }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
