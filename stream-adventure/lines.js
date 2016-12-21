var split = require('split');
var through2 = require('through2');
count = 1;
    process.stdin
        .pipe(split())
        .pipe(through2(function (line, _, next) {
            //console.dir(line.toString());
            line = count%2? line.toString().toLowerCase():line.toString().toUpperCase();
            count++;
            this.push(line+`\n`)
            next();
        })).pipe(process.stdout)
    ;



// var through = require('through2');
// var split = require('split');

// var lineCount = 0;
// var tr = through(function (buf, _, next) {
//     var line = buf.toString();
//     this.push(lineCount % 2 === 0
//         ? line.toLowerCase() + '\n'
//         : line.toUpperCase() + '\n'
//     );
//     lineCount ++;
//     next();
// });
// process.stdin
//     .pipe(split())
//     .pipe(tr)
//     .pipe(process.stdout)
// ;