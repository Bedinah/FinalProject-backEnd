import homeServices from "../services/homepageServices";
import Response from "../utils/response";


class homeController {
  

  //register user
  static async updateHome(req,res){
    const newHomepage = await homeServices.updateHome(req)
    if (!newHomepage){
        return res.status(400).json({message:"failed to update Homepage",});
    }
    return res.status(201).json({message:"success",data: newHomepage});
}

  static async getAll(req, res) {
    const Newhomepage = await homeServices.getAll();
    if (!Newhomepage) {
      return res.status(400).json({ message: "failed to getAll" });
    }
    return res.status(200).json({ message: "success", data: Newhomepage });
  }
  static async deletehomepage(req, res) {
    const newUser = await homeServices.deletehomepage(req);
    if (!Newhomepage) {
      return res.status(401).json({
        message: "failed to deletehomepage",
      });
    }
    return res.status(201).json({
      message: "success",
      data: Newhomepage,
    });
  }

  static async getOnehomepage(req,res){
    const homepage = await homeServices.getOnehomepage(req)
    if (!homepage){
        return Response.errorMessage(res,"homepage not found",400)
    }
    return Response.successMessage(res, "Here is homepage",homepage,200)

}
}
export default homeController;