import { EXPERIENCES } from "../../constant/hero_content"
import { motion } from "framer-motion"

function Experience() {
    return (
        <section id="experience" className="pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="my-10 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-center text-4xl font-bold text-transparent">Experience
            </motion.h2>
            <div>
                {EXPERIENCES.map((experience, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-stone-400">
                                {experience.year}
                            </p>
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="w-full max-w-xl lg:w-3/4">
                            <h3 className="mb-2 font-semibold">
                                {experience.role} - {" "}
                                <span className="text-sm text-stone-500">{experience.company}</span>
                            </h3>
                            <p className="mb-4 text-stone-400">{experience.description}</p>
                            <div className="mt-5 flex flex-wrap gap-3">
                                {experience.technologies.map((tech, index) => (
                                    <span
                                        className="mr-2 mt-2 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300"
                                        key={index}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Experience