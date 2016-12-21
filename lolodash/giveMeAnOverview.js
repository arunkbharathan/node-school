



// include the Lo-Dash library
var _ = require("lodash");

var worker = function(/* arguments */item) {
    // do work; return stuff
    return _.chain(item).reduce((result, num, key) => {
      let temp = {}
      //debugger
      let val = _.findKey(result, o =>  o.article == num.article );
      if(val) {
        temp = result[val];
        temp['total_orders'] = (temp.total_orders || 0) + num.quantity;
      }else{
        temp['article'] = num.article;
        temp['total_orders'] = num.quantity;
        result.push(temp);
      }
      return result;
    },[]).sortBy('total_orders').reverse().value();
};

// export the worker function as a nodejs module
module.exports = worker;

/*

'use strict';

    var _ = require("lodash");

    var overview = function (orders) {

        var overviewarray = [],
            total = 0;

        // Group by article
        orders = _.groupBy(orders, 'article');

        _.forEach(orders, function (item, key) {

            key = parseInt(key);
            total = 0;

            // If only one article
            if (item.length === 1) {
                total = item[0].quantity;

            // Else make sum of all orders
            } else {
                total = _.reduce(item, function(sum, item) {
                    return sum + item.quantity;
                }, 0);
            }

            overviewarray.push({
                article: key,
                total_orders: total
            });

        });

        // Order
        overviewarray = _.sortBy(overviewarray, "total_orders").reverse();

        return overviewarray;
    };

    module.exports = overview;

*/
