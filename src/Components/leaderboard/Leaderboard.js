import React, { useState, useEffect } from "react";
import APIService from "../../services/axios";

import style from "./Leaderboard.module.css";
import gold from "../../Assets/Svg/gold.svg";
import silver from "../../Assets/Svg/silver.svg";
import bronze from "../../Assets/Svg/bronze.svg";

function Leaderboard({ user }) {
  const [Leaderboard, setLeaderboard] = useState([]);
  const [clanLeaderboard, setclanLeaderboard] = useState([]);

  useEffect(() => {
    if (user) {
      APIService.get(`/leaderboard`).then((res) => {
        setLeaderboard(res.data);
      });
      APIService.get(`/capclans`).then((res) => {
        setclanLeaderboard(res.data);
      });
    }
  }, [user]);

  return (
    <div className={style.leaderboard}>
      <div className={style.container}>
        <div className={style.box}>
          <div className={`bg-gradient-to-br from-[#291263] to-[#21232F] to-96% ${style.container2} ${style.gradientBorder}`}>
            <table>
              <caption className="font-bold text-xl">
                <h2>Individual Leaderboard</h2>
              </caption>
              <tr>
                <td className={style.th1}>
                  <h3 style={{ textAlign: "left" }}>Name</h3>
                </td>
                <td className={style.th1}>
                  <h3>Points</h3>
                </td>
                <td className={style.th2}>
                  <h3>Rank</h3>
                </td>
              </tr>
            </table>
            <div className={style.scroll}>
              <table>
                {Leaderboard.map((lead, index) =>
                  index <= 4 ? (
                    <tr>
                      <td className={style.td1}>
                        <p className={style.nme}>{lead.name}</p>
                      </td>
                      <td className={style.td1}>
                        <p className={style.pts}>{lead.points}</p>
                      </td>
                      <td className={style.td2}>
                        <div className={style.goldrnk}>
                          {index + 1 === 1 ? (
                            // <i
                            //   className="fas fa-trophy"
                            //   style={{ color: "#FFE974" }}
                            // ></i>
                            <img src={gold} alt="fist prize" />
                          ) : index + 1 === 2 ? (
                            // <i
                            //   className="fas fa-trophy"
                            //   style={{ color: "#BFBCB8" }}
                            // ></i>
                            <img src={silver} alt="second prize" />
                          ) : index + 1 === 3 ? (
                            // <i
                            //   className="fas fa-trophy"
                            //   style={{ color: "#A48347" }}
                            // ></i>
                            <img src={bronze} alt="third prize" />
                          ) : (
                            index + 1
                          )}
                        </div>
                      </td>
                    </tr>
                  ) : index > 4 && index <= 15 ? (
                    <tr>
                      <td className={style.td1}>
                        <p className={style.nme}>{lead.name}</p>
                      </td>
                      <td className={style.td1}>
                        <p className={style.pts}>{lead.points}</p>
                      </td>
                      <td className={style.td2}>
                        <div className={style.silverrnk}>{index + 1}</div>
                      </td>
                    </tr>
                  ) : index > 15 && index < 25 ? (
                    <tr>
                      <td className={style.td1}>
                        <p className={style.nme}>{lead.name}</p>
                      </td>
                      <td className={style.td1}>
                        <p className={style.pts}>{lead.points}</p>
                      </td>
                      <td className={style.td2}>
                        <div className={style.bronzernk}>{index + 1}</div>
                      </td>
                    </tr>
                  ) : (
                    ""
                  )
                )}
              </table>
            </div>
            <table className={style.mytable}>
              {Leaderboard.map(
                (lead, index) =>
                  user.aaruushId &&
                  lead.aaruushId === user.aaruushId &&
                  index > 25 && (
                    <tr className={style.tr}>
                      <td className={style.td11}>
                        <h3 className={style.mynme}>{lead.name}</h3>
                      </td>
                      <td className={style.td12}>
                        <h3 className={style.mypts}>{lead.points}</h3>
                      </td>
                      <td className={style.td13}>
                        <div className={style.myrnk}>{index + 1}</div>
                      </td>
                    </tr>
                  )
              )}
            </table>
          </div>
          <div className={`bg-gradient-to-br from-[#291263] to-[#21232F] to-96% ${style.container2} ${style.gradientBorder}`}>
            <table>
              <caption className="font-bold text-xl">
                <h2>Clan LeaderBoard</h2>
              </caption>
              <tr>
                <td className={style.th1} style={{ textAlign: "left" }}>
                  <h4 style={{ textAlign: "left !important" }}>Name</h4>
                </td>
                <td className={style.th1}>
                  <h4>Points</h4>
                </td>
                <td className={style.th2}>
                  <h4>Rank</h4>
                </td>
              </tr>
            </table>
            <div className={style.scroll}>
              <table>
                {clanLeaderboard.map(
                  (lead, index) =>
                    index <= 15 && (
                      <tr>
                        <td className={style.td1}>
                          <p className={style.nme}>{lead.name}</p>
                        </td>
                        <td className={style.td1}>
                          <p className={style.pts}>{lead.points}</p>
                        </td>
                        <td className={style.td2}>
                          <div className={style.rnk}>
                            {index + 1 === 1 ? (
                              // <i
                              //   className="fas fa-trophy"
                              //   style={{ color: "#FFE974" }}
                              // ></i>
                              <img src={gold} alt="fist prize" />
                            ) : index + 1 === 2 ? (
                              // <i
                              //   className="fas fa-trophy"
                              //   style={{ color: "#BFBCB8" }}
                              // ></i>
                              <img src={silver} alt="second prize" />
                            ) : index + 1 === 3 ? (
                              // <i
                              //   className="fas fa-trophy"
                              //   style={{ color: "#A48347" }}
                              // ></i>
                              <img src={bronze} alt="third prize" />
                            ) : (
                              index + 1
                            )}
                          </div>
                        </td>
                      </tr>
                    )
                )}
              </table>
            </div>
            <table className={style.table}>
              {clanLeaderboard.map(
                (lead, index) =>
                  user.clan_name &&
                  index >= 4 &&
                  lead.name === user.clan_name && (
                    <tr className={style.tr}>
                      <td className={style.td1}>
                        <h4>{lead.name}</h4>
                      </td>
                      <td className={style.td12}>
                        <h4>{lead.points}</h4>
                      </td>
                      <td className={style.td13}>
                        <div className={style.rnk}>{index + 1}</div>
                      </td>
                    </tr>
                  )
              )}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
