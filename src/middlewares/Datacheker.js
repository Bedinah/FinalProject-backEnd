import UserInfo from "../models/user";

class Datachecker {
  static validateEmailDuplication = async (req, res, next) => {
    const email = await UserInfo.findOne({ email: req.body.email });

    if (!email) {
      return next();
    }
    return res.status(404).json({
      status: 404,
      message: "email already exist",
    });
  };
}
export default Datachecker;
