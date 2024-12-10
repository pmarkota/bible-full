import jwt from "jsonwebtoken";
import { supabaseAdmin } from "../config/supabase.js";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "Access token required" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);

    // Verify user still exists
    const { data: profile, error } = await supabaseAdmin
      .from("profiles")
      .select("id, email")
      .eq("id", decoded.userId)
      .single();

    if (error || !profile) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
