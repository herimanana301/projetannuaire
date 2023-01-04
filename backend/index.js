const express = require("express")
const mysql = require("mysql")
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors());
const database = mysql.createConnection({
    user : "root",
    host: "localhost",
    password : 'bluepixteam',
    database: "annuaire"
});

app.post("/register", (req,res)=>{

    const user = req.body.user
    const pwd = req.body.pwd
    const firstName= req.body.firstName
    const lastName = req.body.lastName

    database.query("INSERT INTO Users (email, password, first_name, last_name ) VALUES (?,?,?,?)", [user, pwd, firstName, lastName],(err,result)=>{
        console.log(err);
    })
})


app.post("/login", (req, res)=>{
    const email= req.body.email
    const password = req.body.password

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