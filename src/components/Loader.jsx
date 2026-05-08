
import { motion } from "framer-motion";

import myLogo from "../assets/profile_image/logo.png";

function Loader() {

    return (

        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                    opacity: 1,
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                }}
            >

                <img
                    src={myLogo}
                    alt="Loading Logo"
                    className="h-40 w-40 object-contain drop-shadow-[0_0_25px_rgba(6,182,212,0.8)]"
                />
                {/* <p className="mt-4 text-lg tracking-[0.3em] text-cyan-400">
                    RAKESH
                </p> */}

            </motion.div>

        </div>
    );
}

export default Loader;

