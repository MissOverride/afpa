"use strict";

// commentaire
var http = require("http");
var app = require("./app");

var server = module.exports = http.createServer(app);

//require("./lib/websocket")(server);

server.listen(app.get("port")).on("listening", function () {
  console.log("server ready", this.address());
});
