import nutritionServices from "../services/nutritionServices";
// import handlePassword from "../utils/handlePassword";
// import TokenAuth from "../utils/Token";
 import Response from "../utils/response";


class nutritionController {

  //upload nutrition
  static async Uploadnutrition(req, res) {
    const newNutrition = await nutritionServices.nutritionUpload(req);
    if (!newNutrition) {
      return res.status(401).json({
        message: "failed to upload",
      });
    }
    return res.status(201).json({
      message: "success",
      data: newNutrition,
    });
  }
  static async getAll(req, res) {
    const newNutrition = await nutritionServices.getAll();
    if (!newNutrition) {
      return res.status(400).json({ message: "failed to getAll" });
    }
    return res.status(200).json({ message: "success", data: newNutrition });
  }
  static async deletenutrition(req, res) {
    const newNutrition = await nutritionServices.deletenutrition(req);
    if (!newNutrition) {
      return res.status(401).json({
        message: "failed to deletenutrition",
      });
    }
    return res.status(201).json({
      message: "success",
      data: newNutrition,
    });
  }

  static async getOnenutrition(req,res){
    const nutrition = await nutritionServices.getOnenutrition(req)
    if (!newNutrition){
        return Response.errorMessage(res,"nutrition not found",400)
    }
    return Response.successMessage(res, "Here is nutrition",nutrition,200)

}
}
export default nutritionController;