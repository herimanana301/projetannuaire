const express = require("express")
const mysql = require("mysql")
const cors = require('cors')
const crypto=require("crypto")
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors())
const database = mysql.createConnection({
    user : "root",
    host: "localhost",
    password : "bluepixteam",
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
            console.error(err);
            res.sendStatus(500);
        }
        if(result.length>0){
            const accessToken = jwt.sign({ userId: result[0].id }, 'secretkey');
            res.cookie("access_token", accessToken, {httpOnly: true});
            res.json({accessToken})
        }else{
            res.sendStatus(401);
        }
    }
)
})

app.post("/api/contacts",(req, res)=>{
    const idUser= req.body.idUser
    const lastName = req.body.lastName
    const firstName=req.body.firstName
    const phoneNumber=req.body.phoneNumber
    const email=req.body.email
    
    database.query("INSERT INTO Contacts (id_users,contact_firstname, contact_lastname, contact_phonenumber, contact_email ) VALUES(?,?,?,?,?)", [idUser, lastName,firstName,phoneNumber, email],(error,result)=>{
        if(error){
            console.error(error)
            res.sendStatus(500)
        }else{
            res.sendStatus(200)
        }
    })
} )

app.get("/api/contacts/:idUser",(req,res)=>{
    idUser=req.params.idUser

    database.query("SELECT * FROM Contacts WHERE id_users = ?",[idUser],(err, result)=>{
        if(err){
            console.error(err)
        }else{
            res.json(result)
        }
  });
});
app.listen(3305, ()=>{
    console.log("running server")
})