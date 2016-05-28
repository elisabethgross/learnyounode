var mymodule = require('./filterModule');

var callback = function(err, data) {
	if (err){
		return console.error(err);
	}
	data.forEach(function(thing){
		console.log(thing);
	});
}
mymodule(process.argv[2], process.argv[3], callback);


