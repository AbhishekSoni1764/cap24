/* eslint-disable array-callback-return */
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import style from "./faq.module.css";

const IndFAQ = ({ data }) => {
  const [showDes, setShowDes] = useState(false);

  return (
    <li className={style.faq_listli}>
      <div className={style.faq_lista}>
        {showDes ? (
          <div
            onClick={() => {
              setShowDes(!showDes);
            }}
            className={style.faqhover1}
          >
            <div className={style.color}>{data.Q}</div>
            <i className="fas fa-chevron-up"></i>
          </div>
        ) : (
          <div
            className={style.faqhover2}
            onClick={() => {
              setShowDes(!showDes);
            }}
          >
            <div>{data.Q}</div>
            <i className="fas fa-chevron-down"></i>
          </div>
        )}
      </div>

      <AnimatePresence exitBeforeEnter>
        {showDes && (
          <motion.div
            initial={{ opacity: 0, scale: 1.2, height: 0, marginTop: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              height: "fit-content",
              marginTop: "1vw",
            }}
            className={style.answer}
            exit={{ opacity: 0, scale: 0, height: 0, marginTop: 0 }}
          >
            <p className="">{data.A}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

export default IndFAQ;
