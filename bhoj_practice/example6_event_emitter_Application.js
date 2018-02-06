/*by bhoj
Event emitter example with application

*/
//for events import statement
var events = require('events');

//for crypto system
const crypto = require('crypto');

//create an object of event emitter class
var em =  new events.EventEmitter();

//subscribe for first event
em.on('FirstEvent',function(data){

console.log("First subscriber:"+data);
});

em.emit('FirstEvent',"is Nishant Karki");

//End of the test eventListener


/*First application
Encripting numbers with timer attached to it
*/

function LoopProcess(num){

//run this process for 4 seconds

setTimeout(function(){
	var i = 0;
	 do{
	 em.emit('BeforeProcess',String(i));

 	//processing...

 	em.emit('AfterProcess',i);
	i++;

	}while(i<num);

},2000);

}




//call the funciton 
var lp = LoopProcess(500);

em.on('BeforeProcess',function(data){

console.log("Encripted data = "+ encrypt(data)+">>>>>>original data = "+data );

});

em.on('AfterProcess',function(data){
console.log("after process  process end");
});
//only this function is used for encription
function encrypt(text){
  var cipher = crypto.createCipher('aes-256-cbc','d6F3Efeq')
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}


//This function is not used 
function decrypt(text){
  var decipher = crypto.createDecipher('aes-256-cbc','d6F3Efeq')
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}


