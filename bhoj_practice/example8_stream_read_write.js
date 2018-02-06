
/*
by bhoj
import statement
*/
var fileSystem = require('fs');


//creating read stream
 var  read= fileSystem.createReadStream('input.txt');


//var output stream 
var out= fileSystem.createWriteStream('output.txt');

//read from input.txt and write to output.txt, this is done using pipe()

read.pipe(out);

console.log("===========END=========");

//This file has some ERROR While compressing and decompressing
// this is most likely due to byte format

//============creating a compressed file to .gz formate ===========
//used fxn createGzip()
//import the zlib library for compressoin
var zlib = require('zlib');

fileSystem.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fileSystem.createWriteStream('compressed.txt.gz'));

console.log("========COmpressed to compressed.txt.gz======");

//==============Uncompressing/decompress the file ==================
//used function is createGunzip()

fileSystem.createReadStream('compressed.txt.gz').pipe(zlib.createGunzip()).pipe(fileSystem.createWriteStream('input2.txt'));

console.log("FILE DECOMPRESSED");


