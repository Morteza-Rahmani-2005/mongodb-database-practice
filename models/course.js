import mongoose from "mongoose";
// import teachersModel from "@/models/teacher";
import { schema as teacherSchema } from "@/models/teacher"

export const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
      unique: true,
      // lowercase: true,
      uppercase: true,
    },
    price: {
      type: Number,
      default: 0,
      required: true,
      min: 0,
      max: 100000000,
    },
    teacher: {
      type: teacherSchema,
      // ref: "Teacher",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const model = mongoose.models.Course || mongoose.model("Course", schema);

export default model;
