import { Router } from "express";
import createDoctor from "../controllers/doctor/createDoctor.js";
import getDoctors from "../controllers/doctor/getDoctors.js";
import editDoctor from "../controllers/doctor/editeDoctor.js";
import adminCheck from "../middlewares/admin.js";
import logger from "../middlewares/logger.js";
const router = Router();

router.get("/", getDoctors);
router.post("/create-doctor", logger, adminCheck, createDoctor);
router.put("/edit/:id", logger, adminCheck, editDoctor);

export default router;
