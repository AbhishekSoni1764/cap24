import React from "react";
import style from "./incentives.module.css";
import Tilt from "react-tilt";

const Ind = ({ title, image, desc }) => {
  return (
    <Tilt options={{ max: 15, reverse: true, scale: 1.03 }}>
      <div className={style.incentivebox}>
        {/* <img className={style.icon11} src={image} alt="incentive img"></img> */}
        <div className="text-3xl">{image}</div>
        <h4 className={style.title}>
          <h3>{title}</h3>
        </h4>
        <p className={style.description}>{desc}</p>
      </div>
    </Tilt>
  );
};

export default Ind;
