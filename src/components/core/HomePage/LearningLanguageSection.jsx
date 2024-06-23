import React from "react";
import HighlightText from "./HighlightText";
import knowYourProgress from "../../../assets/Images/Know_your_progress.png";
import compareWithOthers from "../../../assets/Images/Compare_with_others.png";
import planYourLessons from "../../../assets/Images/Plan_your_lessons.png";
import CTAButton from './Button';

const LearningLanguageSection = () => {
  return (
    <div className="mt-[130px] mb-[80px]">
      <div className="flex flex-col gap-5 items-center">
        <div className="text-center text-4xl font-semibold">
          Your swiss knife for
          <HighlightText text={"learning any language"} />
        </div>

        <div className="text-center text-richblack-600 mx-auto text-base font-medium w-[70%]">
          Using spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>

        <div className="flex flex-row items-center justify-center mt-5">
          <img
            src={knowYourProgress}
            alt="KnowYourProgress"
            className="object-contain -mr-32"
          />
          <img
            src={compareWithOthers}
            alt="compareWithOthers"
            className="object-contain"
          />
          <img
            src={planYourLessons}
            alt="planYourLessons"
            className="object-contain -ml-36 "
          />
        </div>

        <div className="self-center w-fit">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
        </div>

      </div>
    </div>
  );
};

export default LearningLanguageSection;
