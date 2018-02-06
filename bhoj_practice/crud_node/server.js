/*
By bhoj:
This tutorial is done form this link:
https://zellwk.com/blog/crud-express-mongodb/

Note: in db = client.db('star-wars-quotes')
use this : db = database.db('star-wars-quotes')

*/

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoClient = require('mongodb').MongoClient


app.use(bodyParser.urlencoded({extended:true}))
//app.use('view engine','ejs')
app.use(express.static('public'))
app.use(bodyParser.json())


//app.listen(3300, function() {
//     console.log('listening on 3300')
//})

app.get('/',function(req,res){
	//res.sendFile(__dirname + '/index.html')
	//console.log(__dirname)

	var cursor = db.collection('quotes').find().toArray(function(err,result){
	//console.log(results)
	if(err) return console.log(err)
	res.render('index.ejs',{quotes:result})

})
})

app.post('/quotes',(req,res)=>{

	//console.log(req.body)
	console.log('heeeeeeeelllllllooooooo')
	db.collection('quotes').save(req.body,(err,result)=>{
	if(err) return console.log(err)
	console.log('saved to database')
	res.redirect('/')
	})

})


var mongo_db_url = "mongodb://nishantkarki:A12345678@ds125938.mlab.com:25938/star-wars-quotes"
var db;


mongoClient.connect( mongo_db_url,(err,database)=>{

	//..start the server 
	console.log('starting mongodb')
       
	if (err) return console.log(err)
	db  = database.db('star-wars-quotes')
	console.log("========Connection established==========")
        app.listen(3300,()=>{
	console.log('listening on 3300 port...')
	//console.log("========Connection established==========")
	})//close of app.listen

})

//handle the put request here
app.put('/quotes',(req,res)=>{

	//handle here

	db.collection('quotes').findOneAndUpdate(
	{name:'Nishant'},
	{
	$set:{
	name:req.body.name,
	quote:req.body.quote
	}
	},{
	sort:{_id:-1},
	upsert:true
	}, (err,result)=>{

	if(err)return res.send(err)
	res.send(result)
})

})

app.delete('/quotes',(req,res)=>{
	//handle delete here
	db.collections('quotes').findOneAndDelete(
	{name:req.body.name},
	(err,result)=>{
       if(err) return res.send(500,err)
	res.send({message:'A good person'})
       })
})


