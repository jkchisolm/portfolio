import { FaGithub, FaLink } from "react-icons/fa6";

type Props = {
  title: string;
  description: string;
  imagePath: string;
  skills: string[];
  links: string[];
};

export const FeaturedCard = (props: Props) => {
  return (
    <div className="max-w-sm rounded-lg border border-gray-200 shadow dark:bg-zinc-900 dark:border-gray-800 m-5">
      <div className="h-1/2 overflow-hidden">
        <img
          className="rounded-t-lg object-cover h-full w-full"
          src={props.imagePath}
        />
      </div>
      <div className="p-5">
        <h3 className="font-bold text-black dark:text-white text-3xl">
          {props.title}
        </h3>
        <p className="my-3 text-black dark:text-white">{props.description}</p>
        <div className="flex flex-row justify-center items-center flex-wrap mt-2">
          {props.skills.map((skill) => (
            <div
              className="bg-gray-100 text-gray-700 rounded-lg px-2 py-1 mr-2 mt-1"
              key={skill}
            >
              {skill}
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center items-center mt-4 pb-2">
          {props.links.map((link) => (
            <a
              href={link}
              className="bg-gray-100 text-gray-700 rounded-lg text-lg px-2 py-2 mr-2"
              key={link}
            >
              {link.includes("github") ? <FaGithub /> : <FaLink />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
