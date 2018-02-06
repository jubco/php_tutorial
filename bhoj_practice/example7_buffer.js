/*
By bhoj 

Encoding example with buffer
*/

var buf = new Buffer(26);

for(var i = 0;i<26;i++){
buf[i] = i+97;

}

console.log("ascii = "+buf.toString('ascii'));
console.log("ascii= "+buf.toString('ascii',0,5));
console.log("utf8"+buf.toString('utf8',0,5));
console.log("undefined = "+buf.toString(undefined,0,5));



