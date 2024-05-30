/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  useRef,
} from "react";
import APIService from "../../services/axios";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";
import { AnimatePresence, motion } from "framer-motion";
import SpinnerGif from "../../Assets/spinner.gif";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DataListInput from "react-datalist-input";
import Input from "react-phone-number-input/input";
import PhoneInput from "react-phone-number-input";

import clgname from "../../Assets/clgnames/clgName.json";
import stateMap from "../../Assets/clgnames/state.json";
import cityMap from "../../Assets/clgnames/citystate.json";
import InputProfile from "./InputProfile";
import style from "./profilesetup.module.css";

import Avatar1 from "../../Assets/Avatar/1.png";
import Avatar2 from "../../Assets/Avatar/2.png";
import Avatar3 from "../../Assets/Avatar/3.png";
import Avatar4 from "../../Assets/Avatar/4.png";
import Avatar5 from "../../Assets/Avatar/5.png";
import backArrow from "../../Assets/Svg/Back-Arrow.svg";
import countryInput from "../../Assets/Svg/Country-Input.svg";
import cityInput from "../../Assets/Svg/City-Input.png";
import collegeInput from "../../Assets/Svg/College-Input.svg";
import collegeIDInput from "../../Assets/Svg/CollegeID-Input.png";
import whatsappInput from "../../Assets/Svg/Whatsapp-Input.svg";
import streamInput from "../../Assets/Svg/Stream-Input.svg";
import yearInput from "../../Assets/Svg/Year-Input.png";
import genderInput from "../../Assets/Svg/Gender-Input.png";
import referralInput from "../../Assets/Svg/Referral-Input.svg";

