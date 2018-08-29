class HelloAsyncPlugin {
    apply(compiler) {
      // tapAsync() is callback-based
      compiler.hooks.emit.tapAsync('HelloAsyncPlugin', function(compilation, callback) {
        setTimeout(function() {
          console.log('Done with async work...');
          callback();
        }, 1000);
      });
  
      // tapPromise() is promise-based
      compiler.hooks.emit.tapPromise('HelloAsyncPlugin', (compilation) => {
        return doSomethingAsync()
          .then(() => {
            console.log('Done with async work...');
          });
      });
  
      // Plain old tap() is still here:
      compiler.hooks.emit.tap('HelloAsyncPlugin', () => {
        // No async work here
        console.log('Done with sync work...');
      });
    }
  }
  
  module.exports = HelloAsyncPlugin;
  