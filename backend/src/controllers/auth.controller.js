import { supabaseAdmin } from "../config/supabase.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export class AuthController {
  async register(req, res) {
    try {
      const { email, password } = req.body;

      // Check if user already exists
      const { data: existingUser } = await supabaseAdmin
        .from("profiles")
        .select("id")
        .eq("email", email)
        .single();

      if (existingUser) {
        return res.status(400).json({ error: "Email already registered" });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user
      const { data: newUser, error } = await supabaseAdmin
        .from("profiles")
        .insert([
          {
            email,
            password: hashedPassword,
          },
        ])
        .select()
        .single();

      if (error) throw error;

      // Generate JWT token
      const token = jwt.sign({ userId: newUser.id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      // Remove password from response
      delete newUser.password;

      return res.status(201).json({
        user: newUser,
        token,
      });
    } catch (error) {
      console.error("Registration error:", error);
      return res.status(500).json({ error: error.message });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Find user by email
      const { data: user, error } = await supabaseAdmin
        .from("profiles")
        .select("*")
        .eq("email", email)
        .single();

      if (error || !user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Check password
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      // Remove password from response
      delete user.password;

      return res.status(200).json({
        user,
        token,
      });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).json({ error: error.message });
    }
  }
}
