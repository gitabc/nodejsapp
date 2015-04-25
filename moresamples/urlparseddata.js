var http = require('http'),
    url = require('url');
var server = http.createServer().listen(3001, 'localhost');
server.on('request', function(req, res) {
  var url_parts = url.parse(req.url, true);
      console.log(url_parts);
  switch(url_parts.pathname) {
    case '/':
    case '/index.html':
      res.write('<html><body>Got Server response!!!</body></html>');
      break;
    default:
      res.write('Unknown path: ' + JSON.stringify(url_parts));
  }
  res.end();
});
