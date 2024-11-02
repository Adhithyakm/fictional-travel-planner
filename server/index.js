const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const UserModel=require('./models/User')
const Destination = require('./models/Destination');

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/User")

app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    UserModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post('/register',(req, res)=>{
    UserModel.create(req.body)
    .then(User=>res.json(User))
    .catch(err=>res.json(err))

})

app.listen(3001,()=>{
    console.log("server is running")
})

app.get('/destinations/fantasy', (req, res) => {
    Destination.find({ theme: "Fantasy" })
        .then(destinations => res.json(destinations))
        .catch(err => res.status(500).json({ error: err.message }));
});