import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";

const DashboardPage = () => {
  const { user } = useAuth();

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="biblical-title text-4xl mb-3">Welcome, {user?.email}</h1>
        <p className="biblical-quote text-lg">
          "Your word is a lamp to my feet and a light to my path" - Psalm
          119:105
        </p>
      </motion.div>

      <motion.div
        className="grid gap-6"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={cardVariants}>
          <Link to="/profile" className="modern-card block">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B8A161] to-[#D4C28D] flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-[#1C1F2E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-[#B8A161] text-xl font-medium mb-2">
                  Complete Your Profile
                </h2>
                <p className="text-[#B8A161]/60 text-base">
                  Add your faith background and preferences
                </p>
              </div>
            </div>
          </Link>
        </motion.div>

        <motion.div variants={cardVariants}>
          <div className="modern-card">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B8A161] to-[#D4C28D] flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-[#1C1F2E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-[#B8A161] text-xl font-medium mb-2">
                  Start a Conversation
                </h2>
                <p className="text-[#B8A161]/60 text-base">
                  Get biblical guidance and answers
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={cardVariants}>
          <div className="modern-card">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B8A161] to-[#D4C28D] flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-[#1C1F2E]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-[#B8A161] text-xl font-medium mb-2">
                  Join the Community
                </h2>
                <p className="text-[#B8A161]/60 text-base">
                  Connect with other believers
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DashboardPage;
