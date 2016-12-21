    const _ = require("lodash");

      const worker = function(tmp) {
          // do work; return stuff
          return _.forEach(tmp, item => {
            if(item.population > 1)
              item.size = 'big';
            else if (item.population > 0.5)
              item.size = 'med';
            else
              item.size = 'small';
                });
      };

      // export the worker function as a nodejs module
      module.exports = worker;
