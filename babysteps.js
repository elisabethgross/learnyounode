
var output = 0
for (var i = 2; i < process.argv.length; i++) {
	output += +process.argv[i]
}
console.log(output) 