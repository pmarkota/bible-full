import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { logout } = useAuth();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#2A2F42] border-b border-[#B8A161]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center">
              <span className="text-[#B8A161] text-xl font-medium">
                Biblical Advisor
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/dashboard"
              className={`nav-link ${isActive("/dashboard") ? "active" : ""}`}
            >
              Dashboard
            </Link>
            <Link
              to="/profile"
              className={`nav-link ${isActive("/profile") ? "active" : ""}`}
            >
              Profile
            </Link>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={logout}
              className="px-4 py-2 text-sm font-medium text-[#1C1F2E] bg-[#B8A161] rounded-md hover:bg-[#D4C28D] transition-colors"
            >
              Sign Out
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
