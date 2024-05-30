import React from "react";
import style from "./contactus.module.css";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import { CiMail, CiLinkedin } from "react-icons/ci";

const Contactus = () => {
  const contacts = [
    {
      name: "Shron Wani",
      number: "+91 8956058262",
      designation: "Secretariat",
      linkedin: "https://www.linkedin.com/in/shron-wani/",
    },
    {
      name: "Yuvraj Purkayastha",
      number: "+91 8101480744",
      designation: "Corporate Strategy & Implementation",
      linkedin: "https://www.linkedin.com/in/yuvraj-purkayastha-3102112aa/",
    },
    {
      name: "Harshwardhan Singh Rathore",
      number: "+91 7709248793",
      designation: "Corporate Strategy & Implementation ",
      linkedin: "https://www.linkedin.com/in/manazir-musthafa-9821a61ba",
    },
  ];

  return (
    <section id="contactus" className={`py-[40px] px-[20px] ${style.radialBackground}`}>
      <div className="flex flex-col items-center justify-center">
        <Fade bottom>
          <div className={`w-full h-[155px] text-white text-center tracking-normal leading-normal ${style.textShadow}`}>
            <h2 className="font-nexabold font-semibold pb-8 md:py-8 text-[2rem] sm:text-sm md:text-[5rem]">CONTACT US</h2>
          </div>
        </Fade>
        <Fade bottom>
          <div className="grid grid-cols-1 md:grid-cols-3 justify-center px-[1.55rem] flex-wrap w-auto md:max-w-6xl gap-12">
            {contacts.map((contact, idx) => (
              <div key={idx} className="basis-full md:basis-[48%] font-[Inter] z-30">
                <Tilt options={{ max: 5, reverse: true, scale: 1.03 }}>
                  <div className={`flex flex-col justify-evenly items-center rounded-lg p-3 w-auto md:w-80 min-h-[338px] bg-gradient-to-br from-[#291263] to-[#21232F] ${style.gradientBorder}`}>
                    <div className="rounded-[2rem] p-4 flex flex-col text-center gap-y-6">
                      <div className="text-xl font-bold">{contact.name}</div>
                      <div className="text-sm">{contact.designation}</div>
                      <a href={`tel:${contact.number}`} className="text-white hover:text-[#9853e2] font-nexa font-semibold">{contact.number}</a>
                      <div className="flex flex-row justify-center gap-x-4">
                        <a href="mailto:csiorg@aaruush.net?subject=CSI%20Query&body=Hello,%0D%0AThis is a query regarding the Campus Ambassador Program." className="text-[#7024C4] hover:text-white cursor-pointer text-3xl bg-white hover:bg-[#7024C4] transition-all p-3 rounded-full">
                          <CiMail />
                        </a>
                        <a href={contact.linkedin} className="text-[#7024C4] hover:text-white cursor-pointer text-3xl bg-white hover:bg-[#7024C4] transition-all p-3 rounded-full">
                          <CiLinkedin />
                        </a>
                      </div>
                    </div>
                  </div>
                </Tilt>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Contactus;

