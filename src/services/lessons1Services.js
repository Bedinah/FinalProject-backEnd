import Lessons1Model from "../models/Lessons1"

class lessons1Services{
  
//creating lessons
static async LessonsCreate(req){
    
      const Lessons = await Lessons1Model.create(req.body);
      return Lessons;
  }
  static async updateLessons(req) {
    await Lessons1Model.findOneAndUpdate({ _id: req.params.id }, req.body);
    const Lessons = await Lessons1Model.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return Lessons;
  }
static async getAll(req){

    const lessons = await Lessons1Model.find();
    return lessons;
}
static async deletelessons(req){

    const lessons = await Lessons1Model.deleteOne({_id:req.params.id});
    return lessons;
}


static async getOnelessons(req) {
    const lessons = await Lessons1Model.findById({ _id:req.params.id}, req.body);

    return lessons;
  }

}
export default lessons1Services;