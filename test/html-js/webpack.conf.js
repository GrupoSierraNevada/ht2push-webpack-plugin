const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    mode:"production",
    entry:path.resolve(__dirname,"./entry.js"),
    output:{
        path: "/",// path.resolve(__dirname,"dist"),
        filename:"out.js",
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: "out.html"
        })
    ]
}