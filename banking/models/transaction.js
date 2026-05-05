import mongoose from "mongoose";

const transactionschema=new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    fromAccount:{
        type:String,
        name:String,
        required:true

    },
    toAccount:{
        type:String,
        name:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    },

    date:timestamp(),
    
});

export default mongoose.model("transaction",transactionschema);