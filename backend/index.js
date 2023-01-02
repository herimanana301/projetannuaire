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

    const emailReg = req.body.emailReg
    const passwordReg = req.body.passwordReg
    const firstName= req.body.firstname
    const lastName = req.body.lastname

    database.query("INSERT INTO Users (email, password, first_name, last_name ) VALUES (?,?,?,?)", [emailReg, passwordReg, firstName, lastName],(err,result)=>{
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
            res.send({message : "Une erreur au niveau de la combinaison email/mot de passe"})
        }
    }
)
})

app.listen(3300, ()=>{
    console.log("running server")
})