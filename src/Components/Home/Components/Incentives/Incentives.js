import React from "react";
import styles from "./incentives.module.css";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import { HiOutlineDocumentText } from "react-icons/hi";
import { GiPoloShirt } from "react-icons/gi";
import { GrLinkedin } from "react-icons/gr";
import { FaTicketAlt } from "react-icons/fa";
import { TbCertificate } from "react-icons/tb";

const Incentives = () => {
  const List1 = [
    {
      title: "LOR from Aaruush",
      image: <HiOutlineDocumentText className="text-6xl text-white" />,
      description:
        "Receive a Letter of Recommendation, affirming your role as a valued Aaruush member.",
    },
    {
      title: "Accredited Certificates",
      image: <TbCertificate className="text-6xl text-white" />,
      description:
        "Each Campus Ambassador is awarded the Aaruush Campus Ambassador certificate with the highest industry accreditations.",
    },
    {
      title: "Exclusive Merchandise",
      image: <GiPoloShirt className="text-6xl text-white" />,
      description:
        "The Campus Ambassadors are gifted exclusive Aaruush merchandise that makes you stand out.",
    },
    {
      title: "LinkedIn Endorsement",
      image: <GrLinkedin className="text-6xl text-white" />,
      description:
        "The top-performing Campus Ambassadors are provided with the seal of endorsement on LinkedIn by Aaruush.",
    },
    {
      title: "Workshop Referral Codes",
      image: <FaTicketAlt className="text-6xl text-white" />,
      description:
        "Each Campus Ambassador stands to receive exclusive referral codes that grant access to paid workshops and learning opportunities",
    },
  ];

  return (
    <section
      id="incentives"
      className={`flex flex-col justify-center items-center px-10 overflow-y-hidden ${styles.radialBackground}`}
    >
      <div className="flex justify-center items-center text-center pb-10 pt-6">
        <Fade bottom>
          <h2
            className={`w-full py-8 text-white sm:text-sm text-[2rem] md:text-[5rem] font-nexabold font-semibold text-center tracking-normal leading-normal ${styles.textShadow}`}
          >
            INCENTIVES
          </h2>
        </Fade>
      </div>
      <div className="flex flex-wrap max-w-6xl mb-10 mt-11 gap-12 justify-center">
        {List1.map((data) => {
          return (
            <Tilt>
              <div
                className={` text-white px-8 py-6 transition-all duration-300 rounded-lg min-h-[338px] w-auto md:w-80  flex flex-col justify-start items-center gap-4 bg-gradient-to-br from-[#291263] to-[#21232F] to-96% ${styles.gradientBorder}`}
              >
                <div className="text-6xl text-white">{data.image}</div>
                <h4 className="font-nexa font-extrabold text-xl">
                  {data.title}
                </h4>
                <p className="text-lg text-center mt-2">{data.description}</p>
              </div>
            </Tilt>
          );
        })}
      </div>
    </section>
  );
};

export default Incentives;
