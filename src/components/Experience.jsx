import { EXPERIENCES } from "../../constant/hero_content";
import { motion } from "framer-motion";

import {
    FaReact,
    FaNodeJs,
    FaPhp,
    FaLaravel,
    FaWordpress,
} from "react-icons/fa";

import {
    SiExpress,
    SiMongodb,
    SiMysql,
    SiTailwindcss,
    SiWix
} from "react-icons/si";

import {
    RiJavascriptFill,
} from "react-icons/ri";

function Experience() {

    const getTechColor = (tech) => {

        const name = tech.toLowerCase();

        if (
            name.includes("react") ||
            name.includes("tailwind")
        ) {
            return `
        border-cyan-400/10
        bg-cyan-400/[0.05]
        text-cyan-200
        hover:border-cyan-400/30
        hover:bg-cyan-400/[0.08]
        hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]
      `;
        }

        if (
            name.includes("node") ||
            name.includes("express")
        ) {
            return `
        border-green-400/10
        bg-green-400/[0.05]
        text-green-200
        hover:border-green-400/30
        hover:bg-green-400/[0.08]
        hover:shadow-[0_0_20px_rgba(74,222,128,0.15)]
      `;
        }

        if (
            name.includes("mongo") ||
            name.includes("mysql")
        ) {
            return `
        border-emerald-400/10
        bg-emerald-400/[0.05]
        text-emerald-200
        hover:border-emerald-400/30
        hover:bg-emerald-400/[0.08]
        hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]
      `;
        }

        if (
            name.includes("php") ||
            name.includes("laravel")
        ) {
            return `
        border-red-400/10
        bg-red-400/[0.05]
        text-red-200
        hover:border-red-400/30
        hover:bg-red-400/[0.08]
        hover:shadow-[0_0_20px_rgba(248,113,113,0.15)]
      `;
        }

        return `
      border-white/[0.06]
      bg-white/[0.03]
      text-white/80
      hover:border-white/20
      hover:bg-white/[0.06]
      hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]
    `;
    };

    const getTechIcon = (tech) => {

        const name = tech.toLowerCase();

        if (name.includes("react")) {
            return <FaReact className="text-cyan-400" />;
        }

        if (name.includes("node")) {
            return <FaNodeJs className="text-green-400" />;
        }

        if (name.includes("express")) {
            return <SiExpress className="text-white/80" />;
        }

        if (name.includes("mongo")) {
            return <SiMongodb className="text-green-500" />;
        }

        if (name.includes("mysql")) {
            return <SiMysql className="text-blue-400" />;
        }

        if (name.includes("javascript")) {
            return <RiJavascriptFill className="text-yellow-300" />;
        }

        if (name.includes("tailwind")) {
            return <SiTailwindcss className="text-cyan-400" />;
        }

        if (name.includes("php")) {
            return <FaPhp className="text-indigo-300" />;
        }

        if (name.includes("laravel")) {
            return <FaLaravel className="text-red-400" />;
        }

        if (name.includes("wordpress")) {
            return <FaWordpress className="text-blue-300" />;
        }

        if (name.includes("wix")) {
            return <SiWix className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.25)]" />;
        }

        return null;
    };

    return (

        <section className="relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute left-1/2 top-40 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"></div>

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
                    duration: 0.7,
                }}

                viewport={{
                    once: true,
                }}

                className="relative z-10 my-24 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-center text-5xl font-bold tracking-wide text-transparent"
            >
                Experience
            </motion.h2>

            {/* Timeline Wrapper */}
            <div className="relative mx-auto max-w-7xl">

                {/* Center Line */}
                <div className="absolute left-1/2 top-0 hidden h-full w-[1px] -translate-x-1/2 overflow-hidden bg-white/[0.04] lg:block">

                    {/* Animated Beam */}
                    <motion.div
                        animate={{
                            y: ["-100%", "100%"],
                        }}

                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                        }}

                        className="absolute left-0 top-0 h-32 w-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent blur-[1px]"
                    ></motion.div>

                </div>

                {EXPERIENCES.map((experience, index) => (

                    <motion.div
                        key={index}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}

                        initial={{
                            opacity: 0,
                            y: 80,
                        }}

                        transition={{
                            duration: 0.7,
                        }}

                        viewport={{
                            once: true,
                        }}

                        className="relative mb-20"
                    >

                        {/* Timeline Dot */}
                        <div className="absolute left-1/2 top-24 z-30 hidden h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border border-cyan-400/40 bg-[#070707] shadow-[0_0_25px_rgba(34,211,238,0.5)] lg:flex">

                            <div className="h-2.5 w-2.5 rounded-full bg-cyan-400"></div>

                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">

                            {/* LEFT SIDE */}
                            <motion.div
                                whileHover={{
                                    y: -6,
                                }}

                                className="group relative overflow-hidden rounded-[32px] border border-white/[0.06] bg-[#070707] p-8 backdrop-blur-xl"
                            >

                                {/* Glow */}
                                <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"></div>

                                {/* Texture */}
                                <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]"></div>

                                {/* Top Accent */}
                                <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-transparent to-transparent"></div>

                                {/* Huge Background Year */}
                                <div className="absolute bottom-0 right-4 text-[120px] font-black leading-none text-white/[0.03]">
                                    {experience.bigYear}
                                </div>

                                {/* Content */}
                                <div className="relative z-10">

                                    {/* Year */}
                                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.4em] text-cyan-400">
                                        {experience.year}
                                    </p>

                                    {/* Badge */}
                                    <div className="mb-8 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-xs uppercase tracking-[0.25em] text-cyan-300">
                                        Professional Experience
                                    </div>

                                    {/* Stats */}
                                    <div className="space-y-4">

                                        {experience.stats.map((stat, statIndex) => (

                                            <motion.div
                                                key={statIndex}

                                                whileHover={{
                                                    x: 5,
                                                }}

                                                className="flex items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.03] px-4 py-4 backdrop-blur-xl"
                                            >

                                                {/* Dot */}
                                                <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.8)]"></div>

                                                <span className="text-sm text-white/80">
                                                    {stat}
                                                </span>

                                            </motion.div>

                                        ))}

                                    </div>

                                </div>

                            </motion.div>

                            {/* RIGHT SIDE */}
                            <motion.div
                                whileHover={{
                                    y: -6,
                                }}

                                className="group relative overflow-hidden rounded-[32px] border border-white/[0.06] bg-[#070707] p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/20 hover:shadow-[0_0_50px_rgba(34,211,238,0.08)]"
                            >

                                {/* Glow */}
                                <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition duration-500 group-hover:opacity-100"></div>

                                {/* Texture */}
                                <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px]"></div>

                                {/* Accent Line */}
                                <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 via-transparent to-transparent"></div>

                                {/* Moving Light */}
                                <motion.div
                                    animate={{
                                        x: ["-100%", "200%"],
                                    }}

                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}

                                    className="absolute top-0 h-full w-20 rotate-12 bg-cyan-400/5 blur-2xl"
                                ></motion.div>

                                {/* Content */}
                                <div className="relative z-10">

                                    {/* Role */}
                                    <h3 className="mb-3 text-3xl font-bold text-white">
                                        {experience.role}
                                    </h3>

                                    {/* Company */}
                                    <p className="mb-8 text-sm uppercase tracking-[0.35em] text-cyan-400">
                                        {experience.company}
                                    </p>

                                    {/* Description */}
                                    <p className="mb-10 max-w-[650px] leading-relaxed text-white/65">
                                        {experience.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-3">

                                        {experience.technologies.map((tech, techIndex) => (

                                            <motion.div
                                                key={techIndex}

                                                whileHover={{
                                                    scale: 1.06,
                                                    y: -2,
                                                }}

                                                className={`
                          group relative overflow-hidden
                          rounded-full border
                          px-5 py-2.5
                          text-sm
                          backdrop-blur-xl
                          transition-all duration-300
                          ${getTechColor(tech)}
                        `}
                                            >

                                                {/* Hover Glow */}
                                                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                                                    <div className="absolute -left-5 top-0 h-10 w-10 rounded-full bg-white/10 blur-xl"></div>

                                                </div>

                                                {/* Content */}
                                                <div className="relative z-10 flex items-center gap-2">

                                                    <div className="text-base transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                                                        {getTechIcon(tech)}
                                                    </div>

                                                    {tech}

                                                </div>

                                            </motion.div>

                                        ))}

                                    </div>

                                </div>

                            </motion.div>

                        </div>

                    </motion.div>

                ))}

            </div>

        </section>
    );
}

export default Experience;