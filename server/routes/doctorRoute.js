import { Router } from "express";
import createDoctor from "../controllers/doctor/createDoctor.js";
import getDoctors from "../controllers/doctor/getDoctors.js";
import editDoctor from "../controllers/doctor/editeDoctor.js";
const router = Router();

router.get("/" , getDoctors )
router.post("/create-doctor", createDoctor);
router.put("/edit/:id" , editDoctor)


export default router;
