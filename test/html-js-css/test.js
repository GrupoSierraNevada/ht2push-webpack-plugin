const Webpack = require("webpack");
const MemoryFS = require("memory-fs");
const config = require("./webpack.conf.js");

describe('basic html-js generate assets and .htaccess', function() {
    const fs = new MemoryFS();
    const compiler = Webpack(config);
    compiler.outputFileSystem = fs;
    it("Should be null", function(done){
        compiler.run((err, stats)=>{
            expect(err).toBe(null);
            done();
        });
    })
});
