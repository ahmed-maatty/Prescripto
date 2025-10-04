import User from "../DB/User.js";

export default async function createUser(req, res, isDoctor = false) {
  try {
    if (!req.body) {
      return res
        .status(400)
        .json({ Success: false, message: "Please, Enter Your Information" });
    }
    const { username, email, password, gender, phone, age } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      if (isDoctor) {
        return user;
      } else {
        return res
          .status(400)
          .json({ Success: false, message: "User Already Exist" });
      }
    }
    user = new User({
      username,
      email,
      password,
      gender,
      phone,
      age,
      ...(isDoctor && { role: "Doctor" }),
    });
    await user.save();
    return res.status(200).json({Success : true , message : "Email Created, Please Login"})
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
}
