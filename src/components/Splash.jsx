import { useEffect, useRef } from "react";

export default function Splash() {
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
      <div className="bg-slate-300 mx-2 mt-32 h-96 z-10 flex">
        <div className=" h-96 w-1/3 flex overflow-hidden justify-center px-2 items-center">
          <img className="rounded-full" src="/icarus.jpg" />
        </div>
        <div className=" h-96 w-2/3 flex text-center items-center px-8">
          <p className="font-bold">
            Maths teacher turned Full Stack Developer with The University of
            Birmingham. Always had a passion for coding since writing boot-disks
            for games on my 486!
          </p>
        </div>
      </div>
      <div className="absolute inset-0">
        {/* <img
          ref={backgroundRef}
          src="wave-haikei.svg"
          alt="Background"
          className="object-cover w-full h-full"
          style={{ zIndex: -1 }}
        /> */}
      </div>
    </div>
  );
}
