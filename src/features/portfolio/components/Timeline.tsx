import { TimelineCard } from "./TimelineCard";

export const Timeline = () => {
  return (
    <div className="mx-auto w-full h-full">
      <div className="relative wrap overflow-hidden md:p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-black dark:border-white h-full border md:left-1/2"></div>
        <TimelineCard
          side="right"
          title="Fleeter (August 2023-Present)"
          description="A full-stack clone of Twitter/X. Currently work in progress"
          skills={["Front-end", "Back-end", "UI/UX", "React", "C#", ".NET"]}
        />
        <TimelineCard
          side="left"
          title="Recreatify (July 2023)"
          description="A recreation of the Spotify Web Player. You can log in with your Spotify Premium account and listen to your music."
          skills={["Front-end", "UI/UX", "React", "Redux"]}
        />
        <TimelineCard
          side="right"
          title="Spotify.Me Clone (April-May 2023)"
          description="A recreation of a now-defunct Spotify statistics tracker. You can log in with your Spotify account and gain insights into your recent and all-time listening habits."
          skills={["Front-end", "UI/UX", "React", "Next.js"]}
        />
        <TimelineCard
          side="left"
          title="Portfolio (December 2022, October 2023)"
          description="The website you're currently looking at right now! This website was originally built in December of 2022, before being redesigned and remade in October of 2023."
          skills={["Front-end", "UI/UX", "React"]}
        />
      </div>
    </div>
  );
};
