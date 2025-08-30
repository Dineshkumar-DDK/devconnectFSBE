
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        maxLength:100,
        minLength:5
    },
    lastName:{
        type:String,
        maxLength:100,
        minLength:5
    },
    age:{
        type:Number,
        min:0
    },
    emailId:{
        type:String,
        required:true,
        unique:true
    }
},{timestamps:true})

module.exports = mongoose.model("User", userSchema)