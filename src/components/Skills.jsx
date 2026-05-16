import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";

import {
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

/* =========================================
   Ultra Smooth NGROK Style Animated Path
========================================= */

const AnimatedPath = ({ color, path }) => {
  return (
    <svg
      className="absolute inset-0 h-full w-19/20"
      viewBox="-19 0 131 70"
      preserveAspectRatio="none"
    >
      <defs>
        <filter id={`glow-${color}`}>
          <feGaussianBlur
            stdDeviation="0"
            result="blur"
          />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Base Line */}
      <path
        d={path}
        fill="none"
        stroke={`${color}22`}
        strokeWidth="0"
      />

      {/* Animated Packets */}
      <motion.path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth=".8"
        strokeLinecap="round"
        strokeDasharray="1 2"
        filter={`url(#glow-${color})`}
        animate={{
          strokeDashoffset: [0, -60],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </svg>
  );
};

/* =========================================
   Architecture Card
========================================= */

const ArchitectureCard = ({ section }) => {
  return (
    <motion.div
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      initial={{
        opacity: 0,
        y: 50,
      }}
      transition={{
        duration: 0.7,
      }}
      viewport={{
        once: true,
      }}
      className={`group relative overflow-hidden rounded-[30px] border border-white/[0.06] bg-[#050505] p-5 md:p-8 ${section.glow}`}
    >

      {/* Subtle Glow */}
      <div
        className="absolute -left-20 top-0 h-24 w-24 rounded-full blur-3xl"
        style={{
          background: `${section.color}08`,
        }}
      />

      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]"></div>

      {/* Content */}
      <div className="relative z-10">

        {/* Header */}
        <div className="mb-8 md:mb-10">

          <p
            className="mb-3 text-[10px] font-semibold uppercase tracking-[0.45em]"
            style={{
              color: section.color,
            }}
          >
            {section.label}
          </p>

          <h3 className="text-2xl font-bold leading-tight text-white md:text-4xl">
            {section.heading}
          </h3>

        </div>

        {/* Architecture */}
        <div className="relative h-[280px] md:h-[360px]">

          {/* Top Tag */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1 text-[10px] text-white/40 backdrop-blur-xl">
            {section.tag}
          </div>

          {/* Top Vertical Line */}
          <div className="absolute left-1/2 top-8 h-[70px] w-[100px] -translate-x-1/2 md:h-[90px]">

            <AnimatedPath
              color={section.color}
              path="M50 0 V100"
            />

          </div>

          {/* Center Node */}
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="absolute left-1/2 top-[70px] z-20 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border border-white/[0.06] bg-[#161616] md:top-[95px] md:h-24 md:w-24"
          >

            {/* Soft Glow */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-[0.04]"
              style={{
                background: section.color,
              }}
            />

            <span
              className="relative z-10 text-2xl font-bold md:text-4xl"
              style={{
                color: section.color,
              }}
            >
              {section.node}
            </span>

          </motion.div>

          {/* Main Connection */}
          <div className="absolute left-1/2 top-[130px] h-[120px] w-[95%] -translate-x-1/2 md:top-[180px] md:w-[85%]">

            <AnimatedPath
              color={section.color}
              path="
                M50 0
                V20

                Q50 30 40 30
                H15
                Q5 30 5 45
                V100

                M50 20
                Q50 30 60 30
                H85
                Q95 30 95 45
                V100
              "
            />

          </div>

          {/* Bottom Nodes */}
          <div className="absolute bottom-0 left-1/2 flex w-[95%] -translate-x-1/2 justify-between gap-2 md:w-[85%] md:gap-4">

            {/* Left Side */}
            <div className="flex flex-col gap-2 md:gap-4">

              {section.left.map((skill, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  className={`flex min-w-[110px] items-center gap-2 rounded-2xl border border-white/[0.06] px-3 py-2 backdrop-blur-xl md:min-w-[170px] md:gap-3 md:px-5 md:py-4 ${skill.style}`}
                >

                  <span className="text-sm md:text-lg">
                    {skill.icon}
                  </span>

                  <div className="flex flex-col">

                    <span className="text-[11px] md:text-sm">
                      {skill.name}
                    </span>

                    <span className="hidden text-[10px] uppercase tracking-[0.2em] text-white/30 md:block">
                      {skill.label}
                    </span>

                  </div>

                </motion.div>

              ))}

            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-2 md:gap-4">

              {section.right.map((skill, index) => (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  className={`flex min-w-[110px] items-center gap-2 rounded-2xl border border-white/[0.06] px-3 py-2 backdrop-blur-xl md:min-w-[170px] md:gap-3 md:px-5 md:py-4 ${skill.style}`}
                >

                  <span className="text-sm md:text-lg">
                    {skill.icon}
                  </span>

                  <div className="flex flex-col">

                    <span className="text-[11px] md:text-sm">
                      {skill.name}
                    </span>

                    <span className="hidden text-[10px] uppercase tracking-[0.2em] text-white/30 md:block">
                      {skill.label}
                    </span>

                  </div>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </motion.div>
  );
};

/* =========================================
   Main Component
========================================= */

function Skills() {

  const sections = [

    {
      label: "FRONTEND",
      heading: "Frontend Infrastructure",
      tag: "UI Rendering",
      node: "F",
      color: "#22d3ee",
      glow: "shadow-[0_0_80px_rgba(6,182,212,0.04)]",

      left: [

        {
          name: "React",
          label: "Framework",
          icon: <FaReact />,
          style:
            "bg-cyan-500/[0.06] text-cyan-300",
        },

        {
          name: "JavaScript",
          label: "Language",
          icon: <SiJavascript />,
          style:
            "bg-yellow-500/[0.06] text-yellow-300",
        },

        {
          name: "Tailwind",
          label: "Styling",
          icon: <SiTailwindcss />,
          style:
            "bg-cyan-500/[0.06] text-cyan-300",
        },

      ],

      right: [

        {
          name: "HTML5",
          label: "Markup",
          icon: <SiHtml5 />,
          style:
            "bg-orange-500/[0.06] text-orange-300",
        },

        {
          name: "CSS3",
          label: "Design",
          icon: <SiCss3 />,
          style:
            "bg-blue-500/[0.06] text-blue-300",
        },

      ],

    },

    {
      label: "BACKEND",
      heading: "Backend Infrastructure",
      tag: "API Gateway",
      node: "B",
      color: "#4ade80",
      glow: "shadow-[0_0_80px_rgba(34,197,94,0.04)]",

      left: [

        {
          name: "Node.js",
          label: "Runtime",
          icon: <FaNodeJs />,
          style:
            "bg-green-500/[0.06] text-green-300",
        },

        {
          name: "Express",
          label: "API Layer",
          icon: <SiExpress />,
          style:
            "bg-white/[0.03] text-white/80",
        },

      ],

      right: [

        {
          name: "PHP",
          label: "Language",
          icon: <FaPhp />,
          style:
            "bg-indigo-500/[0.06] text-indigo-300",
        },

        {
          name: "Laravel",
          label: "Framework",
          icon: <FaLaravel />,
          style:
            "bg-red-500/[0.06] text-red-300",
        },

      ],

    },

    {
      label: "DATABASE",
      heading: "Data Infrastructure",
      tag: "Data Layer",
      node: "D",
      color: "#34d399",
      glow: "shadow-[0_0_80px_rgba(16,185,129,0.04)]",

      left: [

        {
          name: "MongoDB",
          label: "NoSQL DB",
          icon: <SiMongodb />,
          style:
            "bg-green-500/[0.06] text-green-300",
        },

      ],

      right: [

        {
          name: "MySQL",
          label: "SQL DB",
          icon: <SiMysql />,
          style:
            "bg-blue-500/[0.06] text-blue-300",
        },

      ],

    },

    {
      label: "TOOLS",
      heading: "Development Tools",
      tag: "Dev Workflow",
      node: "T",
      color: "#c084fc",
      glow: "shadow-[0_0_80px_rgba(168,85,247,0.04)]",

      left: [

        {
          name: "Git",
          label: "Versioning",
          icon: <FaGitAlt />,
          style:
            "bg-orange-500/[0.06] text-orange-300",
        },

        {
          name: "GitHub",
          label: "Repository",
          icon: <FaGithub />,
          style:
            "bg-white/[0.03] text-white",
        },

      ],

      right: [

        {
          name: "Postman",
          label: "API Testing",
          icon: <SiPostman />,
          style:
            "bg-orange-500/[0.06] text-orange-300",
        },

        {
          name: "VS Code",
          label: "Editor",
          icon: <VscVscode />,
          style:
            "bg-blue-500/[0.06] text-blue-300",
        },

      ],

    },

  ];

  return (

    <section className="pb-28">

      {/* Heading */}
      <motion.h2
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        initial={{
          opacity: 0,
          y: 40,
        }}
        transition={{
          duration: 0.7,
        }}
        viewport={{
          once: true,
        }}
        className="my-24 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-center text-5xl font-bold tracking-wide text-transparent"
      >
        Skills
      </motion.h2>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">

        {sections.map((section, index) => (

          <ArchitectureCard
            key={index}
            section={section}
          />

        ))}

      </div>

    </section>
  );
}

export default Skills;