import User from "../DB/User.js";

export default async function createUser(req, res, isDoctor = false) {
  try {
    const { username, email, password, gender, phone, age } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      if(isDoctor){
        return user
      }else {
        return res.status(400).json({ message: "User Already Exist" });
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
    return user;
  } catch (err) {
    console.log(err);
  }
}