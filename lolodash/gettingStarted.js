'use strict';
    // include the Lo-Dash library
    let _ = require("lodash");

    let worker = function(tmp) {
        // do work; return stuff
        //let tmp = args;
        //console.log (tmp)
        //let tmp = Array.prototype.slice.call(arguments);
        return _.filter(tmp,{active:true});

    };

    // export the worker function as a nodejs module
    module.exports = worker;
