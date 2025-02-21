import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./index.css";
import About from "./pages/About";
import Marquee from "./components/Marquee";
import Works from "./pages/Works";
import Contact from "./pages/Conatct";
import useLocomotiveScroll from "../src/hooks/useLocomotiveScroll";

const App = () => {
  useLocomotiveScroll();
  return (
    <div
      data-scroll-container
      className="w-full m-0 p-0 overflow-hidden bg-backgroundColor"
    >
      <Navbar />
      <Home data-scroll-section />
      <Marquee data-scroll-section />
      <About data-scroll-section />
      <Works data-scroll-section />
      <Contact />
    </div>
  );
};

export default App;
