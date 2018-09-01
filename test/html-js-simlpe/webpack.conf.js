const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ResourceFlowWebpackPlugin = require(path.resolve(__dirname,"../../src/index.js"));

module.exports = {
    mode:"production",
    entry: path.resolve(__dirname,"./entry.js"),
    output:{
        path: "/",
        filename:"[name].js",
    },
    plugins:[
        new HtmlWebpackPlugin({filename: "out.html"}),
        new HtmlWebpackPlugin({filename: "out2.html"}),
        new ResourceFlowWebpackPlugin(),
    ],
}