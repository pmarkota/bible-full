import jwt from "jsonwebtoken";
import { supabaseAdmin } from "../config/supabase.js";

export const authMiddleware = async (req, res, next) => {
  try {
    console.log("Auth middleware - Headers:", req.headers);
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      console.log("No token provided");
      return res.status(401).json({ error: "No token provided" });
    }

    try {
      // Verify JWT token
      console.log("Verifying token...");
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log("Token decoded:", decoded);

      // Get user profile
      console.log("Fetching user profile...");
      const { data: user, error } = await supabaseAdmin
        .from("profiles")
        .select("*")
        .eq("id", decoded.userId)
        .single();

      if (error) {
        console.error("Database error:", error);
        throw error;
      }

      if (!user) {
        console.log("No user found for token");
        return res.status(401).json({ error: "User not found" });
      }

      console.log("User found:", { id: user.id, email: user.email });

      // Remove password from user object
      delete user.password;

      // Add session info to user object
      user.session = {
        access_token: token,
      };

      req.user = user;
      next();
    } catch (jwtError) {
      console.error("JWT verification error:", jwtError);
      return res.status(401).json({ error: "Invalid token" });
    }
  } catch (error) {
    console.error("Auth middleware error:", error);
    res.status(401).json({ error: error.message });
  }
};
