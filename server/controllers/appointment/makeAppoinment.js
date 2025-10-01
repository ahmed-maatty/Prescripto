import Appointment from "../../DB/Appointment.js";
import Doctor from "../../DB/Doctor.js";
import User from "../../DB/User.js";

export default async function createAppointment(req, res) {
  try {
    const { day, time } = req.body;
    const { id: patientId } = req.user;
    const { docId } = req.params;
    const appointment = new Appointment({
      day,
      time,
      doctor: docId,
      patient: patientId,
    });
    await appointment.save();
    await User.findByIdAndUpdate(patientId, {
      $push: { appointments: appointment.id },
    });
    await Doctor.findByIdAndUpdate(docId, {
      $push: { appointments: appointment.id },
    });
    res.status(200).json({ message: "appointment created", appointment });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}
