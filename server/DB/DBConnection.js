import mongoose from "mongoose";

export default async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/Prescripto");
    console.log("DB Connected Successfully");
  } catch (err) {
    console.error(err);
  }
};
