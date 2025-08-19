import React from 'react'

const About = () => {
    return (
        <main className='w-full  h-full flex justify-center pb-10'>
            <div className="h-full w-full mx-auto">
                <div className="pb-20 pt-16 flex items-center gap-10 max-md:flex-col max-md:text-center">
                    <div className="relative w-44 h-44 min-w-44 min-h-44 rounded-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 rounded-full p-1">
                            <div className="w-full h-full bg-dark-bg rounded-full">
                                <img src="../ns.png" width="170" height="170" alt="Avatar" class="w-full h-full object-cover rounded-full border-white border-4" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-6">
                        <h1 className="text-light-gray font-bold text-[28px] tracking-[0.03em] relative">
                            <span class="text-white">Hey, I'm Nagesh.</span> "I'm a Frontend"
                            <br />
                            Software Developer.
                            <div class="bg-green-600/20 absolute max-md:relative right-0 bottom-1.5 whitespace-nowrap text-green-600 hover:bg-green-500/20 text-sm px-3 py-1 rounded-full inline-block hover:text-green-500"><span class="p-1 mb-px mr-1.5 inline-block bg-green-600 rounded-full"></span>Open to work</div> 
                        </h1>
                        <div className="w-full flex items-center justify-between max-md:flex-col max-md:gap-3">
                            <a target="_blank" class="text-light-gray whitespace-nowrap hover:text-white" href="https://www.google.com/maps/place/Belgrade">🏠 Maharashtra, India.</a>
                            <div className="w-full flex items-center justify-end max-md:justify-center gap-5 text-base text-light-gray">
                                <a target="_blank" class="flex gap-1 items-center hover:text-white" href="https://www.linkedin.com/in/stefan-topalovic-dev/"><img alt="icon" width="24" height="24" src="../linkedin-icon.svg" />LinkedIn</a>
                                <a target="_blank" class="flex gap-1 items-center hover:text-white" href="https://github.com/stefvndev"><img alt="icon" loading="lazy" width="20" height="20"  src="../github-icon.svg" />GitHub</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </main>
    )
}

export default About
