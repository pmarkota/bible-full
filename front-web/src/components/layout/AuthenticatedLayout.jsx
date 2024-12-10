import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const AuthenticatedLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#1C1F2E]">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="dashboard-section pt-6"
        >
          <div className="animate-fade-in">{children}</div>
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default AuthenticatedLayout;
