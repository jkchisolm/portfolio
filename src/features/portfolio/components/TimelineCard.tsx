type Props = {
  side: "left" | "right";
  title: string;
  description: string;
  skills: string[];
};

export const TimelineCard = ({ side, title, description, skills }: Props) => {
  return (
    <div
      className={`mb-8 flex ${
        side == "left" ? "md:flex-row-reverse" : ""
      } justify-between items-center w-full right-timeline`}
    >
      <div className="order-1 w-5/12"></div>
      <div className="order-1 border-black border-2 rounded-lg shadow-xl md:w-5/12 px-6 py-4">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">{title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
          {description}
        </p>
        <div className="flex flex-row justify-start items-center mt-2">
          {skills.map((skill) => (
            <div
              className="bg-gray-100 text-gray-700 rounded-lg px-2 py-1 mr-2"
              key={skill}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
