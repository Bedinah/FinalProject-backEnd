import UserServiceS from "../services/userServices";
import handlePassword from"../utils/handlePassword";
import TokenAuth from "../utils/Token"
class UserController{
  //login controllers
  static async loginUserController(req,res){
    const user = await UserServiceS.loginUser(req);
    if(!user){
      return res.status(400).json({
        message:"user is not exist"
      })
    }
    if(handlePassword.checkPassword(user.password,req.body.password)){
       const token=TokenAuth.generateToken({
         phone:user.phone,
        email:user.email,
        picture:user.picture,
        names:user.names,
       role:user.role,
     })
      return res.status(200).json({
        message:"logged in successfully",token
     })
    }
    else{
  return res.status(401).json({
      message:"failed to login password is wrong",
    
    });
   }
  }
//register user
  static async registerUser(req,res){
    const newUser = await UserServiceS.userRegister(req);
    if(!newUser){
      return res.status(401).json({
        message:"failed to register"
      })
    }
    return res.status(201).json({
      message:"success",
      data:newUser,
    });
  }
  static async getAll(req,res){
    const newUser = await UserServiceS.getAll();
    if(!newUser){
      return res.status(400).json({message:"failed to getAll"})
    }
    return res.status(200).json({ message:"success",data:newUser,});
  }
  static async deleteUser(req,res){
    const newUser = await UserServiceS.deleteUser(req);
    if(!newUser){
      return res.status(401).json({
        message:"failed to deleteUser"
      })
    }
    return res.status(201).json({
      message:"success",
      data:newUser,
    });
  }
  static async updatevideo(req,res){
    const newUser = await UserServiceS.updatevideo(req);
    if(!newUser){
      return res.status(401).json({
        message:"failed to updatevideo"
      })
    }
    return res.status(201).json({
      message:"success",
      data:newUser,
    });
  }


}
 export default UserController;