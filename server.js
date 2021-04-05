require('dotenv').config({
	path: __dirname + "/.env"
});
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser')
const app = express();

const connection = mysql.createConnection({
	host: process.env.HOST,
	database: process.env.DATABSE,
	user: process.env.RESERVE_USER,
	password: process.env.PASSWORD,
	insecureAuth: false
});

connection.connect((err) => {
	if (err) throw err;
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
	extended: true
}));

app.get("/", (req, res) => {
	console.log("test");
	res.sendFile(__dirname + "/views/index.html");
});

app.listen(3000, () => {
	console.log("server go vroom");
});