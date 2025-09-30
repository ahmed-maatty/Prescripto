import User from "../../DB/User.js";

export default async function editeInfo(req, res) {
  try {
    const { username, email, phone, gender, age } = req.body;
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        username,
        email,
        phone,
        gender,
        age,
      },
      { new: true }
    ).select("-role");
    res.status(200).json({ user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}
