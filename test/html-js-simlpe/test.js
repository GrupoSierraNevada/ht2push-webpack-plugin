const chai = require('chai');
const expect = chai.expect;
const Webpack = require("webpack");
const MemoryFS = require("memory-fs");
const config = require("./webpack.conf.js");

describe('basic html-js generate assets and .htaccess', function() {
    const fs = new MemoryFS();
    const compiler = Webpack(config);
    compiler.outputFileSystem = fs;
    it('should produce exptected output files', function(done){
        compiler.run((err, stats)=>{
        
            expect(err).to.be.null;
            expect(fs.readdirSync("/").length ).to.equal(4);
            expect(fs.existsSync("/main.js"), "/main.js doesnt exist").to.be.true;
            expect(fs.existsSync("/out.html", "/out.html doesnt exist")).to.be.true;
            expect(fs.existsSync("/out2.html", "/out2.html doesnt exist")).to.be.true;
            expect(fs.existsSync("/htaccess.txt", "htaccess didnt emit")).to.be.true;
            done();
        });
    })

    it("should have adequate basic .htaccess values", function(done){

        expect(fs.readFileSync("/htaccess.txt", "utf-8")).to.equal("bleh");
        done();
    });
});