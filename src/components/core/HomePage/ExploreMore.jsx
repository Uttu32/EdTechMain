import React, { useState } from "react";
import { HomePageExplore } from "../../../data/homepage-explore";
import CourseCard from "./CourseCard";

const ExploreMore = () => {
  const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
  ];

  const [currentTab, setCurrentTab] = useState(tabsName[0]);
  const [courses, setCourses] = useState(HomePageExplore[0].courses);
  const [currentCard, setCurrentCard] = useState(
    HomePageExplore[0].courses[0].heading
  );

  const setMyCard = (value) => {
    setCurrentTab(value);
    const result = HomePageExplore.filter((ele) => ele.tag === value);
    setCourses(result[0].courses);
    setCurrentCard(result[0].courses[0].heading);
  };

  console.log("courses---->>>", courses);
  console.log("currentTab---->>>", currentTab);

  return (
    <div className="flex flex-col w-full items-center justify-center gap-12">
      <div className="flex flex-row rounded-full bg-richblack-800 my-5 border-richblack-100 px-1 py-1 w-fit self-center">
        {tabsName.map((ele, i) => {
          return (
            <div
              className={`text-[16px] flex flex-row items-center gap-2 
                ${
                  currentTab === ele
                    ? "bg-richblack-900 text-richblack-5 font-medium"
                    : "text-richblack-200 "
                } rounded-full transition-all duration-200 cursor-pointer hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2
                `}
              onClick={() => setMyCard(ele)}
              key={i}
            >
              {ele}
            </div>
          );
        })}
      </div>



      {/* Card component  */}
      <div className="lg:h-[150px] w-full ">
        <div className="flex gap-3 justify-between">
          {courses?.map((ele, i) => {
            return (
              <div key={i}>
                <CourseCard cardData={ele} currentCard={currentCard} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
