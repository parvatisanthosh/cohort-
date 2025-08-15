const express = require("express");

const jwt = require("jsonwebtoken")
const JWT_SECRET = "hellomynameisparuuu";
const app = express();
let users = [];
app.use(express.json());


function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

   let token = "";
   for(let i = 0;i<32;i++)
   {
    token += options[Math.floor(Math.random() * options.length)]
   }
   return token;
}


app.post("/signup", function(req, res){

    const username = req.body.username;
    const password = req.body.password;
    
    
    const token = jwt.sign(
        {
            username : username
        },JWT_SECRET
    );
   let foundUser = null;
    for(let i = 0;i<users.length;i++)
        {
        if(users[i].username == username)
            foundUser = users[i];

        } 
      if(!foundUser){
       
        users.push(
        {
            username : username,

            password : password,
            token  : token
        }
         
    )
    res.json({
        message : "you're signed in",
        token : token})
}
    
      
      else
      {
        res.json({
            message : "you're already signed up"
        })
      }
 
    

   
    
   
   
})
app.post("/signin", function(req, res){
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if(user)
    {
      res.json({
        message : "youre signed in",
        token: user.token
      })
        
    }
    else{
        res.status(403).send({
            message : "invalid username or password"
        })    
        }
    
})

app.get("/me" ,function(req, res){
    const token = req.headers.token;
   const decoded = jwt.verify(token, JWT_SECRET);
   let foundUser = null;
   for(let i = 0;i<users.length;i++)
   {
    if(users[i].username === decoded.username)
        foundUser = users[i];
   }
      if(foundUser){
        res.json({
            username : foundUser.username,
            password : foundUser.password
        })
      }
      else
      {
        res.json({
            message : "user not found"
        })
      }
})

app.listen(3005);