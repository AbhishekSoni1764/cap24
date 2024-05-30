import React ,{useEffect} from "react";
import style from "./Header.module.css";
import { BsGrid1X2 } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
// import { RiGuideLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";
import { IoStatsChartOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { Auth } from "aws-amplify";

const Header = () => {
  const location = window.location.href.split("/")[4]
    ? window.location.href.split("/")[4].toLowerCase()
    : "dashboard";

    useEffect(() => {
      checkUser();
      async function checkUser() {
        try {
          const authuser = await Auth.currentAuthenticatedUser();
          if (!authuser) {
            Cookies.remove("accessToken");
          }
        } catch {
          Cookies.remove("accessToken");
        }
      }
    }, []);
  return (
    <div className={style.nav}>
      <ul>
        <Link to="/">
          <li className={null}>
            <BiHomeAlt className={style.sign} />
            <p>Home</p>
          </li>
        </Link>
        <Link to="/userprofile/Dashboard">
          <li className={location === "dashboard" ? style.active : null}>
            <BsGrid1X2 className={style.sign} />
            <p>DashBoard</p>
          </li>
        </Link>
        <Link to="/Userprofile/Task">
          <li className={location === "task" ? style.active : null}>
            <FaTasks className={style.sign} />
            <p>Tasks</p>
          </li>
        </Link>
        <Link to="/Userprofile/Leaderboard">
          <li className={location === "leaderboard" ? style.active : null}>
            <IoStatsChartOutline className={style.sign} />
            <p>LeaderBoard</p>
          </li>
        </Link>
        <Link to="/Userprofile/EditProfile">
          <li className={location === "editprofile" ? style.active : null}>
            <ImProfile className={style.sign} />
            <p>My Profile</p>
          </li>
        </Link>
        {/* <Link to="/Userprofile/Guidelines">
          <li className={location === "guidelines" ? style.active : null}>
            <RiGuideLine className={style.sign} />
            <p>Guidelines</p>
          </li>
        </Link> */}
      </ul>
    </div>
  );
};

export default Header;
