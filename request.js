var request = require('request');
var fs = require('fs'); 

request.get('https://sytantris.github.io/http-examples/future.jpg')
      .on("error", function(err) {
          throw err;

      })

    
      .on('response', function(response) {
          console.log("Response status code:", response.statusCode); 
          console.log(response.statusMessage)  
          console.log(response.headers['content-type']);
      })
      .on("end", function() {
          console.log('downloading image...')
      })
      .pipe(fs.createWriteStream('./future.jpg'))
      .on('finish', function(){
          console.log('Download complete')
      });