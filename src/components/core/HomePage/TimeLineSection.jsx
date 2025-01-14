import React from "react";
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import timelineImage from "../../../assets/Images/TimelineImage.png";

const TimeLineSection = () => {
  const timeLine = [
    {
      logo: Logo1,
      heading: "Leadership",
      Description: "Fully committed to the success company",
    },
    {
      logo: Logo2,
      heading: "Responsibility",
      Description: "Students will always be our top priority",
    },
    {
      logo: Logo3,
      heading: "Flexibility",
      Description: "The ability to switch is an important skills",
    },
    {
      logo: Logo4,
      heading: "Solve the problem",
      Description: "Code your way to a solution",
    },
  ];
  return (
    <div>
      <div className="flex flex-row gap-15 items-center">
        <div className="w-[45%] flex flex-col  ">
          {timeLine.map((ele, i) => {
            return (
              <div className="">
                <div key={i} className="flex flex-row gap-6">
                  <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-full">
                    <img src={ele.logo} alt="logo.png" />
                  </div>

                  <div className="">
                    <h2 className="font-semibold text-[18px] ">
                      {ele.heading}
                    </h2>
                    <p className="text-base">{ele.Description}</p>
                  </div>
                </div>

                {i < timeLine.length - 1 && (
                  <div className="h-[42px] w-[0.03px] border border-[#AFB2BF] border-dotted relative left-[5%] my-1"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="relative w-[45%] shadow-blue-200">
          <img
            src={timelineImage}
            alt="image"
            className="shadow-white object-cover h-fit "
          />

          <div className="absolute bg-caribbeangreen-700 flex flex-row text-white uppercase py-7 left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div className="flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7">
              <p className="text-3xl font-bold">10</p>
              <p className="bg-caribbeangreen-700 text-sm ">
                Years of Experience
              </p>
            </div>

            <div className="flex gap-5 items-center px-7 ">
              <p className="text-3xl font-bold">250</p>
              <p className="bg-caribbeangreen-700 text-sm uppercase">
                Types of Courses
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeLineSection;
