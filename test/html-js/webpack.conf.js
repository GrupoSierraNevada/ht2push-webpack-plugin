const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlPushWebpackPlugin = require(path.resolve(__dirname,"../../src/index.js"));

module.exports = {
    mode:"production",
    entry:path.resolve(__dirname,"./entry.js"),
    output:{
        path: "/",
        filename:"out.js",
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: "out.html"
        }),
        new HtmlPushWebpackPlugin(),
    ]
}