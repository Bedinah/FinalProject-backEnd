import mongoose from "mongoose";

const userSchema=new mongoose.Schema(
    {
    Firstname:String,
    Lastname:String,
    email:{
    type:String,
    unique:true,
    required:true,
    },
    password:String,

    address:{
        state:String,
        city:String,
    },

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