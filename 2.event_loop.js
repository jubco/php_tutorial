// Event loop. 

// Event loop is just like queue, where completed task result get queued and processed one by one and handle result to callback function .
// IE, when the result is ready event loop call the callback function

// Nodejs is single threaded application use event and callbacks.
// Node us aysnc function to call to maintain concurrency.
// Node use observer pattern. (What heck is this ?)

// There are number of builtin events available in nodejs


// Import events module

var events = require('events');

// create an eventEmitter Object
// This object is used to emit our custom events.
// LIKE eventEmitter.on("your_custom_event")
var eventEmitter = new events.EventEmitter();


// This events handler should define first before emitting event else 
// It won't work. 
// Code to handle the even_no_detector event.

eventEmitter.on('even_no_detector', function(no){
	console.log("The detected even no is", no);
});

// code to handle when odd no detected
eventEmitter.on('odd_no_detector', function(no) {
	console.log("The detected odd no is", no);
});



// Simple loop to even and odd
// When even no detected call the even no handler
// when odd no detected call the odd no handler
count = 0; 
do {
	if(count % 2 == 0) {
		// Emit the event_no_detector event.
		eventEmitter.emit('even_no_detector', count); 
		count++; 
		continue;
	}
	
	// Emit odd no handler
	eventEmitter.emit('odd_no_detector', count);
	count++;

} while(count < 10)

