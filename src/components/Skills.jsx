import { animate, motion } from "framer-motion"

import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaPhp, FaLaravel, } from "react-icons/fa"; import {
    SiExpress,
    SiMongodb,
    SiMysql,
    SiTailwindcss,
    SiJavascript,
    SiPostman,
    SiHtml5,
    SiCss3,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

function Skills() {
    return (
        <section id="skills" className="pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="my-10 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-center text-4xl font-bold text-transparent">
                Skills
            </motion.h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

                {/* Frontend */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{
                        y: -8,
                        scale: 1.02,
                    }}
                    className="group relative overflow-hidden rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-stone-900/80 to-black/80 p-8 backdrop-blur-xl transition duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]"
                >

                    {/* Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_40%)] opacity-0 transition duration-500 group-hover:opacity-100"></div>

                    {/* Content */}
                    <div className="relative z-10">

                        {/* Heading */}
                        <h3 className="mb-6 text-2xl font-bold text-cyan-400">
                            Frontend
                        </h3>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-3 justify-center">

                            <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                                <FaReact />
                                React.js
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-300">
                                <SiJavascript />
                                JavaScript
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                                <SiTailwindcss />
                                Tailwind
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
                                <SiHtml5 />
                                HTML5
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                                <SiCss3 />
                                CSS3
                            </div>

                        </div>

                    </div>

                </motion.div>


                {/* Backend */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{
                        y: -8,
                        scale: 1.02,
                    }}
                    className="group relative overflow-hidden rounded-3xl border border-green-500/10 bg-gradient-to-br from-stone-900/80 to-black/80 p-8 backdrop-blur-xl transition duration-500 hover:border-green-400/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.12)]"
                >

                    {/* Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_40%)] opacity-0 transition duration-500 group-hover:opacity-100"></div>

                    <div className="relative z-10">

                        <h3 className="mb-6 text-2xl font-bold text-green-400">
                            Backend
                        </h3>

                        <div className="flex flex-wrap gap-3 justify-center">

                            <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-300">
                                <FaNodeJs />
                                Node.js
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-gray-500/20 bg-gray-500/10 px-4 py-2 text-sm text-gray-300">
                                <SiExpress />
                                Express.js
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
                                <FaPhp />
                                PHP
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-300">
                                <FaLaravel />
                                Laravel
                            </div>

                        </div>

                    </div>

                </motion.div>

                {/* Database */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{
                        y: -8,
                        scale: 1.02,
                    }}
                    className="group relative overflow-hidden rounded-3xl border border-emerald-500/10 bg-gradient-to-br from-stone-900/80 to-black/80 p-8 backdrop-blur-xl transition duration-500 hover:border-emerald-400/40 hover:shadow-[0_0_40px_rgba(16,185,129,0.12)]"
                >

                    {/* Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_40%)] opacity-0 transition duration-500 group-hover:opacity-100"></div>

                    <div className="relative z-10">

                        <h3 className="mb-6 text-2xl font-bold text-emerald-400">
                            Database
                        </h3>

                        <div className="flex flex-wrap gap-3 justify-center">

                            <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-300">
                                <SiMongodb />
                                MongoDB
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                                <SiMysql />
                                MySQL
                            </div>

                        </div>

                    </div>

                </motion.div>


                {/* Tools */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{
                        y: -8,
                        scale: 1.02,
                    }}
                    className="group relative overflow-hidden rounded-3xl border border-purple-500/10 bg-gradient-to-br from-stone-900/80 to-black/80 p-8 backdrop-blur-xl transition duration-500 hover:border-purple-400/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]"
                >

                    {/* Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_40%)] opacity-0 transition duration-500 group-hover:opacity-100"></div>

                    <div className="relative z-10">

                        <h3 className="mb-6 text-2xl font-bold text-purple-400">
                            Tools
                        </h3>

                        <div className="flex flex-wrap gap-3 justify-center">

                            <div className="flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
                                <FaGitAlt />
                                Git
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white">
                                <FaGithub />
                                GitHub
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm text-orange-300">
                                <SiPostman />
                                Postman
                            </div>

                            <div className="flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                                <VscVscode />
                                VS Code
                            </div>

                        </div>

                    </div>

                </motion.div>


            </div>
        </section>
    );
}


export default Skills;