/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import style from "./Questions.module.css";
import APIService from "../../../services/axios";

const TextQuestion = ({ Q, user, key }) => {
  // console.log(key)
  const [myweekly, setMyweekly] = useState(user.weeklyquestions);
  const [myanswer1, setAnswer1] = useState("");
  const [answered, setAnswered] = useState(false);

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

  async function submit1(question) {
    await APIService.put(`/users`, {
      ...user,
      email: user.email,
      aaruushId: user.aaruushId,
      weeklyquestions: user.weeklyquestions
        ? [
          ...user.weeklyquestions,
          {
            question_number: question,
            answer: myanswer1,
          },
        ]
        : [
          {
            question_number: question,
            answer: myanswer1,
          },
        ],
      ca_points: (user.ca_points ? user.ca_points : 0) + 10,
    }).then((_res) => {
      console.log(_res);
      setAnswered(true);
    });
  }

  return (
    <>
      {/* <h3>Weekly Question #{key + 1}</h3> */}
      <h3 className="mx-auto">Weekly Question #{Q.name}</h3>
      <p className="mx-auto text-center">{Q.question}</p>

      {!answered && check(parseInt(Q.name)) ? (
        <div className="w-11/12 flex flex-col justify-center items-center">
          <form action="" className="w-11/12 flex flex-col gap-4 justify-center items-center">
            <textarea
              className={style.answer}
              name="answer"
              id="answer"
              placeholder="Your answer"
              value={myanswer1}
              onChange={(e) => {
                setAnswer1(e.target.value);
              }}
            ></textarea>
            <div className={style.yes}>
              <button
                onClick={(e) => {
                  e.preventDefault();

                  submit1(parseInt(Q.name));
                }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      ) : (
        <h3 style={{ marginTop: 14, textAlign: "center", color: "#00ff0080" }}>
          Already Answered
        </h3>
      )}
    </>
  );
};

export default TextQuestion;
