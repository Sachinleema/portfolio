import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const useLocomotiveScroll = () => {
  useEffect(() => {
    const scrollContainer = document.querySelector("[data-scroll-container]");

    if (!scrollContainer) {
      console.error("Locomotive Scroll: `data-scroll-container` not found!");
      return;
    }

    const scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      lerp: 0.08, // Adjusts smoothness
    });

    return () => {
      if (scroll) scroll.destroy(); // Cleanup on unmount
    };
  }, []);
};

export default useLocomotiveScroll;
