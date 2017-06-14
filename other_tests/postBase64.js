var request = require("request");
var fs = require('fs')
var options = { method: 'POST',
  url: 'http://developerdemo.v23.mobi:8080/v23api/secondopinion/send',
  headers:
   { 'cache-control': 'no-cache',
     'content-type': 'application/json',
     txnid: 'PQ468ebc',
     sessionkey: 'ohkr2Lsmtjzp',
     partnerid: 'smartron',
     apiversion: '1.0' },
  body:
   { patient:
      { phoneNum: '9160612934',
        name: 'Naresh ',
        gender: 'Male',
        age: '32 Y' },
     doctorCode: 'DOC5',
     remarks: 'Please find my reports',
     documentList:
      [ { name: 'CT Report',
          documentType: '1',
          documentDate: '24/05/2017',
          documentContent: base64_encode('small.jpg'),
          mimeType: 'jpg' }
  ] },
  json: true };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});

// function to encode file data to base64 encoded string
function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    console.log(new Buffer(bitmap).toString('base64'))
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}
