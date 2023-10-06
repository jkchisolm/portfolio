import { FaGithub, FaLink } from "react-icons/fa6";

type Props = {
  title: string;
  description: string;
  imagePath: string;
  backgroundColor?: string;
  skills: string[];
  links: string[];
  colorScheme: "light" | "dark";
};

export const FeaturedCard = (props: Props) => {
  return (
    <div className="grid grid-cols-1 grid-rows-5 gap-0 w-full h-full justify-center items-center rounded-lg">
      <div className="row-span-2 bg-blue-500 h-full rounded-t-lg">
        <div className="w-full h-full overflow-hidden">
          <img
            src={props.imagePath}
            alt={props.title}
            className="rounded-t-lg"
          />
        </div>
      </div>
      <div
        className={`row-span-3 ${props.backgroundColor} rounded-b h-full flex 
        flex-col justify-start items-start px-2 pb-2 pt-5 ${
          props.colorScheme == "light" ? "text-white" : "text-black"
        }`}
      >
        <div className="text-2xl font-bold">{props.title}</div>
        <div>{props.description}</div>
        {props.skills && (
          <div className="flex flex-row justify-start items-center mt-2">
            {props.skills.map((skill) => (
              <div
                className="bg-gray-100 text-gray-700 rounded-lg px-2 py-1 mr-2"
                key={skill}
              >
                {skill}
              </div>
            ))}
          </div>
        )}
        <div className="flex flex-row justify-start items-end h-full my-2">
          <a href={props.links[0]} className="px-2">
            <FaLink size={32} />
          </a>
          <a href={props.links[1]} className="px-2">
            <FaGithub size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};
