
const Experience = () => {
  return (
    <div className="flex flex-col w-full mt-24">
        <h2 id="work-experience" class="font-bold text-lg tracking-widest text-white uppercase mb-10">Work Experience</h2>
        <div className="flex w-full">
            <div className="flex w-full gap-10">
                <p class="text-light-gray whitespace-nowrap max-sm:hidden">2023 - 2025</p>
            </div> 
            <div className="flex flex-col">
                <p class="text-white text-lg font-semibold">Frontend Software Developer</p>
                <p class="text-light-gray mb-4">Ocean ThinkIT Full-time<span class="text-light-gray whitespace-nowrap hidden max-sm:inline-block ml-2">• (2023 - 2025)</span></p>
                <p class="text-light-gray">For the past two years, I have primarily worked with startups,
            developing products from the ground up. I have led the frontend
            development of an AI-powered Interview Platform, building a job
            marketplace for dentists, and creating a system for managing
            promotional prize games.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Experience
