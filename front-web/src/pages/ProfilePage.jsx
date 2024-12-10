import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const ProfilePage = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/me`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      setProfile(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle profile update
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="w-16 h-16 rounded-full border-4 border-t-[#B8A161] border-r-[#B8A161]/30 border-b-[#B8A161]/10 border-l-[#B8A161]/60 animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="biblical-title text-4xl mb-3">Your Profile</h1>
        <p className="biblical-quote text-lg">
          "Let your light shine before others" - Matthew 5:16
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="modern-card"
      >
        {error && (
          <div className="mb-6 p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#B8A161] to-[#D4C28D] flex items-center justify-center shadow-xl">
                <svg
                  className="w-16 h-16 text-[#1C1F2E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <button
                type="button"
                className="absolute bottom-0 right-0 bg-[#B8A161] text-[#1C1F2E] rounded-full p-2 shadow-lg hover:bg-[#D4C28D] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="form-group">
              <label htmlFor="fullName" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="biblical-input"
                placeholder="Enter your full name"
                defaultValue={profile?.full_name || ""}
              />
            </div>

            <div className="form-group">
              <label htmlFor="bio" className="form-label">
                Bio
              </label>
              <textarea
                id="bio"
                rows={4}
                className="biblical-input"
                placeholder="Share a little about yourself and your faith journey"
                defaultValue={profile?.bio || ""}
              />
            </div>

            <div className="form-group">
              <label htmlFor="faithBackground" className="form-label">
                Faith Background
              </label>
              <textarea
                id="faithBackground"
                rows={4}
                className="biblical-input"
                placeholder="Describe your faith journey and background"
                defaultValue={profile?.faith_background || ""}
              />
            </div>

            <div className="form-group">
              <label htmlFor="bibleVersion" className="form-label">
                Preferred Bible Version
              </label>
              <select
                id="bibleVersion"
                className="biblical-input"
                defaultValue={profile?.preferred_bible || ""}
              >
                <option value="">Select a version</option>
                <option value="KJV">King James Version (KJV)</option>
                <option value="NIV">New International Version (NIV)</option>
                <option value="ESV">English Standard Version (ESV)</option>
                <option value="NKJV">New King James Version (NKJV)</option>
                <option value="NLT">New Living Translation (NLT)</option>
              </select>
            </div>
          </div>

          <div className="pt-6">
            <button type="submit" className="biblical-button">
              Save Changes
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
