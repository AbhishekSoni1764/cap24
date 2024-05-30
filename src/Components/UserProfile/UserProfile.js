import React, { Suspense, useState, useEffect } from "react";
import Styles from "./UserProfile.module.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const Leaderboard = React.lazy(() => import("../leaderboard/Leaderboard"));
const Sidebar = React.lazy(() => import("../Common/sidebar/sidebar"));
const Header = React.lazy(() => import("../header/Header"));
const Dashboard = React.lazy(() => import("../Dashboard/Dashboard"));
const MainTask = React.lazy(() => import("../MainTask/MainTask"));
const MobileNavBar = React.lazy(() => import("../MobileNavBar/MobileNavBar"));
const MobHeader = React.lazy(() => import("../MobHeader/MobHeader"));
const EditProfile = React.lazy(() => import("../EditProfile/Editprofile"));

const UserProfile = (props) => {
  const { user } = props;
  const navigate = useNavigate();
  const [loc, setLoc] = useState("home");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const path = window.location.pathname;
    const location = path.split("/")[2];
    setLoc(location);
  }, []);

  const handleNavigation = (path) => {
    navigate(`/userprofile/${path}`);
  };

  return (
    <div className={Styles.UserProfile}>
      <div className={Styles.SideBar} id={modal && Styles.open}>
        <Sidebar user={user} />
      </div>
      <div className={Styles.MainBar}>
        <div className={Styles.Header}>
          <Header />
        </div>
        <div className={Styles.MobHeader}>
          <MobHeader location={loc} setModal={setModal} modal={modal} />
        </div>
        <div className={Styles.Routings}>
          <Routes>
            <Route
              path=""
              element={
                <Suspense
                  fallback={
                    <div className={Styles.SpinnerContainer}>
                      <Spinner />
                    </div>
                  }
                >
                  <Dashboard user={user} />
                </Suspense>
              }
            />
            <Route
              path="Leaderboard"
              element={
                <Suspense
                  fallback={
                    <div className={Styles.SpinnerContainer}>
                      <Spinner />
                    </div>
                  }
                >
                  <Leaderboard user={user} />
                </Suspense>
              }
            />
            <Route
              path="EditProfile"
              element={
                <Suspense
                  fallback={
                    <div className={Styles.SpinnerContainer}>
                      <Spinner />
                    </div>
                  }
                >
                  <EditProfile user={user} />
                </Suspense>
              }
            />
            <Route
              path="Task"
              element={
                <Suspense
                  fallback={
                    <div className={Styles.SpinnerContainer}>
                      <Spinner />
                    </div>
                  }
                >
                  <MainTask user={user} />
                </Suspense>
              }
            />
            <Route
              path="dashboard"
              element={
                <Suspense
                  fallback={
                    <div className={Styles.SpinnerContainer}>
                      <Spinner />
                    </div>
                  }
                >
                  <Dashboard user={user} />
                </Suspense>
              }
            />
          </Routes>
        </div>
        <MobileNavBar />
      </div>
    </div>
  );
};

export default UserProfile;
