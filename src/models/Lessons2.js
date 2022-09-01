import mongoose from "mongoose";

const lessons2Schema = new mongoose.Schema(
  {
    title12: String,

    subheader2: String,

    video2: String,

    description2: String,

    title22: String,

    explanation2: String,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Lessons2 = mongoose.model("Lessons2", lessons2Schema);

export default Lessons2;