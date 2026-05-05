import mongoose from "mongoose";


const userschemsa=new mongoose.Schema({
    id:{
        type:String,
        required:true
        },
    name:{
        type:String,
        required:true
        },
    email:{
        type:String,
        required:true
    },
    passwordHash:{
        type:String,
        required:true
        },
        role:{
            type:String,
            enum:["admin","user"]
        },
        createdAt:timestamp()
    
});

export default mongoose.model("user",userschema);