var http = require('http');
var postHTML = 
  '<html><head><title>Post Data</title></head>' +
  '<body>' +
  '<form method="post">' +
  'Stock Name: <input name="input1"><br>' +
  'Company Name: <input name="input2"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (info) {
    body += info;
  });
  req.on('end', function () {
    console.log('Data posted: ' + body);
    res.writeHead(200);
    res.end(postHTML);
  });
}).listen(3001);
