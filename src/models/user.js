import mongoose from "mongoose";

const userSchema=new mongoose.Schema(
    {
    firstName:String,
    lastName:String,
    email:{
    type:String,
    unique:true,
    required:true,
    },
    
    password:String,
    gender:{
        type:String,
        enum:["male","female","other"],
    },
    phone:String,
    role:{
        type:String,
        enum:["user","admin"],

    },
    isActive:{
        type:Boolean,
        default:true,
    },
},{timestamps:true});

const user=mongoose.model("User",userSchema);

export default user;