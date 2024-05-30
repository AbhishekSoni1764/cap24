import React, { useState, useEffect } from 'react'
import style from './Task.module.css'
import APIService from "../../../services/axios";

import { AnimatePresence, motion } from "framer-motion"

function Task() {

  const [Task, setTask] = useState(null)
  useEffect(() => {
    APIService.get(`/static/captasks`).then((res) => {
      if (res.data.length > 0) {
        setTask(res.data[0]);
      }

    });
  }, [])

  const name = (name) => {
    const newname = name.split("-")
    return newname.join(" ")
  }

  return (
    Task && (
      <div className={`bg-gradient-to-br from-[#291263] to-[#21232F] to-96% ${style.major_tsk} ${style.gradientBorder}`}>
        <div className={style.header_ctn}>
          <div className={style.latesttask}>
            <h1>Latest Task</h1>
          </div>
        </div>
        <div className={style.tsk_content}>
          <div className={style.Task}>
            <div className={style.heading}>
              <h2><span>Task :</span> {name(Task.name)} </h2>
            </div>
            <div className={style.deadline}>
              <p><span>Deadline:</span> {Task.deadline}</p>
              <br />
              <AnimatePresence exitBeforeEnter>
                <div className={style.bottom}>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={style.points}
                  >
                    <p>Point:{Task.points}</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={style.points}
                  >
                    <a rel="noreferrer" target="_blank" href={Task.upload_link}>
                      <p>Upload Task</p>
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={style.media}
                  >
                    <a rel="noreferrer" target="_blank" href={Task.instagram}>
                      <i className={`fab fa-instagram`}></i>
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={style.media}
                  >
                    <a rel="noreferrer" target="_blank" href={Task.facebook}>
                      <i className={`fab fa-facebook-f`}></i>
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={style.media}
                  >
                    <a rel="noreferrer" target="_blank" href={Task.twitter}>
                      <i className={`fab fa-twitter`}></i>
                    </a>
                  </motion.div>
                  {/* <motion.div whileHover={{ scale: 1.1 }} className={style.media}>
                    <a href={Task.youtube}>
                      <i className={`fab fa-youtube`}></i>
                    </a>
                  </motion.div> */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={style.media}
                  >
                    <a rel="noreferrer" target="_blank" href={Task.linkedin}>
                      <i className={`fab fa-linkedin-in`}></i>
                    </a>
                  </motion.div>
                  {Task.youtube ? (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={style.media}
                    >
                      <a rel="noreferrer" target="_blank" href={Task.youtube}>
                        <i className={`fab fa-youtube`} alt="icon-a"></i>
                      </a>
                    </motion.div>
                  ) : (
                    ""
                  )}
                </div>
              </AnimatePresence>
            </div>
          </div>
          <div className={style.img_Ctn}>
            <img src={Task.image} alt="task" />
          </div>
        </div>
      </div>
    )
  );
}

export default Task
