import React from "react";
import { Link } from "react-router-dom";

const FooterColumn = ({ heading, options }) => {
  return (
    <div className="flex flex-col gap-2">
      <heading className="font-inter font-[600] text-[16px] leading-[24px] text-left text-[#AFB2BF]">
        {heading}
      </heading>
      <div className="flex flex-col gap-2 font-inter font-[400] text-[14px] leading-[22px] text-[#6E727F]">
        {options.map((ele, i) => {
          return (
            <Link to={ele.link}>
              <p>{ele.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FooterColumn;
