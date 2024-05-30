/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import style from "./EditProfile.module.css";
// import Cookies from "js-cookie";
import APIService from "../../services/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SocialMedia = ({ user }) => {
  const [Facebook, setFacebook] = useState(null);
  const [Instagram, setInstagram] = useState(null);
  const [Linkedin, setLinkedin] = useState(null);
  const [Twitter, setTwitter] = useState(null);
  const [setup, setsetup] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    APIService.put("/users", {
      ...user,
      email: user.email,
      aaruushId: user.aaruushId,
      facebook: Facebook,
      instagram: Instagram,
      twitter: Twitter,
      linkedin: Linkedin,
      ca_points: (user.ca_points ? user.ca_points : 0) + 40,
    }).then((_res) => {
      console.log(_res);
      setsetup(true);
      toast.success("Social media links updated successfully", {
        position: "top-center",
        theme: "dark",
      });
    });
  };
  useEffect(() => {
    if (user) {
      if (user.facebook) {
        setsetup(true);
        setFacebook(user.facebook);
        setLinkedin(user.linkedin);
        setInstagram(user.instagram);
        setTwitter(user.twitter);
      }
    }
  }, [user]);

  return (
    <>
      <h1 className={`font-nexa font-extrabold text-2xl ${style.heading}`}>Social Media Profile Links</h1>
      <form
        onSubmit={(e) => {
          submit(e);
        }}
        className={style.form}
      >
        <div className={style.SocialFields}>
          <div className={style.socialinput_container}>
            <label htmlFor="name" className="font-bold" style={{ color: "#fff" }}>
              Facebook :
            </label>
            <div className={style.input_div}>
              <div className={style.input_img_div}>
                <i className="fab fa-facebook-square"></i>
              </div>
              <input
                className={style.socialinput}
                placeholder="Update Facebook Profile url"
                type="text"
                value={Facebook}
                onChange={(e) => {
                  setFacebook(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className={style.socialinput_container}>
            <label htmlFor="name" className="font-bold" style={{ color: "#fff" }}>
              Instagram :
            </label>
            <div className={style.input_div}>
              <div className={style.input_img_div}>
                <i className="fab fa-instagram"></i>
              </div>
              <input
                className={style.socialinput}
                placeholder="Update Instagram Profile url"
                type="text"
                value={Instagram}
                onChange={(e) => {
                  setInstagram(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className={style.socialinput_container}>
            <label htmlFor="name" className="font-bold" style={{ color: "#fff" }}>
              LinkedIn :
            </label>
            <div className={style.input_div}>
              <div className={style.input_img_div}>
                <i className="fab fa-linkedin"></i>
              </div>
              <input
                className={style.socialinput}
                placeholder="Update Linkedin Profile url"
                type="text"
                value={Linkedin}
                onChange={(e) => {
                  setLinkedin(e.target.value);
                }}
                required
              />
            </div>
          </div>
          <div className={style.socialinput_container}>
            <label htmlFor="name" className="font-bold" style={{ color: "#fff" }}>
              Twitter :
            </label>
            <div className={style.input_div}>
              <div className={style.input_img_div}>
                <i className="fab fa-twitter"></i>
              </div>
              <input
                className={style.socialinput}
                placeholder="Update Twitter Profile url"
                type="text"
                value={Twitter}
                onChange={(e) => {
                  setTwitter(e.target.value);
                }}
                required
              />
            </div>
          </div>
        </div>
        {setup ? (
          ""
        ) : (
          <div className={style.button_div}>
            <button className={`font-nexabold ${style.button}`} type="submit">
              SUBMIT
            </button>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        )}
      </form>
    </>
  );
};

export default SocialMedia;
