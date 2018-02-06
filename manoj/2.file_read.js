var fs = require('fs');


// Blocking function that read content of the file and pass control
// to next line
function readFileSync(fileName) {
	fileContent = fs.readFileSync(fileName);
	console.log(fileContent);

}


// Unblocking function that read the content file, don't block the 
// execution flow, when content is ready, print the content.
function readFileAsync(fileName) {
fs.readFile(fileName, function(error, data) {
	console.log(data.toString());

});
}

// Call async file reading function 

readFileAsync('input.txt');
console.log("Run second");
readFileAsync('input.txt');

