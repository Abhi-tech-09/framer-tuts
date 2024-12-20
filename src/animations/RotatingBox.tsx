import { AnimatePresence, motion } from "motion/react";
import React, { useState } from "react";

const RotatingBox = () => {
  const [vis, setVis] = useState(true);
  return (
    <div className="h-80 w-80 flex gap-10 items-center justify-center flex-col">
      <motion.button
        layout
        className="btn btn-primary"
        onClick={() => setVis(!vis)}
      >
        Leave
      </motion.button>
      <AnimatePresence mode="popLayout">
        {vis && (
          <motion.div
            className="h-40 w-40 bg-zinc-400 m-auto"
            initial={{
              scale: 0,
              opacity: 0,
              rotate: "0deg",
            }}
            animate={{
              scale: 1,
              opacity: 1,
              rotate: "360deg",
            }}
            transition={{
              ease: "easeIn",
              duration: "3",
              type: "spring",
            }}
            exit={{
              scale: 2, 
              opacity:0
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RotatingBox;
