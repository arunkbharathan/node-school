module.exports = function average(...args) {
    return args.reduce( (x,y) => x+y, 0)/args.length;
};
