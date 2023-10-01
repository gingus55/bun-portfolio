export default function Splash() {
  return (
    <div className="bg-slate-300 mx-2 mt-32 h-96 flex">
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
  );
}
