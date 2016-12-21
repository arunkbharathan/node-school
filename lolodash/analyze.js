const _ = require('lodash');

module.exports = function(input){

    let average = _.meanBy(input, x => x.income);
    let underperform = _.chain(input).filter(x => x.income <= average).sortBy('income').value();
    let overperform = _.chain(input).filter(x => x.income > average).sortBy('income').value();

    return { average : average,
    underperform : underperform,
    overperform : overperform };
    //console.log(input);
    //return output;
    //console.log(output);
  }
