const dnode = require('dnode');
const server = dnode({
	transform : function (s, cb) {
		console.log('IN');
		cb(s.replace(/[aeiou]{2,}/, 'oo').toUpperCase());
	}
});

server.listen(20000);