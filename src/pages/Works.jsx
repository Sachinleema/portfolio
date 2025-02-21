import React, { useState } from "react";
import GridComponent from "../components/GridComponent";
import { projects } from "../constant/index";
import { motion } from "framer-motion";
import ProjectModal from "../pages/ProjectModal";

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="w-full min-h-screen" id="works">
      <div className="w-full min-h-screen px-8 md:px-24 py-10 md:py-24 pt-6 md:pt-20">
        <div>
          <motion.h1
            initial={{ y: -200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl inline-block font-montserat tracking-tight font-light text-white border-b-2 border-white"
          >
            works
          </motion.h1>

          {projects.map((item, index) => (
            <motion.div
              initial={{ x: 300, y: -300, scale: 0.8, opacity: 0 }}
              whileInView={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              key={index}
              className="py-0.5 md:py-0"
            >
              {/* Open Modal on Click */}
              <div onClick={() => setSelectedProject(item)}>
                <GridComponent
                  name={item.name}
                  category={item.category}
                  url={item.url}
                  tech={item.tech}
                  link={item.link}
                  code={item.code}
                  images={item.images || []}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Works;
