import React from "react";
import styles from "./opportunities.module.css";

const Card = ({ data }) => {
  return (
    <div
      className={`flex flex-col items-center w-auto md:max-[450px]:w-60 md:w-80 h-max flex-grow py-5 px-5 text-justify rounded-xl shadow-xl first-letter:min-w-[20rem] min-h-[21rem] bg-gradient-to-br from-[#291263] to-[#21232F] to-96% ${styles.topBorder}`}
    >
      <div className="text-[4.5rem] mt-3 mb-6">{data.icon}</div>
      <div className="text-2xl text-center mb-5 font-nexa font-semibold">
        {data.title}
      </div>
      <div className="text-center">{data.description}</div>
    </div>
  );
};

export default Card;
