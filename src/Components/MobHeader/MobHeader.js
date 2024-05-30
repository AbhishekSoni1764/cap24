import React from "react";
import style from "./MobHeader.module.css";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import aaruush from "../../Assets/aaruush-logo.png";
const MobHeader = (props) => {
  const { location, setModal, modal } = props;

  return (
    <div className={style.MajorContainer}>
    <div className={style.left}>
      <img className={style.aaruush} src={aaruush} alt="aaruush" />
      <p>{location}</p>
    </div>
      {modal ? (
        
        <GrClose
          className={style.cross}
          onClick={() => {
            setModal(!modal);
          }}
        />
      ) : (
        <FaBars
          onClick={() => {
            setModal(!modal);
          }}
        />
      )}
    </div>
  );
};

export default MobHeader;
