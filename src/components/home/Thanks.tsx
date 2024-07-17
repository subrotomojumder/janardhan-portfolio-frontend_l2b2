"use client";

import { motion } from "framer-motion";
const variants = {
  hidden: { opacity: 0, x: 0, y: 0 },
  visible: {
    opacity: 1,
    x: ["60%", "-60%"],
    transition: {
      ease: "linear",
      duration: 3,
      repeat: Infinity,
      opacity: {
        duration: 0.5,
      },
      x: {
        // specific animation type transition property
        delay: 1,
        duration: 15,
        repeat: Infinity,
      },
    },
  },
};
const Thanks = () => {
  return (
    <div>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="pb-5 lg:pb-8"
      >
        <h1 className="lg:text-xl font-mono text-center">Thank you so much!!</h1>
      </motion.div>
    </div>
  );
};

export default Thanks;
