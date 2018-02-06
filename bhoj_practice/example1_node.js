/*By bhoj*/
var http = require("http");

//creating server
http.createServer(function (request,response){

response.writeHead(200,{'Content-type':'text/plain'});

response.end('Hellow universe\n');
}).listen(8081);

//consle will print the message.

console.log("server running at http://127.0.0.1:8081/");
