"use client";
import { motion } from "framer-motion";
import React from "react";

export default function MotionSection({ children, className = "", durationAnim = 1, initY = 40, ...props }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: initY }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: durationAnim, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
} 