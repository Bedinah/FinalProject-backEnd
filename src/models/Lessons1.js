import mongoose from "mongoose";

const lessons1Schema = new mongoose.Schema(
  {
    title11: String,

    subheader1: String,

    video1: String,

    description1: String,

    title21: String,

    explanation1: String,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Lessons1 = mongoose.model("Lessons1", lessons1Schema);

export default Lessons1;