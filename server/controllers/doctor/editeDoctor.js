import Doctor from "../../DB/Doctor.js";

export default async function editDoctor(req, res) {
  try {
    const { id } = req.params;
    console.log(id)
    const { experience, fee, about, degree, specialization } = req.body;
    let doctor = await Doctor.findById(id);
    if (!doctor) {
      return res.status(404).json({ message: "Doctor Not Found!" });
    }
    const updatedDoc = await Doctor.findByIdAndUpdate(
      id,
      { experience, fee, about, degree, specialization },
      { new: true }
    );
    res.status(200).json({ message: "Doctor Updated.", updatedDoc });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}
