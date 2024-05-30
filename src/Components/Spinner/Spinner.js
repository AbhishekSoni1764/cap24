import React from "react";
import style from "./spinner.module.css";
import SpinnerGif from "../../Assets/spinner.gif";

const Spinner = () => {
  return (
    <div className={style.spinner_container}>
      <div className={style.spinner}>
        <img src={SpinnerGif} alt="spinning-a'23" width="100%" />
      </div>
    </div>
  );
};

export default Spinner;
