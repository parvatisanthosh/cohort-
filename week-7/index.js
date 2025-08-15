const express = require("express");
const bcrypt = require("bcrypt");
const {Usermodel ,Todomodel} = require("./db.js")
const app = express();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "ilovesomeoneabhi";
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://parvati:2FcIaaE7nB7TwoP1@cluster0.1rktgsu.mongodb.net/to-do-app-database");
const { z } = require("zod");
app.use(express.json());



app.post("/signin", async function (req,res)
{
   const email = req.body.email;
   const password = req.body.password;


   
    const response = await Usermodel.findOne({
        email : email
        
    })
    if(!response)
    {
        res.status(403).json({
            message : "the user does not exist in our database"
        })
      return
    }
   const password_match = bcrypt.compare(password,response.password);
   if(password_match)
   {
    const token = jwt.sign({
        id : response._id.toString()
    },JWT_SECRET)
    res.json({
        message : token
    })
   }
   else{
    res.status(405).json({
        message : "Incorrect credentials"
    })
   }
    
})

app.post("/signup",async function(req,res){

    const requiredBody = z.object({
        email : z.string().min(3).max(100).email(),
        name : z.string().min(2).max(100),
        password : z.string().min(2).max(100)
    })
    
    const parsedbodywithsuccess = requiredBody.safeParse(req.body);
    if(!parsedbodywithsuccess.success)
    {
        res.json({
            message : "Incorrect format",
            error : parsedbodywithsuccess.error
            
        })

        return
    }
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    let error_thrown = false;

    try

    {const hash = await bcrypt.hash(password,5);
    console.log(hash);

    await Usermodel.create({
        email : email,
        password : hash,
        name : name
    })}
    catch(e)
    {
        res.json({
            message : "User already exists"
        })
        error_thrown = true;
    }
    if(!error_thrown)
    {res.json({
        message : "you're signed up"
    })}
})

 function auth(req,res, next){
    const token = req.header.token;
    const decoded = jwt.verify(token,JWT_SECRET);
    if(decoded)
    {
        const username = decoded.username;
        next();
    }
    else{
        res.status(403).json({
            message : "Incorrect credentials"
        })
    }
}

app.post("/todo",auth , function(req,res){
    res.json({
        message : req.userId
    })
})
app.get("/todos",auth, function(req,res)
{
    res.json({
        message : req.userId
    })
})



app.listen(3000);