import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/80 ">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="container mx-auto flex justify-between items-center py-5 px-6 md:px-16"
      >
        {/* Left Section - Logo & Title */}
        <div className="flex gap-4 items-center">
          <a
            href="/portfolio/"
            className="text-3xl font-normal font-logo text-white"
          >
            Sachin leema
          </a>
          <h2 className="hidden md:flex text-textColor text-sm md:text-base uppercase">
            UI / UX Designer, Developer
          </h2>
        </div>

        {/* Right Section - Navigation */}
        <nav className="flex space-x-4 md:space-x-6 text-textColor text-xs md:text-base font-montserat tracking-wide uppercase">
          <a href="#home" className="hover:text-white transition">
            Home
          </a>
          <a href="#works" className="hover:text-white transition">
            Works
          </a>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
