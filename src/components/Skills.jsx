import { animate, motion } from "framer-motion"


const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

function Skills() {
    return (
        <section id="skills" className="pb-20">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="my-20 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-center text-4xl font-bold text-transparent">
                Skills
            </motion.h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

                {/* Frontend */}

                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    variants={iconVariants(3)}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-stone-800 p-6">
                    <h3 className="mb-4 text-xl font-semibold text-cyan-400">
                        Frontend
                    </h3>
                    <ul className="space-y-2 text-stone-300">
                        <li>React.js</li>
                        <li>JavaScript</li>
                        <li>Tailwind CSS</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                    </ul>
                </motion.div>

                {/* Backend */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    variants={iconVariants(3)}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-stone-800 p-6">
                    <h3 className="mb-4 text-xl font-semibold text-cyan-400">
                        Backend </h3>
                    <ul className="space-y-2 text-stone-300"> <li>Node.js</li>
                        <li>Express.js</li>
                        <li>PHP</li>
                        <li>Laravel</li>
                    </ul>
                </motion.div>

                {/* Database */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    variants={iconVariants(3)}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-stone-800 p-6">
                    <h3 className="mb-4 text-xl font-semibold text-cyan-400">
                        Database </h3>
                    <ul className="space-y-2 text-stone-300">
                        <li>MongoDB</li>
                        <li>MySQL</li>
                    </ul>
                </motion.div>

                {/* Tools */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    variants={iconVariants(3)}
                    viewport={{ once: true }}
                    className="rounded-2xl border border-stone-800 p-6">
                    <h3 className="mb-4 text-xl font-semibold text-cyan-400">
                        Tools
                    </h3>
                    <ul className="space-y-2 text-stone-300">
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Postman</li>
                        <li>VS Code</li>
                    </ul>
                </motion.div>
            </div>
        </section>
    );
}


export default Skills;