// In this exercise we have to create a Property that has an initial value of
// 10 and increments three times, ending as 13. So a Property following this
// number sequence: 10 -> 11 -> 12 -> 13.
//
// ## Template
//
// Return created stream

    // Export method as a module.
    module.exports = (Bacon) => {
      const stream = Bacon.sequentially(1000, [11,12,13]);
      let createdProperty = stream.toProperty(10)
      return createdProperty;
    };


  //  module.exports = Bacon => Bacon.sequentially(10, [11, 12, 13]).toProperty(10);
