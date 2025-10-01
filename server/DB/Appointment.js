import { Schema, Types, model } from "mongoose";

const appointmentSchema = new Schema({
  day: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  doctor: {
    type: Types.ObjectId,
    ref: "Doctor",
  },
  patient: {
    type: Types.ObjectId,
    ref: "Doctor",
  },
});

const Appointment = model("Appointment", appointmentSchema);

export default Appointment;
