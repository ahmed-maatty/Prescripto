import { Router } from "express";
import logger from "../middlewares/logger.js";
import uploadImg from "../middlewares/multer.js";
import photoCTRL from "../controllers/profilePhoto.js";

const router = Router();

router.post("/profile-photo",logger , uploadImg.single("image") , photoCTRL )

export default router;