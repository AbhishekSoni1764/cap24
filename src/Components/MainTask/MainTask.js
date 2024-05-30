import React, { useEffect, useState } from "react";
import style from "./MainTask.module.css";
import APIService from "../../services/axios";

import IndTask from "./IndTask";

function Task() {
  const [Tasks, setTasks] = useState(null);

  useEffect(() => {
    APIService.get(`/static/captasks`).then((res) => {
      setTasks(res.data);
    });
  }, []);

  return (
    <div className={style.MainTask}>
      {Tasks &&
        Tasks.sort(function (a, b) { return a.timestamp - b.timestamp }).reverse().map((tsk) => (
          <>
            <center>
              <IndTask tsk={tsk} />
            </center>
          </>
        ))}
    </div>
  );
}

export default Task;
