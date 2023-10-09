import { FeaturedCard, Timeline } from "../components";
import MeImg from "../../../assets/me3.png";
import RecreatifyImg from "../../../assets/Recreatify.png";

export const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center w-full md:w-3/4 lg:w-1/2 px-3 mt-4">
        <div className="flex flex-col md:flex-row justify-between items-center w-full py-4">
          <h1 className="text-5xl font-bold">Hello World!</h1>
          <div>
            {" "}
            <a
              href="/about"
              className="md:ml-7 text-xl text-green-500 font-bold"
            >
              More about me ⏵
            </a>
          </div>
        </div>
        <div className="text-2xl">
          Hi! I'm Josh, a software engineer and full-stack web developer. I also
          love to listen to and produce electronic music, as well as watch and
          play basketball. <br /> <br />
          I'm a junior studying{" "}
          <span className="font-bold text-green-400">Computer Science</span> at
          the{" "}
          <span className="font-bold text-cyan-500">
            University of Southern California
          </span>
          . I am a passionate developer who loves to constantly learn, grow, and
          build new projects.
          <br /> <br />
          Check out my{" "}
          <a
            href="https://github.com/jkchisolm"
            className="text-purple-500 font-bold"
          >
            GitHub
          </a>
          , or contact me via{" "}
          <a
            href="https://www.linkedin.com/in/joshua-chisolm-6727b4221/"
            className="text-blue-500 font-bold"
          >
            LinkedIn
          </a>
          ,{" "}
          <a
            href="https://twitter.com/frozenal_"
            className="text-black font-bold"
          >
            Twitter
          </a>
          , or{" "}
          <a
            href="mailto:jkchisolm22@gmail.com"
            className="text-red-500 font-bold"
          >
            Email
          </a>
          !
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full mt-8 px-3 md:px-14">
        <h2 className="text-3xl font-bold self-start">Featured</h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 
          md:grid-rows-1 gap-5 justify-center items-center w-full xs:min-h-[60rem] md:h-96 mt-4"
        >
          <div className="row-span-1 h-full rounded">
            <FeaturedCard
              title="Spotify.Me"
              description="A recreation of Spotify.Me, a website that analyzes your Spotify listening habits 
                                  and provides you with interesting statistics about your listening history."
              imagePath={MeImg}
              backgroundColor="bg-gradient-to-b from-cyan-400 to-teal-400 to-10%"
              skills={["Front-end", "UI/UX", "React", "Next.js"]}
              links={[
                "https://meclone.jkchisolm.com",
                "https://github.com/jkchisolm/new_spotify_me",
              ]}
              colorScheme="dark"
            />
          </div>
          <div className="row-span-1 h-full">
            <FeaturedCard
              title="Recreatify"
              description="A functioning recreation of the Spotify Web Player. 
                          You can log in with your Spotify Premium account and 
                          listen to your favorite tracks and playlists!"
              imagePath={RecreatifyImg}
              backgroundColor="bg-gradient-to-b from-zinc-900 to-green-400 to-5%"
              skills={["Front-end", "UI/UX", "React", "Redux"]}
              links={[
                "https://recreatify.jkchisolm.com",
                "https://github.com/jkchisolm/spotify-clone",
              ]}
              colorScheme="light"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full mt-8 px-3 md:px-14">
        <h2 className="text-3xl font-bold self-start">Project Timeline</h2>
        <Timeline />
      </div>
    </div>
  );
};
