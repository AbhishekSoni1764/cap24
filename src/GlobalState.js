import { atom } from "recoil";

const currentuser = atom({
  key: "currentuser",
  default: null,
});

const userupdate = atom({
  key: "userupdate",
  default: false,
});
const reffrel_id = atom({
  key: "reffrel_id",
  default: "",
});

export { currentuser, userupdate, reffrel_id };
