import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./index.css";
import About from "./pages/About";
import Marquee from "./components/Marquee";
import Works from "./pages/Works";
import Contact from "./pages/Conatct";

const App = () => {
  return (
    <div className="w-full m-0 p-0 overflow-hidden bg-backgroundColor">
      <Navbar />
      <Home />
      <Marquee />
      <About />
      <Works />
      <Contact />
    </div>
  );
};

export default App;
