import lessons1Services from "../services/lessons1Services";
import Response from "../utils/response";


class lessons1Controller {

  //register lessons
  static async LessonsCreate(req, res) {
    const newLessons = await lessons1Services.LessonsCreate(req);
    if (!newLessons) {
      return res.status(401).json({
        message: "failed to create lessons",
      });
    }
    return res.status(201).json({
      message: "success",
      data: newLessons,
    });
  }
  static async updateLessons(req,res){
    const newLessons = await lessons1Services.updateLessons(req)
    if (!newLessons){
        return res.status(400).json({message:"failed to update lessons",});
    }
    return res.status(201).json({message:"success",data: newLessons});
}
  static async getAll(req, res) {
    const Newlessons = await lessons1Services.getAll();
    if (!Newlessons) {
      return res.status(400).json({ message: "failed to getAll" });
    }
    return res.status(200).json({ message: "success", data: Newlessons });
  }
  static async deletelessons(req, res) {
    const Newlessons = await lessons1Services.deletelessons(req);
    if (!Newlessons) {
      return res.status(401).json({
        message: "failed to deletelessons",
      });
    }
    return res.status(201).json({
      message: "success",
      data: Newlessons,
    });
  }

  static async getOnelessons(req,res){
    const lessons = await lessons1Services.getOnelessons(req)
    if (!lessons){
        return Response.errorMessage(res,"lessons not found",400)
    }
    return Response.successMessage(res, "Here is lessons",lessons,200)

}
}
export default lessons1Controller;