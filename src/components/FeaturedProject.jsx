
import { motion } from "framer-motion";

// import projectImage from "../assets/projects/project1.png";
import projectImage from "../assets/projects/project-1.webp";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

function FeaturedProject() {

  return (

    <section className="pb-10">

      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="my-20 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-center text-4xl font-bold tracking-wider text-transparent"
      >
        Featured Project
      </motion.h2>

      {/* Main Card */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col overflow-hidden rounded-3xl border border-stone-800 bg-stone-900/30 lg:flex-row"
      >

        {/* Image */}
        <div className="lg:w-1/2 overflow-hidden">

          <img
            src={projectImage}
            alt="Real Time Chat App"
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />

        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 lg:w-1/2">

          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Real-Time Communication Platform
          </p>

          <h3 className="mb-5 text-4xl font-bold text-white">
            Real Time Chat Application
          </h3>

          <p className="mb-6 leading-8 text-stone-400">
            Developed a real-time chat application using
            React.js, Node.js, Express.js, MongoDB, and
            Socket.io. Implemented secure authentication,
            instant messaging, online user status,
            responsive UI, and real-time communication
            features for seamless user interaction.
          </p>

          {/* Tech Stack */}
          <div className="mb-8 flex flex-wrap gap-3">

            {[
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Socket.io",
              "Tailwind CSS",
            ].map((tech, index) => (

              <span
                key={index}
                className="rounded-md border border-stone-700 bg-stone-900/70 px-3 py-1 text-sm text-cyan-300"
              >
                {tech}
              </span>

            ))}

          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">

            {/* GitHub */}
            <a
              href="https://github.com/your-github-link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-cyan-400"
            >
              <FaGithub />
              GitHub
            </a>

            {/* Live Demo */}
            <a
              href="https://your-live-demo-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-cyan-500 px-6 py-3 text-sm font-semibold text-cyan-400 transition duration-300 hover:bg-cyan-500 hover:text-black"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default FeaturedProject;
