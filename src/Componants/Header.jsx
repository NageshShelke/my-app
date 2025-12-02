"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mx-auto max-w-[47.5rem] p-6"
    >
      <header className="w-full pt-5 pb-10">
        <nav className="w-full flex items-center justify-between">

          {/* Logo */}
          <motion.a
            href="/"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-bold hover:text-white uppercase text-light-gray text-lg tracking-widest"
          >
            Nagesh Shelke
          </motion.a>

          {/* Desktop Menu */}
          <motion.div
            className="hidden md:flex items-center gap-6 text-lg text-light-gray"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  delayChildren: 0.3,
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {["Work Experience", "Projects", "Contact"].map((item, i) => (
              <motion.a
                key={i}
                href={`/#${item.toLowerCase().replace(" ", "-")}`}
                variants={{
                  hidden: { opacity: 0, y: -8 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
                className="hover:text-white"
              >
                {item}
              </motion.a>
            ))}

            {/* Resume Button */}
            <motion.a
              href="/Nagesh_Shelke.pdf" // replace with your actual resume path
              download
              whileHover={{ scale: 1.05 }}
              className="px-2 py-1 border border-light-gray text-light-gray rounded text-sm  hover:text-white hover:border-white transition-colors duration-300"
            >
              Resume
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
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
          </motion.button>
        </nav>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="mt-4 md:hidden flex flex-col gap-4 text-light-gray text-lg overflow-hidden"
            >
              <a className="hover:text-white" href="/#work-experience">
                Work Experience
              </a>
              <a className="hover:text-white" href="/#projects">
                Projects
              </a>
              <a className="hover:text-white" href="/#contact">
                Contact
              </a>
              <a
                href="/Nagesh_Shelke.pdf" // replace with your actual resume path
                download
                className="hover:text-white"
              >
                Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </motion.div>
  );
};

export default Header;
