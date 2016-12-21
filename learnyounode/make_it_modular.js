var listfile = require('./listfiles.js')
listfile(process.argv[2],process.argv[3],disp);

function disp(err,output)
{
	if(err)
	{
		console.error(err);
	}
	else
	{
		//console.log(output)
		output.forEach(function(element){
			console.log(element);
		});
	}
}