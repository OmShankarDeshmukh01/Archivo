const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;

const path = require('path');
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views/pages"));


app.get('/', function(req, res) {
    res.render('home'); 
});

app.get('/signup', function(req, res) {
    res.render('authentication'); 
});

app.get('/login', function(req, res) {
    res.render('authentication'); 
});

app.listen(port , ()=>{     
    console.log("app is listening to port"); 
});