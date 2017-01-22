var express = require('express')
var mysql = require('mysql')
var http = require('http');

var app = express()

process.on('uncaughtException', function (err) {
  console.error(err);
  console.log("Node NOT Exiting	...");
});




try{
app.get('/', index);


function index(req,res){

	var connection = mysql.createConnection({
	  host: 'localhost',
	  user: 'root',
	   port: 3306,
	  password: '',
	  database : 'kmgames'
	})



  	connection.connect();
	connection.query('USE kmgames');
	connection.query('SELECT * FROM questions', function (err, rows, fields) {
	  	if (err) throw err;
	  	res.json({ data: rows });
	});
	connection.end()

}



}catch(err){
	console.log(err);
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


