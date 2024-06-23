import React from "react";
import HighlightText from "../HomePage/HighlightText";

const Quote = () => {
  return (
    <div>
      <span className="text-[#424854] ">" {" "}</span>
      We are passionate about revolutionizing the way we learn. Our innovative
      platform
      <HighlightText text={"combines technology"} />, <span className="text-[#ff512f]">expertise</span> ,
      and community to create an{" "}
      <span className="text-[#f09819]">unparalleled educational experience.</span>
      <span className="text-[#424854] ">" {" "}</span>
    </div>
  );
};

export default Quote;
