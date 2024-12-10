import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import profileRoutes from "./routes/profile.routes.js";
import chatRoutes from "./routes/chat.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// CORS configuration
app.use(
  cors({
    origin: "*", // Be more restrictive in production
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", profileRoutes);
app.use("/api/chat", chatRoutes);

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Listen on all network interfaces
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});
