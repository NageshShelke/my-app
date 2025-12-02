import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full mx-auto max-w-[47.5rem] p-6">
      <header className="w-full pt-5 pb-10">
        <nav className="w-full flex items-center justify-between">
          <a
            className="font-bold hover:text-white uppercase text-light-gray text-lg tracking-widest"
            href="/"
          >
            Nagesh Shelke
          </a>

          <div className="hidden md:flex items-center gap-6 text-lg text-light-gray">
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

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-light-gray hover:text-white focus:outline-none"
          >
            {open ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>

        {open && (
          <div className="mt-4 md:hidden flex flex-col gap-4 text-light-gray text-lg">
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
        )}
      </header>
    </div>
  );
};

export default Header;
