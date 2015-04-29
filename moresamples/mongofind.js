var http = require("http");
var mongojs = require("mongojs");
var uri = "mongodb://demo_user:demo_password@ds027769.mongolab.com:27769/demo_database";
var db = mongojs.connect(uri, ["demo_collection"]);
//  db = mongojs.connect(uri, [“demo_collection”, “vehicle_photos”]);
var server = http.createServer(function(request, response) {
        response.writeHead(200, {"Content-Type": "text/html"});
        //db.vehicle_photos.find(…)
        db.demo_collection.find({"color": {$ne:"white"}}, function(err, records) {

          if(err) {
              console.log("There was an error executing the database query.");
              response.end();
              return;
              }
          var html = '<h2>All Vehicles but not a white color.</h2>',
          i = records.length;

          while(i--) {
                    html += '<p><b>Name:</b> '
                            + records[i].name
                            + ' <br /><b>Number of wheels:</b> '
                            + records[i].wheels
                            + '<br /><b>Color: </b>'
                            + records[i].color;
                     }
          response.write(html);
          response.end();
          });
        return;
        }
);
    server.listen(3002);
