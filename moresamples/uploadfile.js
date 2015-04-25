var formidable = require('formidable'),
    http = require('http'),
    util = require('util');

    http.createServer(function(req, res) {

    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {

      var form = new formidable.IncomingForm();

      // form.parse analyzes the incoming stream data, pick the different fields and files

      form.parse(req, function(err, fields, files) {
          if (err) {
          console.error(err.message);
          return;
           }
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('Done upload:\n\n');
        res.end(util.inspect({fields: fields, files: files}));
      });
      return;
    }

    res.writeHead(200, {'content-type': 'text/html'});
    res.end(
      '<form action="/upload" enctype="multipart/form-data" method="post">'+
      '<input type="text" name="title"><br>'+
      '<input type="file" name="upload" multiple="multiple"><br>'+
      '<input type="submit" value="Upload">'+
      '</form>'
    );
  }).listen(3002);
