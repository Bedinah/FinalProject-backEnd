import  homepageModel from "../models/ homepage"

class  homeServices{
 
//registering  homepage
static async  homepageUpload(req){
 
    const  homepage = await UserModel.upload(req.body);
    return  homepage;
}
static async getAll(req){

    const  homepage = await  homepageModel.find();
    return  homepage;
}
static async deletehomepage(req){

    const  homepage = await  homepageModel.deleteOne({_id:req.params.id});
    return  homepage;
}


static async getOnehomepage(req) {
    const homepage = await homepageModel.findById({ _id:req.params.id}, req.body);

    return homepage;
  }

}
export default homeServices;