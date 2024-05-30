import React from "react";
import style from "./footer.module.css";
import Fade from "react-reveal/Fade";
import { ImTwitter } from "react-icons/im";
import { ImFacebook } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { ImYoutube } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footer_top}></div>
      <Fade bottom>
        <div></div>
      </Fade>
    </footer>
  );
};

export default Footer;
