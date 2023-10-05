type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="w-full">
      <div className="flex justify-center md:justify-between items-center px-10 w-full py-4 border-b-2 border-black">
        <div className="text-3xl hidden md:block">Joshua Chisolm</div>
        <div className="flex flex-row justify-center items-center">
          <div className={`px-3`}>Home</div>
          <div className={`px-3`}>Work</div>
          <div className={`px-3`}>About</div>
          <div className={`px-3`}>Resume</div>
        </div>
      </div>
      {children}
    </div>
  );
};
