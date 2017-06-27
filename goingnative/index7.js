//CALL ME MAY BE
var addon = require('bindings')('myaddon')

addon.delay(process.argv[2], function () {
  console.log('Done!')
})

console.log("Above function is synchronous, thats why I was not displayed first.")
