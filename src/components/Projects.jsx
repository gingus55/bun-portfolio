const Projects = () => {
  return (
    <div className="bg-slate-400 mx-2  h-96 flex flex-col mt-2">
      <div className="max-w-full h-48 bg-yellow-400 m-2">Main</div>
      <div className="max-w-full h-screen bg-red-200 mx-2 flex">
        <div className="bg-blue-200 w-1/2">1</div>
        <div className="bg-green-200 w-1/2">2</div>
      </div>
      <div className="max-w-full h-screen bg-red-300 mx-2 flex">
        <div className="bg-purple-300 w-1/2 px-1">3</div>
        <div className="bg-orange-400 w-1/2 px-1">4</div>
      </div>
    </div>
  );
};

export default Projects;
