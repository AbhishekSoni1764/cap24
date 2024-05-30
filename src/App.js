import React, { Suspense, useState, useEffect } from "react";
import "./App.css";
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import APIService from "./services/axios";
import { Auth } from "aws-amplify";

import Cookies from "js-cookie";
import Spinner from "./Components/Spinner/Spinner";
import Guidelines from "./Components/HomeGuidelines/HomeGuidelines";

const Home = React.lazy(() => import("./Components/Home/Home"));
const NotFound = React.lazy(() => import("./Components/NotFound/404Page"));
const ProfileSetup = React.lazy(() =>
  import("./Components/ProfileSetup/ProfileSetup")
);
// const Login = React.lazy(() => import("./Components/Login/Login"));
const UserProfile = React.lazy(() =>
  import("./Components/UserProfile/UserProfile")
);

const App = () => {
  const [user, setUser] = useState();
  console.log(user);
  // const location = useLocation();
  // console.log(location);
  const [userdata, setUserdata] = useState();
  useEffect(() => {
    checkUser();
    async function checkUser() {
      const user = Auth.currentAuthenticatedUser()
        .then((data) => {
          if (data.attributes) {
            setUserdata(data.attributes);
          }
        })
        .catch((err) => {
          Cookies.remove("accessToken");
        });
    }
  }, []);

  useEffect(() => {
    const addgetUser = async () => {
      if (userdata) {
        const user = (
          await APIService.post(
            "/users",
            {
              name: userdata.name,
              email: userdata.email,
              image: userdata.picture,
              cap: false,
            },
            {
              headers: {
                Authorization: Cookies.get("accessToken") || "",
              },
            }
          )
        ).data;
        console.log(user);
        Cookies.set("accessToken", user.accessToken, { expires: 5 });
        const user_data = (
          await APIService.get(`/users/${userdata.email}`, {
            headers: {
              Authorization: Cookies.get("accessToken") || "",
            },
          })
        ).data;
        console.log(user_data);
        delete user_data.pk;
        delete user_data.sk;
        setUser(user_data);
      }
    };
    addgetUser();
  }, [userdata]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/userprofile/*"
          element={
            <Suspense fallback={<Spinner />}>
              {user ? (
                user.cap ? (
                  <UserProfile user={user} />
                ) : (
                  <Navigate to="/profilesetup" replace />
                )
              ) : (
                <Navigate to="/" replace />
              )}
            </Suspense>
          }
        ></Route>

        <Route
          path="/profileSetup"
          element={
            <Suspense fallback={<Spinner />}>
              {user ? (
                user.cap ? (
                  <Navigate to="/userprofile/dashboard" replace />
                ) : (
                  <ProfileSetup user={user} setUser={setUser} />
                )
              ) : (
                <Navigate to="/" replace />
              )}
            </Suspense>
          }
        ></Route>
        <Route
          path="/"
          element={
            <Suspense fallback={<Spinner />}>
              <Home user={user} />
            </Suspense>
          }
        />
        <Route path="/ref/:ref_id" element={<Navigate to="/" replace />} />
        <Route
          path="/guidelines"
          element={
            <Suspense fallback={<Spinner />}>
              <Guidelines />
            </Suspense>
          }
        ></Route>

        <Route
          path="*"
          element={
            <Suspense fallback={<Spinner />}>
              <NotFound />
            </Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
