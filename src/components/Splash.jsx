export default function Splash() {
  return (
    <div className="bg-slate-400 mx-2 h-96 flex">
      <div className="bg-red-400 h-96 w-1/3 flex justify-center px-2 items-center">
        <img src="/icarus.jpg" />
      </div>
      <div className="bg-blue-200 h-96 w-2/3 flex text-center items-center px-4">
        <p>
          Maths teacher turned Full Stack Developer with The University of
          Birmingham. Always had a passion for coding since writing boot-disks
          for games on my 486!
        </p>
      </div>
    </div>
  );
}
