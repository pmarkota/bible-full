import React from "react";
import { motion } from "framer-motion";
import RegisterForm from "../../components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-amber-950 to-slate-900 flex items-center justify-center relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      {/* Biblical-themed background effects */}
      <div className="absolute inset-0">
        {/* Ancient scroll texture overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Radial divine light */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-200/5 via-transparent to-transparent" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-amber-200/10 via-transparent to-transparent"
        />

        {/* Decorative dove symbol */}
        <motion.div
          animate={{
            y: [-5, 5, -5],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-20 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-8 border-t-2 border-amber-200/30 rounded-t-full transform rotate-[30deg]" />
          <div className="w-8 h-8 border-t-2 border-amber-200/30 rounded-t-full transform -rotate-[30deg] -mt-8" />
        </motion.div>

        {/* Decorative verses */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-amber-200/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-amber-200/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-100 mb-2">
            Begin Your Journey
          </h1>
          <p className="text-amber-200/60 font-serif italic">
            "Seek and you shall find" - Matthew 7:7
          </p>
        </motion.div>

        <div className="backdrop-blur-sm bg-white/5 rounded-lg border border-amber-200/20 shadow-2xl p-8">
          <RegisterForm />
        </div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-20 left-20 w-2 h-2 bg-amber-200/40 rotate-45"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2,
        }}
        className="absolute bottom-20 right-20 w-2 h-2 bg-amber-200/40 rotate-45"
      />
    </div>
  );
};

export default RegisterPage;
