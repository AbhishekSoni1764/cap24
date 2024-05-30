import React from "react";
import { Link } from "react-router-dom";
import styles from "./notfound.module.css";
import envision from "../../Assets/envisionLogo.png";
import aaruush from "../../Assets/aaruush23.svg";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h1 className={styles.oops}>Oops!</h1>
        <h4 className={styles.h4}>
          E<span className={styles.span}>RROR 40</span>4
        </h4>
        <div className={styles.text}>
          <p>The page you are looking for does not exist.</p>
          <p>Maybe you mistyped the address or the page was moved.</p>
          <p>
            But you might wanna give{" "}
            <Link to="/" className={styles.link}>
              this
            </Link>{" "}
            a try !
          </p>
        </div>
        <div className={styles.aaruushlogo}>
          <img src={aaruush} alt="aaruush" />
        </div>
      </div>
      <div className={styles.envisionlogodiv}>
        <div className={styles.envisionlogo}>
          <img src={envision} alt="envision" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
