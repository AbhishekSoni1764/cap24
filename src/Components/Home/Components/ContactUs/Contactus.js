import React from "react";
import style from "./contactus.module.css";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
//import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
//import { BsTelephoneFill, BsInboxFill } from "react-icons/bs";
// import { Link } from "react-router-dom";s

const Contactus = () => {
  const data_1 = [
    {
      name: "Aditya Singh",
      number: "+91 9729663279",
    },

    {
      name: "Akarsh Kishore",
      number: "+91 9533522228",
    },
  ];

  const data_2 = [
    {
      name: "Raksha Thakur",
      number: "+91 8090428847",
    },

    {
      name: "Sahil Das",
      number: "+91 8790431812",
    },
  ];

  return (
    <section id="contactus" className="p-[40px]">
      <div className="flex-col items-center justify-center">
        <div>
          <Fade bottom>
            <div
              className={`w-full h-[155px]  text-white sm:text-sm text-[2rem] md:text-[5rem] text-center tracking-normal leading-normal ${style.textShadow}`}
            >
            <h2 className="font-nexabold font-semibold py-8"> CONTACT US </h2>
            </div>
          </Fade>
        </div>

        <Fade bottom>
          <Tilt options={{ max: 4, reverse: true, scale: 1.03 }}>
            <div
              className={
                "bg-[#ffffff20] backdrop-blur-sm rounded-3xl p-2 md:p-5 mt-8 w-full"
              }
              style={{
                border: "1px solid #ffffff20",

                borderImage:
                  "linear-gradient(225.62deg, rgba(255, 255, 255, 0.63) -13.24%, rgba(255, 255, 255, 0.2) 118.1%)",
              }}
            >
              <div className="w-[90%] md:w-1/2 mx-auto justify-center flex flex-col xl:flex-row gap-x-44 ">
                <div>
                  {data_1.map((item, index) => {
                    return (
                      <a
                        className="flex items-center justify-center md:gap-8 gap-3 group cursor-pointer relative text-center"
                        href={`tel:${item.number}`}
                        key={index}
                      >
                        <div
                          className={
                            "bg-[rgba(255, 255, 255, 0.0)] backdrop-blur-sm rounded-3xl p-2 md:p-5 my-8 w-full hover:scale-105 transition-all"
                          }
                          style={{
                            border: "1px solid rgba(255, 255, 255, 0.0)",

                            borderImage:
                              "linear-gradient(225.62deg, rgba(255, 255, 255, 0.0) -13.24%, rgba(255, 255, 255, 0.0) 118.1%)",
                          }}
                        >
                          <div
                            className=" text-white w-full rounded-2xl py-8 px-6 lg:px-20"
                            style={{
                              background:
                                "linear-gradient(264.22deg, #907AD6 -3.18%, #7024C4 103.56%)",
                            }}
                          >
                            <div className="flex justify-center items-center flex-col xl:w-32">
                              <h4 className="text-lg font-bold">{item.name}</h4>
                              <p className="text-xs py-1">{item.number}</p>
                              <p className="rounded-full bg-white w-fit text-black p-1 text-xl">
                                <a href="mailto:csiorg@aaruush.net">
                                  <MdEmail />
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
                <div>
                  {data_2.map((item, index) => {
                    return (
                      <a
                        className="flex items-center justify-center md:gap-8 gap-3 group cursor-pointer relative text-center"
                        href={`tel:${item.number}`}
                        key={index}
                      >
                        <div
                          className={
                            "bg-[rgba(255, 255, 255, 0.0)] backdrop-blur-sm rounded-3xl p-2 md:p-5 my-8 w-full hover:scale-105 transition-all"
                          }
                          style={{
                            border: "1px solid rgba(255, 255, 255, 0.0)",

                            borderImage:
                              "linear-gradient(225.62deg, rgba(255, 255, 255, 0.0) -13.24%, rgba(255, 255, 255, 0.0) 118.1%)",
                          }}
                        >
                          <div
                            className=" text-white w-full rounded-2xl py-8 px-6  lg:px-20"
                            style={{
                              background:
                                "linear-gradient(264.22deg, #907AD6 -3.18%, #7024C4 103.56%)",
                            }}
                          >
                            <div className="flex justify-center items-center flex-col xl:w-32">
                              <h4 className="text-lg font-bold">{item.name}</h4>
                              <p className="text-xs py-1">{item.number}</p>
                              <p className="rounded-full bg-white w-fit text-black p-1 text-xl">
                                <a href="mailto:csiorg@aaruush.net">
                                  <MdEmail />
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
                {/*
                <a
                  className="flex items-center justify-center md:gap-8 gap-3 group cursor-pointer relative text-center"
                  href={`mailto:csiorg@aaruush.net`}
                  // key={index}
                >
                  <div
                    className="rounded-full bg-slate-600 p-2 text-3xl
                    group-hover:bg-[#6d2ec4] transition-all
                    absolute left-0 -z-10 group-hover:-left-[5rem] group-hover:z-10 opacity-0 group-hover:opacity-100 duration-500
                    "
                  >
                    <BsInboxFill />
                  </div>
                  {/* size={60} */}
                {/*
                  <div
                    className="text-white w-full rounded-full p-4 px-7 hover:scale-105 transition-all"
                    style={{
                      background:
                        "linear-gradient(264.22deg, #907AD6 -3.18%, #7024C4 103.56%)",
                    }}
                  >
                    <div>
                      <h4 className="text-xl font-bold">
                        Corporate Strategy and Implementation
                      </h4>
                      <h4 className="text-lg font-bold">csiorg@aaruush.net</h4>
                    </div>
                  </div>
                  </a>*/}

                {/* <div className="flex items-center">
                <img src={TeleIcon} alt="..." className="w-36 h-24" />
                <div
                  className="text-white w-full h-12 p-4 rounded-full mb-4"
                  style={{
                    background:
                      "linear-gradient(264.22deg, #907AD6 -3.18%, #7024C4 103.56%)",
                  }}
                ></div>
              </div>
              <div className="flex items-center">
                <img src={TeleIcon} alt="..." className="w-36 h-24" />
                <div
                  className="text-white w-full h-12 p-4 rounded-full mb-4"
                  style={{
                    background:
                      "linear-gradient(264.22deg, #907AD6 -3.18%, #7024C4 103.56%)",
                  }}
                ></div>
              </div>
              <div className="flex items-center">
                <img src={TeleIcon} alt="..." className="w-36 h-24" />
                <div
                  className="text-white w-full h-12 p-4 rounded-full mb-4"
                  style={{
                    background:
                      "linear-gradient(264.22deg, #907AD6 -3.18%, #7024C4 103.56%)",
                  }}
                ></div>
              </div> */}
              </div>
            </div>
          </Tilt>
        </Fade>
      </div>
    </section>
  );
};

export default Contactus;

// Aditya Singh - Corporate Strategy and Implementation
// +919729663279

// Akarsh Kishore - Corporate  Strategy and Team Outreach
//  +919533522228

// Raksha Thakur - Corporate Strategy and Implementation
//  +918090428847

// Sahil Das  - Corporate Strategy and Team Outreach
// +918790431812
