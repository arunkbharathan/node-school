var combine = require('stream-combiner');
var zlib = require('zlib');
var gzip = zlib.createGzip();
var through = require('through2');
var split = require('split2');
var tmpobj= {}
var tmparr = []
var prevType;
var strval = '';
    module.exports = function () {

    	objout = through.obj(function(chunk,_,next){
            
    		try{
    			chunk = JSON.parse(chunk);
    		}
    		catch(err)
    		{
    			var r = err;
                next();
    		}
    		this.push(chunk);
    		next();
		} );

         var jsonin = through.obj(write, end);

         function write(chunk,_,next){

            if (prevType == "book")
                if(chunk.type == "genre")
                {
                    tmpobj.books = tmparr;
                    strval += (JSON.stringify(tmpobj) + '\n');
                    tmpobj = {};
                    tmparr = [];
                }

                switch(chunk.type) {
            case 'genre':
                tmpobj.name = chunk.name;
                break;
            case 'book':
                tmparr.push(chunk.name);
                break;
             default:
                break;
            }



            prevType = chunk.type;
            next();

        }

        function end (done) {
            tmpobj.books = tmparr;
            strval += (JSON.stringify(tmpobj) + '\n');
            
            this.push(strval);
          done();
      }
    		
    	

        return combine(split('\n'),objout,jsonin,gzip);
            // read newline-separated json,
            // group books into genres,
            // then gzip the output
        
    }





process.on('uncaughtException', (err) => {
  console.log( `Caught exception: ${err}`);
});


    // '{"type":"genre","name":"cyberpunk"}\n{"type":"book","name":"Neuromancer"}'
    // {"type":"book","name":"Snow Crash"}
    // {"type":"genre","name":"space opera"}
    // {"type":"book","name":"A Deepness in the Sky"}
    // {"type":"book","name":"Void"}

    // {"name":"cyberpunk","books":["Neuromancer","Snow Crash"]}
    // {"name":"space opera","books":["A Deepness in the Sky","Void"]}

    // and gzip



    



// // Here's the reference solution:

//   var combine = require('stream-combiner');
//   var through = require('through2');
//   var split = require('split');
//   var zlib = require('zlib');

//   module.exports = function () {
//       var grouper = through(write, end);
//       var current;

//       function write (line, _, next) {
//           if (line.length === 0) return next();
//           var row = JSON.parse(line);

//           if (row.type === 'genre') {
//               if (current) {
//                   this.push(JSON.stringify(current) + '\n');
//               }
//               current = { name: row.name, books: [] };
//           }
//           else if (row.type === 'book') {
//               current.books.push(row.name);
//           }
//           next();
//       }
//       function end (next) {
//           if (current) {
//               this.push(JSON.stringify(current) + '\n');
//           }
//           next();
//       }

//       return combine(split(), grouper, zlib.createGzip());
//   };