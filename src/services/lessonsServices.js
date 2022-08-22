import LessonsModel from "../models/Lessons"

class lessonsServices{
  
//registering lessons
static async lessonsUpload(req){
  
    const lessons = await LessonsModel.upload(req.body);
    return lessons;
}
static async getAll(req){

    const lessons = await LessonsModel.find();
    return lessons;
}
static async deletelessons(req){

    const lessons = await LessonsModel.deleteOne({_id:req.params.id});
    return lessons;
}


static async getOnelessons(req) {
    const lessons = await LessonsModel.findById({ _id:req.params.id}, req.body);

    return lessons;
  }

}
export default lessonsServices;