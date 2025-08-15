const express = require("express");

const app = express();

app.get("/date", function(req, res){
    console.log(new Date());
    res.json({
        answer : new Date()
    })
})
app.get("/url",function(req, res){
    console.log(req.url);
})
app.get("/method", function(req, res){
    console.log(req.method);
})

app.listen(30002);