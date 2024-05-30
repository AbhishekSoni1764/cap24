/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import style from "./Questions.module.css";
import APIService from "../../../services/axios";

const BoolQuestion = ({ Q, user, key }) => {
  const [bool, setBool] = useState(true);
  const [myweekly, setMyweekly] = useState(user.weeklyquestions);

  const [answered2, setanswered2] = useState(false);

  function check(question) {
    console.log(question);
    console.log(myweekly);
    if (myweekly) {
      for (let data of myweekly) {
        if (parseInt(data.question_number) === question) {
          return false;
        }
      }
      return true;
    } else {
      return true;
    }
  }

  async function submit2(question, answer) {
    await APIService.put(`/users`, {
      ...user,
      email: user.email,
      aaruushId: user.aaruushId,
      weeklyquestions: user.weeklyquestions
        ? [
            ...user.weeklyquestions,
            {
              question_number: question,
              answer: answer,
            },
          ]
        : [
            {
              question_number: question,
              answer: answer,
            },
          ],
      ca_points: (user.ca_points ? user.ca_points : 0) + 10,
    }).then((_res) => {
      console.log(_res);
      setanswered2(true);
    });
  }
  return (
    <>
      <h3>Weekly Question #{Q.name}</h3>
      <p>{Q.question}</p>
      {!answered2 && check(parseInt(Q.name)) ? (
        <div className={style.yes}>
          <button
            onClick={
              bool
                ? (_e) => {
                    submit2(parseInt(Q.name), "YES");
                    setBool(false);
                  }
                : null
            }
          >
            Yes
          </button>
          <button
            onClick={
              bool && check(parseInt(Q.name))
                ? (_e) => {
                    submit2(parseInt(Q.name), "NO");
                    setBool(false);
                  }
                : null
            }
          >
            No
          </button>
        </div>
      ) : (
        <h3>Already Answered</h3>
      )}
    </>
  );
};

export default BoolQuestion;
