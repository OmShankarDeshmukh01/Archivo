const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;

const path = require('path');
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "/views/pages"));

//middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//home route
app.get('/', function(req, res) {
    res.render('home'); 
});

//auth route
app.get('/signup', function(req, res) {
    res.render('authentication'); 
});

//same route as auth
app.get('/login', function(req, res) {
    res.render('authentication'); 
});

//get all tasks
app.get('/tasks', function(req, res) {
    res.render('tasks');
});

//get a single task by id
app.get('/tasks/:id', function(req, res) {
    res.json({message: 'get a single task by id'});
});

//post a new task with id
app.post('/tasks', function(req, res) {
    res.json({message: 'post a new task'});
});

//delete a single task by id
app.delete('/tasks/:id', function(req, res) {
    res.json({message: 'delete single task by id'});
});

//update with id
app.patch('/tasks/:id', function(req, res) {
    res.json({message: 'update task by id'});
});


app.listen(port , ()=>{     
    console.log("app is listening to port"); 
});