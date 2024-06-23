import React from "react";
import user from "../../../assets/Logo/users.svg";
import { MdGroup } from "react-icons/md";
import { TbBinaryTree2 } from "react-icons/tb";
import lesson from "../../../assets/Logo/Lesson.svg";

const CourseCard = ({ cardData, currentCard }) => {

  return (
    <div
      className={`w-[341.33px] h-[300px] flex flex-col justify-between
    ${
      currentCard === cardData.heading
        ? "bg-[#FFFFFF] cardShadows text-black"
        : "bg-[#161D29]"
    }
    `}
    >
      <div className="flex flex-col gap-[12px] px-[24px] pt-[32px]">
        <div className={`font-inter font-semibold text-[20px] leading-[28px]
            ${ currentCard === cardData.heading ? "text-[#161D29]" : "text-[#DBDDEA]"}
            `}>{cardData?.heading}</div>

        <p className={`pb-[52px] font-inter font-[400] text-[16px] leading-[24px]
            ${currentCard === cardData.heading ? "text-[#585D69]" : "text-[#6E727F]"}
            `}>{cardData?.description}</p>
      </div>

      <div className={`flex flex-row justify-between w-full border-t border-dashed border-[#C5C7D4] px-[24px] py-[16px] 
        ${currentCard === cardData.heading ? "text-[#0A5A72]" : "text-[#838894]"}
        `}>
        <div className="flex flex-row items-center gap-2 font-inter font-[500] text-[16px] leading-[24px] ">
          {/* <img src={user} alt="" />
           */}
           <MdGroup className={`h-[25px] w-[25px]`} />
          <p>{cardData?.level}</p>
        </div>

        <div className="flex flex-row items-center gap-2">
          {/* <img src={lesson} alt="" /> */}
          <TbBinaryTree2 className={`h-[25px] w-[25px]`} />
          <p>{cardData?.lessionNumber} Lessons</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
