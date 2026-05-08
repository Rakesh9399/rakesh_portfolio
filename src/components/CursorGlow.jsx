
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function CursorGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (

    <motion.div
      animate={{
        x: position.x - 150,
        y: position.y - 150,
      }}
      transition={{
        type: "tween",
        ease: "backOut",
        duration: 0.3,
      }}
      className="pointer-events-none fixed left-0 top-0 z-50 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-3xl"
    />

  );
}

export default CursorGlow;
