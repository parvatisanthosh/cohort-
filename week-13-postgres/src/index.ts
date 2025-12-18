import { Client } from 'pg'
import express from 'express'
const pgClient = new Client({'postgresql://neondb_owner:npg_Lo2MaJIj9PdQ@ep-solitary-scene-a46iwm70-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'})
const pgClinet2 = new Client({
    user: 'neondb_owner',
    host: 'ep-solitary-scene-a46iwm70-pooler.us-east-1.aws.neon.tech',
    database: 'neondb'})
const app = express()
app.use(express.json())

app.post('/signup',async(req,res)=>{
    const username = req.body.username,
const password = req.body.password
const email = req.body.email
try {
    await pgClient.query("BEGIN")
    const insertQuery = `INSERT INTO users (username, password, email) VALUES ($1, $2, $3)`;
    res.json({message: 'User signed up successfully'})
    await new Promise(x => setTimeout(x, 100 * 1000));
    await pgClient.query("COMMIT");

    
}
catch (error) {
    console.error('Error during signup:', error)
    res.status(500).json({error: 'Internal server error'})
})
async function main(){
        await pgClient.connect()
        const response = await pgClient.query('SELECT * FROM users;')
        console.log(response)
    }
    app.listen(3000)

