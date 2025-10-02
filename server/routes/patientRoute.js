import { Router } from "express";
import editeInfo from "../controllers/patient/editeInfo.js";
import authorization from "../middlewares/authorization.js";
import deleteUser from "../controllers/patient/deleteUser.js";
import getAllUsers from "../controllers/patient/getUsers.js";
import getUser from "../controllers/patient/getUser.js";
import adminCheck from "../middlewares/admin.js";
import logger from "../middlewares/logger.js";

const router = Router();
router.get("/users", logger, adminCheck, getAllUsers);
router.get("/user", logger, adminCheck, getUser);
router.put("/edit/:id", authorization, editeInfo);
router.delete("/delete/:id", deleteUser);

export default router;
