import { Router } from "express";
import createAppointment from "../controllers/appointment/makeAppoinment.js";
import logger from "../middlewares/logger.js";
import getAppointments from "../controllers/appointment/getAppointments.js";
import deleteAppointment from "../controllers/appointment/deleteAppointment.js";
const router = Router();

router.post("/create/:docId", logger, createAppointment);
router.get("/", logger, getAppointments);
router.delete("/:id", deleteAppointment);

export default router;
