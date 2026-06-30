import mongoose from "mongoose";

const agencySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true},
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User"
        },
    

},{timestamps:true});

const Agency = mongoose.model("Agency",agencySchema);

export default Agency;