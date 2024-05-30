import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import { Amplify } from "aws-amplify";

import config from "./aws-exports";
import { BrowserRouter } from "react-router-dom";

if (process.env.NODE_ENV === "development") {
  config.oauth.redirectSignIn = "http://localhost:3000/";
  config.oauth.redirectSignOut = "http://localhost:3000/";
} else {
  config.oauth.redirectSignIn = "https://cap.aaruush.org/";
  config.oauth.redirectSignOut = "https://cap.aaruush.org/";
}

Amplify.configure({ ...config, ssr: true });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <RecoilRoot>
      <App />
    </RecoilRoot>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);

reportWebVitals();
