var http = require('http');

// Create a server 

var httpServer = http.createServer( function (request, response) {
	// send the HTTP header
	// HTTP status: 200: OK 
	// Content type text/plain

	
	// 1. Create a HTTP header 
	// First argument is status code
	// Second argument is header flags.
	response.writeHead(200, {
		'Content-Type': 'text/plain',

	});

	// 2. Create a body tag
	response.end("hello world from nodejs server\n");

	
});


// Run the server 
httpServer.listen(8081);

console.log("Server is running in port 80 at localhost  http://127.0.0.1:8081");
