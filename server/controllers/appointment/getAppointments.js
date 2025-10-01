import Appointment from "../../DB/Appointment.js";

export default async function getAppointments(req, res) {
  try {
    const appointments = await Appointment.find();
    res.status(200).json({ appointments });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}
