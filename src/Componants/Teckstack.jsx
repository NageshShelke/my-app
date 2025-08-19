import { Skillset } from "../Constants/Skillset"

const Teckstack = () => {
    return (
        <div className='flex flex-col mt-7'>
            <h2 className="font-bold text-lg tracking-widest text-white uppercase mb-10">Tech stack</h2>
            <div className="text-white grid grid-cols-5 gap-5 max-md:grid-cols-4 max-sm:grid-cols-3 max-[500px]:grid-cols-2">

                {
                    Skillset.map((skill) => {
                        return (

                            <div class="border-light-gray/50 hover:bg-light-gray/10 gap-1.5 h-24 text-light-gray border rounded-lg p-3 flex flex-col items-center justify-center hover:text-white transition-all ease-in-out group"><img alt="icon-React" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" class="transition-transform duration-300 group-hover:-translate-y-1" src={skill.img} /><p>{skill.lable}</p></div>

                        )
                    }
                    )
                }
            </div>



        </div>
    )
}

export default Teckstack
