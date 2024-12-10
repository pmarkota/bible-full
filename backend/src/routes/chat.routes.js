import { Router } from "express";
import { ChatController } from "../controllers/chat.controller.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();
const chatController = new ChatController();

router.post("/message", authMiddleware, chatController.sendMessage);

export default router;
