
const Projects = () => {
    return (
        <div className="flex flex-col w-full mt-24">
            <h2
                id="projects"
                class="font-bold text-lg tracking-widest text-white uppercase mb-10"
            >
                Projects
            </h2>
            <div className="flex w-full border-1 h-80 p-3 rounded-md gap-5 mb-10">
                <div className="w-1/2 h-full rounded-md">
                    <img src="./agrostar.png" alt="ProjectImage" className="rounded-md h-full" />
                </div>
                <div className="w-1/2">
                    <p className="font-semibold text-white text-xl tracking-widest mt-2 text-center">AGROSTAR</p>
                    <p className="mt-5 text-light-gray">
                        AGROSTAR is a data-driven agritech platform that provides an online marketplace for the farmers of India. A “one-stop-shop” for the farming community.
                    </p>
                    <div className="flex flex-wrap mt-5 gap-5">
                        <div class="flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300">
                            <img alt="icon" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" src="/react-icon.svg" />
                            <p class="text-xs whitespace-nowrap">React</p>
                        </div>
                        <div class="flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300">
                            <img alt="icon" loading="lazy" width="18" height="10" decoding="async" data-nimg="1" src="/javascript-icon.svg" />
                            <p class="text-xs whitespace-nowrap">Javascript</p>
                        </div>
                        <div class="flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300">
                            <img alt="icon" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" src="/tailwind-icon.svg" />
                            <p class="text-xs whitespace-nowrap">Tailwind</p>
                        </div>
                        <div class="flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300">
                            <img alt="icon" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" src="/redux-icon.svg" />
                            <p class="text-xs whitespace-nowrap">Redux</p>
                        </div>

                    </div>
                    <div className="flex flex-wrap mt-5 w-full justify-around">
                        <a href="" className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-world "><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M3.6 9h16.8"></path><path d="M3.6 15h16.8"></path><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>
                            <p className="">Live Demo</p>
                            </a>
                        <a href="" className="flex items-center gap-2">
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github "><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                            <p>Code</p>
                        </a>
                    </div>
                </div>

            </div>
            <div className="flex w-full border-1 h-80 p-5 rounded-md gap-5 shadow-xl">
              
                <div className="w-1/2">
                    <p className="font-semibold text-white text-xl tracking-widest mt-2 text-center">TRIBE</p>
                    <p className="mt-5 text-light-gray">
                        TRIBE is a community app inspired by Skool, where users can create or join communities, share posts, like them, comment on them, and chat in real time with other users.
                    </p>
                    <div className="flex flex-wrap mt-3 gap-5">
                        <div class="flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300">
                            <img alt="icon" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" src="/react-icon.svg" />
                            <p class="text-xs whitespace-nowrap">React</p>
                        </div>
                        <div class="flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300">
                            <img alt="icon" loading="lazy" width="18" height="10" decoding="async" data-nimg="1" src="/javascript-icon.svg" />
                            <p class="text-xs whitespace-nowrap">Javascript</p>
                        </div>
                        <div class="flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300">
                            <img alt="icon" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" src="/tailwind-icon.svg" />
                            <p class="text-xs whitespace-nowrap">Tailwind</p>
                        </div>
                        <div class="flex h-6 items-center justify-center gap-1.5 px-4 rounded-full bg-blue-600/20 text-blue-300">
                            <img alt="icon" loading="lazy" width="18" height="18" decoding="async" data-nimg="1" src="/redux-icon.svg" />
                            <p class="text-xs whitespace-nowrap">Redux</p>
                        </div>

                    </div>
                    <div className="flex flex-wrap mt-5 w-full justify-around">
                        <a href="" className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-world "><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path><path d="M3.6 9h16.8"></path><path d="M3.6 15h16.8"></path><path d="M11.5 3a17 17 0 0 0 0 18"></path><path d="M12.5 3a17 17 0 0 1 0 18"></path></svg>
                            <p className="">Live Demo</p>
                            </a>
                        <a href="" className="flex items-center gap-2">
                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tabler-icon tabler-icon-brand-github "><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                            <p>Code</p>
                        </a>
                    </div>
                </div>
                  <div className="w-1/2 h-full rounded-md">
                    <img src="./tribe-community.webp" alt="ProjectImage" className="rounded-md h-full" />
                </div>

            </div>
        </div>
    );
};

export default Projects;
