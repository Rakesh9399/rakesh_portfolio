
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
      className="border-t border-stone-800 pb-20"
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
          whileHover={{
            scale: 1.03,
            borderColor: "#06b6d4",
          }}
          className="rounded-2xl border border-stone-800 bg-stone-900/30 p-6 transition duration-300"
        >

          <div className="mb-4 text-3xl text-cyan-400">
            <FaMapMarkerAlt />
          </div>

          <h3 className="mb-2 text-xl font-semibold text-white">
            Location
          </h3>

          <p className="text-stone-400">
            {CONTACT.address}
          </p>

        </motion.div>

        {/* Phone */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          whileHover={{
            scale: 1.03,
            borderColor: "#06b6d4",
          }}
          className="rounded-2xl border border-stone-800 bg-stone-900/30 p-6 transition duration-300"
        >

          <div className="mb-4 text-3xl text-cyan-400">
            <FaPhoneAlt />
          </div>

          <h3 className="mb-2 text-xl font-semibold text-white">
            Phone
          </h3>

          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="text-stone-400 transition duration-300 hover:text-cyan-400"
          >
            {CONTACT.phoneNo}
          </a>

        </motion.div>

        {/* Email */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          whileHover={{
            scale: 1.03,
            borderColor: "#06b6d4",
          }}
          className="rounded-2xl border border-stone-800 bg-stone-900/30 p-6 transition duration-300"
        >

          <div className="mb-4 text-3xl text-cyan-400">
            <FaEnvelope />
          </div>

          <h3 className="mb-2 text-xl font-semibold text-white">
            Email
          </h3>

          <a
            href={`mailto:${CONTACT.email}`}
            className="break-all text-stone-400 transition duration-300 hover:text-cyan-400"
          >
            {CONTACT.email}
          </a>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;

