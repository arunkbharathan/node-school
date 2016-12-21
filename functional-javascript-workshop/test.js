var Spy = require('./functionSpies.js')
var spy = Spy(console, 'log')
debugger;
    console.log('calling console.log')
    console.log('calling console.log')
    console.log('calling console.log')

    console.log(spy.count) // 3