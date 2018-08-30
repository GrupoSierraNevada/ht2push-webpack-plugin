const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Ht2PushWebpackPlugin = require(path.resolve(__dirname,"../../src/index.js"));

module.exports = {
    mode:"production",
    entry: path.resolve(__dirname,"./entry.js"),
    output:{
        path: "/",
        filename:"[name].js",
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: "out.html",
            chunks:["Vendor", "main"],
        }),
        new HtmlWebpackPlugin({
            filename: "out2.html",
            chunks:["Vendor", "main"],
        }),
        new Ht2PushWebpackPlugin(),
    ],
    /*optimization:{
        splitChunks:{
          chunks: "async",
          minSize: 30000,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          name: true,
          cacheGroups: {
            vendor: {
              test: /node_modules/,
              chunks: "initial",
              name: "Vendor",
              priority: 10,
              enforce: true
            },
          },
        },
    }*/
}