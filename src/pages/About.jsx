import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const About = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursor = (e) => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", updateCursor);
    return () => window.removeEventListener("mousemove", updateCursor);
  }, []);

  return (
    <div
      className="w-full h-auto px-8 py-10 md:px-20 md:py-16 flex flex-col justify-between md:flex-row relative"
      id="about"
    >
      {/* Floating Button (Mobile) */}
      <a
        href="#contact"
        className="md:hidden w-full flex justify-center items-center text-textColor mt-6"
      >
        <svg
          viewBox="0 0 200 200"
          width="100"
          height="100"
          className="text-lg font-light tracking-widest custom-spin"
        >
          <path
            id="circlePath"
            fill="none"
            d="M 100 ,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
          />
          <text fill="currentColor">
            <textPath href="#circlePath" startOffset="0%">
              hire me right now!
            </textPath>
            <textPath href="#circlePath" startOffset="50%">
              contact right now!
            </textPath>
          </text>
        </svg>

        {/* Centered Button */}
        <button className="absolute flex items-center justify-center w-12 h-12 bg-textColor rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="30"
            height="30"
            fill="none"
            stroke="white"
            strokeWidth="2"
          >
            <line x1="6" y1="18" x2="18" y2="6" />
            <polyline points="9 6 18 6 18 15" />
          </svg>
        </button>
      </a>

      {/* Custom Cursor (Desktop Only) */}
      <AnimatePresence>
        {isHovering && (
          <motion.div
            className="hidden md:block absolute bg-white rounded-full pointer-events-none mix-blend-difference z-50"
            animate={{
              x: cursorPosition.x - 90,
              y: cursorPosition.y - 90,
              scale: isHovering ? 6 : 2,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              ease: "easeOut",
            }}
            style={{ width: "20px", height: "20px" }}
          />
        )}
      </AnimatePresence>

      {/* Left Section (Text) */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-2/5 flex flex-col items-center md:items-start justify-center py-4 relative text-center md:text-left"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="font-tusker text-[#e9dfce] relative p-4 pb-12 md:pb-16">
          <h1 className="text-4xl md:text-8xl uppercase">Hello, I'm Leema</h1>
          <h2 className="absolute -right-12 top-26 text-3xl md:text-4xl tracking-wide font-migra">
            Sachin Leema
          </h2>
        </div>

        <div className="py-3 w-full">
          <p className="text-sm md:text-2xl uppercase text-white font-montserat leading-6 md:leading-8 mt-10 md:mt-0">
            Hi, I'm a Frontend Developer and UI/UX enthusiast passionate about
            creating visually stunning and highly interactive web experiences. I
            specialize in building responsive and dynamic user interfaces using
            React, Next.js, and modern frontend technologies, ensuring seamless
            performance across all devices.
          </p>
        </div>
      </motion.div>

      {/* Right Section (Image & Video) */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-3/5 hidden md:flex items-center justify-center relative"
      >
        {/* Show Smaller Image & Video on Mobile */}
        <div className="w-full flex items-center justify-center md:hidden">
          <img src="./laptop.png" alt="Laptop" className="w-4/5 max-w-[80%]" />
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-center relative">
          <img src="./laptop.png" alt="Laptop" className="w-4/5 relative" />
          <video
            autoPlay
            muted
            loop
            src="./videos/realestate.mp4"
            className="absolute w-[456px] h-[279px] top-[93px] object-cover shadow-lg"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
