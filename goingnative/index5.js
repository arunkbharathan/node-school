//FOR THE SAKE OF ARGUMENT
var bindings = require('bindings')
var myaddon = bindings('myaddon')

myaddon.print(process.argv[2])
