"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeRise } from "@/lib/animations";

interface AboutPrincipalMotionProps {
  children: React.ReactNode;
}

export const AboutPrincipalMotion: React.FC<AboutPrincipalMotionProps> = ({ children }) => {
  const shouldReduceMotion = useReducedMotion();

  const variants = shouldReduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : fadeRise;

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mt-12 overflow-hidden"
    >
      {children}
    </motion.div>
  );
};
