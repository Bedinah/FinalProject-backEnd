import Lessons2Model from "../models/Lessons2"

class lessons2Services{
  
//creating lessons
static async LessonsCreate(req){
    
      const Lessons = await Lessons2Model.create(req.body);
      return Lessons;
  }
  static async updateLessons(req) {
    await Lessons2Model.findOneAndUpdate({ _id: req.params.id }, req.body);
    const Lessons = await Lessons2Model.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    return Lessons;
  }
static async getAll(req){

    const lessons = await Lessons2Model.find();
    return lessons;
}
static async deletelessons(req){

    const lessons = await Lessons2Model.deleteOne({_id:req.params.id});
    return lessons;
}


static async getOnelessons(req) {
    const lessons = await Lessons2Model.findById({ _id:req.params.id}, req.body);

    return lessons;
  }

}
export default lessons2Services;