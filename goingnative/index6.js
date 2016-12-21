//ITS A 2 WAY STREET
var addon = require('bindings')('myaddon')

console.log(addon.length(process.argv[2]))
