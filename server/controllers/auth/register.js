import User from "../../DB/User.js";

export default async function Register(req, res) {
  try {
    const { username, email, password, gender, phone, age } = req.body;
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
      return res.status(400).json({ message: "User Already Exist" });
    }
    const user = new User({
      username,
      email,
      password,
      gender,
      phone,
      age,
    });
    await user.save();
    res.status(200).json({ message: "Email Created ." });
  } catch (err) {
    console.log(err);
  }
}