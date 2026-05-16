import { PROJECTS } from "../../constant/hero_content"
import { motion } from "framer-motion"

import {
    FaReact,
    FaNodeJs,
    FaPhp,
    FaLaravel,
    FaServer,
    FaLock,
    FaCloud,
    FaBootstrap,
} from "react-icons/fa";



import {
    SiExpress,
    SiMongodb,
    SiMysql,
    SiSocketdotio ,
    SiTailwindcss,
    SiJavascript,
    SiRedux, 
} from "react-icons/si";

const techIcons = {
    "React.js": <FaReact className="text-cyan-400" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    "Express.js": <SiExpress className="text-gray-300" />,
    "MongoDB": <SiMongodb className="text-green-400" />,
    "MySQL": <SiMysql className="text-blue-400" />,
    "Socket.io": <SiSocketdotio className="text-white" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-300" />,
    "JavaScript": <SiJavascript className="text-yellow-300" />,
    "PHP": <FaPhp className="text-indigo-400" />,
    "Laravel": <FaLaravel className="text-red-500" />,
    "Bootstrap": <FaBootstrap className="text-purple-400" />,

    "REST API": <FaServer className="text-orange-400" />,

    "JWT": <FaLock className="text-yellow-400" />,

    "Cloudinary": <FaCloud className="text-blue-300" />,

    "Redux": <SiRedux className="text-purple-400" />,

    "Socket.IO": <SiSocketdotio className="text-white" />,

};


function Projects() {
    return (
        <section id="projects" className="pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}

                className="my-10 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-center text-4xl font-bold text-transparent"
            >
                Projects
            </motion.h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="mb-10 flex flex-wrap gap-6 items-center justify-center rounded-2xl border border-stone-800 p-6 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300" >
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="w-full lg:w-1/4">
                            <img src={project.image}
                                /*  width={250}
                                 height={250} */
                                alt={project.title}
                                className="mb-6 w-full rounded-xl border border-stone-800 transition duration-500 hover:scale-[1.03] hover:border-cyan-500" />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h3 className="mb-2 font-semibold text-2xl">{project.title}</h3>
                            <p className="mb-4 text-stone-400">{project.description}</p>

                            <div className="mt-5 flex w-full flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">

                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-black hover:bg-cyan-400" >
                                    GitHub

                                </a>

                                <a href={project.live} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-cyan-500 px-4 py-2 text-sm font-semibold text-cyan-400 hover:bg-cyan-500 hover:text-black" >
                                    Live Demo
                                </a>
                            </div>
                            <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">

                                <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start">

                                    {project.technologies.map((tech, index) => (

                                        <div
                                            key={index}
                                            className="flex items-center gap-2 rounded-full border border-stone-700 bg-stone-900/70 px-4 py-2 text-sm text-stone-300 transition duration-300 hover:border-cyan-500"
                                        >

                                            {/* Icon */}
                                            <span className="text-lg">
                                                {techIcons[tech]}
                                            </span>

                                            {/* Text */}
                                            <span>
                                                {tech}
                                            </span>

                                        </div>

                                    ))}

                                </div>


                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>

        </section>
    )
}

export default Projects