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
            done();
        });
    })
});