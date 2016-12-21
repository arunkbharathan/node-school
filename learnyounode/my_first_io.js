path = process.argv[2]
var fs = require('fs')
buffer = fs.readFileSync(path)
var str = buffer.toString()
newv = str.split('\n')
//console.log(str)
console.log(newv.length - 1)