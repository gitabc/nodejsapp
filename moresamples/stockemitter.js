var emitter = new (require('events').EventEmitter);
function showstockdata_9am() {
  console.log("Stock data at 9am:");
}
function showstockdata_11am() {
  console.log("Stock data at 11am:");
}
function showstockdata_1pm() {
  console.log("Stock data 1pm:");
}
function showstockdata_3pm() {
  console.log("Stock data 3pm:");
}
function showstockdata_5pm() {
  console.log("Stock data 5pm:");
}
var n=0; // Unlimited listeners
emitter.setMaxListeners(n); // set maximum listeners
emitter.once("event", showstockdata_9am);
emitter.emit("event");
emitter.emit("event");

emitter.on("event", showstockdata_11am);
emitter.emit("event");
emitter.emit("event");
emitter.removeListener("event", showstockdata_11am);
emitter.emit("event");
emitter.on("event", showstockdata_1pm);
emitter.emit("event");

emitter.on("event", showstockdata_3pm);
emitter.emit("event");
emitter.on("event", showstockdata_5pm);
emitter.emit("event");


emitter.removeAllListeners("event");
emitter.emit("event");

emitter.on("newsevent", function () { console.log("News Event"); });
emitter.on("display", function (message) { console.log(message); });
emitter.emit("newsevent");
emitter.emit("display", "News Message");
emitter.emit("unhandled");
emitter.removeAllListeners("event");
