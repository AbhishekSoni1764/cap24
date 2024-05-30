import React from "react";
import style from "./feedback.module.css";
import Tilt from "react-tilt";

const Ind = ({ title, desc }) => {
  return (
    <Tilt options={{ max: 15, reverse: true, scale: 1.03 }}>
      <div
        className={`flex flex-col items-center justify-between md:max-[450px]:w-[200px] w-auto md:w-80 min-h-[500px] flex-grow py-5 px-5 text-justify rounded-xl shadow-xl first-letter:min-w-[20rem] bg-gradient-to-br from-[#291263] to-[#21232F] to-96% ${style.gradientBorder}`}
      >
        <p className={style.description}>"{desc}"</p>
        <h4 className={`font-nexabold ${style.title}`}>{title}</h4>
      </div>
    </Tilt>
  );
};

export default Ind;
