import React from "react";
import Fade from "react-reveal/Fade";
import aaruushLogo from "../../../../Assets/Svg/aaruush-logo.svg";
import styles from "./aboutus.module.css";
const Aboutus = () => {
  return (
    <section
      className={`w-full h-[100%] px-10 flex flex-col lg:-mt-24 md:-mt-4 ${styles.radialBackground}`}
      id="about"
    >
      <div className="w-[100%] h-[50px] md:h-[100px] px-6 rounded-[1130px] bg-black blur-2xl lg:mt-10 sm:mt-[-31px]"></div>
      <div className="">
        <div className="">
          <div className="">
            <center>
              <div className="">
                <Fade bottom>
                  <div className="w-full md:h-[162px] mt-14">
                    <div
                      className={`w-full pb-10  md:py-10 text-white sm:text-sm text-[2rem] md:text-[5rem] lg:text-7xl font-semibold font-nexabold text-center tracking-normal leading-normal ${styles.textShadow}`}
                    >
                      ABOUT US
                    </div>
                  </div>
                </Fade>
              </div>
            </center>
            <Fade bottom>
              <div className="flex flex-col md:flex-row justify-between z-10 relative">
                <div className="md:w-[450px] md:h-[246px]">
                  <img
                    className="md:fixed md:top-24 absolute invisible md:visible"
                    alt="Group"
                    src={aaruushLogo}
                  />
                </div>
                <div className="w-full md:w-3/5 flex-col mt-10 md:mt-0 ">
                  <div
                    className={`font-nexa rounded-lg px-7 py-12 min-h-[369px] mx-auto text-justify text-lg items-center justify-center flex flex-col gap-y-5 font-normal mb-5 bg-gradient-to-br from-[#291263] to-[#21232F] to-96% ${styles.gradientBorder}`}
                  >
                    <p>
                      Aaruush is the student-run national level
                      techno-management fest of SRM Institute of Science and
                      Technology. Inaugurated by the late President, Dr. A.P.J.
                      Abdul Kalam in 2007, it has been a beacon of innovation,
                      and has left an indelible mark on the lives of countless
                      young minds.
                    </p>
                    <p>
                      Team Aaruush is a growing family of like-minded, brilliant
                      individuals, each driven by a passion to spearhead the
                      future. This year, the eighteenth edition of Aaruush
                      stands as a testament to the unwavering spirit of its
                      organisers and participants.
                    </p>
                    <p>
                      Join us on this extraordinary journey as we continue to
                      ignite the spark of innovation and redefine the limits of
                      what's achievable.
                    </p>
                  </div>
                </div>
              </div>
              <center>
                <div className="w-11/12 h-[86px] rounded-[1240px] bg-[#000000c9] top-[-90px] md:top-[-46px] relative blur-2xl"></div>
                <div className="w-[1160px] h-[100px] rounded-[1130px] bg-[#000000c9] top-[-90px] md:top-[-50px] relative blur-2xl"></div>
              </center>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
