"use client";
import { motion } from "framer-motion";
import React from "react";

type MotionSectionProps = {
    children?: React.ReactNode;
    className?: string;
    texts?: string[];
    durationAnim?: number;
    initY?: number;
    initX?: number;
};

export default function MotionSection({ 
  children,
  className = "", 
  durationAnim = 1, 
  initX = 0,
  initY = 40, ...props 
}: MotionSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: initX, y: initY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: durationAnim, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
} 