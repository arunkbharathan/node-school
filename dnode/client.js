const dnode = require('dnode');

const d = dnode.connect(20000);

d.on('remote',  remote => {
	debugger;
    remote.transform('beep',  s => {
    	debugger;
        console.log('beep => ' + s);
        d.end();
    });
});