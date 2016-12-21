




// include the Lo-Dash library
const _ = require("lodash");

const worker = function(/* arguments */tmp) {
    // do work; return stuff
    return _.chain(tmp).
    groupBy('username').
    map(x => ({username:x[0].username, comment_count: _.size(x) }) ).
    sortBy( x => -x.comment_count);

};

// export the worker function as a nodejs module
module.exports = worker;
