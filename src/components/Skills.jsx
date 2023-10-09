import { useEffect, useRef } from "react";

const Skills = () => {
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
  }, []);
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <div className=" mx-2 px-4  h-24 flex flex-row justify-between content-center mt-2">
          <img src="./js-logo.png" className="w-1/10 h-14" />
          <img src="./html-logo-2.png" className="w-1/10 h-14" />
          <img src="./css-img.png" className="w-1/10 h-14" />
          <img src="./git-img.png" className="w-14 h-14" />
          <img src="./jquery-logo.png" className="w-14 h-14" />
          <img src="./mysql-img.png" className="w-14 h-14" />
          <img src="./node-js-img.png" className="w-14 h-14" />
          <img src="./vite.svg" className="w-14 h-14" />
          <img src="./tailwindcss.png" className="w-14 h-14" />
          <img src="./bun.svg" className="w-14 h-14" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
