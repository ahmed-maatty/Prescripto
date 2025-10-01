import Doctor from "../../DB/Doctor.js";
import createUser from "../../utils/createUser.js";

export default async function createDoctor(req, res) {
  try {
    const docUser = await createUser(req, res, true);
    const { specialization, degree, experience, fee, about } = req.body;
    let doctor = await Doctor.findOne({ user: docUser.id });
    if (doctor) {
      return res.status(400).json({ message: "Doctor Already Exist!" });
    }

    doctor = new Doctor({
      specialization,
      degree,
      about,
      fee,
      experience,
      user: docUser.id,
    });

    await doctor.save();
    res.status(200).json({ message: "Doctor Created ." });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}
