const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const JobsModel = require("./models/Jobs")
const appliedJobRoutes = require("./routes/appliedJobRoutes");


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/jobs");


app.use("/api/applied-jobs", appliedJobRoutes);

app.post("/login",(req,res) => {
    const {email,password} = req.body;
    JobsModel.findOne({email:email})
    .then(user => {
        if(user){
            // console.log(user.email);
            if(user.password === password){
                res.json({msg:"success",status:200})
            }
            else{
                res.json({msg:"the password is incorrect",status:400})
            }
        }
        else{
            res.json({msg:"no record existed",status:400})
        }
    })
})

app.post("/register",(req,res) =>{
JobsModel.create(req.body)
.then(jobs => res.json(jobs))
.catch(error => res.json(error))
})

app.listen(3002,()=>{
    console.log("app is running");
    
})