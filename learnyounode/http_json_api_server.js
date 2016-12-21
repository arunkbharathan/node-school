     var http = require('http')
     var url = require('url')

     var server = http.createServer(function (req, res) {

     	if(req.method != 'GET')
     		return res.end('send me a GET\n');

     	res.writeHead(200, { 'content-type': 'application/json' });

     	processed_url = url.parse(req.url, true);
     	     	

     	if (processed_url.pathname == '/api/parsetime')
     	{
     		var date = processed_url.query.iso;
     		date = new Date(date);
     		var tmp = {}
     		tmp['hour'] = date.getHours();
     		tmp['minute'] = date.getMinutes();
     		tmp['second'] = date.getSeconds();
     		tmp = JSON.stringify(tmp);
     		res.end(tmp)
     	}
     	else if(/^\/api\/unixtime/.test(req.url))
     	{
               var date = processed_url.query.iso;
               date = new Date(date);
               var tmp = {};
               tmp.unixtime = date.getTime();
               tmp = JSON.stringify(tmp);
               res.end(tmp);
     	}
     	else
     	{
     		res.writeHead(403);
     		return res.end('Wrong URL\n');
     	} 

     });

     server.listen(Number(process.argv[2]))



     // var http = require('http')
     // var url = require('url')

     // function parsetime (time) {
     //   return {
     //     hour: time.getHours(),
     //     minute: time.getMinutes(),
     //     second: time.getSeconds()
     //   }
     // }

     // function unixtime (time) {
     //   return { unixtime: time.getTime() }
     // }

     // var server = http.createServer(function (req, res) {
     //   var parsedUrl = url.parse(req.url, true)
     //   var time = new Date(parsedUrl.query.iso)
     //   var result

     //   if (/^\/api\/parsetime/.test(req.url)) {
     //     result = parsetime(time)
     //   } else if (/^\/api\/unixtime/.test(req.url)) {
     //     result = unixtime(time)
     //   }

     //   if (result) {
     //     res.writeHead(200, { 'Content-Type': 'application/json' })
     //     res.end(JSON.stringify(result))
     //   } else {
     //     res.writeHead(404)
     //     res.end()
     //   }
     // })
     // server.listen(Number(process.argv[2]))