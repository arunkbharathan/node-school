
    // include the Lo-Dash library
    const _ = require("lodash");

    const worker = function(/* arguments */item) {
        // do work; return stuff
        return _.sortBy(item, x => -x.quantity/*callback(value, index|key, collection)*/)
    };

    // export the worker function as a nodejs module
    module.exports = worker;
