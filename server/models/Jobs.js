const mongoose = require("mongoose")

const JobsSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const JobsModel = mongoose.model("employees",JobsSchema)

module.exports = JobsModel