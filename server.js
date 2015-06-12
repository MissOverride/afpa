"use strict";

// Creation du serveur

var http = require("http"); // require effectue un appel 
							// à une bibliotheque de Node.js (ici Http)
var app = require("./app"); // require effectue un appel 
							// à un module Node (app.js)

var server = module.exports = http.createServer(app);

//require("./lib/websocket")(server);

server.listen(app.get("port")).on("listening", function () {
  console.log("server ready", this.address());  // serveur en ecoute sur 
  												// le port defini dans app.js
});
