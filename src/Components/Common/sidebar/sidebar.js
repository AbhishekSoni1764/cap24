/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import logo from "../../../Assets/Svg/aaruush-logo.svg";
import aaruush from "../../../Assets/Svg/aaruush24-white small.svg"
import styles from "./sidebar.module.css";
import Tilt from "react-tilt";
import APIService from "../../../services/axios";

import "../WeeklyGoals/progressbar.css";
// import { GoArrowUp } from "react-icons/go";
import Avatar from "avataaars";
import { AnimatePresence, motion } from "framer-motion";
import avatar from "../../../Assets/Avtar/avtar.json";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Sidebar(props) {
  const [modal, setModal] = useState(false);

  const { user } = props;

  const [clan, setClan] = useState(null);
  const [points, setPoints] = useState(null);
  const [rank, setRank] = useState(null);
  const [CAabove, setCAabove] = useState({});
  const [CA25, setCA25] = useState({});
  const [CA15, setCA15] = useState({});
  const [CA5, setCA5] = useState({});
  const [CA1, setCA1] = useState({});

  const [updated, setupdated] = useState(false);
  const [updated25, setupdated25] = useState(false);
  const [updated15, setupdated15] = useState(false);
  const [updated5, setupdated5] = useState(false);
  const [updated1, setupdated1] = useState(false);

  const [avatarstate, setAvatarstate] = useState({
    topType: "LongHairMiaWallace",
    accessoriesType: "Prescription02",
    hairColor: "BrownDark",
    facialHairType: "Blank",
    clotheType: "Hoodie",
    eyeType: "Happy",
    eyebrowType: "Default",
    mouthType: "Smile",
    skinColor: "Black",
  });

  // async function getprofile() {
  //   if (user) {
  //     await APIService.get(`/users/aaruushid/${user.aaruushId}`).then((res) => {
  //       setProfile(res.data);
  //     });
  //   }
  // }

  async function getpersonalstats() {
    if (user) {
      if (user.avatar && user.avatar.topType) {
        setAvatarstate(user.avatar);
      }
      APIService.get(`/capclans`).then((res) => {
        const clandata = res.data.filter((data) => {
          if (data.id === user.clanId) {
            setClan(data);
            return data;
          }
        });
        console.log(clandata);
      });
      APIService.get(`/leaderboard/${user.email}`).then((res) => {
        setPoints(res.data[0].points);
        setRank(res.data[0].rank);
      });
    }
  }
  useEffect(() => {
    getpersonalstats();
  }, [user]);

  // useEffect(() => {
  //   getprofile();
  // }, []);

  useEffect(() => {
    if (rank) {
      APIService.get(`/leaderboard`).then((res) => {
        // console.log(res)
        setCAabove(
          res.data.filter((data) => {
            if (data.rank === rank - 1) {
              setupdated(true);
              return data;
            }
            // return {};
          })[0]
        );
        setCA25(
          res.data.filter((data) => {
            if (data.rank === 25) {
              setupdated25(true);
              // console.log(data)
              return data;
            }
            // return {};
          })[0]
        );
        setCA15(
          res.data.filter((data) => {
            if (data.rank === 15) {
              setupdated15(true);
              // console.log(data)
              return data;
            }
            // return {};
          })[0]
        );
        setCA5(
          res.data.filter((data) => {
            if (data.rank === 5) {
              setupdated5(true);
              // console.log(data)
              return data;
            }
            // return {};
          })[0]
        );
        setCA1(
          res.data.filter((data) => {
            if (data.rank === 1) {
              setupdated1(true);
              // console.log(data)
              return data;
            }
            // return {};
          })[0]
        );
      });
    }
  }, [rank]);

  // console.log(CA1)

  useEffect(() => {
    if (user) {
      if (user.avatar) {
        setAvatarstate({
          topType: user.avatar.topType,
          accessoriesType: user.avatar.accessoriesType,
          hairColor: user.avatar.hairColor,
          facialHairType: user.avatar.facialHairType,
          clotheType: user.avatar.clotheType,
          eyeType: user.avatar.eyeType,
          eyebrowType: user.avatar.eyebrowType,
          mouthType: user.avatar.mouthType,
          skinColor: user.avatar.skinColor,
        });
      }
    }
  }, [user]);

  async function avatarsubmit() {
    await APIService.put(`/users`, {
      email: user.email,
      aaruushId: user.aaruushId,
      avatar: avatarstate,
    }).then((_res) => {
      console.log(_res);
      toast.success("Avatar Updated", {
        position: "top-center",
        theme: "dark",
      });
    });
  }

  // function round100(num1) {
  //   return Math.round(num1 / 10) * 10;
  // }

  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>
        <img className="ml-[20px]" src={logo} alt="logo" />
        <img className="mt-[-20px]" src={aaruush} alt="" />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className={styles.profile}>
        <div className={styles.details}>
          <div className={styles.avatar}>
            <div className={styles.profilepicCtn}>
              <Avatar
                className={styles.profile_pic}
                avatarStyle="Transparent"
                topType={avatarstate.topType}
                accessoriesType={avatarstate.accessoriesType}
                hairColor={avatarstate.hairColor}
                facialHairType={avatarstate.facialHairType}
                clotheType={avatarstate.clotheType}
                eyeType={avatarstate.eyeType}
                eyebrowType={avatarstate.eyebrowType}
                mouthType={avatarstate.mouthType}
                skinColor={avatarstate.skinColor}
              />
              <AnimatePresence>
                {modal && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, display: "none" }}
                    className={styles.modal_backdrop}
                  // onClick={() => {
                  //   setModal(false);
                  //    setAvatarstate({
                  //      topType: user.avatar.topType,
                  //      accessoriesType: user.avatar.accessoriesType,
                  //      hairColor: user.avatar.hairColor,
                  //      facialHairType: user.avatar.facialHairType,
                  //      clotheType: user.avatar.clotheType,
                  //      eyeType: user.avatar.eyeType,
                  //      eyebrowType: user.avatar.eyebrowType,
                  //      mouthType: user.avatar.mouthType,
                  //      skinColor: user.avatar.skinColor,
                  //    });
                  // }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className={styles.modal}
                    >
                      <motion.div className={styles.txt}>
                        <h1>Custom Avatar</h1>
                      </motion.div>

                      <motion.div className={styles.avatarCtn}>
                        <div className={styles.avatarchange}>
                          <Avatar
                            className={styles.avatarsvg}
                            // avatarStyle='Transparent'
                            topType={avatarstate.topType}
                            accessoriesType={avatarstate.accessoriesType}
                            hairColor={avatarstate.hairColor}
                            facialHairType={avatarstate.facialHairType}
                            clotheType={avatarstate.clotheType}
                            eyeType={avatarstate.eyeType}
                            eyebrowType={avatarstate.eyebrowType}
                            mouthType={avatarstate.mouthType}
                            skinColor={avatarstate.skinColor}
                          />
                        </div>
                        <div className={styles.avbtn}>
                          <div className={styles.fields}>
                            <label>Accessories:</label>
                            <select
                              className={styles.avselect}
                              onChange={(e) =>
                                setAvatarstate({
                                  ...avatarstate,
                                  accessoriesType: e.target.value,
                                })
                              }
                            >
                              {avatar.Accessories.map((Accessories) => (
                                <option className={styles.avselectoption}>
                                  {Accessories}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className={styles.fields}>
                            <lable>Top:</lable>
                            <select
                              className={styles.avselect}
                              onChange={(e) =>
                                setAvatarstate({
                                  ...avatarstate,
                                  topType: e.target.value,
                                })
                              }
                            >
                              {avatar.top.map((top) => (
                                <option className={styles.avselectoption}>
                                  {top}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className={styles.fields}>
                            <lable>Haircolor:</lable>
                            <select
                              className={styles.avselect}
                              onChange={(e) =>
                                setAvatarstate({
                                  ...avatarstate,
                                  hairColor: e.target.value,
                                })
                              }
                            >
                              {avatar.HairColor.map((haircolor) => (
                                <option className={styles.avselectoption}>
                                  {haircolor}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className={styles.fields}>
                            <lable>Facial Hair:</lable>
                            <select
                              className={styles.avselect}
                              onChange={(e) =>
                                setAvatarstate({
                                  ...avatarstate,
                                  facialHairType: e.target.value,
                                })
                              }
                            >
                              {avatar.FacialHair.map((facialhair) => (
                                <option className={styles.avselectoption}>
                                  {facialhair}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className={styles.fields}>
                            <lable>Eyes:</lable>
                            <select
                              className={styles.avselect}
                              onChange={(e) =>
                                setAvatarstate({
                                  ...avatarstate,
                                  eyeType: e.target.value,
                                })
                              }
                            >
                              {avatar.Eyes.map((eyes) => (
                                <option className={styles.avselectoption}>
                                  {eyes}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className={styles.fields}>
                            <lable>Clothes:</lable>
                            <select
                              className={styles.avselect}
                              onChange={(e) =>
                                setAvatarstate({
                                  ...avatarstate,
                                  clotheType: e.target.value,
                                })
                              }
                            >
                              {avatar.Clothes.map((clothes) => (
                                <option className={styles.avselectoption}>
                                  {clothes}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className={styles.fields}>
                            {" "}
                            <lable>Eyebrow:</lable>
                            <select
                              className={styles.avselect}
                              onChange={(e) =>
                                setAvatarstate({
                                  ...avatarstate,
                                  eyebrowType: e.target.value,
                                })
                              }
                            >
                              {avatar.Eyebrow.map((eyebrow) => (
                                <option className={styles.avselectoption}>
                                  {eyebrow}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className={styles.fields}>
                            {" "}
                            <lable>Mouth:</lable>
                            <select
                              className={styles.avselect}
                              onChange={(e) =>
                                setAvatarstate({
                                  ...avatarstate,
                                  mouthType: e.target.value,
                                })
                              }
                            >
                              {avatar.Mouth.map((mouth) => (
                                <option className={styles.avselectoption}>
                                  {mouth}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className={styles.fields}>
                            {" "}
                            <lable>Skin: </lable>
                            <select
                              className={styles.avselect}
                              onChange={(e) =>
                                setAvatarstate({
                                  ...avatarstate,
                                  skinColor: e.target.value,
                                })
                              }
                            >
                              {avatar.Skin.map((skin) => (
                                <option className={styles.avselectoption}>
                                  {skin}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </motion.div>
                      <div className={styles.buttons}>
                        <div className={styles.btn}>
                          <button
                            onClick={() => {
                              setModal(false);
                              setAvatarstate({
                                topType: user.avatar.topType,
                                accessoriesType: user.avatar.accessoriesType,
                                hairColor: user.avatar.hairColor,
                                facialHairType: user.avatar.facialHairType,
                                clotheType: user.avatar.clotheType,
                                eyeType: user.avatar.eyeType,
                                eyebrowType: user.avatar.eyebrowType,
                                mouthType: user.avatar.mouthType,
                                skinColor: user.avatar.skinColor,
                              });
                            }}
                          >
                            Close
                          </button>
                        </div>
                        <div className={styles.btn}>
                          <button
                            onClick={() => {
                              setModal(false);
                              avatarsubmit();
                            }}
                          >
                            Update Avatar
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div
                className="progress-circle side-circle"
                data-percentage={points / 5}
              >
                <svg className="progress-circle__svg" viewport="0 0 2000 2000">
                  <circle
                    className="progress-circle__stroke alter side_bar_prog"
                    r="50%"
                    cx="50%"
                    cy="50%"
                  ></circle>
                  <circle
                    className="progress-circle__stroke alter side_bar_prog"
                    r="50%"
                    cx="50%"
                    cy="50%"
                  ></circle>
                </svg>
              </div>
            </div>
            <div
              className={`${styles.icons} `}
              onClick={() => {
                setModal(true);
              }}
            >
              <i className={`fas fa-user-edit`}></i>
            </div>
          </div>

          {/* {rank > 15 && rank <= 25 ? (
            <div className={styles.level}>
              <i className="fas fa-star" style={{ color: "#AF915A" }}></i>
              <p>{"Bronze"}</p>
              <i className="fas fa-star" style={{ color: "#AF915A" }}></i>
            </div>
          ) : rank > 5 && rank <= 15 ? (
            <div className={styles.level}>
              <i className="fas fa-star" style={{ color: "#BFBCB8" }}></i>
              <p>{"Silver"}</p>
              <i className="fas fa-star" style={{ color: "#BFBCB8" }}></i>
            </div>
          ) : rank <= 5 ? (
            <div className={styles.level}>
              <i className="fas fa-star" style={{ color: "#FFE974" }}></i>
              <p>{"Gold"}</p>
              <i className="fas fa-star" style={{ color: "#FFE974" }}></i>
            </div>
          ) : (
            ""
          )}
          {updated25 && rank > 25 ? (
            <p className={styles.badgepush}>
              {round100(Math.abs(CA25.points - points + 10) * 1.2)} more points
              for {"Bronze Badge"} <GoArrowUp className={styles.uparrow} />
            </p>
          ) : (
            <>
              {updated15 && rank > 15 && rank <= 25 ? (
                <p className={styles.badgepush}>
                  {round100(Math.abs(CA15.points - points + 10) * 1.2)} more
                  points for {"Silver Badge"}{" "}
                  <GoArrowUp className={styles.uparrow} />
                </p>
              ) : (
                <>
                  {updated5 && rank > 5 && rank <= 15 ? (
                    <p className={styles.badgepush}>
                      {round100(Math.abs(CA5.points - points + 10) * 1.2)} more
                      points for {"Gold Badge"}{" "}
                      <GoArrowUp className={styles.uparrow} />
                    </p>
                  ) : (
                    <>
                      {updated1 && rank <= 5 && rank !== 1 ? (
                        <p className={styles.badgepush}>
                          {round100(Math.abs(CA1.points - points + 10) * 1.2)}{" "}
                          more points for {"#1 Rank"}{" "}
                          <GoArrowUp className={styles.uparrow} />
                        </p>
                      ) : (
                        ""
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )} */}
          <h2 className={styles.name}>{user.name}</h2>
          <p>
            <span className={styles.caid}>{user.aaruushId}</span>
          </p>
        </div>
        <div className={styles.details}>
          <div className={styles.points}>
            <div className={styles.circle}>
              <i className="fas ic fa-egg" style={{ color: "#FFE974" }}></i>
            </div>
            <h4>
              Clan Name: <b>{user.clanName ? user.clanName : "NA"}</b>
            </h4>
          </div>
          {/* <div className={styles.points}>
            <div className={styles.circle}>
              <i className="fas ic fa-trophy" style={{ color: "#FFE974" }}></i>
            </div>
            <h4>
              Clan Rank :{" "}
              <b style={{ color: "#FFF" }}>#{clan ? clan.rank : "NA"}</b>{" "}
            </h4>
          </div> */}
          <div className={styles.points}>
            <div className={styles.circle}>
              <i className="fas ic fa-hands" style={{ color: "#FFE974" }}></i>
            </div>
            <h4>
              Clan Points :{" "}
              <b style={{ color: "#FFF" }}>{clan ? clan.points : "NA"}</b>{" "}
            </h4>
          </div>

          {/* {updated ? (
            <p className={styles.rankpush}>
              {round100(Math.abs(CAabove.points - points + 10) * 1.2)} more
              points for #{CAabove.rank}{" "}
              <GoArrowUp className={styles.uparrow} />
            </p>
          ) : (
            ""
          )} */}
        </div>
        <Tilt options={{ max: 15, reverse: true, scale: 1.04 }}>
          <div className={styles.rank}>
            <div>
              CAP Rank: <span className={styles.number}># {rank}</span>
            </div>
            <div>
              CAP Points:{" "}
              <span className={styles.number}>{points ? points : "0"}</span>
            </div>
          </div>
        </Tilt>

        <div className={styles.socialIconsdiv}>
          <div className={styles.socialIcons}>
            <div className={`${styles.icons} ${styles.i}`}>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.instagram.com/aaruush_srm/"
              >
                <i className={`fab fa-instagram ${styles.in}`}></i>
              </a>
            </div>
            <div className={`${styles.icons}  ${styles.f}`}>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.facebook.com/aaruush.srm"
              >
                <i className={`fab fa-facebook-f ${styles.fb}`}></i>
              </a>
            </div>
            <div className={`${styles.icons}  ${styles.t}`}>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://twitter.com/aaruushsrmist"
              >
                <i className={`fab fa-twitter ${styles.tw}`}></i>
              </a>
            </div>
            <div className={`${styles.icons}  ${styles.y}`}>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.youtube.com/channel/UC6mwWpwkZchii-oyWz0v3dw"
              >
                <i className={`fab fa-youtube ${styles.yt}`}></i>
              </a>
            </div>
            <div className={`${styles.icons} ${styles.l}`}>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/aaruush/"
              >
                <i className={`fab fa-linkedin-in ${styles.li}`}></i>
              </a>
            </div>
          </div>
          <div className={styles.credits}>
            <p>
              Designed by{" "}
              <a
                rel="noreferrer"
                target="_blank"
                href="https://envision.aaruush.org/"
                className={styles.envision}
              >
                Team Envision
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
