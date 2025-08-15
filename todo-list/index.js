const express = require("express");
const jwt = require("jsonwebtoken");
 

const app = express();
app.use(express.json())
const JWT_SECRET= "hellothisisnotfun";
let users = [];


function logger(req, res, next){
    const method = req.method;
    
        console.log("the method used is "+ req.method)

    next();
}

app.get("/",function(req,res){
    res.sendFile(__dirname + '/public/index.html')
})
app.post("/signup",logger, function(req, res){
    const username = req.username;
    const password  = req.password;
    const token = jwt.sign({
        username
    },JWT_SECRET)
    res.json({
        message : "you're signed in",
        token : token
    })

})
app.post("/signin",function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    let foundUser = null;
     for(let i = 0;i<users.length;i++)
     {
        if(users[i].username == username && users[i].password == password)
            foundUser = users[i];
     }
     res.json({
        username : username,
        password : password
     })

    

})
app.get("/me", function(req, res){

    const token = req.headers.token;
    let foundUser = null;
   
const verify = jwt.verify(token,JWT_SECRET);
if(verify.username ==  verify.username)
{
    res.json({
        username
    })
}
else
{
    res.json({
        message:"user not found",
    })
}
})

app.listen(3000);