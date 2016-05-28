var fs = require('fs');
var path = require('path')
var extension = process.argv[3]

fs.readdir(process.argv[2], function(err, list){
  
  list.forEach(function(fileName){
    if(path.extname(fileName).replace('.', '') === process.argv[3]){
      console.log(fileName)
    }
  })
})