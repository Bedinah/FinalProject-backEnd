import nutritionModel from "../models/nutrition"

class nutritionServices{
 
//registering nutrition
static async nutritionUpload(req){
 
    const nutrition = await nutritionModel.upload(req.body);
    return nutrition;
}
static async getAll(req){

    const nutrition = await nutritionModel.find();
    return nutrition;
}
static async deletenutrition(req){

    const nutrition = await nutritionModel.deleteOne({_id:req.params.id});
    return nutrition;
}


static async getOnenutrition(req) {
    const nutrition = await nutritionModel.findById({ _id:req.params.id}, req.body);

    return nutrition;
  }

}
export default nutritionServices;