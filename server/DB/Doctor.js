import { model, Schema, Types } from "mongoose";

const doctorSchema = new Schema({
  specialization: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  fee: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  user: {
    type: Types.ObjectId,
    ref: "User",
  },
  appointments: [
    {
      type: Types.ObjectId,
      ref: "Appointment",
    },
  ],
});

const Doctor = model("Doctor", doctorSchema);

export default Doctor;
