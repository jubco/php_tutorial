/*by bhoj*/
//import statement
var events = require('events');

//event emitter object
var eventEmitter = new events.EventEmitter();

//event handler 

var connectHandler = function connected(){
console.log("connection successful...yahoo");

//fire the data_received event 
eventEmitter.emit("data_received");
}

//binding the connection event with the handler 

eventEmitter.on('connection',connectHandler);

//bind the data_received event with the anonymous function

eventEmitter.on('data_received',function(){
console.log('data received successfully');
});

//fire hte connection event 

eventEmitter.emit('connection');
console.log("=============End=============");


