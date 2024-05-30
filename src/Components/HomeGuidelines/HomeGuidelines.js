import React from "react";
// import Navbar from "../Home/Components/Navbar/Navbar";
import PointSystem from "./PointSystem";
import TableThree from "./TableThree";
import TableTwo from "./TableTwo";
import { Link } from "react-router-dom";

const Guideline = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="pt-10 relative swing-in-top-fwd">
        <Link to="/">
          <div className="absolute top-5 right-5 cursor-pointer px-5 py-2 bg-[#663399] rounded-xl">
            Close
          </div>
        </Link>
        <h1 className="text-5xl font-bold mb-8 flex justify-center items-center mt-10">
          GUIDELINES
        </h1>
        <div className="border-2 border-[#0068A4] rounded-3xl mx-[4%]">
          <p className="rounded-3xl m-[4%] bg-[#290e40] p-8">
            The Campus Ambassadors will be assigned different ranks on the basis
            of their points. Rank system is only applicable to Campus
            Ambassadors with points more than 499, i.e. Campus Ambassadors
            eligible for participation certificate and other incentives. Campus
            Ambassadors can climb up the ranks by stacking points and obtaining
            +50 bonus points that comes along with rank upgrades.Campus
            Ambassadors will get sorted into 6 clans to effectively manage their
            workflow and to improve their interaction.
          </p>
          <div className="flex justify-around items-center  text-2xl md:text-6xl font-bold max-md:hidden ">
            <h1 className="h-16 w-60">RANKERS</h1>
            <h1 className="h-16 w-60">POINTS</h1>
          </div>
          <div className="flex flex-wrap flex-col justify-center font-bold md:mt-10 mb-4 gap-4 sm:mx-6">
            <div className="flex justify-around items-center text-4xl font-bold md:hidden">
              <h1 className="flex justify-center items-center rounded-3xl h-10 w-32 md:hidden">
                Rank
              </h1>
              <h1 className="flex justify-center items-center rounded-3xl h-10 w-32 md:hidden">
                Points
              </h1>
            </div>
            <div className="flex justify-around items-center text-sm md:text-3xl font-bold">
              <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-32 md:h-16 md:w-60">
                Cavalry
              </h1>
              <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-32 md:h-16 md:w-60">
                499-1198
              </h1>
            </div>
            <div className="flex justify-around items-center text-sm md:text-3xl font-bold">
              <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-32 md:h-16 md:w-60">
                Apprentice
              </h1>
              <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-32 md:h-16 md:w-60">
                1199-1998
              </h1>
            </div>
            <div className="flex justify-around items-center text-sm md:text-3xl font-bold">
              <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-32 md:h-16 md:w-60">
                Knight
              </h1>
              <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-32 md:h-16 md:w-60">
                1999-2998
              </h1>
            </div>
            <div className="flex justify-around items-center text-sm md:text-3xl font-bold">
              <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-32 md:h-16 md:w-60">
                Lord
              </h1>
              <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-32 md:h-16 md:w-60">
                2999-3998
              </h1>
            </div>
            <div className="flex justify-around items-center text-sm md:text-3xl font-bold">
              <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-32 md:h-16 md:w-60">
                King
              </h1>
              <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-32 md:h-16 md:w-60">
                3999 and above
              </h1>
            </div>
          </div>
        </div>
      </div>
      <PointSystem />
      <TableTwo />
      <TableThree />
    </div>
  );
};

export default Guideline;
