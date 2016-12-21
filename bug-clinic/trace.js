var domain = require("domain");
require('stackup');
var readFile = require("fs").readFile;


function scenario(jsonPath, cb) {
  var d = domain.create();
    readFile(jsonPath, {encoding : "utf8"}, function (error, contents) {
      d.run(function () {
      cb(error, JSON.parse(contents));
      });
    });
  d.on("error", console.log);
}


module.exports = scenario;
