import homepage from "../models/homepage";
import homepageModel from "../models/homepage";

class homeServices {
  //registering  homepage
  static async updateHome(req) {
    await homepageModel.findOneAndUpdate({ _id: req.params.id }, req.body);
    const homepage = await homepageModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return homepage;
  }
  static async getAll(req) {
    const homepage = await homepageModel.find();
    return homepage;
  }
  static async deletehomepage(req) {
    const homepage = await homepageModel.deleteOne({ _id: req.params.id });
    return homepage;
  }

  static async getOnehomepage(req) {
    const homepage = await homepageModel.findById(
      { _id: req.params.id },
      req.body
    );

    return homepage;
  }
}
export default homeServices;
