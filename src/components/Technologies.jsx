import { DiMysql } from "react-icons/di"
import { FaCss3, FaHtml5, FaJava, FaJs, FaLaravel, FaPhp, FaNode } from "react-icons/fa"
import {  RiReactjsLine } from "react-icons/ri"
import { SiMongodb, SiSpringboot } from "react-icons/si"
import { animate, motion } from "framer-motion"
import { SiExpress } from "react-icons/si";

const iconVariants = (duration) => ({
    initial: { y: -10},
    animate : {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

function Technologies() {
  return (
    <div className="pb-10">
        <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{ opacity: 0, y: 100 }}
            viewport={{ once: true }}
            transition={{duration: 1.5}}
            className="my-10 bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-center text-4xl font-bold text-transparent">
            Technologies
        </motion.h2>
        <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                variants={iconVariants(2.5)}
                viewport={{ once: true }}>
                <FaHtml5 className="text-7xl text-[#E34F26]" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                viewport={{ once: true }}>
                <FaCss3 className="text-7xl text-[#1572B6]" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                viewport={{ once: true }}
                variants={iconVariants(5)}
                className="p-4">
                <FaJs className="text-7xl text-[#F7DF1E]" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                viewport={{ once: true }}
                variants={iconVariants(2)}
                className="p-4">
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                viewport={{ once: true }}
                variants={iconVariants(3)}
                className="p-4">
                <SiExpress className="text-7xl text-green-400" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                viewport={{ once: true }}
                variants={iconVariants(7)}
                className="p-4">
                <FaNode className="text-7xl text-green-400" />
            </motion.div>
        
            <motion.div
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                viewport={{ once: true }}
                variants={iconVariants(6)}
                className="p-4">
                <FaJava className="text-7xl text-[#007396]" />
            </motion.div>
            {/* <motion.div
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                variants={iconVariants(4)}
                className="p-4">
                <SiSpringboot className="text-7xl text-[#6DB33F]" />
            </motion.div> */}
            <motion.div
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                variants={iconVariants(2.5)}
                viewport={{ once: true }}
                className="p-4">
                <FaPhp className="text-7xl text-[#8892BF]" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                variants={iconVariants(3)}
                viewport={{ once: true }}
                className="p-4">
                <FaLaravel className="text-7xl text-[#FF2D20]" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                variants={iconVariants(5)}
                viewport={{ once: true }}
                className="p-4">
                <SiMongodb className="text-7xl text-[#47A248]" />
            </motion.div>
            <motion.div
                initial="initial"
                animate="animate"
                whileHover={{ scale: 1.2 }}
                variants={iconVariants(2)}
                viewport={{ once: true }}
                className="p-4">
                <DiMysql className="text-7xl text-[#4479A1]" />
            </motion.div>
            
        </motion.div>
    </div>
  )
}

export default Technologies