// We have a list of words that we want to modify.
//     ['Test', 'Hello', 'World', 'Node', 'JavaScript']
// We want to modify each word so that they are all appended with the word Chained, converted to uppercase,
// and sorted by alphabetical order. The result should look like this:
//     ['HELLOCHAINED', 'JAVASCRIPTCHAINED', 'NODECHAINED', 'TESTCHAINED', 'WORLDCHAINED']

// include the Lo-Dash library
const _ = require("lodash");

const worker = function(/* arguments */arr) {
    // do work; return stuff
    return _.chain(arr).sortBy().map(val => val.toUpperCase() + "CHAINED").value();

};

// export the worker function as a nodejs module
module.exports = worker;
