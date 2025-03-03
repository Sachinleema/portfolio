import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-600 text-white py-8">
      <div className="container mx-auto px-6 md:px-16 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Brand & Navigation */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-normal font-logo">Sachin leema</h1>
          <p className="text-sm text-gray-400 mt-2">
            Crafting seamless and beautiful web experiences.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 my-6 md:my-0  mr-0 md:mr-48">
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white text-sm uppercase transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-5">
          <motion.a
            href="https://github.com/Sachinleema"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            className="text-gray-400 hover:text-white transition"
          >
            <FaTwitter size={24} />
          </motion.a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Sachin Leema. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
