import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed w-full h-screen inset-0 z-50 flex items-center justify-center bg-black/90"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div className="w-full h-screen p-6 relative flex items-center justify-center flex-col">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-10 right-10 text-xl md:text-3xl font-bold text-white"
          >
            ✖
          </button>

          {/* Project Details */}
          <motion.h1
            className="text-4xl font-bold text-white"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.name}
          </motion.h1>
          <motion.p
            className="text-lg text-gray-400"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.category}
          </motion.p>

          {/* Image */}
          <motion.div
            className="w-full my-4 flex items-center justify-center  rounded-lg "
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <video
              autoPlay
              loop
              playsInline
              muted
              className="w-[400px] h-[200px] md:w-[700px] md:h-[400px] object-cover rounded-lg shadow-lg"
              src={project.video}
              alt={project.name}
            />
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            className="flex flex-wrap gap-2 my-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {project.images.map((img, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-gray-100 text-black text-sm rounded-lg"
                whileHover={{ scale: 1.1 }}
              >
                <img
                  src={img}
                  alt=""
                  className=" w-[15px] h-[15px] md:w-[25px] md:h-[25px] hover:scale-125"
                />
              </motion.span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex gap-4 mt-6"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a
              href={project.link}
              target="_blank"
              className="px-6 py-3 bg-gray-600 text-white rounded-lg shadow-md hover:scale-105"
            >
              Visit Site
            </a>
            <a
              href={project.code}
              target="_blank"
              className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:scale-105"
            >
              Get Code
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
