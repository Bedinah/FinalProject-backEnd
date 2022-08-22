import mongoose from "mongoose";

const homepageSchema=new mongoose.Schema(
    {
   
    image:String,
    title:String,
    discription:String,
    

    isActive:{
        type:Boolean,
        default:true,
    },
},{timestamps:true});

const homepage=mongoose.model("homepage",homepageSchema);

export default homepage;