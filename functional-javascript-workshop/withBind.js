    module.exports = function(namespace) {
      // SOLUTION GOES HERE

      var append = console.log.bind(null,namespace);
      return append;

    }