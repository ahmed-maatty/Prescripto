import uploadImage from "../utils/cloudinary.js";

export default async function photoCTRL(req, res) {
  try {
    if (!req.file) {
      res.status(400).json({ message: "Upload File" });
    }
    const result = await uploadImage(req.file.buffer);
    res.status(200).json({ result });
  } catch (err) {
    console.log(err);
  }
}
