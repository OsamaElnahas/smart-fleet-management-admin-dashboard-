import React from "react";
import { FaCheckCircle, FaTimesCircle, FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";

export default function CheckStatus({ status }) {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Wrap the icon with motion.div */}
        {status === "loading" && (
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          >
            <FaSpinner size={60} className="animate-spin" color="#4880FF" />
          </motion.div>
        )}
        {status === "success" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <FaCheckCircle size={60} className="text-green-500" />
          </motion.div>
        )}
        {status === "error" && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <FaTimesCircle size={60} className="text-red-500" />
          </motion.div>
        )}
      </motion.div>
      <div className=" text-xl font-semibold">
        {status === "loading"
          ? "Loading..."
          : status === "success"
          ? "Done Successfully"
          : "Failed"}
      </div>
    </div>
  );
}
