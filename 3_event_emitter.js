var events = require('events');

// Create event emitter object
var eventEmitter = new events.EventEmitter();

// Create an handler 
var eventHandler = function (arg) {
	console.log("Event get handeled", arg);
}

// Handle an event
eventEmitter.on("customEvent", eventHandler);


// Bind the listner to custom event.
eventEmitter.addListener("customEvent", function() {
	console.log("Listner 1 executed");
});


// Bind another listner to custom event 
eventEmitter.addListener("customEvent", function () {
	console.log("Listner 2 3xecuted");
})


// Emit an event 
eventEmitter.emit("customEvent", 'data1');
