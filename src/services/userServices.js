import UserModel from "../models/user"
import handlePassword from"../utils/handlePassword";
class UserServiceS{
    //login
    static async loginUser(req){
        const user = await UserModel.findOne({email:req.body.email});
  return user;
    }
//registering user
static async userRegister(req){
  req.body.password=handlePassword.encryptPassword(req.body.password)
    const user = await UserModel.create(req.body);
    return user;
}
static async getAll(req){

    const user = await UserModel.find();
    return user;
}
static async deleteUser(req){

    const user = await UserModel.deleteOne({_id:req.params.id});
    return user;
}



}
export default UserServiceS;