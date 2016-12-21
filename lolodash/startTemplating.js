const _ = require('lodash');

module.exports = function(input){

//let name = input.name;
//let logins = _.size(input.login);

let test = _.template('Hello <%= name %> (logins: <%= login.length %>)')(input);
//Hello Foo (logins: 2)

return (test);
}
