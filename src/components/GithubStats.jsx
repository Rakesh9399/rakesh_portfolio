
import { GitHubCalendar } from "react-github-calendar";


import { motion } from "framer-motion";

function GithubStats() {

  return (

    <section className="pb-10">

      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="my-10 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-center text-4xl font-bold tracking-wider text-transparent"
      >
        GitHub Activity
      </motion.h2>

      {/* Calendar Card */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="overflow-x-auto rounded-2xl border border-stone-800 bg-stone-900/30 p-6"
      >

        <GitHubCalendar
          username="rakesh9399"
          colorScheme="dark"
          fontSize={14}
          blockSize={15}
          blockMargin={5}
        />

      </motion.div>

    </section>
  );
}

export default GithubStats;

