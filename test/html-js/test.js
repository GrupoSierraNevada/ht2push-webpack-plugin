const chai = require('chai');
const expect = chai.expect;
const Webpack = require("webpack");
const MemoryFS = require("memory-fs");
const config = require("./webpack.conf.js");

describe('basic html-js generate assets and .htaccess', function() {
    const fs = new MemoryFS();
    const compiler = Webpack(config);
    compiler.outputFileSystem = fs;
    it('should produce out.js and out.html', function(done){
        compiler.run((err, stats)=>{
        
            expect(err).to.be.null;
            expect(fs.readdirSync("/").length ).to.equal(2);
            expect(fs.existsSync("/out.js"), "/out.js doesnt exist").to.be.true;
            expect(fs.existsSync("/out.html", "/out.html doesnt exist")).to.be.true;
            done();
        });
    })
});