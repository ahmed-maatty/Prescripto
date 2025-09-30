import User from "../../DB/User.js";

export default async function deleteUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User Not Found!" });
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User Deleted Successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error!" });
  }
}
