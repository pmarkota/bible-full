import { Router } from "express";
import { AuthController } from "../controllers/auth.controller.js";

const router = Router();
const authController = new AuthController();

// Register new user
router.post("/register", authController.register);

// Login user
router.post("/signin", authController.login);

export default router;
