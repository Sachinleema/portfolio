import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap text-textColor py-3 relative">
      <motion.div
        className="flex space-x-6 text-md md:text-6xl font-light uppercase"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="flex space-x-6 font-montserat tracking-tighter"
          >
            <span>Welcome to My Portfolio</span>
            <span>MERN Stack Developer</span>
            <span>UI/UX Enthusiast</span>
            <span>Let's Build Something Amazing!</span>
            <span>Welcome to My Portfolio</span>
            <span>MERN Stack Developer</span>
            <span>UI/UX Enthusiast</span>
            <span>Let's Build Something Amazing!</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
