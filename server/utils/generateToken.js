import jwt from "jsonwebtoken";

export default function generateToken(id, role) {
  const token = jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_IN,
  });
  return token;
}
