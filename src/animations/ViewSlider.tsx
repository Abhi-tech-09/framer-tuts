import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const ViewSlider = () => {
  const [bannerIndex, setBannerIndex] = useState<"0" | "1">("0");
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen border space-y-5">
      <div className="flex justify-center items-center relative h-1/2 w-1/2 overflow-hidden">
        <AnimatePresence mode="sync">
          {bannerIndex === "0" && (
            <motion.div
              key="movie"
              className="absolute card card-side bg-base-100 shadow-2xl h-fit"
              initial={{
                opacity: 0,
                x: -200,
                y: 0,
                filter: "blur(5px)",
              }}
              animate={{
                opacity: [0.5, 1],
                y: [50, 0, 30, 0],
                x: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                x: 300,
              }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              <figure>
                <motion.img
                  initial={{
                    scale: 1.2,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                  }}
                  src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New movie is released!</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Watch</button>
                </div>
              </div>
            </motion.div>
          )}
          {bannerIndex === "1" && (
            <motion.div
              key={"album"}
              className="absolute card lg:card-side bg-base-100 shadow-xl"
              initial={{
                opacity: 0,
                x: -200,
                // y: 0,
                filter: "blur(5px)",
              }}
              animate={{
                opacity: 1,
                x: 0,
                // y: [50, 0, 30, 0],
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                x: 300,
                // y: 0,
              }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              <figure>
                <motion.img
                  initial={{
                    scale: 1.2,
                  }}
                  animate={{
                    scale: 1,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeIn",
                  }}
                  src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Listen</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex justify-center space-x-2">
        <button
          onClick={() => setBannerIndex("0")}
          className={`btn min-w-28 btn-primary btn-outline ${
            bannerIndex === "0" ? "btn-active" : ""
          }`}
        >
          Movie
        </button>
        <button
          onClick={() => setBannerIndex("1")}
          className={`btn min-w-28 btn-primary btn-outline ${
            bannerIndex === "1" ? "btn-active" : ""
          }`}
        >
          Album
        </button>
      </div>
    </div>
  );
};

export default ViewSlider;
