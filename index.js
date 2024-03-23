const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 8080;

//root route
app.get("/" ,(req ,res)=>{
    res.send("hello i am root")
});


app.listen(port , ()=>{     
    console.log("app is listening to port"); 
});