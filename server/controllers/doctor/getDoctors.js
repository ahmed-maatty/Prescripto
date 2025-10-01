import Doctor from "../../DB/Doctor.js";

export default async function getDoctors(req, res) {
  try {
    const { specialization, id } = req.query;
    let query = {};
    if (specialization) query.specialization = specialization;
    if (id) query._id = id;
    let doctors;
    if (Object.keys(query).length > 0) {
      doctors = await Doctor.find(query).populate("user appointments");
    } else {
      doctors = await Doctor.find().populate("user appointments");
    }
    res.status(200).json({ doctors });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}
