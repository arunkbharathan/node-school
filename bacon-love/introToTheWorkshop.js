    // expose the stream generator as a module method
    module.exports = Bacon => Bacon.sequentially(1000, [0,0,6]);
