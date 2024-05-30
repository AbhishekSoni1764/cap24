import React from "react";
import styles from "./Rewards.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
function Rewards({ user }) {
  return (
    <div className={`bg-gradient-to-br from-[#291263] to-[#21232F] to-96% ${styles.Rewards} ${styles.gradientBorder}`}>
      <h4 className={styles.refer}>Refer and Earn</h4>
      <div className={styles.socialIcons}>
        <div className={styles.main}>
          <a
            className={styles.cont}
            rel="noreferrer"
            target="_blank"
            href={`https://web.whatsapp.com/send?text=%20Hi%20Guys!%20Aaruush,%20SRMIST%20Chennai%20is%20back%20with%20its%2017th%20edition%20and%20their%20all%20new%20Campus%20Ambassador%20Program%20is%20here!%20I%20have%20joined%20the%20program,%20now%20it%27s%20your%20turn.%20Use%20this%20link%20for%20registration:%20 https://cap.aaruush.org/ref/${user.aaruushId} %20Register%20now!`}
          >
            <div className={`${styles.icons} ${styles.w}`}>
              <i className={`fab fa-whatsapp ${styles.wa}`}></i>
            </div>
            <p>Whatsapp</p>
          </a>
          <a
            className={styles.cont}
            rel="noreferrer"
            target="_blank"
            href={`https://www.facebook.com/sharer/sharer.php?u=https://cap.aaruush.org/ref/${user.aaruushId}`}
          >
            <div className={`${styles.icons} ${styles.f}`}>
              <i className={`fab fa-facebook-f ${styles.fb}`}></i>
            </div>
            <p>Facebook</p>
          </a>
        </div>
        <div className={styles.main}>
          <a
            className={styles.cont}
            rel="noreferrer"
            target="_blank"
            href={`https://twitter.com/intent/tweet?text=Hi Guys! Aaruush, SRMIST Chennai is back with its 17th edition and their all new Campus Ambassador Program is here! I have joined the program, Use this link for registration: https://cap.aaruush.org/ref/${user.aaruushId}. Register now!`}
          >
            <div className={`${styles.icons} ${styles.t}`}>
              <i className={`fab fa-twitter ${styles.tw}`}></i>
            </div>
            <p>Twitter</p>
          </a>

          <a
            className={styles.cont}
            rel="noreferrer"
            target="_blank"
            href={`https://www.linkedin.com/sharing/share-offsite/?url=https://cap.aaruush.org/ref/${user.aaruushId}`}
          >
            <div className={`${styles.icons} ${styles.l}`}>
              <i className={`fab fa-linkedin-in ${styles.li}`}></i>
            </div>
            <p>Linkedin</p>
          </a>
        </div>
      </div>
      <div className={styles.link}>
        <CopyToClipboard
          text={`https://cap.aaruush.org/ref/${user.aaruushId}`}
          onCopy={() =>
            toast.success("Referral link copied", {
              position: "top-center",
              theme: "dark",
            })
          }
        >
          <button>
            <i className="far fa-clone"></i> Copy Referral Link
          </button>
        </CopyToClipboard>
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
    </div>
  );
}

export default Rewards;
