class Ht2PushWebpackPlugin {

    constructor(options){
      this.options = options;
      this.htmlEmitPormises = [];
      this.source = "bleh";
    }

    apply(compiler) {
  
      compiler.hooks.compilation.tap('Ht2PushWebpackPlugin', (compilation)=>{
        compilation.hooks.htmlWebpackPluginAfterEmit.tapPromise('Ht2PushWebpackPlugin',(pluginArgs)=>{
          const p = new Promise( (resolve, reject )=>{  
            // console.log("---- htmlWebpackPluginAfterEmit ---- ")
            // console.log(pluginArgs.outputName);
            // console.log(pluginArgs.plugin.assetJson );
            const result = {};
            result[pluginArgs.outputName] = JSON.parse(pluginArgs.plugin.assetJson);
            resolve(result);
          })
          this.htmlEmitPormises.push(p);
          return p;
        });
      });

      compiler.hooks.emit.tapPromise('Ht2PushWebpackPlugin', (compilation) => {
        return new Promise((resolve, reject)=>{
          //console.log("---- emit ---- ")          
          Promise.all(this.htmlEmitPormises).then(x=>{
            console.log("all html has been emited, creating .htaccess", x)
            compilation.assets["htaccess.txt"] = {
              source: ()=>this.source,
              size: ()=>this.source.length,
            }
            resolve();
          }).catch(e=>{
            console.log("[Ht2PushWebpackPlugin] ", e);
            reject(e);
          });
        })
      });
    }
  }
  
  module.exports = Ht2PushWebpackPlugin;
  