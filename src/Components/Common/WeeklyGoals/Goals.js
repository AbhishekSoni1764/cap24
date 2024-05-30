/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import styles from "./Goals.module.css";
import "./progressbar.css";
import { FiThumbsUp } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { RiQuestionnaireFill } from "react-icons/ri";
import APIService from "../../../services/axios";

function Goals({ user }) {
  const [totalweekly, setTotalweekly] = useState(0);
  const [myweekly, setMyweekly] = useState(0);
  const [totaltasks, setTotaltasks] = useState(0);

  useEffect(() => {
    if (user.weeklyquestions) {
      setMyweekly(user.weeklyquestions.length);
    }

    APIService.get(`/static/capweeklyquestions`).then((res) => {
      setTotalweekly(res.data.length);
    });
    APIService.get(`/static/captasks`).then((res) => {
      setTotaltasks(res.data.length);
    });
  }, []);

  return (
    <div className={`bg-gradient-to-br from-[#291263] to-[#21232F] to-96% ${styles.weeklyGoals} ${styles.gradientBorder}`}>
      <div className={styles.heading}>
        <h3>Your Statistics</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.c1}>
          <div className={styles.circle}>
            <FiThumbsUp />
          </div>
        </div>
        <div className={styles.c2}>Tasks Completed</div>
        <div className={styles.c3}>
          <div
            className="progress-circle text-center"
            data-percentage={
              user
                ? ((user.tasks_completed ? user.tasks_completed : 0) /
                  totaltasks) *
                100
                : (0 / totaltasks) * 100
            }
          >
            <svg className="progress-circle__svg" viewport="0 0 2000 2000">
              <circle
                className="progress-circle__stroke"
                r="50%"
                cx="50%"
                cy="50%"
              ></circle>
              <circle
                className="progress-circle__stroke"
                r="50%"
                cx="50%"
                cy="50%"
              ></circle>
            </svg>
            {/* <center> */}
            <p className={styles.ratio + "text-[11px]  pt-[0.30rem]"}>
              {user && (user.tasks_completed ? user.tasks_completed : 0)}/
              {totaltasks}
            </p>
            {/* </center> */}
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.c1}>
          <div className={styles.circle}>
            <IoIosPeople />
          </div>
        </div>
        <div className={styles.c2}>Different College Referrals</div>
        <div className={styles.c3}>
          <div
            className="progress-circle text-center"
            data-percentage={
              user
                ? ((user.diff_college_ref ? user.diff_college_ref : 0) / 10) *
                100
                : (0 / 10) * 100
            }
          >
            <svg className="progress-circle__svg" viewport="0 0 2000 2000">
              <circle
                className="progress-circle__stroke"
                r="50%"
                cx="50%"
                cy="50%"
              ></circle>
              <circle
                className="progress-circle__stroke"
                r="50%"
                cx="50%"
                cy="50%"
              ></circle>
            </svg>
            {/* <center className="h-full w-full"> */}
            <p className={styles.ratio + "text-[11px]  pt-[0.30rem]"}>
              {user && (user.diff_college_ref ? user.diff_college_ref : 0)}/10
            </p>
            {/* </center> */}
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.c1}>
          <div className={styles.circle}>
            <BsFillPeopleFill />
          </div>
        </div>
        <div className={styles.c2}>Same College Referrals</div>
        <div className={styles.c3}>
          <div
            className="progress-circle text-center"
            data-percentage={
              user
                ? ((user.same_college_ref ? user.same_college_ref : 0) / 10) *
                100
                : (0 / 10) * 100
            }
          >
            <svg className="progress-circle__svg" viewport="0 0 2000 2000">
              <circle
                className="progress-circle__stroke"
                r="50%"
                cx="50%"
                cy="50%"
              ></circle>
              <circle
                className="progress-circle__stroke"
                r="50%"
                cx="50%"
                cy="50%"
              ></circle>
            </svg>
            {/* <center> */}
            <p className={styles.ratio + "text-[11px]  pt-[0.30rem]"}>
              {user && (user.same_college_ref ? user.same_college_ref : 0)}/10
            </p>
            {/* </center> */}
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.c1}>
          <div className={styles.circle}>
            <RiQuestionnaireFill />
          </div>
        </div>
        <div className={styles.c2}>Answer Weekly Question</div>
        <div className={styles.c3}>
          <div
            className="progress-circle text-center"
            data-percentage={(myweekly / totalweekly) * 100}
          >
            <svg className="progress-circle__svg" viewport="0 0 2000 2000">
              <circle
                className="progress-circle__stroke"
                r="50%"
                cx="50%"
                cy="50%"
              ></circle>
              <circle
                className="progress-circle__stroke"
                r="50%"
                cx="50%"
                cy="50%"
              ></circle>
            </svg>
            {/* <center> */}
            <p className={styles.ratio + "text-[11px] pt-[0.30rem]"}>
              {myweekly}/{totalweekly}
            </p>
            {/* </center> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Goals;
