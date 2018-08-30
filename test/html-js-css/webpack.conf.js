const path = require("path");
const Ht2PushPlugin = require(path.resolve(__dirname,"../../src/index.js"));
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode:"production",
    entry: path.resolve(__dirname,"./entry.js"),
    output:{
        path: path.resolve(__dirname),//"/",
        filename:"[name].js",
    },
    resolve:{
        extensions:[".js"]
    },
    plugins:[
        new HtmlWebpackPlugin({filename: "out.html"}),
        new HtmlWebpackPlugin({filename: "out2.html"}),
        new MiniCssExtractPlugin(),
        new Ht2PushPlugin(),
    ],
    module:{
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ], 
            }
        ]
    },
}