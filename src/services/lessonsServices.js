import LessonsModel from "../models/Lessons"

class lessonsServices{
  
//creating lessons
static async LessonsCreate(req){
    
      const Lessons = await LessonsModel.create(req.body);
      return Lessons;
  }
  static async updateLessons(req) {
    await LessonsModel.findOneAndUpdate({ _id: req.params.id }, req.body);
    const Lessons = await LessonsModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return Lessons;
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