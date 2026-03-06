import { motion } from "framer-motion";

export function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="blob bg-purple-600/20 w-[500px] h-[500px] top-[-100px] left-[-100px]"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="blob bg-cyan-600/20 w-[600px] h-[600px] bottom-[-100px] right-[-100px]"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
        className="blob bg-pink-600/10 w-[400px] h-[400px] top-[40%] left-[30%]"
      />
    </div>
  );
}
