import React, { useState } from "react";
import { motion } from "framer-motion";

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className="relative w-8 h-8 flex flex-col justify-center items-center" // Smaller button size
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Top Line */}
      <motion.div
        className="w-6 h-0.5 bg-textColor rounded  mt-1" // Thinner line
        animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 3 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Bottom Line */}
      <motion.div
        className="w-6 h-0.5 bg-textColor rounded mt-1" // Thinner line
        animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -3 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};

export default MenuButton;
