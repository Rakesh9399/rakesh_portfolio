
import { motion } from "framer-motion";

import {
    FaCode,
    FaServer,
} from "react-icons/fa";

import {
    SiMongodb,
    SiSocketdotio,
} from "react-icons/si";

function Services() {

    const services = [


        {
            title: "Frontend Development",

            description:
                "Building responsive and modern user interfaces using React.js, Tailwind CSS, JavaScript, and modern frontend technologies.",

            icon: <FaCode />,

            color:
                "from-cyan-500/20 to-blue-500/20",

            iconColor:
                "text-cyan-400",
            shadow:
                "shadow-[0_0_25px_rgba(6,182,212,0.25)]",
        },

        {
            title: "Backend Development",

            description:
                "Developing scalable server-side applications, authentication systems, and APIs using Node.js, Express.js, PHP, and Laravel.",

            icon: <FaServer />,

            color:
                "from-green-500/20 to-emerald-500/20",

            iconColor:
                "text-green-400",
            shadow:
                "shadow-[0_0_25px_rgba(34,197,94,0.25)]",
        },

        {
            title: "Database Management",

            description:
                "Designing and managing databases using MongoDB and MySQL with optimized queries and scalable architecture.",

            icon: <SiMongodb />,

            color:
                "from-emerald-500/20 to-lime-500/20",

            iconColor:
                "text-emerald-400",
            shadow:
                "shadow-[0_0_25px_rgba(16,185,129,0.25)]",
        },


        {
            title: "Real-Time Applications",

            description:
                "Creating real-time chat applications and communication systems using Socket.io and modern web technologies.",

            icon: <SiSocketdotio />,

            color:
                "from-purple-500/20 to-pink-500/20",

            iconColor:
                "text-purple-400",
            shadow:
                "shadow-[0_0_25px_rgba(168,85,247,0.25)]",
        },

    ];

    return (

        <section className="pb-24">

            {/* Heading */}
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="my-20 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-center text-4xl font-bold tracking-wider text-transparent"
            >
                Core Expertise
            </motion.h2>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                {services.map((service, index) => (


                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 60 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        whileHover={{
                            y: -10,
                            scale: 1.02,
                        }}
                        className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-black/40 p-[1px] backdrop-blur-xl"
                    >

                        {/* Animated Gradient Border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/40 to-cyan-500/0 opacity-0 blur-xl transition duration-700 group-hover:opacity-100"></div>

                        {/* Main Content Box */}
                        <div className="relative h-full rounded-[28px] bg-gradient-to-br from-stone-900 via-black to-stone-950 p-8">

                            {/* Grid Glow */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.18),transparent_35%)] opacity-0 transition duration-700 group-hover:opacity-100"></div>

                            {/* Corner Accent */}
                            <div className="absolute right-0 top-0 h-24 w-24 translate-x-10 -translate-y-10 rounded-full bg-cyan-500/10 blur-3xl"></div>

                            {/* Icon Box */}
                            <div
                                className={`relative z-10 mb-8 inline-flex items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br ${service.color} p-5 text-5xl ${service.iconColor} ${service.shadow} transition duration-500 group-hover:rotate-6 group-hover:scale-110`}

                            >

                                {service.icon}

                            </div>

                            {/* Title */}
                            <h3 className="relative z-10 mb-5 text-2xl font-bold tracking-wide text-white">

                                {service.title}

                            </h3>

                            {/* Description */}
                            <p className="relative z-10 leading-8 text-stone-400">

                                {service.description}

                            </p>

                            {/* Bottom Line */}
                            <div className="relative z-10 mt-8 h-[1px] w-full bg-gradient-to-r from-cyan-500/0 via-cyan-400/50 to-cyan-500/0"></div>

                        </div>

                    </motion.div>

                ))}

            </div>

        </section>
    );
}

export default Services;

