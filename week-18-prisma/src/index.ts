import express from "express";
const app = express();
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
app.get("/users", async (req,res)=>{
    const users = await client.user.findMany();
    res.json(users);
})

app.get("/todos/:id", async (req,res)=>{
    const id = parseInt(req.params.id);
    const user = await client.user.findFirst({
        where :{
            id : id
        },
        select : {
            todo : true
        }
    })
    res.json(user);
    })


async function createUser()
{const user = await client.user.findFirst({
   where : {
    id : 1
   },
   include : {
    todo : true        
        
    }
    

} )
console.log(user);
}

createUser();

app.listen(3000);



