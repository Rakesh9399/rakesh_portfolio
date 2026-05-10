import profilePic from '../assets/profile_image/profile.png';
import { HERO_CONTENT } from '../../constant/hero_content'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaDownload, FaEye } from "react-icons/fa";
import resumeFile from "../assets/resume/Rakesh_Resume.pdf";


const containerVariants = {
    hidden: {
        opacity: 0, x: -100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.5,
        }
    }
}

const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
}

function Hero() {
    return (
        <section id="home" className='pb-4 lg:mb-10'>
            <div className='flex flex-col-reverse lg:flex-row-reverse'>
                <div className='mb-10 flex w-full justify-center lg:mb-0 lg:w-1/2'>
                    <div className='flex justify-center lg:p-8'>
                        {/* Glow Background */} <div className="relative"> {/* Cyan Glow */} <div className="absolute inset-0 -z-10 rounded-full bg-cyan-500/20 blur-3xl"></div>
                            <motion.img src={profilePic}
                                alt="Rakesh"
                                className='"w-[280px] rounded-3xl border border-stone-800 shadow-2xl shadow-cyan-500/10 sm:w-[350px] lg:w-[500px]'
                                /* width={650}
                                height={650} */
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 1.5 }} />
                        </div>
                    </div>
                </div>
                <div className='w-full lg:w-1/2'>
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className='flex  flex-col items-center lg:items-start mt-10'>


                        {/* <motion.p
                            variants={childVariants}
                            className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400 opacity-80"
                        >
                            Hi, I'm Rakesh.
                        </motion.p>
 */}

                        <motion.h2
                            variants={childVariants}
                            className='pb-2 text-4xl tracking-tighter lg:text-8xl'>
                            Rakesh
                        </motion.h2>

                        <motion.div
                            variants={childVariants}
                            className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-2xl font-semibold tracking-tight text-transparent sm:text-3xl"
                        >

                            <TypeAnimation
                                sequence={[
                                    "MERN Stack Developer",
                                    2000,
                                    "Backend Developer",
                                    2000,
                                    "React Developer",
                                    2000,
                                    "Node.js Developer",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />

                        </motion.div>

                        <motion.div
                            variants={childVariants}
                            className="mt-5 flex items-center gap-3"
                        >

                            {/* Glowing Dot */}
                            <span className="relative flex h-3 w-3">

                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>

                                <span className="relative inline-flex h-3 w-3 rounded-full bg-cyan-400"></span>

                            </span>

                            {/* Text */}
                            <p className="text-sm font-medium tracking-wide text-cyan-300">
                                Open to Full Stack Opportunities
                            </p>

                        </motion.div>

                        <motion.p
                            variants={childVariants}
                            viewport={{ once: true }}
                            className='my-4 max-w-xl text-base leading-7 text-stone-400 sm:text-lg'>
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.div
                            variants={childVariants}
                            className="mb-8 mt-6 flex flex-wrap justify-center gap-6 lg:justify-start"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-cyan-400">
                                    1+
                                </h2>
                                <p className="text-stone-400">
                                    Years
                                </p>
                            </div>
                            <div>

                                <h2 className="text-3xl font-bold text-cyan-400">
                                    10+
                                </h2>
                                <p className="text-stone-400">
                                    Projects
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-cyan-400">
                                    8+
                                </h2>
                                <p className="text-stone-400">
                                    Technologies
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={childVariants}
                            className="mb-10 mt-4 flex flex-col gap-4 sm:flex-row"
                        >

                            {/* Download CV */}
                            <a
                                href={resumeFile}
                                download
                                className="flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-cyan-400"
                            >
                                <FaDownload />
                                Download CV
                            </a>

                            {/* View Resume */}
                            <a
                                href={resumeFile}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 rounded-full border border-cyan-500 px-6 py-3 text-sm font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-500 hover:text-black"
                            >
                                <FaEye />
                                View Resume
                            </a>

                        </motion.div>


                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero