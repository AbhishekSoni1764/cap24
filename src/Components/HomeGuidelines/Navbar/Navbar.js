import React, { useEffect, useState } from "react";
import Styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../Home/images/aaruush-header.png";
import { Auth } from "aws-amplify";
import Cookies from "js-cookie";

const Navbar = ({ user }) => {
  const [modal, setModal] = useState(false);
  const [header, setHeader] = useState(null);

  useEffect(() => {
    checkUser();
    async function checkUser() {
      try {
        const authuser = await Auth.currentAuthenticatedUser();
        if (!authuser) {
          Cookies.remove("accessToken");
        }
      } catch {
        Cookies.remove("accessToken");
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      (event) => {
        if (window.scrollY >= 1) {
          setHeader(" 0px 5px 10px rgba(0,0,0,0.3)");
        } else {
          setHeader("none");
        }
      },
      []
    );
  });

  return (
    <div className={Styles.majorContainer} style={{ boxShadow: header }}>
      <div className={Styles.logo}>
        <img src={logo} alt="aaruush_logo" />
      </div>
      <div className={Styles.List}>
        <ul>
          <li>
            <a href="/#hero">Home</a>
          </li>
          <li>
            <a href="/#about">About Us</a>
          </li>
          <li>
            <a href="/#faq">FAQ</a>
          </li>
          <li>
            <a href="/#incentives">Incentives</a>
          </li>
          <li>
            <a href="#">Guidelines</a>
          </li>
          <li>
            <a href="/#contactus">Contact Us</a>
          </li>
          <li>
            {user ? (
              <Link to="/UserProfile/Dashboard" className={Styles.started}>
                Dashboard
              </Link>
            ) : (
              <button
                className={Styles.started}
                onClick={() => {
                  Auth.federatedSignIn({ provider: "Google" });
                }}
              >
                Register
              </button>
            )}
          </li>
        </ul>
      </div>
      <div className={Styles.ListM}>
        <div className={Styles.iconContainer}>
          {!modal ? (
            <i
              className="fas fa-bars"
              onClick={() => {
                setModal(!modal);
              }}
            />
          ) : (
            <i
              className="fas fa-times"
              onClick={() => {
                setModal(!modal);
              }}
            />
          )}
        </div>
        <AnimatePresence exitBeforeEnter>
          {modal && (
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            >
              <li>
                <a
                  href="#hero"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#incentives"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  Incentives
                </a>
              </li>
              <li>
                <a
                  href="#contactus"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                {user ? (
                  <Link to="/UserProfile/Dashboard" className={Styles.started}>
                    Dashboard
                  </Link>
                ) : (
                  <button
                    className={Styles.started}
                    onClick={() => {
                      Auth.federatedSignIn({ provider: "Google" });
                    }}
                  >
                    Register
                  </button>
                )}
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
