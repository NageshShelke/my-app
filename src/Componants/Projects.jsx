const Projects = () => {
  return (
    <div className="flex flex-col w-full mt-24">
      <h2
        id="projects"
        className="font-bold text-lg tracking-widest text-white uppercase mb-10"
      >
        Projects
      </h2>

      {/* Project 1 */}
      <div className="flex w-full h-auto p-3 rounded-md gap-5 mb-10 max-md:flex-col border border-light-gray/30">
        <div className="w-1/2 max-md:w-full rounded-md">
          <img src="./agrostar.png" alt="ProjectImage" className="rounded-md w-full h-full object-cover" />
        </div>

        <div className="w-1/2 max-md:w-full">
          <p className="font-semibold text-white text-xl tracking-widest mt-2 text-center">
            AGROSTAR
          </p>

          <p className="mt-5 text-light-gray">
            AGROSTAR is a data-driven agritech platform that provides an online marketplace
            for farmers in India—a one-stop-shop for the farming community.
          </p>

          <div className="flex flex-wrap mt-5 gap-5">
            <div className="flex h-6 items-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300">
              <img width="18" src="/react-icon.svg" />
              <p className="text-xs whitespace-nowrap">React</p>
            </div>

            <div className="flex h-6 items-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300">
              <img width="18" src="/javascript-icon.svg" />
              <p className="text-xs whitespace-nowrap">Javascript</p>
            </div>

            <div className="flex h-6 items-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300">
              <img width="18" src="/tailwind-icon.svg" />
              <p className="text-xs whitespace-nowrap">Tailwind</p>
            </div>

            <div className="flex h-6 items-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300">
              <img width="18" src="/redux-icon.svg" />
              <p className="text-xs whitespace-nowrap">Redux</p>
            </div>
          </div>

          <div className="flex flex-wrap mt-5 w-full justify-around text-light-gray">
            <a href="" className="flex items-center gap-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M3.6 9h16.8"></path>
                <path d="M3.6 15h16.8"></path>
                <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                <path d="M12.5 3a17 17 0 0 1 0 18"></path>
              </svg>
              <p>Live Demo</p>
            </a>

            <a href="" className="flex items-center gap-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
              <p>Code</p>
            </a>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="flex w-full h-auto p-5 rounded-md gap-5 shadow-xl max-md:flex-col border border-light-gray/30">
        <div className="w-1/2 max-md:w-full">
          <p className="font-semibold text-white text-xl tracking-widest mt-2 text-center">
            Dr. Samuals Clinic
          </p>

          <p className="mt-5 text-light-gray">
            A doctor appointment booking app that allows patients to book, manage and track
            appointments online. Designed to make healthcare processes smoother and more accessible.
          </p>

          <div className="flex flex-wrap mt-3 gap-5">
            <div className="flex h-6 items-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300">
              <img width="18" src="/html-icon.svg" />
              <p className="text-xs">HTML</p>
            </div>

            <div className="flex h-6 items-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300">
              <img width="18" src="/css-icon.svg" />
              <p className="text-xs">CSS</p>
            </div>

            <div className="flex h-6 items-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300">
              <img width="18" src="/javascript-icon.svg" />
              <p className="text-xs">JAVASCRIPT</p>
            </div>
          </div>

          <div className="flex flex-wrap mt-5 w-full justify-around text-light-gray">
            <a href="" className="flex items-center gap-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                <path d="M3.6 9h16.8"></path>
                <path d="M3.6 15h16.8"></path>
                <path d="M11.5 3a17 17 0 0 0 0 18"></path>
                <path d="M12.5 3a17 17 0 0 1 0 18"></path>
              </svg>
              <p>Live Demo</p>
            </a>

            <a href="" className="flex items-center gap-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
              </svg>
              <p>Code</p>
            </a>
          </div>
        </div>

        <div className="w-1/2 max-md:w-full rounded-md">
          <img src="./Clinic.png" alt="ProjectImage" className="rounded-md w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
