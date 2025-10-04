import createUser from "../../utils/createUser.js";

export default async function Register(req, res) {
  try {
    return createUser(req, res);
  } catch (err) {
    res.status(500).json("Internal Server Error");
  }
}
