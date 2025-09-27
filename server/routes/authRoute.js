import { Router } from "express";
import Login from "../controllers/auth/login.js";
import Register from "../controllers/auth/register.js";
const router = Router();

router.post("/login", Login);
router.post("/register", Register);

export default router;
