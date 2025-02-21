import React from "react";
import Button from "../components/Button";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.02 },
  },
};

const letterVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  const text =
    "I am a developer and UX/UI designer based in India. I have experience in building websites. I love minimal and brutalist designs.";

  return (
    <div
      className="flex w-full h-3/4 flex-col md:flex-row px-6 md:px-16 relative pt-[90px] "
      id="home"
    >
      <div className="w-full md:w-3/5">
        <h4 className="text-2xl md:text-3xl font-migra text-textColor">
          creative
        </h4>
        <div className="overflow-hidden w-fit h-fit  p-1">
          <motion.h1
            initial={{ y: 200, rotateZ: 30 }}
            animate={{ y: 0, rotateZ: 0 }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
            className="font-tusker inline-block text-9xl md:text-[200px] text-textColor tracking-wide uppercase"
          >
            Designer <span className="text-textColor text-6xl">&</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden w-fit h-fit p-1">
          <motion.h1
            initial={{ y: 200, rotateZ: 30 }}
            animate={{ y: 0, rotateZ: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="font-tusker inline-block text-9xl md:text-[200px] text-textColor tracking-wide uppercase "
          >
            Developer
          </motion.h1>
        </div>
      </div>
      <div className="w-full md:w-2/5 text-white mt-12 md:mt-64 flex flex-col items-end">
        <motion.p
          className="font-montserat text-sm md:text-3xl text-right uppercase"
          variants={textVariant}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariant}>
              {char}
            </motion.span>
          ))}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 3, ease: "easeOut" }}
        >
          <a href="#contact">
            <Button content="Contact me" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
