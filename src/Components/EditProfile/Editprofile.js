/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import style from "./EditProfile.module.css";
import Cookies from "js-cookie";
import APIService from "../../services/axios";
import SocialMedia from "./SocialMedia";

const EditProfile = ({ user }) => {
  const [FormFields, setFormFields] = useState([
    {
      label: "Name",
      icon: "fas fa-user-alt",
      place: "Name",
      value: user.name,
    },
    {
      label: "Country",
      icon: "fas fa-globe-asia",
      place: " Country Name",
      value: `${user.country ? user.country : "NA"}`,
    },
    {
      label: "College",
      icon: "fas fa-graduation-cap",
      place: " College Name",
      value: user.college,
    },

    {
      label: "Stream",
      icon: "fas fa-user-plus",
      place: "Stream",
      value: user.stream,
    },
    {
      label: "Email ID",
      icon: "fas fa-envelope",
      place: "Email",
      value: user.email,
    },

    {
      label: "Whatsapp Number",
      icon: "fab fa-whatsapp",
      place: "Whatsapp Number",
      value: user.whatsapp,
    },
    {
      label: "Date of birth",
      icon: "fas fa-calendar-alt",
      place: "Date Of Birth",
      value: user.dob,
    },

    {
      label: "College ID Number",
      icon: "fas fa-id-badge",
      place: "College ID",
      value: user.college_id,
    },
    {
      label: "City",
      icon: "fas fa-map-marked-alt",
      place: "College City",
      value: user.college_city,
    },

    {
      label: "Referral CA-ID",
      icon: "fas fa-share-alt",
      place: " Referral Code",
      value: user.referral_id,
    },
    {
      label: "Gender",
      icon: "fas fa-venus-double",
      place: "Gender",
      value: user.gender,
    },
    {
      label: "Year",
      icon: "far fa-calendar-plus",
      place: "Year",
      value: user.year,
    },
  ]);

  // const fields = Object.keys(user);

  return (
    <div className={style.signup_container}>
      <SocialMedia user={user} />
      <h1 className={`font-nexa font-extrabold text-2xl ${style.heading}`}>Your Profile</h1>
      <div className={style.fields}>
        {FormFields &&
          FormFields.map(({ label, place, value }, index) => (
            <div key={index} className={style.input_container}>
              <label htmlFor="name" className="font-bold" style={{ color: "#fff" }}>
                {label} :
              </label>
              <div className={style.input_div}>
                <input
                  className={style.input}
                  placeholder={place}
                  type="text"
                  value={value}
                  disabled={true}
                  defaultValue="NA"
                  onChange={(e) => {
                    setFormFields(
                      FormFields.map((fields, k) => {
                        return k === index
                          ? {
                            ...fields,
                            value: e.target.value,
                          }
                          : fields;
                      })
                    );
                  }}
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EditProfile;
