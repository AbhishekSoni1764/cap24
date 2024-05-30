import axios from "axios";

import Cookies from "js-cookie";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/v1`,
  headers: {
    Authorization: Cookies.get("accessToken") || "",
  },
});

export default instance;
