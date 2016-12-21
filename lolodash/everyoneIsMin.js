      // include the Lo-Dash library
      var _ = require("lodash");

      var worker = function(/* arguments */temp) {
          // do work; return stuff
          //let len = Object.keys(temp).length;
          //let count = 0;
          let townTemps = {hot:[],warm:[]};
              _.forOwn(temp, (arr, townname, collection) => {
                if(_.every(arr, x => x > 19)) {townTemps.hot.push(townname); return;}
                if(_.some(arr, x => x > 19)) townTemps.warm.push(townname);
                //console.log(key,arr);
                //if(count === ++len)
                //return townTemps;
                //console.log("in")
                });
                //console.log("out")
                return townTemps;
      };

      // export the worker function as a nodejs module
      module.exports = worker;
