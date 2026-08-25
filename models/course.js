import mongoose from "mongoose";

const schema = mongoose.Schema(
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
  },
  {
    timestamps: true,
  },
);

const model = mongoose.model.Course || mongoose.model("Course", schema);

export default model;
