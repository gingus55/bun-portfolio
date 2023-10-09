import { useEffect, useRef } from "react";

const Projects = () => {
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
        <div className="bg-slate-400 mx-2  min-h-fit flex flex-col mt-2">
          <div className="max-w-full min-h-fit flex items-center bg-yellow-400 flex-col justify-around align-center m-2">
            <img
              className="w-5/6 hover:scale-105 hover:shadow-xl transition-transform duration-500"
              src="./sas-screenshot.png"
            />
          </div>
          <div className="max-w-full min-h-fit  bg-red-200  my-1 mx-1 flex">
            <div className="bg-blue-200 flex mx-1 flex-col items-center w-1/2">
              <img
                src="./fit-screenshot.png"
                className="w-5/6 hover:scale-105 hover:shadow-xl transition-transform duration-500"
              />
            </div>
            <div className="bg-green-200 mx-1 w-1/2 flex flex-col items-center">
              <img
                src="./emptrack-screenshot.png"
                className="w-5/6 hover:scale-105 hover:shadow-xl transition-transform duration-500"
              />
            </div>
          </div>
          <div className="max-w-full min-h-fit bg-red-300 mx-1 my-1 flex">
            <div className="bg-purple-300 flex mx-1 flex-col items-center w-1/2">
              3
            </div>
            <div className="bg-orange-400 flex mx-1  flex-col items-center w-1/2">
              4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
