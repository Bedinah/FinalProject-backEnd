import mongoose from "mongoose";

const homepageSchema=new mongoose.Schema(
    {
   
    image:String,
    title:String,
    discription:String,
    
    role:{
        type:String,
        enum:["user","admin"],
        default:admin,
    },
    isActive:{
        type:Boolean,
        default:true,
    },
},{timestamps:true});

const homepage=mongoose.model("homepage",homepageSchema);

export default homepage;