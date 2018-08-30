const path = require("");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname,"./index.js"),
    output:{
        path: path.resolve(__dirname, "./dist"), 
        filename:"ht2push-webpack-plugin.js",
    },

}