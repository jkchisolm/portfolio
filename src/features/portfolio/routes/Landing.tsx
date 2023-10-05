export const LandingPage = () => {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full md:w-3/4 lg:w-1/2 mt-4">
        <div className="flex flex-col md:flex-row justify-start items-center w-full py-4">
          <h1 className="text-5xl font-bold">Hello World!</h1>
          <a href="/about" className="md:ml-7 text-xl text-green-500 font-bold">
            More about me ⏵
          </a>
        </div>
        <div className="text-2xl">
          Hi! I'm Josh, a software engineer and full-stack web developer. I also
          love to listen to and produce electronic music, as well as watch and
          play basketball. <br /> <br />
          I'm a junior studying{" "}
          <span className="font-bold text-green-400">Computer Science</span> at
          the{" "}
          <span className="font-bold text-cyan-500">
            University of Southern California.
          </span>{" "}
          I am a passionate developer who loves to constantly learn, grow, and
          build new projects.
        </div>
      </div>
    </div>
  );
};
