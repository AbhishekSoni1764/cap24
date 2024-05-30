import React from "react";
import styles from "./hero.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
// import body from "../../images/globe.svg";
// import homeavatar from "../../images/homeavatar.svg";
// import { Auth } from "aws-amplify";
import herobg from "../../images/hero-img.svg";
import rectangleButton from "../../images/rectangleButton.svg";
import ellipse1 from "../../../../Assets/ellipse1.svg";
import ellipse2 from "../../../../Assets/ellipse2.svg";
import bgdesign1 from "../../../../Assets/default.png";
import { Auth, Amplify } from "aws-amplify";
import config from "../../../../aws-exports";
import VideoPreviewer from "./videoPreviewer";

Amplify.configure({ ...config, ssr: true });

const Hero = ({ user }) => {
  return (
    <section
      id="hero"
      className={`w-full min-h-screen  md:min-h-[117vh] relative inset-0 bg-cover ${styles.bgimage} pt-16`}
    // style={{ backgroundImage: `url('../../images/HeroBg.svg')` }}
    >
      {/* <img src={herobg} className="absolute" /> */}
      <div
        className={"p-10"}
        style={{
          backgroundImage: `url(${ellipse1}), url(${ellipse2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "left top, right bottom",
        }}
      >
        <AnimatePresence exitBeforeEnter>
          <div
            className={"flex flex-col justify-center "}
            style={{
              lineHeight: "1.25",
              gap: "0	rem",
              letterSpacing: "0.2rem",
            }}
          >
            {/* <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.7 } }}
              exit={{ opacity: 0 }}
            >
              <div
                className=" sm:text-[5rem] md:mt-8 mb-8 text-4xl"
                style={
                  {
                    // letterSpacing: "0.1rem",
                  }
                }
              >
                Aaruush '24
              </div>
              <div
                className={`w-full md:mt-8 mb-8 sm:text-[5rem] text-white text-7xl font-semibold font-nexabold text-center tracking-normal leading-normal ${styles.textShadow}`}
              >
                Aaruush '24
              </div>
            </motion.h1> */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.7 } }}
              exit={{ opacity: 0 }}
            >
              <div
                className={`${styles.textShadow} sm:text-sm text-[2rem] md:text-[5rem] sm:mt-4 md:mt-6 lg:mt-16 w-screen md:mb-12 lg:text-center flex flex-row  items-center font-nexabold`}
              >
                Campus Ambassador
              </div>
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.9 } }}
              exit={{ opacity: 0 }}
            >
              <div
                className={`sm:text-sm text-[2rem] md:text-[5rem] mb-4 ${styles.textShadow2} ${styles.outlinetitle} md:-mt-4 flex flex-row text-[#0A032C] items-center w-screen font-nexabold`}
              >
                Program
              </div>
            </motion.h1>
            {/* <motion.div className="flex justify-center items-center"> */}
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.9 } }}
              exit={{ opacity: 0 }}
              className={
                "opacity-75 max-sm:text-sm  max-sm:mx-auto sm:text-2xl sm:justify-start sm:text-left font-bold"
              }
            >
              Represent. Rise. Revolutionize.
            </motion.h2>
            {/* <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.9 } }}
              exit={{ opacity: 0 }}
              className={
                "font-[300] font-[Baloo Thambi 2] opacity-75 max-sm:text-sm  max-sm:mx-auto sm:text-2xl sm:justify-start  sm:text-left"
              }
              style={{}}
            >
              focused on social connection
            </motion.h2>
            {/* </motion.div> */}
            <motion.div
              // whileHover={{ scale: 1.05 }}
              initial={{ x: -900 }}
              animate={{
                x: 0,
                transition: { delay: 0.4 },
              }}
              exit={{ x: 900 }}
            >
              {user ? (
                <Link to="/UserProfile/Dashboard">
                  <button
                    className={
                      "rounded-2xl mt-7 md:mt-10 relative overflow-hidden transform transition-transform duration-300 hover:scale-110 cursor-pointer flex items-center justify-center w-40 text-white font-nexa text-lg"
                    }
                  >
                    <img
                      src={rectangleButton}
                      className="h-12 md:h-14"
                      alt="Rectangle Button"
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-[#000302c8] font-nexabold text-md">
                      Dashboard
                    </span>
                  </button>
                </Link>
              ) : (
                <button
                  className={
                    "rounded-2xl mt-10 md:mt-12 relative overflow-hidden transform transition-transform duration-300 hover:scale-110 cursor-pointer flex items-center justify-center w-40 text-white font-nexa text-lg"
                  }
                  onClick={() => {
                    Auth.federatedSignIn({ provider: "Google" });
                  }}
                >
                  <img
                    src={rectangleButton}
                    className="h-12 md:h-14"
                    alt="Rectangle Button"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-[#000302c8] font-nexabold text-md">
                    Register Now
                  </span>
                </button>
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.9 } }}
              exit={{ opacity: 0 }}
              className={
                "flex md:justify-start font-nexabold mb-4 mt-12 md:mt-14 md:z-[100] "
              }
            >
              <VideoPreviewer />
            </motion.div>
          </div>
          {/* <div className={style.image_Ctn}>
            <img
              src={homeavatar}
              className={style.animated}
              alt="homeimg"
            ></img>
          </div> */}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
