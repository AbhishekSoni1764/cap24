import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./faq.module.css";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const IndFAQ = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`text-white text-left p-6 rounded-3xl w-inherit bg-[#202247] ${styles.gradientBorder}`}
    >
      <div className=" flex items-center">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="font-semibold text-md flex-grow text-left"
        >
          {data.Q}
        </button>
        {isOpen ? (
          <AiOutlineCaretUp className="h-8 ml-auto" onClick={() => setIsOpen((prev) => !prev)} />
        ) : (
          <AiOutlineCaretDown className="h-8 ml-auto" onClick={() => setIsOpen((prev) => !prev)} />
        )}
      </div>

      <AnimatePresence exitBeforeEnter>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.2, height: 0, marginTop: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              height: "fit-content",
              marginTop: "1vw",
            }}
            className={"text-sm sm:text-lg pt-4 text-justify"}
            exit={{ opacity: 0, scale: 0, height: 0, marginTop: 0 }}
          >
            <div className="md:mt-4">{data.A}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default IndFAQ;
