/*So! Let's see how this works! Write a web server instrumented using
jstrace. The server should listen on port 9999 and return one of
two responses. When it gets a GET response to /prognosis, it should
return a status code of 200 and a payload of '{"ok":true}'. For ALL
other requests, it should return a status code of 404 and a payload
of '{"error":"notfound"}'. It should also print the message "up" to
standard error when it's listening, so the verifier knows it's ready
for requests.
*/
var createServer = require("http").createServer;

var trace = require("jstrace");

createServer(function (req, res) {
  trace("request:start", {url : req.url});

  res.setHeader("content-type", "application/json");

  var status, body;
  if (req.url === "/prognosis" && req.method === "GET") {
    status = 200; body = {ok : true};
  }
  else {
    status = 404; body = {error : "notfound"};
  }

  res.writeHead(status);
  res.end(JSON.stringify(body));

  trace("request:end", {statusCode : status, body : body});
}).listen(9999, function () { console.error("up"); });
