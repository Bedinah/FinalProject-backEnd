import mongoose from "mongoose";

const lessonsSchema=new mongoose.Schema(
    {
     title1: String,

     subheader:String,

     video:String,

     description:String,

     title2:String,

     explanation:String,
    isActive:{
        type:Boolean,
        default:true,
    },
},{timestamps:true});

const Lessons=mongoose.model("Lessons",lessonsSchema);

export default Lessons;