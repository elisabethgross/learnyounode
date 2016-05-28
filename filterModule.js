var fs = require('fs');
var path = require('path')
module.exports = function(dir, ext, callback){
  fs.readdir(dir, function(err, list){
    if(err) return callback(err)
    var items = []
    list.forEach(function(item){
      if(path.extname(item).replace('.', '') === ext){
        items.push(item)
      }
    })
    return callback(null, items)
  })
}