const Signup = (props) => {
  const ref_id = Cookies.get("referralCode");
  const { user, setUser } = props;

  const maleAvatar = {
    topType: "ShortHairShortFlat",
    accessoriesType: "Blank",
    hairColor: "Black",
    facialHairType: "Blank",
    clotheType: "Hoodie",
    clotheColor: "Heather",
    eyeType: "Default",
    eyebrowType: "Default",
    mouthType: "Default",
    skinColor: "Light",
  };

  const femaleAvatar = {
    topType: "LongHairBob",
    accessoriesType: "Blank",
    hairColor: "Black",
    facialHairType: "Blank",
    clotheType: "CollarSweater",
    clotheColor: "PastelRed",
    eyeType: "Default",
    eyebrowType: "Default",
    mouthType: "Default",
    skinColor: "Light",
  };
  let progress = Array(9).fill(0);
  let avatarImage = [Avatar1, Avatar2, Avatar3, Avatar4, Avatar5];

  const [stateselected, setstateselected] = useState(false);
  const [cityselected, setcityselected] = useState(false);
  const ref = useRef();

  const [percentage, setPercentage] = useState(0);
  const [country, setCountry] = useState();
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [college, setCollege] = useState("");
  const [collegeID, setCollegeID] = useState("");
  const [stream, setStream] = useState("");
  const [wapNumber, setWAPNumber] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [referral, setReferral] = useState(
    Cookies.get("referralCode") ? Cookies.get("referralCode") : ""
  );
  const [modal1, setModal1] = useState(false);
  const [avatar, setAvatar] = useState(avatarImage[0]);

  const onSelectState = useCallback((selectedItem) => {
    setState(selectedItem.label);
    setstateselected(!stateselected);
  }, []);
  const oninputState = useCallback((event) => setState(event));
  const stateitems = useMemo(
    () =>
      stateMap.map((oneItem, key) => ({
        label: oneItem.State,
        key: key,
      })),
    []
  );

  const onSelectCity = useCallback((selectedItem) => {
    setCity(selectedItem.label);
    setcityselected(!cityselected);
  }, []);
  const oninputCity = useCallback((event) => setCity(event));
  const cityitems = useMemo(
    () =>
      cityMap
        .filter((data) => data.State === state)
        .map((oneItem, key) => ({
          label: oneItem.City,
          key: key,
        })),
    [state]
  );

  const onSelectCollege = useCallback(
    (selectedItem) => setCollege(selectedItem.label),
    []
  );
  const oninputCollege = useCallback((event) => setCollege(event));
  const collegeitems = useMemo(
    () =>
      clgname
        .filter((data) => data.City === city && data.State === state)
        .map((oneItem, key) => ({
          label: oneItem["College Name"],
          key: key,
        })),
    [city, state]
  );

  const CalculatePercentage = () => {
    let sum = 0;
    progress.map((e) => {
      sum += e;
    });
    setPercentage(sum);
  };
  const Calculate = (state, index) => {
    state ? (progress[index] = 100 / 8) : (progress[index] = 0);
  };
  const Avatar = (percentage) => {
    setAvatar(avatarImage[Math.floor(percentage / 25)]);
  };
  useEffect(() => {
    Calculate(country, 0);
    Calculate(college, 1);
    Calculate(collegeID, 2);
    Calculate(wapNumber, 3);
    Calculate(stream, 4);
    Calculate(year, 5);
    Calculate(gender, 6);
    Calculate(dob, 7);
    // Calculate(referral, 8);
    CalculatePercentage();
    Avatar(percentage);
  }, [
    country,
    college,
    collegeID,
    wapNumber,
    stream,
    year,
    gender,
    dob,
    referral,
  ]);

  const updaterefferalpoint = async (id, college) => {
    await APIService.get(`/users/aaruushid/${id}`, {
      headers: {
        Authorization: Cookies.get("accessToken") || "",
      },
    }).then(async (res) => {
      if (
        res.data[0] &&
        res.data[0].capProfile &&
        res.data[0].college_name === college
      ) {
        await APIService.put(
          `/users`,
          {
            email: res.data[0].email,
            aaruushId: res.data[0].aaruushId,
            ca_points: res.data[0].ca_points ? res.data[0].ca_points + 25 : 25,
            same_college_ref: res.data[0].same_college_ref
              ? res.data[0].same_college_ref + 1
              : 1,
          },
          {
            headers: {
              Authorization: Cookies.get("accessToken") || "",
            },
          }
        ).then((_resp) => {
          console.log(_resp);
        });
      } else {
        await APIService.put(
          `/users`,
          {
            email: res.data[0].email,
            aaruushId: res.data[0].aaruushId,
            ca_points: res.data[0].ca_points ? res.data[0].ca_points + 50 : 50,
            diff_college_ref: res.data[0].diff_college_ref
              ? res.data[0].diff_college_ref + 1
              : 1,
          },
          {
            headers: {
              Authorization: Cookies.get("accessToken") || "",
            },
          }
        ).then((_resp) => {
          console.log(_resp);
        });
      }
    });
  };
  const setupprofile = async (e) => {
    e.preventDefault();
    const FormDetails = {
      ...user,
      cap: true,
      college_name: college,
      college_id: collegeID,
      whatsapp: wapNumber,
      country: country,
      college_city: city,
      stream: stream,
      year: year,
      gender: gender,
      dob: dob,
      referral_id: referral,
      avatar: gender == "Female" ? femaleAvatar : maleAvatar,
    };
    setModal1(true);
    await APIService.put(`/users`, FormDetails, {
      headers: {
        Authorization: Cookies.get("accessToken") || "",
      },
    }).then(async (data) => {
      if (data && referral) {
        updaterefferalpoint(referral, college);
      }
      await APIService.get(`/users/${user.email}`, {
        headers: {
          Authorization: Cookies.get("accessToken") || "",
        },
      }).then((data) => {
        if (data) {
          setUser(data.data);
          Cookies.remove("referralCode");
        }
      });
    });
    setModal1(false);
  };

  return (
    <div className={style.signup_container}>
      <AnimatePresence>
        {modal1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={style.modal_backdrop1}
          >
            <img src={SpinnerGif} alt="spinning-a'20" />
            <p>Creating Profile...</p>
          </motion.div>
        )}
      </AnimatePresence>
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
      <form className={style.form} onSubmit={setupprofile}>
        <caption>Profile Setup</caption>
        <div className={style.progress}>
          <img src={avatar} alt="Avatar" />
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({
              strokeLinecap: "butt",
              pathTransitionDuration: 0.5,
              pathColor: `rgba(24,255,114,1)`,
              trailColor: "#000",
            })}
          />
        </div>
        <InputProfile
          icon={countryInput}
          dispatch={setCountry}
          input={{
            type: "text",
            value: country,
            placeholder: "COUNTRY",
            required: true,
          }}
        />
        <InputProfile icon={collegeInput}>
          <DataListInput
            placeholder="COLLEGE STATE"
            items={stateitems}
            onSelect={onSelectState}
            onInput={oninputState}
            required={true}
          />
        </InputProfile>
        <InputProfile icon={cityInput}>
          <DataListInput
            placeholder="COLLEGE CITY"
            items={cityitems}
            onSelect={onSelectCity}
            onInput={oninputCity}
            required={true}
          />
        </InputProfile>
        <InputProfile icon={collegeInput}>
          <DataListInput
            placeholder="COLLEGE NAME"
            items={collegeitems}
            onSelect={onSelectCollege}
            onInput={oninputCollege}
            required={true}
          />
        </InputProfile>
        <InputProfile
          icon={collegeIDInput}
          dispatch={setCollegeID}
          input={{
            type: "text",
            value: collegeID,
            placeholder: "COLLEGE ID",
            required: true,
          }}
        />
        <InputProfile
          icon={whatsappInput}
          dispatch={setWAPNumber}
          input={{
            type: "tel",
            value: wapNumber,
            placeholder: "WHATSAPP NUMBER",
            required: true,
            maxLength: 10,
          }}
        />
        <InputProfile
          icon={streamInput}
          dispatch={setStream}
          input={{
            type: "text",
            value: stream,
            placeholder: "STREAM",
            required: true,
          }}
        />
        <InputProfile icon={yearInput}>
          <select
            className={style.selectInput}
            onChange={(e) => setYear(e.target.value)}
            required
          >
            <option className={style.option} disabled hidden selected>
              YEAR OF STUDY
            </option>
            <option className={style.option}>Ist Year</option>
            <option className={style.option}>IInd Year</option>
            <option className={style.option}>IIIrd Year</option>
            <option className={style.option}>IVth Year</option>
            <option className={style.option}>Vth Year</option>
          </select>
        </InputProfile>
        <InputProfile icon={genderInput}>
          <select
            className={style.selectInput}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option className={style.option}>GENDER</option>
            <option className={style.option}>Male</option>
            <option className={style.option}>Female</option>
            <option className={style.option}>Other</option>
          </select>
        </InputProfile>
        <InputProfile icon={yearInput}>
          <input
            placeholder="DATE OF BIRTH"
            type="text"
            ref={ref}
            onChange={(e) => setDob(e.target.value)}
            onFocus={() => (ref.current.type = "date")}
            onBlur={() => (ref.current.type = "date")}
          />
        </InputProfile>
        <InputProfile
          icon={referralInput}
          dispatch={setReferral}
          input={{
            type: "text",
            value: referral,
            placeholder: "REFERRAL-ID-CAP",
          }}
        />
      </form>

      <div className="flex flex-row justify-between">
        <div href="/" className="w-[20vw]">
          <img
            src={backArrow}
            alt="Back Arrow"
            className="w-[100px] p-5 cursor-pointer"
          />
        </div>
        {percentage === 100 ? (
          <div
            href="/"
            onClick={setupprofile}
            className="w-[45vw] md:w-[20vw] flex flex-row justify-end items-center cursor-pointer"
          >
            <div className="px-5 py-3 bg-[#663399] text-white rounded-2xl">
              Let's Go
            </div>
            <img
              src={backArrow}
              alt="Back Arrow"
              className="w-[100px] p-5 rotate-180"
            />
          </div>
        ) : (
          <div
            // href="/"
            // onClick={setupprofile}
            className="w-[45vw] md:w-[20vw] flex flex-row justify-end items-center cursor-pointer"
          >
            <div className="px-5 py-3 bg-[#663399] text-white rounded-2xl">
              Finish Profile Setup
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Signup;
