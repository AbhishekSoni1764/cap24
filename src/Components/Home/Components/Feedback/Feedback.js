import React from "react";
import style from "./feedback.module.css";
import Fade from "react-reveal/Fade";
import Ind from "./Ind";

const Feedback = () => {
  const feedbackList = [
    {
      title: "By Vishakha Jain",
      description:
        "Being a campus ambassador of Aaruush was a great opportunity for me. It helped me socialize with new people and I got to explore a lot of things! All the events and tasks were full of excitement and the team members were very supportive and active during the entire fest. Thank you team Aaruush for giving me such an opportunity.",
    },
    {
      title: "By Janhvi Tiwari",
      description:
        "So basically, my experience with Aaruush was really amazing. Acting as a student ambassador offered me a chance to grow my leadership and communication skills, and also inspired me to take a more active role in representing the colleges. I am able to explore myself now. It helped me to build my professional personality among the public and helped me gain a positive attitude. So overall I am satisfied enough that I had chosen the Aaruush program for Campus Ambassador.",
    },
    {
      title: "By Himanshu Singh Yadav",
      description:
        "I would say that this entire experience as a Campus Ambassador for Aaruush helped me a lot in enhancing my skill set. I learned a lot throughout this time and got much better at communication, negotiation, marketing, content creation, and a lot of other domains. This also gave me insights into how a huge event or project is organized efficiently. It also improved my management and leadership qualities. So, overall it was a great experience with a lot of opportunities to learn.",
    },
  ];

  return (
    <section
      id="incentives"
      className={`flex flex-col justify-center items-center py-10 px-10 md:px-10 ${style.radialBackground}`}
    >
      <Fade bottom>
        <div
          className={`w-full py-10 text-white text-center ${style.textShadow}`}
        >
          <h2 className="font-nexabold text-[2rem] md:text-[5rem]">FEEDBACK</h2>
        </div>
      </Fade>
      <Fade bottom>
        <div className="flex flex-wrap justify-center md:max-w-6xl gap-11 mt-11">
          {feedbackList.map((feedback, index) => (
            <Ind key={index} title={feedback.title} desc={feedback.description} />
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Feedback;
