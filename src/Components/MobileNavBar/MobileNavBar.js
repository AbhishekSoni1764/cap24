import React, { useState } from "react";
import Styles from "../MobileNavBar/MobileNavBar.module.css";
import { BiChevronsUp, BiChevronsDown } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const MobileNavBar = () => {
  const [nav, setNav] = useState({ y: 0 });
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={Styles.majorContainer}
        initial={{ y: 100 }}
        animate={nav}
      >
        <div
          className={Styles.push}
          onClick={() => {
            if (nav.y === -90) {
              setNav({ y: 0 });
            } else {
              setNav({ y: -90 });
            }
          }}
        >
          {nav.y === -90 ? <BiChevronsDown /> : <BiChevronsUp />}
        </div>
        <div className={Styles.btnCtn}>
          <Link to="/#">Home</Link>
          <Link
            onClick={() => {
              setNav({ y: 0 });
            }}
            to="/userprofile/dashboard"
          >
            Dashboard
          </Link>
          <Link
            onClick={() => {
              setNav({ y: 0 });
            }}
            to="/userprofile/task"
          >
            Tasks
          </Link>
          <Link
            onClick={() => {
              setNav({ y: 0 });
            }}
            to="/userprofile/leaderboard"
          >
            Leaderboard
          </Link>
          <Link
            onClick={() => {
              setNav({ y: 0 });
            }}
            to="/userprofile/editprofile"
          >
            Edit Profile
          </Link>
          <Link
            onClick={() => {
              setNav({ y: 0 });
            }}
            to="/guidelines"
          >
            Guidelines
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileNavBar;
