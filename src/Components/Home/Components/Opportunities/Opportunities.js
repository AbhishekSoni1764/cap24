import React from "react";
// import style from "./opportunities.module.css";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import ellipse3 from "../../../../Assets/ellipse3.svg";
import ellipse4 from "../../../../Assets/ellipse4.svg";
import { BsPeopleFill, BsFillLightbulbFill } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { BiNetworkChart } from "react-icons/bi";
import { FaFootballBall } from "react-icons/fa";
import { TbSocial } from "react-icons/tb";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { SiMinds } from "react-icons/si";
// import { GrPlan } from "react-icons/gr";
import { BsSpeedometer } from "react-icons/bs";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import styles from "./opportunities.module.css";
import Card from "./Card";
const Opportunities = () => {
  const data = [
    {
      title: "Interpersonal Skills",
      description:
        "Engage with diverse individuals and enhance communication skills, cultivating meaningful connections which are crucial for effective engagement.",
      icon: <BsPeopleFill />,
    },
    {
      title: "Trendsetter",
      description:
        "Discover what drives the modern generation by igniting new concepts that exactly match their needs.",
      icon: <BsGraphUpArrow />,
    },
    {
      title: "Strategic Planning and Execution",
      description:
        " Devise and implement plans smoothly, while showcasing your strategic prowess to drive the fest's success.",
      icon: <SiMinds />,
    },
    {
      title: "Effective Networking and Communication",
      description:
        "Build stronger professional ties by networking and communicating effectively with diverse audiences.",
      icon: <LiaNetworkWiredSolid />,
    },
    {
      title: "Social Confidence",
      description:
        "Enhance your social confidence by enriching inclusivity within your college community and encouraging collaboration.",
      icon: <TbSocial />,
    },
    {
      title: "Strategic Influence",
      description:
        "Influence decisions are crucial for success, shaping direction through strategic methods and impactful decisions.",
      icon: <BsSpeedometer />,
    },
    {
      title: "Entrepreneurial Platform for Innovation",
      description:
        "​​Join CAP to stand out from the competition and realise creative ideas crafted by you.",
      icon: <BsGlobeCentralSouthAsia />,
    },
  ];
  return (
    <section
      id="services"
      className={`px-10 md:pt-16 mb-0 md:mb-10 ${styles.radialBackground}`}
    >
      <div className="flex flex-col justify-center items-center justify-self-center">
        <div className={"text-center md:h-40"}>
          <Fade bottom>
            <h2
              className={`mb-4 capitalize w-full text-white sm:text-sm text-[2rem] md:text-[5rem] lg:text-7xl font-nexabold font-semibold text-center tracking-normal leading-normal ${styles.textShadow}`}
            >
              OPPORTUNITIES
            </h2>
          </Fade>
        </div>
        <div className="flex justify-center items-center gap-12 max-w-6xl mb-10 flex-wrap mt-11">
          {data.map((item, index) => {
            return (
              <Tilt>
                <Card data={item} key={index} />
              </Tilt>
            );
          })}
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Opportunities;
