import React from "react";
import { motion } from "framer-motion";

const Button = ({ content }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      className={`border px-5 py-2 rounded-full font-montserat mt-14 md:mt-12 text-textColor uppercase font-normal`}
    >
      <h1 className="text-md md:text-3xl">{content}</h1>
    </motion.button>
  );
};

export default Button;
