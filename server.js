var express = require("express");
var app = express(); // starting server
var bodyParser = require("body-parser");

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true })); // for encoded bodies


var mysql = require("mysql");

// setting up the database
var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "Nathaniel1000",
    database: "webtms"
    });
    con.connect(function(err) {
    if (err) {
    console.log("Error connecting to database");
    }
    else {
    console.log("Database successfully connected");
    }
});

app.post('/getall', function(req, res){
    con.query('SELECT DISTINCT course_title, subject_code, course_number FROM tms;', function(err, rows, fields){
        res.send(rows);
    })
});

app.post('/courses', function(req, res){
    con.query('SELECT DISTINCT course_title FROM TMS', function(err, rows, fields) {
        res.send(rows);
    });
});

// listening to port 8080
app.listen(8080, function() {
    console.log("listening at port 8080....");
});