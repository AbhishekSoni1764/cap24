import React, { useEffect, useState } from "react";
import styles from "./faq.module.css";
import Fade from "react-reveal/Fade";
import Newfaq from "./newfaq";

const FAQ = () => {
  const [limit, setLimit] = useState(5);
  const faqList = [
    {
      Q: "What is the Campus Ambassador Program for Aaruush?",
      A: "Campus Ambassador Program (CAP) is an engaging opportunity for all students in college from across the country to showcase their communication, interactive and management skills, helping Aaruush spread across the country.",
    },
    {
      Q: "Who can participate in the Campus Ambassador Program?",
      A: "All college students, with a minimum of 150 Instagram followers or a minimum of 150 friends on Facebook or 50 connections on LinkedIn (or) a student who is a part of multiple student clubs are eligible for the same.",
    },
    {
      Q: "Does becoming a Campus Ambassador for Aaruush require any registration fee?",
      A: "There is NO registration fee to become a Campus Ambassador for Aaruush.",
    },
    {
      Q: "What are the responsibilities of a Campus Ambassador for Aaruush?",
      A: (
        <div>
          <ul className="list-disc px-6">
            <li>Representing Aaruush in their respective campuses.</li>
            <li>Individually contacting prospective students to become CA via email and/or social media.</li>
            <li>Contribution to social media activities and campaigns.</li>
            <li>Planning and hosting events on campus Providing feedback and sharing new ideas from the university’s students.</li>
            <li>Participation in focus groups and market research.</li>
            <li>Getting Registrations for webinars, workshops, conclaves and all relevant events.</li>
            <li>Sales: Generating sales of paid events and workshops, common registrations, merchandise, etc. Introduce more CAs to the Campus Ambassador Program.</li>
            <li>Introduce more Campus Ambassadors to the Campus Ambassador Program.</li>
            <li>Grow Aaruush community across campuses across the country.</li>
          </ul>
        </div>
      ),
    },
    {
      Q: "How long is the tenure of a Campus Ambassador for Aaruush?",
      A: "The tenure of a Campus Ambassador for Aaruush depends on the tenure of the edition of that year.",
    },
    {
      Q: "How can I apply to become a Campus Ambassador for Aaruush?",
      A: (
        <ul className="list-disc px-6">
          <li>
            You can apply to become a Campus Ambassador for Aaruush in the following ways:
            <ol className="list-[circle] ml-4">
              <li>Online portal - which will be available at the Aaruush website.</li>
              <li>Via recommendation/contact of students from other colleges by the team members of Aaruush.</li>
            </ol>
          </li>
        </ul>
      ),
    },
    {
      Q: "How many Campus Ambassadors does Aaruush usually select?",
      A: "There is no specific number for how many Campus Ambassadors will be selected. They will be selected as per the requirements.",
    },
    {
      Q: "How can I contact the organisers of Aaruush if I have any questions about the Campus Ambassador Program?",
      A: "You can contact us via the email ID given or through the phone numbers provided at the bottom of our website.",
    },
    {
      Q: "What kind of support will I receive from the fest organizers as a Campus Ambassador for Aaruush?",
      A: (
        <div>
          <ul className="list-disc px-6">
            <li>Coupons</li>
            <li>Internships and Mentorships</li>
            <li>Certificates</li>
            <li>Letter Of Recommendation</li>
            <li>LinkedIn Endorsements</li>
            <li>Referral Code for Paid workshops</li>
            <li>Young leadership Summit (Meet & Greet)</li>
            <li>Merchandise</li>
            <li>Free Courses</li>
            <li>Discounts</li>
            <li>Accommodation</li>
          </ul>
        </div>
      ),
    },
    {
      Q: "Can I participate in Aaruush as a student even if I'm not a Campus Ambassador?",
      A: "Yes, you can participate in Aaruush even if you are not a Campus Ambassador.",
    },
    {
      Q: "Can I continue to be a Campus Ambassador for Aaruush in subsequent years?",
      A: "Yes, you can continue to be a Campus Ambassador for Aaruush in the subsequent years.",
    },
    {
      Q: "What are the key objectives of the Aaruush Campus Ambassador Program?",
      A: "The Campus Ambassador Program focuses on empowering individuals to ignite excitement, expand digital prowess, make compelling content, and nurture positive relationships.",
    },
  ];

  const [data, setData] = useState([...faqList]);

  useEffect(() => {
    setData(faqList.slice(0, limit));
  }, [limit]);

  return (
    <section
      id="faq"
      className={`flex flex-col w-full justify-center items-center gap-y-4 text-white px-10 ${styles.radialBackground}`}
    >
      <Fade bottom>
        <p
          className={`w-full h-auto md:h-[155px] py-8 text-white text-center text-[2rem] md:text-[5rem] font-nexabold font-semibold tracking-normal leading-normal ${styles.textShadow}`}
        >
          FAQ
        </p>
      </Fade>
      <div
        className={`flex flex-col gap-y-7 md:w-[67rem] p-4 md:p-12 mt-11 rounded-2xl bg-gradient-to-br from-[#291263] to-[#21232F] ${styles.topBorder}`}
      >
        <Fade bottom>
          {data.map((item, idx) => (
            <Newfaq data={item} key={idx} />
          ))}
        </Fade>
        <Fade bottom>
          <div className="w-full flex justify-center">
            {limit === faqList.length ? (
              <button
                className="bg-[#663399] text-white font-nexabold text-lg rounded-xl px-5 py-2"
                onClick={() => setLimit(5)}
              >
                Read Less
              </button>
            ) : (
              <button
                className="bg-[#663399] text-white font-nexabold text-lg rounded-xl px-5 py-2"
                onClick={() => setLimit(faqList.length)}
              >
                Load More
              </button>
            )}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default FAQ;
