const PointSystem = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold my-10 flex justify-center items-center m">
        Point System
      </h1>
      <div className="border-2 border-[#0068A4] rounded-3xl mx-[4%]">
        <p className="rounded-3xl m-[4%] bg-[#290e40] p-8">
          The Campus Ambassadors will gain points basis of the following
          criteria:
        </p>
        <div className="flex justify-around items-center text-2xl md:text-6xl font-bold max-md:hidden md:ml-12">
          <h1 className="h-16 w-60">TASKS</h1>
          <h1 className="h-16 w-60">POINTS</h1>
        </div>
        <div className="flex flex-wrap flex-col justify-center font-bold md:mt-10 mb-4 gap-4 sm:mx-6">
          <div className="flex justify-around items-center text-4xl font-bold md:hidden">
            <h1 className="flex justify-center items-center rounded-3xl h-10 w-32 md:hidden">
              Task
            </h1>
            <h1 className="flex justify-center items-center rounded-3xl h-10 w-32 md:hidden">
              Points
            </h1>
          </div>
          <div className="flex  items-center text-xs md:text-lg font-bold px-2">
            <div className="md:w-1/2">
              <div className="flex w-full justify-center items-center ">
                <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-56  md:h-20 md:w-[500px] md:px-8 px-2 ">
                  Update your social media profiles: Instagram, Twitter,
                  Facebook, LinkedIn
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex w-full justify-center items-center">
                <h1 className="flex justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full">
                  50
                </h1>
              </div>
            </div>
          </div>
          <div className="flex  items-center text-xs md:text-lg font-bold px-2">
            <div className="md:w-1/2">
              <div className="flex w-full justify-center items-center ">
                <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-56  md:h-20 md:w-[500px] md:px-8 px-2 ">
                  Mention on LinkedIn profile: ‘Campus Ambassador at Aaruush 22
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex w-full justify-center items-center">
                <h1 className="flex justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full">
                  20
                </h1>
              </div>
            </div>
          </div>
          <div className="flex  items-center text-xs md:text-lg font-bold px-2">
            <div className="md:w-1/2">
              <div className="flex w-full justify-center items-center ">
                <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-56  md:h-20 md:w-[500px] md:px-8 px-2 ">
                  Follow AARUUSH social media handles:
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex w-full justify-center items-center">
                <h1 className="flex justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full">
                  40
                </h1>
              </div>
            </div>
          </div>
          <div className="flex  items-center text-xs md:text-lg font-bold px-2">
            <div className="md:w-1/2">
              <div className="flex w-full justify-center items-center ">
                <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-56  md:h-20 md:w-[500px] md:px-8 px-2 ">
                  (CA)Registrations using Reference from the same college
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex w-full justify-center items-center">
                <h1 className="flex justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full">
                  25
                </h1>
              </div>
            </div>
          </div>
          <div className="flex  items-center text-xs md:text-lg font-bold px-2">
            <div className="md:w-1/2">
              <div className="flex w-full justify-center items-center ">
                <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-56  md:h-20 md:w-[500px] md:px-8 px-2 ">
                  (CA)Registrations using Reference from another college
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex w-full justify-center items-center">
                <h1 className="flex justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full">
                  50
                </h1>
              </div>
            </div>
          </div>
          <div className="flex  items-center text-xs md:text-lg font-bold px-2">
            <div className="md:w-1/2">
              <div className="flex w-full justify-center items-center ">
                <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-56  md:h-20 md:w-[500px] md:px-8 px-2 ">
                  Previous Year participants coming back (Loyalty)
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex w-full justify-center items-center">
                <h1 className="flex justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full">
                  60
                </h1>
              </div>
            </div>
          </div>
          <div className="flex  items-center text-xs md:text-lg font-bold px-2">
            <div className="md:w-1/2">
              <div className="flex w-full justify-center items-center ">
                <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-56  md:h-20 md:w-[500px] md:px-8 px-2 ">
                  Registrations for unpaid events/workshops
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex w-full justify-center items-center">
                <h1 className="flex text-xs md:text-lg justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full">
                  40/reg.
                </h1>
              </div>
            </div>
          </div>
          <div className="flex  items-center text-xs md:text-lg font-bold px-2">
            <div className="md:w-1/2">
              <div className="flex w-full justify-center items-center ">
                <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-56  md:h-20 md:w-[500px] md:px-8 px-2 ">
                  Registrations for paid Events/workshops
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex w-full justify-center items-center">
                <h1 className="flex text-xs md:text-lg justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full">
                  70/reg.
                </h1>
              </div>
            </div>
          </div>
          <div className="flex  items-center text-xs md:text-lg font-bold px-2">
            <div className="md:w-1/2">
              <div className="flex w-full justify-center items-center ">
                <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-56  md:h-20 md:w-[500px] md:px-8 px-2 ">
                  Registrations for Common Registration
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex w-full justify-center items-center">
                <h1 className="flex justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full">
                  75
                </h1>
              </div>
            </div>
          </div>
          <div className="flex  items-center text-xs md:text-lg font-bold px-2">
            <div className="md:w-1/2">
              <div className="flex w-full justify-center items-center ">
                <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-56  md:h-20 md:w-[500px] md:px-8 px-2 ">
                  Social Media Drills
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex w-full justify-center items-center">
                <h1 className="flex justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full md:text-lg text-xs">
                  T 1.2
                </h1>
              </div>
            </div>
          </div>
          <div className="flex  items-center text-xs md:text-lg font-bold px-2">
            <div className="md:w-1/2">
              <div className="flex w-full justify-center items-center ">
                <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-56  md:h-20 md:w-[500px] md:px-8 px-2 ">
                  Milestone Bonus Points
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex w-full justify-center items-center">
                <h1 className="flex justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full md:text-lg text-xs">
                  T 1.3
                </h1>
              </div>
            </div>
          </div>
          <div className="flex  items-center text-xs md:text-lg font-bold px-2">
            <div className="md:w-1/2">
              <div className="flex w-full justify-center items-center ">
                <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-56  md:h-20 md:w-[500px] md:px-8 px-2 ">
                  Testimonial section
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex w-full justify-center items-center">
                <h1 className="flex justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full">
                  50
                </h1>
              </div>
            </div>
          </div>
          <div className="flex  items-center text-xs md:text-lg font-bold px-2">
            <div className="md:w-1/2">
              <div className="flex w-full justify-center items-center ">
                <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-56  md:h-20 md:w-[500px] md:px-8 px-2 ">
                  Weekly Questions
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex w-full justify-center items-center">
                <h1 className="flex justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full">
                  20
                </h1>
              </div>
            </div>
          </div>
          <div className="flex  items-center text-xs md:text-lg font-bold px-2">
            <div className="md:w-1/2">
              <div className="flex w-full justify-center items-center ">
                <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-10 w-56  md:h-20 md:w-[500px] md:px-8 px-2 ">
                  Rank Upgrade
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex w-full justify-center items-center">
                <h1 className="flex justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full">
                  50
                </h1>
              </div>
            </div>
          </div>
          <div className="flex  items-center text-xs md:text-lg font-bold px-2">
            <div className="md:w-1/2">
              <div className="flex w-full justify-center items-center ">
                <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-40 w-56 md:h-60 md:w-[500px] md:px-8 px-2 ">
                  Competitions
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-col gap-y-2 w-full justify-center items-center">
                <h1 className="flex text-xs md:text-lg justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full p-6">
                  1st(100)
                </h1>
                <h1 className="flex text-xs md:text-lg justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full p-6">
                  2nd(75)
                </h1>
                <h1 className="flex text-xs md:text-lg justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full p-6">
                  3rd(50)
                </h1>
              </div>
            </div>
          </div>
          <div className="flex  items-center text-xs md:text-lg font-bold px-2">
            <div className="md:w-1/2">
              <div className="flex w-full justify-center items-center ">
                <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-40 w-56 md:h-60 md:w-[500px] md:px-8 px-2 ">
                  Top the Clan Leader board
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-col gap-y-2 w-full justify-center items-center">
                <h1 className="flex text-xs md:text-lg justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full p-6">
                  1st(100)
                </h1>
                <h1 className="flex text-xs md:text-lg justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full p-6">
                  2nd(75)
                </h1>
                <h1 className="flex text-xs md:text-lg justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full p-6">
                  3rd(50)
                </h1>
              </div>
            </div>
          </div>
          <div className="flex  items-center text-xs md:text-lg font-bold px-2">
            <div className="md:w-1/2">
              <div className="flex w-full justify-center items-center ">
                <h1 className="flex justify-center items-center rounded-3xl bg-[#8e68fe] h-12 w-56  md:h-20 md:w-[500px] md:px-8 px-2 ">
                  Attend Meet Your Clan and Meet the Geek sessions
                </h1>
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex w-full justify-center items-center">
                <h1 className="flex text-xs md:text-lg justify-center items-center bg-[#8e68fe] h-10 w-10 md:h-20 md:w-20 rounded-full p-6">
                  60/event
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PointSystem;
