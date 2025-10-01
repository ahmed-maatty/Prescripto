import verifyToken from "../utils/verifyToken.js";

export default function authorization(req, res, next) {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    req.user = verifyToken(token);
    if (req.user.id === req.params.id) {
      return next();
    }
    res.status(401).json({ message: "You Are Not Authorized!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error!" });
  }
};