type Props = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <div className="w-full">
      <div className="flex justify-center md:justify-between items-center px-10 w-full py-4 border-b-2 border-black dark:border-white">
        <div className="text-3xl hidden md:block">Joshua Chisolm</div>
        <div className="flex flex-row justify-center items-center">
          <a className={`px-3`} href="/">
            Home
          </a>
          <a className={`px-3`} href="/work">
            Work
          </a>
          <a className={`px-3`} href="/about">
            About
          </a>
          <a className={`px-3`} href="/resume">
            Resume
          </a>
        </div>
      </div>
      {children}
    </div>
  );
};
