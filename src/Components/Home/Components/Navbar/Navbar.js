import React, { useEffect, useState } from "react";
import Styles from "../Navbar/Navbar.module.css";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../../../Assets/Svg/aaruush24-white small.svg";
import { Auth, Amplify } from "aws-amplify";
import config from "../../../../aws-exports";
import Cookies from "js-cookie";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
import { SlUser } from "react-icons/sl";

Amplify.configure({ ...config, ssr: true });

const Navbar = ({ user }) => {
  const [modal, setModal] = useState(false);
  const [header, setHeader] = useState(null);

  useEffect(() => {
    checkUser();
    async function checkUser() {
      try {
        const authuser = await Auth.currentAuthenticatedUser();
        console.log(authuser);
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
    <div className="flex flex-row max-w-screen w-screen h-28 p-5 justify-between items-center absolute z-50 ">
      <div
        className={
          "min-w-screen w-screen md:flex flex-row justify-between items-center hidden"
        }
      >
        <div className={""}>
          <img src={logo} alt="aaruush_logo" />
        </div>
        <div className="flex flex-row justify-evenly items-center gap-x-16">
          <div>
            <a href="#hero">Home</a>
          </div>
          <div>
            <a href="#about">About Us</a>
          </div>
          <div>
            <a href="#faq">FAQS</a>
          </div>
          <div>
            <a href="#incentives">Incentives</a>
          </div>
          <div>
            <a href="#incentives">Guidelines</a>
          </div>
          <div>
            <a href="#contactus">Contact Us</a>
          </div>
          {user ? (
            <Link
              to="/UserProfile/Dashboard"
              className={
                "py-2 px-4 mx-0 rounded-2xl hover:text-[#ffffff90] transition-all hover:shadow-xl"
              }
            >
              <SlUser />
            </Link>
          ) : (
            <button
              className={
                "py-2 px-4 rounded-2xl hover:text-[#ffffff90] transition-all hover:shadow-xl"
              }
              onClick={() => {
                Auth.federatedSignIn({
                  provider: CognitoHostedUIIdentityProvider.Google,
                });
              }}
            >
              <SlUser />
            </button>
          )}
        </div>
      </div>

      <div className={"md:hidden flex"}>
        <div className={"text-2xl"}>
          {!modal ? (
            <i
              className="fas fa-bars"
              onClick={() => {
                setModal(!modal);
              }}
            />
          ) : (
            <i
              className="fas fa-times z-[200] fixed top-5 right-5"
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
              className="z-[100] fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center text-4xl gap-y-8 bg-[#ffffff10] backdrop-blur-md"
            >
              <li>
                <a
                  href="/#hero"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/#incentives"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  Incentives
                </a>
              </li>
              <li>
                <a
                  href="/#contactus"
                  onClick={() => {
                    setModal(false);
                  }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                {user ? (
                  <Link
                    to="/UserProfile/Dashboard"
                    className={"mt-10 rounded-2xl px-5 py-3"}
                    style={{
                      background:
                        "linear-gradient(264.22deg, #907AD6 -3.18%, #7024C4 103.56%)",
                    }}
                  >
                    Dashboard
                  </Link>
                ) : (
                  <button
                    className={"mt-10 rounded-2xl px-5 py-3"}
                    onClick={() => {
                      Auth.federatedSignIn({ provider: "Google" });
                    }}
                    style={{
                      background:
                        "linear-gradient(264.22deg, #907AD6 -3.18%, #7024C4 103.56%)",
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
