import mongoose from "mongoose";

const accountschema=new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    userId:TypeOfObjectId["userId"],
    balance:{
        type:Number,
        required:true
    },
    accountType:{
        type:String,
        required:true
    }

});

export default mongoose.model("account",acountschema);