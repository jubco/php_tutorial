// It is builtin module no need to import
// By default all buffer bytes encoding method is utf-8
// Buffer is a memory where we can write and read 
// Just like equivlent to char* in c/C++ 
// Buffer is not resizable unlike array

// Create a buffer with 10 octets
var buf = new Buffer(10);
console.log(buf)

// Create a buffer of size 3 with some values.
var buf = new Buffer([1, 2, 3])

// We can also create a buffer from a string
var buf = new Buffer("a", "ascii")
console.log(buf)

// Convert buffer to 
console.log(buf.toString('hex'));

// write in node buffer
arrayBuf = new Buffer(26); 
for (var i = 0; i < 26; i++) {
	arrayBuf[i] = i + 97;
}

console.log(arrayBuf.toString('ascii'));

// convert buffer to JSON

arrayBuf.toJSON()
console.log(arrayBuf)

// TODO: Concatenate buffers.

// TODO: Compare Buffers

// TODO: Copy Buffer 

// TODO: slice buffer

// TODO: buffer length

