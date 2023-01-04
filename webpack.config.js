const path = require("path");
const webpack = require("webpack");
// const HtmlWebPackPlugin = require('html-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const port = process.env.PORT || 8080;
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "main.[fullhash].js",
    chunkFilename: "[name].bundle.[fullhash].js"
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
    },
    extensions: [".js", ".jsx"],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/Nested-components"),
    },
    extensions: [".js", ".jsx"],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/protected"),
    },
    extensions: [".js", ".jsx"],
  },
  //
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|jpg|svg$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "images",
          },
        },
      },
    ],
  },
  //
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // new webpack.HotModuleReplacementPlugin()
  ],
  // Plugins: [
  //     // new HtmlWebPackPlugin(), // Generates default index.html
  //     new HtmlWebPackPlugin({  // Also generate a test.html
  //       filename: 'index.html',
  //       template: './src/index.html'
  //     })
  //     // new HtmlWebPackPlugin()
  // new HtmlWebPackPlugin({
  //     // title: 'some- Development',
  //     // filename: 'index.html',
  //     template: "./src/index.html"
  // })

  // ],
  devServer: {
    host: "localhost",
    port: port,
    // contentBase: path.resolve(__dirname, 'public'),
    //  filename: 'index.html',
    historyApiFallback: true,
    open: true,
  },
  //   devServer: {
  //     static: {
  //       directory: path.join(__dirname, 'dist'),
  //     },
  //     // filename: 'index.html',
  //     compress: true,
  //     port: 9000,
  //   },
};
