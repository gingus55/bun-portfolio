const Projects = () => {
  return (
    <div className="bg-slate-400 mx-2  min-h-fit flex flex-col mt-2">
      <div className="max-w-full min-h-fit flex items-center bg-yellow-400 flex-col justify-around align-center m-2">
        <img className="w-5/6" src="./sas-screenshot.png" />
      </div>
      <div className="max-w-full min-h-fit  bg-red-200 mx-2 flex">
        <div className="bg-blue-200 flex flex-col items-center w-1/2">
          <img src="./fit-screenshot.png" className="w-5/6" />
        </div>
        <div className="bg-green-200 w-1/2 flex flex-col items-center">
          <img src="./emptrack-screenshot.png" className="w-5/6" />
        </div>
      </div>
      <div className="max-w-full min-h-fit bg-red-300 mx-2 flex">
        <div className="bg-purple-300 w-1/2 px-1">3</div>
        <div className="bg-orange-400 w-1/2 px-1">4</div>
      </div>
    </div>
  );
};

export default Projects;
