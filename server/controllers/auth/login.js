import User from "../../DB/User.js";
import generateToken from "../../utils/generateToken.js";

export default async function Login(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(401).json({ message: "User Not Found." });
    const isPasswordMatch = await user.comparePass(password);
    if (!isPasswordMatch)
      return res.status(401).json({ message: "Invalid Email Or Password." });
    const token = generateToken(user._id, user.role);
    res.status(200).json({ message: `Welcome ${user.username}`, token });
  } catch (err) {
    console.log(err);
  }
}
