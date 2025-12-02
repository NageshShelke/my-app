import React from "react";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaDribbble } from "react-icons/fa6";

const Sidebar = () => {
    const icons = [
        { icon: <FaGithub />, link: "https://github.com/NageshShelke" },
        { icon: <FaInstagram />, link: "https://www.instagram.com/ll__nspatil1508__ll/" },
        { icon: <FaTwitter />, link: "https://x.com/NageshShelkePa1" },
        { icon: <FaLinkedin />, link: "www.linkedin.com/in/nagesh-shelke-b39725181" },
        { icon: <FaDribbble />, link: "" },
    ];

    return (
        <>
           
            <div className="fixed md:left-20 bottom-0 flex flex-col items-center gap-5">
                <div className="flex flex-col gap-6">
                    {icons.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white text-xl transform transition-transform duration-300 hover:scale-125 hover:text-blue-500"
                        >
                            {item.icon}
                        </a>
                    ))}
                </div>
                <div className="w-px h-20 bg-white mx-auto"></div> {/* Vertical line below icons */}

            </div>

            {/* Right Email */}
            <div className="fixed right-0 bottom-0 flex flex-col items-center gap-5">
                <a
                    href="mailto:nageshpatil6129@gmail.com"
                    className="text-white text-sm tracking-widest rotate-90 mb-4 hover:text-blue-500 transition-colors duration-300"
                >
                    nageshpatil6129@gmail.com
                </a>
                <div className="w-px h-20 bg-white mt-20 mx-auto"></div> {/* Vertical line above email */}
            </div>
        </>
    );
};

export default Sidebar;
