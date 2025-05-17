"use client";
import { BrushCleaning, ClockPlus, ThumbsUp } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

const Banner = () => {
  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
    whileHover: {
      scale: 1.05,
      boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <div className="px-6 py-12 md:px-32 md:py-32 lg:px-44 lg:py-44">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {[
          { icon: <ThumbsUp size={50} />, text: "100% Satisfaction" },
          { icon: <ClockPlus size={50} />, text: "Reliable Professionals" },
          { icon: <BrushCleaning size={50} />, text: "Quality Cleaning" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="flex justify-center"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            viewport={{ once: true }}
          >
            <motion.div className="block text-center">
              <div className="flex justify-center text-sky-600">
                {item.icon}
              </div>
              <p className="mt-5 text-xl md:text-3xl font-semibold">
                {item.text}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
