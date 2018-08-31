const Webpack = require("webpack");
const MemoryFS = require("memory-fs");
const config = require("./webpack.conf.js");

describe('basic html-js generate assets and .htaccess', function() {
    const fs = new MemoryFS();
    const compiler = Webpack(config);
    compiler.outputFileSystem = fs;
    it("should generate all files ", function(done){
        compiler.run((err, stats)=>{
            expect(err).toBe(null);
            expect(fs.readdirSync("/").length ).toBe(4);
            expect(fs.existsSync("/main.js"), "/main.js doesnt exist").toBe(true);
            expect(fs.existsSync("/out.html", "/out.html doesnt exist")).toBe(true);
            expect(fs.existsSync("/out2.html", "/out2.html doesnt exist")).toBe(true);
            expect(fs.existsSync("/htaccess.txt", "htaccess didnt emit")).toBe(true);
            expect(fs.readFileSync("/htaccess.txt", "utf-8")).toBe("bleh");
            done();
        });
    })
});