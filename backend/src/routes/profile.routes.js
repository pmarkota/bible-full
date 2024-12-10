import { Router } from "express";
import { ProfileController } from "../controllers/profile.controller.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();
const profileController = new ProfileController();

// Get user profile
router.get("/me", authMiddleware, profileController.getProfile);

// Update user profile
router.put("/me", authMiddleware, profileController.updateProfile);

// Upload profile picture
router.post("/me/avatar", authMiddleware, profileController.uploadAvatar);

export default router;
