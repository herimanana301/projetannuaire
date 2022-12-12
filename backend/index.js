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

app.listen(3300, ()=>{
    console.log("running server")
})