import React, { useEffect, useRef } from "react";

function ParallaxScrolling() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const background = backgroundRef.current;

    const handleScroll = () => {
      const yOffset = window.pageYOffset;
      if (background) {
        background.style.transform = `translateY(-${yOffset * 0.3}px)`; // Adjust the factor for desired parallax effect
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the scroll event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-black">
          Welcome to Parallax Scrolling
        </h1>
      </div>
      <div className="absolute inset-0">
        <img
          ref={backgroundRef}
          src="wave-haikei.svg"
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default ParallaxScrolling;
