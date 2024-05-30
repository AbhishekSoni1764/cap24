import React from "react";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { RiProfileLine } from "react-icons/ri";
import { BiNetworkChart } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { MdEventNote } from "react-icons/md";
import { RiPrinterCloudFill } from "react-icons/ri";
import Card from "../Opportunities/Card";
import styles from "./responsibilities.module.css";

const Responsibilities = () => {
  const data = [
    {
      title: "Aaruush Ambassadors",
      description:
        "Share the passion for Aaruush on and off campus. Make the eventgoers excited and anticipatory with your marketing skills.",
      icon: <HiOutlineSpeakerphone />,
    },
    {
      title: "Digital Pioneers",
      description:
        "Do you appreciate the internet and consider yourself a digital expert? Be a Digital Maverick and lead Aaruush's digital transformation.",
      icon: <RiPrinterCloudFill />,
    },
    {
      title: "Sponsorship Catalysts",
      description:
        "Spark connections to fuel Aaruush's success, leaving an indelible mark by securing sponsorships that propel Aaruush to new heights.",
      icon: <MdEventNote />,
    },
    {
      title: "PR Strategists",
      description:
        "As a public relations powerhouse, you will promote Aaruush and build community partnerships.",
      icon: <FaHandshake />,
    },
    {
      title: "Design Innovators",
      description:
        "Illuminate Aaruush with visionary designs that mesmerize and inspire the audience.",
      icon: <RiProfileLine />,
    },
    {
      title: "Experience Architects",
      description:
        "Create unforgettable encounters by perfectly arranging events to make every moment memorable.",
      icon: <FaUsers />,
    },
  ];

  return (
    <section
      className={`px-10 flex flex-col justify-center items-center ${styles.radialBackground}`}
    >
      <div className="flex-col items-center justify-center">
        <div className="text-center md:pt-10">
          <Fade bottom>
            <h2
              className={`w-full h-[155px] py-8 text-white sm:text-sm text-[2rem] md:text-[5rem] font-nexabold font-semibold text-center tracking-normal leading-normal ${styles.textShadow}`}
            >
              RESPONSIBILITES
            </h2>
          </Fade>
        </div>
        <div className="flex flex-wrap max-w-6xl mb-10 gap-12 md:mt-11 justify-center z-30">
          {data.map((item, index) => (
            <Tilt key={index}>
              <Card data={item} />
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Responsibilities;
