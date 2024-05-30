/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import style from "./Home.module.css";
import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRecoilState } from "recoil";
import { reffrel_id } from "../../GlobalState";

import Hero from "./Components/Hero/Hero";
import Aboutus from "./Components/AboutUs/Aboutus";
import Opportunities from "./Components/Opportunities/Opportunities";
import FAQ from "./Components/FAQ/Faq";
import Incentives from "./Components/Incentives/Incentives";
import Responsibilities from "./Components/Responsibilities/Responsibilities";
import Contactus from "./Components/ContactUs/NewContactUs";
import Feedback from "./Components/Feedback/Feedback";
import Cookies from "js-cookie";
import Footer from "../../Components/Footer/Footer";
import HomeGuidelines from "../HomeGuidelines/HomeGuidelines"

const Home = (props) => {
  const { user } = props;
  const { ref_id } = useParams();
  const [reff_id, setreff_id] = useRecoilState(reffrel_id);

  useEffect(() => {
    if (ref_id && ref_id.includes("AARUUSH-")) {
      setreff_id(ref_id);
      Cookies.set("referralCode", ref_id, { expires: 5 });
    }
  }, []);

  return (
    <>
      <main className={"max-w-screen overflow-hidden"}>
        <Navbar user={user} />
        <Hero user={user} />
        <Aboutus />
        <Opportunities />
        <Incentives />
        <Responsibilities />
        <FAQ />
        <Feedback />
        {/* <HomeGuidelines /> */}
        <Contactus />
        <Footer />
      </main>
    </>
  );
};

export default Home;
