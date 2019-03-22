var express = require("express");
var app = express(); // starting server
var bodyParser = require("body-parser");

app.use(express.static("."));
app.use(bodyParser.urlencoded({ extended: true })); // for encoded bodies


var mysql = require("mysql");

// setting up the database
var con = mysql.createConnection({
    multipleStatements: true,
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



app.post('/create', function(req, res){
    con.query('DROP TABLE IF EXISTS times; DROP TABLE IF EXISTS list; DROP TABLE IF EXISTS CRN; DROP TABLE IF EXISTS final;', function(err, rows, fields) {
        con.query('CREATE TABLE times SELECT * FROM tms WHERE time_from ' + req.body.times + " AND (" + req.body.classes + ");", function(err, rows, fields){
            con.query('CREATE TABLE list Select concat (Days, " ", TIME_FROM) as TI, CRN from times;', function(err, rows, fields){
                con.query('CREATE TABLE CRN SELECT * FROM list GROUP BY TI;', function(err, rows, fields){
                    con.query('CREATE TABLE final SELECT * FROM times WHERE CRN in (SELECT CRN from CRN) GROUP BY course_number;', function(err, rows, fields){
                        con.query('SELECT * FROM final', function(err, rows, fields){
                            res.send(rows);
                        });
                    });
                });
            });
        });
    });
});

// listening to port 8080
app.listen(8080, function() {
    console.log("listening at port 8080....");
});