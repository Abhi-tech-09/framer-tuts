import { motion } from "motion/react";
import React from "react";

const Zoop = () => {
  return (
    <section className="space-y-5 grid h-screen place-content-center gap-2 px-8">
      <Link>Twitter</Link>
      <Link>Facebook</Link>
      <Link>LinkedIn</Link>
      <Link>Instagram</Link>
    </section>
  );
};

const Link = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      transition={{
        // staggerChildren: 0.09
      }}
      style={{lineHeight:0.85}}
      className="text-3xl uppercase block overflow-hidden relative"
      href="#"
    >
      <motion.div>
        {children
          ?.toString()
          .split("")
          .map((ch, index) => (
            <motion.span
              className="inline-block"
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: 0.25,
                delay: index * 0.02
              }}
            >
              {ch}
            </motion.span>
          ))}
      </motion.div>
      <motion.div className="absolute inset-0">
        {children
          ?.toString()
          .split("")
          .map((ch, index) => (
            <motion.span
              className="inline-block"
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: 0.25,
                delay: index * 0.02
              }}
            >
              {ch}
            </motion.span>
          ))}
      </motion.div>
    </motion.a>
  );
};

export default Zoop;
