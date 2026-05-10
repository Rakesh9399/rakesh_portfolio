import React from "react";
import myLogo from '../assets/profile_image/logo.png';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function Navbar() {
    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-stone-800/50 ">

            {/* Left Side */}
            <div className="flex items-center gap-3">

                {/* Logo */}
                <img src={myLogo}
                    alt="Rakesh Logo"
                    className="h-24 w-24 object-contain drop-shadow-[0_0_12px_rgba(6,182,212,0.8)] transition duration-300 hover:scale-110 sm:h-24 sm:w-24"
                />

                {/* Name */}
                <h1 className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-2xl font-bold tracking-wide text-transparent sm:text-3xl">
                    Rakesh
                </h1>
            </div>

            <div className="hidden items-center gap-8 text-sm font-medium text-stone-300 lg:flex">
                <a
                    href="#home"
                    className="transition duration-300 hover:text-cyan-400"
                >
                    Home
                </a>
                <a
                    href="#skills"
                    className="transition duration-300 hover:text-cyan-400"
                >
                    Skills
                </a>

                <a
                    href="#projects"
                    className="transition duration-300 hover:text-cyan-400"
                >
                    Projects
                </a>

                <a
                    href="#experience"
                    className="transition duration-300 hover:text-cyan-400"
                >
                    Experience
                </a>

                <a
                    href="#contact"
                    className="transition duration-300 hover:text-cyan-400"
                >
                    Contact
                </a>

            </div>


            {/* Social Icons */}
            <div className="flex items-center gap-4 text-xl text-white sm:gap-5 sm:text-2xl">

                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/rakesh-prajapati-a9aa58236/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-300" >
                    <FaLinkedin />
                </a>

                {/* GitHub */}
                <a href="https://github.com/rakesh9399" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition duration-300" >
                    <FaGithub />
                </a>

                {/* Email */}
                <a href="mailto:mp966904@gmail.com" className="hover:text-cyan-400 transition duration-300" >
                    <FaEnvelope />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;