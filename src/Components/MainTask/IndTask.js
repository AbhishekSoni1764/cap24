import React, { useState } from "react";
import style from "./MainTask.module.css";
import { AnimatePresence, motion } from "framer-motion";

function IndTask({ tsk }) {
  const [showDes, setShowDes] = useState(false);

  return (
    <div className={`bg-gradient-to-br from-[#291263] to-[#21232F] to-96% ${style.ind_Tast} ${style.gradientBorder}`}>
      <div className={style.Task}>
        <div className={style.heading}>
          <h1>
            <span className="font-bold">Task {tsk.number} </span>: {tsk.name}
          </h1>
        </div>
        <AnimatePresence exitBeforeEnter>
          {showDes && (
            <motion.div
              className={style.description}
              initial={{ opacity: 0, scale: 1.2, height: 0, marginTop: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                height: "fit-content",
                marginTop: "1vw",
              }}
              exit={{ opacity: 0, scale: 0, height: 0, marginTop: 0 }}
            >
              <p
                onClick={() => {
                  setShowDes(!showDes);
                }}
              >
                {tsk.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <div className={style.deadline}>
          {!showDes && (
            <p
              onClick={() => {
                setShowDes(!showDes);
              }}
            >
              <span className="font-bold text-xl">Description for Task:</span> <i className="fas fa-caret-down ml-3"></i>
            </p>
          )}
          <p><span className="font-bold text-xl" >Deadline:</span> {tsk.deadline}</p>
          <br />
          <AnimatePresence exitBeforeEnter>
            <div className={style.bottom}>
              <motion.div whileHover={{ scale: 1.1 }} className={style.points}>
                <span>Point:{tsk.points}</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className={style.points}>
                <a rel="noreferrer" target="_blank" href={tsk.upload_link}>
                  <span>Upload Task</span>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className={style.media}>
                <a rel="noreferrer" target="_blank" href={tsk.instagram}>
                  <i className={`fab fa-instagram`}></i>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className={style.media}>
                <a rel="noreferrer" target="_blank" href={tsk.facebook}>
                  <i className={`fab fa-facebook-f`}></i>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className={style.media}>
                <a rel="noreferrer" target="_blank" href={tsk.twitter}>
                  <i className={`fab fa-twitter`}></i>
                </a>
              </motion.div>

              <motion.div whileHover={{ scale: 1.1 }} className={style.media}>
                <a rel="noreferrer" target="_blank" href={tsk.linkedin}>
                  <i className={`fab fa-linkedin-in`} alt="icon-a"></i>
                </a>
              </motion.div>
              {tsk.youtube ?
                <motion.div whileHover={{ scale: 1.1 }} className={style.media}>
                  <a rel="noreferrer" target="_blank" href={tsk.youtube}>
                    <i className={`fab fa-youtube`} alt="icon-a"></i>
                  </a>
                </motion.div>
                : ""
              }
            </div>
          </AnimatePresence>
        </div>
      </div>
      <div className={style.img_Ctn}>
        <img src={tsk.image} alt="task"></img>
      </div>
    </div>
  );
}

export default IndTask;
