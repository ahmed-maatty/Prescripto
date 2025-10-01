import createUser from "../../utils/createUser.js";

export default async function Register(req, res) {
  try {
    const user = await createUser(req, res);
    res.status(200).json({ message: "Email Created ."});
  } catch (err) {
    console.log(err);
  }
}