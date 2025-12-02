const Experience = () => {
  return (
    <div className="flex flex-col w-full mt-24">
      <h2
        id="work-experience"
        className="font-bold text-lg tracking-widest text-white uppercase mb-10"
      >
        Work Experience
      </h2>

      <div className="flex w-full gap-6 max-md:flex-col">
        <p className="text-light-gray whitespace-nowrap max-sm:hidden">
          Spt 2023 - Present
        </p>

        <div className="flex flex-col">
          <p className="text-white text-lg font-semibold">Software Engineer</p>
          <p className="text-light-gray mb-4">
            Qualam Business Solution
            <span className="text-light-gray whitespace-nowrap hidden max-sm:inline-block ml-2">
              • (2023 - 2025)
            </span>
          </p>
          <p className="text-light-gray leading-relaxed">
            For the past two years, I have primarily worked with startups,
            developed and maintained survey & form automation modules using
            JavaScript frameworks—primarily React JS and Knockout.JS (legacy),
            improving application scalability.
            <br />
            Led UI development for the Emergency Response System (ERS) module
            for IRCLASS, collaborating with backend, DevOps, and QA teams to
            deliver a production-ready maritime safety solution.
          </p>
        </div>
      </div>

      <div className="flex w-full gap-6 mt-10 max-md:flex-col">
        <p className="text-light-gray whitespace-nowrap max-sm:hidden">
          Nov 2022 - Oct 2023
        </p>

        <div className="flex flex-col">
          <p className="text-white text-lg font-semibold">Frontend Developer</p>
          <p className="text-light-gray mb-4">
            Immersive Vision Technology
            <span className="text-light-gray whitespace-nowrap hidden max-sm:inline-block ml-2">
              • (2022 - 2023)
            </span>
          </p>
          <p className="text-light-gray leading-relaxed">
            Part of the web development team to build a user interface.
            <br />
            Implemented and maintained frontend applications resulting in a
            20% reduction in page load time and improved conversion rates by
            utilizing React.js and modern UX/UI best practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
