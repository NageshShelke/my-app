import React from "react";

const Header = () => {
  return (
    <div className="h-full w-full mx-auto max-w-\[47\.5rem\] p-6">
      <header className="w-full pt-5 pb-10">
        <nav className="w-full flex items-center justify-between">
          <a
            className="font-bold hover:text-white uppercase text-light-gray text-lg tracking-widest"
            href="/"
          >
            Nagesh Shelke
          </a>
          <div className="flex items-center gap-6 text-lg text-light-gray max-md:hidden">
            <a className="hover:text-white" href="/#work-experience">
              Work Experience
            </a>
            <a className="hover:text-white" href="/#projects">
              Projects
            </a>
            <a className="hover:text-white" href="/#contact">
              Contact
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
