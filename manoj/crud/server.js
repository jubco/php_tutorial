const util = require('util'); // for string formatting
const express = require('express'); 
const ejs = require('ejs'); // emeeded js as a template engine.
const bodyParser = require('body-parser'); // to parse form data.

// Instance of express is an app
const app = express() 

// application settings
app.set('port', process.env.PORT || 3000) //port
// app.set('views', __dirname + '/views') // public folder
app.set('view engine', 'ejs') // use ejs as template engine

// Register middleware 
// Register all middleware here.
app.use(bodyParser.urlencoded({
  extended: true
}))

// Database setup 
const mongoClient = require('mongodb').MongoClient; // mongodb as db
const username = process.env.DB_USERNAME || "express"; // mongdb username
const password = process.env.DB_PASSWORD || "express"; // mongodb password
const db_name = process.env.DB_NAME || "express"

// db url 
const db_url = util.format("mongodb://%s:%s@ds225308.mlab.com:25308/%s", username, password, db_name)

// Connect to database and start the server.
// connect to database
mongoClient.connect(db_url, (err, client) => {
  if (err) return console.log(err);
  db = client.db("express") // name of the database 

	app.listen(3000, function() {
		console.log("Connected to db and listening at port 3000")
		});
});



// Routing here. 
app.get('/', function(request, response){
	response.sendFile(__dirname + '/templates/form.html')
});

// About page
app.get('/about', (req, res) => {
	res.send("Hello world");
});


// help page 
app.get('/help', (req, res) => {
	// If get request received call the forms.
	res.sendFile(__dirname + '/templates/form.html')
});

// process the quotes on post request
app.post('/quotes', (req, res) => {
	// save quote to database. 
	// Don't need to define schema. 
	// Schema are create accordingly

	db.collection('quotes').save(req.body, (err, data) => {
		if (err) console.log("Couldn't save to db", err);
		res.redirect('/quotes');

	});

});


// Method to handle to process the submitted quotes via form 
// form is located under home page and render by /
app.get('/quotes', (req, res) => {
	// Dispaly the list of quotes from mongodb. 
	// Find has many methods, out of this toArray is one 
	var cursor = db.collection('quotes').find().toArray(function(err, results){

	// Lets create some template 
//	var htmlString="";
//	results.forEach(function(result) {
//		htmlString += util.format("<li>%s by %s</li>", result.name, result.quote);
//	});
//
//	console.log(htmlString);
// Send the result to the browser.
// 	res.send(htmlString);

// render the result in template using set method of ejs.

		// res.render('templates/quotes.html', results);

		res.render('quotes.ejs', {quotes:results}); // quotes.html must inside views function.

	});

});

// Lets use nodemon, it will restart the server automatically when the file change. 
// npm install nodemon --save-dev
// use nodemon serverjs
// npm run dev
// to run above command you need to run 


