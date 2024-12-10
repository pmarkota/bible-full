import { supabaseAdmin } from "../config/supabase.js";

export class ProfileController {
  async getProfile(req, res) {
    try {
      const { id } = req.user;

      const { data: profile, error } = await supabaseAdmin
        .from("profiles")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;

      return res.status(200).json(profile);
    } catch (error) {
      console.error("Get profile error:", error);
      return res.status(500).json({ error: error.message });
    }
  }

  async updateProfile(req, res) {
    try {
      const { id } = req.user;
      const { full_name, bio, faith_background, preferred_bible, languages } =
        req.body;

      const { data: profile, error } = await supabaseAdmin
        .from("profiles")
        .update({
          full_name,
          bio,
          faith_background,
          preferred_bible,
          languages,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;

      return res.status(200).json(profile);
    } catch (error) {
      console.error("Update profile error:", error);
      return res.status(500).json({ error: error.message });
    }
  }

  async uploadAvatar(req, res) {
    try {
      const { id } = req.user;
      const { avatar_url } = req.body;

      // Update profile with new avatar URL
      const { data: profile, error } = await supabaseAdmin
        .from("profiles")
        .update({
          avatar_url,
          updated_at: new Date().toISOString(),
        })
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;

      return res.status(200).json(profile);
    } catch (error) {
      console.error("Upload avatar error:", error);
      return res.status(500).json({ error: error.message });
    }
  }
}
