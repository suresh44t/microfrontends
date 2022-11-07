const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "/src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 9000,
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
    //   remotes: {
    //     ProductListApp_Remote:
    //       "ProductListApp@http://localhost:9001/productListApp_remote.js",
    //       ProductDetailsApp_Remote:
    //       "ProductDetailsApp@http://localhost:9002/productDetailsApp_remote.js",
    //   },
    // }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
};
