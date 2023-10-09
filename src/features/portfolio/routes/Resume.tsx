import resumePdf from "../../../assets/jkcResume.pdf";

export const Resume = () => {
  return (
    <div className="w-screen h-screen">
      <iframe src={resumePdf} width="100%" height="100%" />
    </div>
  );
};
