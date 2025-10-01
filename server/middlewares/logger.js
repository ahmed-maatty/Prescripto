import verifyToken from "../utils/verifyToken.js";

export default function logger(req, res, next) {
  let token = req.headers["authorization"];
  if (!token) {
    return res.status(401).json("Please, Login");
  }
  token = token.split(" ")[1];
  req.user = verifyToken(token);
  return next();
}
