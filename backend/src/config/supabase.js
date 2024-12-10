import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Client for public operations
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for protected operations
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey);
