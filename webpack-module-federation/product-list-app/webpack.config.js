const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "/src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 9001,
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
    //   name: "ProductListApp",
    //   filename: "productListApp_remote.js",
    //   exposes: {
    //     "./ProductList": "./src/components/ProductList",
    //   },
    // }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
