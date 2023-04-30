const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const webpack = require("webpack");

const extensions = [".js", ".jsx"];

module.exports = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    extensions,
    fallback: {
      process: require.resolve("process/browser"), // Add this line
    },
  },
  devServer: {
    client: {
      overlay: false,
    },
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-react", { runtime: "automatic" }]],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new EslintWebpackPlugin({ extensions }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new webpack.DefinePlugin({
      "process.env.REACT_APP_PUBLIC_URL": JSON.stringify(
        process.env.REACT_APP_PUBLIC_URL
      ),
    }),
  ],

  stats: "minimal",
};
