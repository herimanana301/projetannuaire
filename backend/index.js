const express = require("express")
const mysql = require("mysql")
const cors = require('cors')
const crypto=require("crypto")

const app = express();

app.use(express.json());
app.use(cors());
const database = mysql.createConnection({
    user : "root",
    host: "localhost",
    password : 'bluepixteam',
    database: "annuaire"
});
function crypt(pawd){
    return crypto.createHash('sha512').update(pawd+"boki").digest('hex');
}
app.post("/register", (req,res)=>{

    const user = req.body.user
    const pwd = req.body.pwd
    const firstName= req.body.firstName
    const lastName = req.body.lastName
    database.query("SELECT * FROM Users WHERE email = ? AND deleted_users = 0", [user],(err,result)=>{
        if(err){
            console.log(err)
        }
        console.log(result)
        if(result.length===0){
            database.query("INSERT INTO Users (email, password, first_name, last_name ) VALUES (?,?,?,?)", [user, crypt(pwd), firstName, lastName],(err,result)=>{
                console.log(err);
            })
        }else{
            res.send("account already available")
        }
    })


})


app.post("/login", (req, res)=>{
    const email= req.body.email
    const password = crypt(req.body.password)

    database.query("SELECT * FROM Users WHERE email = ? AND password = ?", 
    [email, password],
    (err, result)=>{
        if(err){
           res.send({err:err}) 
        }
        if(result.length>0){
            res.send(result);
        }else{
            res.send('Wrong')
        }
    }
)
})

app.listen(3300, ()=>{
    console.log("running server")
})