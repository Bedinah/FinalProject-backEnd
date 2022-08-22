import lessonsServices from "../services/lessonsServices";

// import TokenAuth from "../utils/Token";
 import Response from "../utils/response";


class lessonsController {

  //register user
  static async Uploadlessons(req, res) {
    const newUser = await lessonsServices.lessonsUpload(req);
    if (!Newlessons) {
      return res.status(401).json({
        message: "failed to upload",
      });
    }
    return res.status(201).json({
      message: "success",
      data: Newlessons,
    });
  }
  static async getAll(req, res) {
    const Newlessons = await lessonsServices.getAll();
    if (!Newlessons) {
      return res.status(400).json({ message: "failed to getAll" });
    }
    return res.status(200).json({ message: "success", data: Newlessons });
  }
  static async deletelessons(req, res) {
    const Newlessons = await lessonsServices.deletelessons(req);
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
    const user = await UserServiceS.getOnelessons(req)
    if (!lessons){
        return Response.errorMessage(res,"lessons not found",400)
    }
    return Response.successMessage(res, "Here is lessons",lessons,200)

}
}
export default lessonsController;