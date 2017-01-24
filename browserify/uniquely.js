/*First, create a file called `uniquely.js`. In this file, assign a function
to `module.exports` that takes a comma-separated string as input and
returns a uniq list as output. Use the `uniq` module like from the "using
npm packages" level.*/

const uniq = require('uniq');

module.exports = function(inp){
	return uniq(inp.split(','));
};
