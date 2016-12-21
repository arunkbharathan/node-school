fs = require('fs')
path = require('path')

//console.log(process.argv[3])
fs.readdir(process.argv[2], callback);

function callback(err,files)
{
	if(err)
	{
		return console.error(err)
	}

	files.forEach(function(file)
		{
			if (path.extname(file) == '.'+ process.argv[3])
				{
					console.log(file)
				}
		});
}
