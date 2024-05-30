import logo from "./aaruushlogo.svg";
// import style from "./logo.css";
// use the svg and export it as a react-icons component
// make the component such that it can be modified given className and style props

const AaruushLogo = ({ className, color }) => {
  return (
    <img
      src={logo}
      className={
        "my-auto saturate-[0.5] hover:saturate-[0.75] transition-all w-[3rem] h-[3rem]"
      }
      //   style={style}
      alt="Aaruush Logo"
    />
  );
};

export default AaruushLogo;
