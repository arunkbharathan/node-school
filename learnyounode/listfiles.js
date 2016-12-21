module.exports = function(dirname,fileext,callback) {
	try{
		// if (!(dirname || fileext))
		// {
		// 	//console.log(dirname)
		// 	//console.log(fileext)
		// 	throw new Error("Empty arguments");ß
		// }
		fs = require('fs');
		path = require('path')
		extension = '.'+ fileext;
		var output;
		var  matches = function(val){
				return path.extname(val) == extension
			}

		fs.readdir(dirname,function(err,files){
			if(err)
			{
				return callback(err,null)
			}
			else{

			output = files.filter(matches);

			//console.log(data);
			callback(null,output);
		}
		});
		
	
	}
	catch(error){
		callback(error,null);
	}
}