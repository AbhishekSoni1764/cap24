/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import style from "./Questions.module.css";
import APIService from "../../../services/axios";

import TextQuestion from "./Text_question"
import BoolQuestion from "./Bool_Question"


function Questions({ user }) {
  const [Question, setQuestion] = useState(null);


  useEffect(() => {
    APIService.get(`/static/capweeklyquestions`).then((res) => {
      setQuestion(res.data);
    });
  }, []);


  return (
    <div className={`bg-gradient-to-br from-[#291263] to-[#21232F] to-96% ${style.Questions} ${style.gradientBorder}`}>
      {Question &&
        Question.filter((data) => {

          if (data.show === true) {
            return data
          }
          else {
            return null
          }
        }
        ).sort(function (a, b) { return a.timestamp - b.timestamp }).reverse().map((Q, index) => (
          <div className={style.weekly}>
            {Q.answer_type === "text" ? (
              <TextQuestion user={user} Q={Q} key={index} />
            ) : (
              <BoolQuestion user={user} Q={Q} key={index} />
            )}
          </div>
        ))}
    </div>
  );
}

export default Questions;
