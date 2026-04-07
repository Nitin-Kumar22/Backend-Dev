import mongoose from "mongoose";

const todoschema=new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending","completed"],
        Default:"pending"
    }
});
const todo=mongoose.model("todo",todoschema);
export default todo;