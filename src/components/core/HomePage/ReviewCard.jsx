import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = ({ active, image, name, email, body, rating }) => {
  const starNum = Math.floor(rating);

  return (
    <div className="w-[282px] h-[184px] p-[12px] flex flex-col gap-[8px] bg-[#161D29] hover:scale-95 transition-all duration-200">
      <div className="flex gap-[12px]">
        <img
          className="w-[36px] h-[36px] rounded-full"
          src={image}
          alt="image"
        />
        <div className="font-inter">
          <p className=" font-semibold text-[14px] leading-[22px] text-[#F1F2FF]">
            {name}
          </p>
          <p className="font-[500] text-[12px] leading-[20px] text-[#424854]">
            {email}
          </p>
        </div>
      </div>
      <div className="font-inter font-[500px] text-[12px] leading-[20px] text-[#DBDDEA]">
        {body}
      </div>
      <div className="flex items-center gap-[2px]">
        <p className="mr-[8px] text-[#E7C009] font-inter font-semibold text-[14px] leading-[22px]">
          {rating}
        </p>
        {Array.from({ length: 5 }, (v, i) => (
          <FaStar key={i} color={i < starNum ? "#E7C009" : "#2C333F"} />
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
