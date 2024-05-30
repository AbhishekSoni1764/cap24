/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import sidewave from "../../Assets/sidewave.png";
import Ellipse1 from "../../Assets/Ellipse1.png";
import Ellipse2 from "../../Assets/Ellipse2.png";
import Ellipse3 from "../../Assets/Ellipse3.png";
import aaruush_logo from "../../Assets/aaruush-logo.png";
import padlock from "../../Assets/padlock.png";
import usericon from "../../Assets/user.png";
import style from "./login.module.css";
import SpinnerGif from "../../Assets/spinner.gif";
import APIService from "../../services/axios";

import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence, motion } from "framer-motion";

function Login(props) {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  const { user, setUser } = props;

  useEffect(() => {
    if (Cookies.get("_id")) {
      APIService.get(`/users/${Cookies.get("_id")}`).then((res) => {
        setUser(res.data);
      });
    }
  }, []);

  const login = async (e) => {
    e.preventDefault();
    const logindetails = {
      username: email,
      password: password,
    };
    setModal1(true);
    await APIService.post("/login", logindetails).then((res) => {
      if (res.data.aaruushId) {
        Cookies.set("_id", res.data._id, { expires: 1800 });
        setUser(res.data);
      } else if (res.data === "user doesn't exist") {
        setModal(true);
      } else {
        toast.error(res.data, { position: "top-center", theme: "dark" });
      }
      setModal1(false);
    });
  };

  const signup = async (e) => {
    const logindetails = {
      name:name,
      username: email,
      password: password,
    };
    setModal2(true);
    await APIService.post("/signup", logindetails).then(async (res) => {
      if (res.data.aaruushId) {
        Cookies.set("_id", res.data._id, { expires: 1800 })
        setUser(res.data);
      } else {
        toast.error(res.data, { position: "top-center", theme: "dark" });
      }
      setModal2(false);
    });
  };

  useEffect(() => {}, [user]);

  return (
    <div className={style.login_container}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <AnimatePresence>
        {modal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={style.modal_backdrop}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className={style.modal}
            >
              <motion.div className={style.txt}>
                <h2>User Doesn't Exist !</h2>
                <p>Want to Signup?</p>
              </motion.div>
              <motion.div className={style.btn}>
                <button
                  onClick={() => {
                    signup();
                  }}
                >
                  YES
                </button>
                <button
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  NO
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {modal1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={style.modal_backdrop1}
          >
            <img src={SpinnerGif} alt="spinning-a'20" />
            <p>Logging in...</p>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {modal2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={style.modal_backdrop1}
          >
            <img src={SpinnerGif} alt="spinning-a'20" />
            <p>Signing up...</p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={style.right_top_wave}>
        <img src={sidewave} alt="wave" className={style.right_top_wave_img} />
      </div>
      <div className={style.ellipse1}>
        <img src={Ellipse1} alt="ellipse" className={style.ellipse1_img} />
      </div>
      <div className={style.ellipse2}>
        <img src={Ellipse2} alt="ellipse" className={style.ellipse2_img} />
      </div>
      <div className={style.ellipse3}>
        <img src={Ellipse3} alt="ellipse" className={style.ellipse3_img} />
      </div>
      <div className={style.aaruush_logo}>
        <img src={aaruush_logo} alt="logo" className={style.aaruush_logo_img} />
      </div>
      <form action="" onSubmit={login} className={style.form}>
        <caption className={style.frm_hdr}>Register</caption>
        <div className={style.input_div}>
          <div className={style.input_logo}>
            <img className={style.input_logo_img} src={usericon} alt="icon" />
          </div>
          <input
            className={style.input}
            onChange={(e) => {
              setname(e.target.value);
            }}
            placeholder="Your Name"
            type="text"
            required
          />
        </div>
        <div className={style.input_div}>
          <div className={style.input_logo}>
            <img className={style.input_logo_img} src={usericon} alt="icon" />
          </div>
          <input
            className={style.input}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            placeholder="Your Email"
            type="email"
          />
        </div>

        <div className={style.input_div}>
          <div className={style.input_logo}>
            <img className={style.input_logo_img} src={padlock} alt="icon" />
          </div>
          <input
            className={style.input}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            placeholder="Your Password"
            type="password"
          />
        </div>

        <div className={style.login_div}>
          <button className={style.login} type="submit">
            REGISTER
          </button>
        </div>
        <p className={style.srmktr}>*SRM KTR student are not eligible*</p>
      </form>
    </div>
  );
}

export default Login;
