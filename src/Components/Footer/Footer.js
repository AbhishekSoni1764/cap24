import React from "react";
import a24 from "../../Assets/Svg/aaruush24-white big.svg";
import { IoLocationOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import aaruush from "../../Assets/Svg/aaruush24-white big.svg";
import envision from "./Assets/envision.svg";
import bg from "./Assets/bg.png";
import styles from "./Footer.module.css";
import Insta from "../../Assets/Svg/insta.svg";
import Twitter from "../../Assets/Svg/twitter.svg";
import LinkedIn from "../../Assets/Svg/linkedin.svg";
import Wikipidia from "../../Assets/Svg/wiki.svg";
import Youtube from "../../Assets/Svg/yt.svg";
import Facebook from "../../Assets/Svg/facebook.svg";

const Footer = () => {
  const socials = [
    {
      icon: LinkedIn,
      link: "https://www.linkedin.com/company/aaruush-srm-ist/",
    },
    {
      icon: Insta,
      link: "https://www.instagram.com/aaruush_srm/",
    },
    {
      icon: Facebook,
      link: "https://www.facebook.com/Aaruush.SRM/",
    },
    {
      icon: Twitter,
      link: "https://twitter.com/aaruushsrmist?s=21&t=Jt-FgIr4egsXTdjZJ6_LsQ",
    },
    {
      icon: Youtube,
      link: "https://www.youtube.com/@AaruushSRMIST",
    },
  ];
  return (
    <div className={styles.cover}>
      <div className={`p-[2rem] ${styles.footer} `}>
        <div className="flex justify-between w-[94%] h-16">
          <img src={a24} className="h-[50px] w-[350px]" alt="a24" />
          {/* <img
          src={aaruush}
          className="invisible md:visible h-[73px] w-[443px] mr-7"
          alt="a24"
        /> */}
          <img
            src={aaruush}
            alt="a24"
            className="absolute invisible md:relative md:visible h-[73px] w-[443px] mr-7"
          />
        </div>
        <div className="flex justify-between items-center w-[90%] h-max flex-col md:flex-row">
          <div className="flex flex-col md:w-[417px] h-[246px] gap-y-8">
            <div className="flex flex-col justify-between font-nexabold font-semibold">
              Office
            </div>
            <div className="flex justify-between items-center gap-12">
              <div className="h-6 w-4">
                <IoLocationOutline size="1.5rem" />
              </div>
              <p className="text-sm">
                Team Envision Room, PG 303, Main Campus, SRM IST, Kattankulathur,
                Tamil Nadu 603203
              </p>
            </div>
            <div className="flex justify-between items-center gap-12">
              <div className="h-6 w-4">
                <IoCallOutline size="1.5rem" />
              </div>
              <p className="text-sm">
                Mettina Varghese: +91 7024140570,+91 9884140570
              </p>
            </div>
            <div className="flex items-center gap-12">
              <div className="h-6 w-4">
                <MdOutlineEmail size="1.5rem" />
              </div>
              <p className="text-sm">envision@aaruush.org</p>
            </div>
          </div>
          <div className="flex flex-col justify-between items-center h-auto gap-8 md:gap-0 md:h-[300px] mt-12 md:mt-0">
            <div className="flex flex-row text-3xl gap-x-3 mt-5 md:gap-x-4 items-center justify-evenly">
              <div className="flex flex-row text-3xl gap-x-3 md:gap-x-4 items-center justify-center">
                {socials.map((social) => {
                  return (
                    <a
                      href={social.link}
                      target="_blank"
                      className="my-auto"
                      rel="noreferrer"
                    >
                      <div
                        className={`w-10 h-10 md:w-12 md:h-12 ml-1 mr-1 saturate-[0.95] hover:saturate-[1.5] hover:scale-105 rounded-full flex items-center justify-center transition-all `}
                      >
                        <img src={social.icon} alt="" />
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col text-3xl gap-x-3 md:gap-x-4 items-center justify-center md:mt-32 ">
              <div className="">
                {/* <img
                src={aaruush}
                alt="a24"
                className="h-[75px] w-90 absolute invisible md:relative md:visible"
              /> */}
                <img
                  src={envision}
                  alt="a24"
                  className="h-[65px] w-90 relative visible"
                />
              </div>
              <div className="flex gap-10 items-center mt-4 absolute invisible md:relative md:visible">
                <a href={socials[1].link} target="_blank" rel="noreferrer">
                  <img
                    src={Insta}
                    alt=""
                    className="saturate-[0.95] hover:saturate-[1.5] hover:scale-105"
                  />
                </a>
                <a href={socials[0].link} target="_blank" rel="noreferrer">
                  <img
                    src={LinkedIn}
                    alt=""
                    className="saturate-[0.95] hover:saturate-[1.5] hover:scale-105"
                  />
                </a>
              </div>
              {/* <div className="flex flex-row text-3xl gap-x-3 md:gap-x-4 items-center justify-center">
              {socials.map((social) => {
                return (
                  <a
                    href={social.link}
                    target="_blank"
                    className="my-auto"
                    rel="noreferrer"
                  >
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 ml-1 mr-1 saturate-[0.95] hover:saturate-[1.5] hover:scale-105 rounded-full flex items-center justify-center transition-all `}
                    >
                      <img src={social.icon} alt="" />
                    </div>
                  </a>
                );
              })}
            </div> */}
            </div>
          </div>
        </div>
        <div className="flex justify-center md:justify-between items-center w-[100vw] md:w-[90%] h-5 mt-8 md:mt-0">
          <div className="flex justify-around items-center gap-3 font-extrabold">
            <div>&copy; Copyright</div>
            <div>Aaruush'24</div>
            <div>.All Rights Reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
