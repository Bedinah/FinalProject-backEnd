import nutritionModel from "../models/nutrition"

class nutritionServices{
 
//registering nutrition

static async createNutrition(req) {
    const newNutrition = nutritionModel.create(req.body);

    return newNutrition;
  }

static async updateNutrition(req) {
    await nutritionModel.findOneAndUpdate({ _id: req.params.id }, req.body);
    const nutrition = await nutritionModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
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