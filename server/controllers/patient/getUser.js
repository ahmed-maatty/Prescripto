import User from "../../DB/User.js";

export default async function getUser(req, res) {
  try {
    const { role } = req.query;
    const user = await User.find({
      role: { $regex: new RegExp(`^${role}$`, "i") },
    }).populate("appointments");
    if (user.length === 0) {
      console.log(role);
      return res.status(404).json({ message: "User Not Found " });
    }
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}
