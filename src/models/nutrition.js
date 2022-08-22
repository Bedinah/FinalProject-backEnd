import mongoose from "mongoose";

const NutritionSchema=new mongoose.Schema(
    {
        
    title:String,
    picture:String,
    description:String,
    title2:String,
    
    explanation:String,
    
    isActive:{
        type:Boolean,
        default:true,
    },
},{timestamps:true});

const Nutrition=mongoose.model("Nutrition",NutritionSchema);

export default Nutrition;