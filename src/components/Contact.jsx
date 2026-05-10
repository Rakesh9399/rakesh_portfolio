
import { CONTACT } from "../../constant/hero_content";

import { motion } from "framer-motion";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {

  return (

    <section
      id="contact"
      className="border-t border-stone-800 pb-10"
    >

      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="my-20 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-center text-4xl font-bold tracking-wider text-transparent"
      >
        Get In Touch
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        {/* Address */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="group relative overflow-hidden rounded-3xl border border-cyan-500/10 bg-gradient-to-br from-stone-900/80 to-black/80 p-8 backdrop-blur-xl transition duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(6,182,212,0.12)]"
        >

          {/* Glow Effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent_40%)] opacity-0 transition duration-500 group-hover:opacity-100"></div>

          {/* Top Glow Line */}
          <div className="absolute left-0 top-0 h-[2px] w-0 bg-cyan-400 transition-all duration-500 group-hover:w-full"></div>

          {/* Content */}
          <div className="relative z-10">

            {/* Icon */}
            <div className="mb-6 inline-flex rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4 text-4xl text-cyan-400 transition duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.35)]">

              <FaMapMarkerAlt />

            </div>

            {/* Title */}
            <h3 className="mb-3 text-2xl font-bold text-white">

              Location

            </h3>

            {/* Text */}
            <p className="leading-7 text-stone-400">

              Indore, Madhya Pradesh, India

            </p>

          </div>

        </motion.div>

        {/* Phone */}

        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="group relative overflow-hidden rounded-3xl border border-green-500/10 bg-gradient-to-br from-stone-900/80 to-black/80 p-8 backdrop-blur-xl transition duration-500 hover:border-green-400/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.12)]"
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.15),transparent_40%)] opacity-0 transition duration-500 group-hover:opacity-100"></div>

          {/* Top Glow Line */}
          <div className="absolute left-0 top-0 h-[2px] w-0 bg-green-400 transition-all duration-500 group-hover:w-full"></div>

          <div className="relative z-10">

            {/* Icon */}
            <div className="mb-6 inline-flex rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-4xl text-green-400 transition duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_25px_rgba(34,197,94,0.35)]">

              <FaPhoneAlt />

            </div>

            {/* Title */}
            <h3 className="mb-3 text-2xl font-bold text-white">

              Phone

            </h3>

            {/* Phone */}
            <a
              href="tel:+919399063053"
              className="text-stone-400 transition duration-300 hover:text-green-300"
            >
              +91 9399063053
            </a>

          </div>

        </motion.div>


        {/* Email */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          className="group relative overflow-hidden rounded-3xl border border-purple-500/10 bg-gradient-to-br from-stone-900/80 to-black/80 p-8 backdrop-blur-xl transition duration-500 hover:border-purple-400/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]"
        >

          {/* Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_40%)] opacity-0 transition duration-500 group-hover:opacity-100"></div>

          {/* Top Glow Line */}
          <div className="absolute left-0 top-0 h-[2px] w-0 bg-purple-400 transition-all duration-500 group-hover:w-full"></div>

          <div className="relative z-10">

            {/* Icon */}
            <div className="mb-6 inline-flex rounded-2xl border border-purple-500/20 bg-purple-500/10 p-4 text-4xl text-purple-400 transition duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]">

              <FaEnvelope />

            </div>

            {/* Title */}
            <h3 className="mb-3 text-2xl font-bold text-white">

              Email

            </h3>

            {/* Email */}
            <a
              href="mailto:mp966904@gmail.com"
              className="break-all text-stone-400 transition duration-300 hover:text-purple-300"
            >
              mp966904@gmail.com
            </a>

          </div>

        </motion.div>


      </div>

    </section>
  );
}

export default Contact;

