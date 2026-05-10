import {
  DiMysql,
} from "react-icons/di";

import {
  FaCss3,
  FaHtml5,
  FaJava,
  FaJs,
  FaLaravel,
  FaPhp,
  FaNode,
} from "react-icons/fa";

import {
  RiReactjsLine,
} from "react-icons/ri";

import {
  SiMongodb,
  SiExpress,
} from "react-icons/si";

import { motion } from "framer-motion";

/* =========================================
   Floating Animation
========================================= */

const floatingVariants = (duration) => ({
  initial: {
    y: 0,
  },

  animate: {
    y: [0, -12, 0],

    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

/* =========================================
   Technologies Data
========================================= */

const technologies = [

  {
    name: "HTML5",
    subtitle: "Markup",
    icon: <FaHtml5 />,
    color: "text-[#E34F26]",
    glow: "hover:shadow-[0_0_35px_rgba(227,79,38,0.35)]",
    duration: 3,
  },

  {
    name: "CSS3",
    subtitle: "Styling",
    icon: <FaCss3 />,
    color: "text-[#1572B6]",
    glow: "hover:shadow-[0_0_35px_rgba(21,114,182,0.35)]",
    duration: 4,
  },

  {
    name: "JavaScript",
    subtitle: "Language",
    icon: <FaJs />,
    color: "text-[#F7DF1E]",
    glow: "hover:shadow-[0_0_35px_rgba(247,223,30,0.35)]",
    duration: 5,
  },

  {
    name: "React",
    subtitle: "Frontend",
    icon: <RiReactjsLine />,
    color: "text-cyan-400",
    glow: "hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]",
    duration: 3,
  },

  {
    name: "Express",
    subtitle: "Backend",
    icon: <SiExpress />,
    color: "text-green-400",
    glow: "hover:shadow-[0_0_35px_rgba(74,222,128,0.35)]",
    duration: 4,
  },

  {
    name: "Node.js",
    subtitle: "Runtime",
    icon: <FaNode />,
    color: "text-[#5FA04E]",
    glow: "hover:shadow-[0_0_35px_rgba(95,160,78,0.35)]",
    duration: 5,
  },

  {
    name: "Java",
    subtitle: "Language",
    icon: <FaJava />,
    color: "text-[#007396]",
    glow: "hover:shadow-[0_0_35px_rgba(0,115,150,0.35)]",
    duration: 4,
  },

  {
    name: "PHP",
    subtitle: "Backend",
    icon: <FaPhp />,
    color: "text-[#8892BF]",
    glow: "hover:shadow-[0_0_35px_rgba(136,146,191,0.35)]",
    duration: 3,
  },

  {
    name: "Laravel",
    subtitle: "Framework",
    icon: <FaLaravel />,
    color: "text-[#FF2D20]",
    glow: "hover:shadow-[0_0_35px_rgba(255,45,32,0.35)]",
    duration: 5,
  },

  {
    name: "MongoDB",
    subtitle: "Database",
    icon: <SiMongodb />,
    color: "text-[#47A248]",
    glow: "hover:shadow-[0_0_35px_rgba(71,162,72,0.35)]",
    duration: 4,
  },

  {
    name: "MySQL",
    subtitle: "Database",
    icon: <DiMysql />,
    color: "text-[#4479A1]",
    glow: "hover:shadow-[0_0_35px_rgba(68,121,161,0.35)]",
    duration: 3,
  },

];

/* =========================================
   Component
========================================= */

function Technologies() {

  return (

    <section className="relative pb-4">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"></div>

      {/* Heading */}
      <motion.h2
        whileInView={{
          opacity: 1,
          y: 0,
        }}

        initial={{
          opacity: 0,
          y: 60,
        }}

        transition={{
          duration: 0.8,
        }}

        viewport={{
          once: true,
        }}

        className="relative z-10 my-20 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-center text-5xl font-bold tracking-wide text-transparent"
      >
        Technologies
      </motion.h2>

      {/* Grid */}
      <div className="relative z-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">

        {technologies.map((tech, index) => (

          <motion.div
            key={index}

            variants={floatingVariants(tech.duration)}

            initial="initial"

            animate="animate"

            whileHover={{
              y: -8,
              scale: 1.05,
            }}

            className={`group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-xl transition-all duration-300 ${tech.glow}`}
          >

            {/* Inner Glow */}
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

              <div className="absolute -left-10 top-0 h-24 w-24 rounded-full bg-white/10 blur-2xl"></div>

            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">

              {/* Icon */}
              <div
                className={`mb-4 text-5xl transition duration-300 group-hover:scale-110 group-hover:rotate-3 ${tech.color}`}
              >
                {tech.icon}
              </div>

              {/* Name */}
              <h3 className="text-sm font-semibold text-white md:text-base">
                {tech.name}
              </h3>

              {/* Subtitle */}
              <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-white/40">
                {tech.subtitle}
              </p>

              {/* Bottom Glow Line */}
              <div
                className={`mt-4 h-[2px] w-0 transition-all duration-500 group-hover:w-full ${tech.color.replace("text", "bg")}`}
              ></div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Technologies;