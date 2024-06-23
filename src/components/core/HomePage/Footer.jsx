import React from "react";
import { FooterLink2 } from "../../../data/footer-links";
import LightLogo from "../../../assets/Logo/Logo-Full-Light.png";
import FooterColumn from "./FooterColumn";
import FacebookLogo from "../../../assets/Logo/Facebook.svg";
import GoogleLogo from "../../../assets/Logo/Google.svg";
import XLogo from "../../../assets/Logo/Twitter.svg";
import YoutubeLogo from "../../../assets/Logo/Youtube.svg";
import { IoIosHeart } from "react-icons/io";

const Footer = () => {
  return (
    <div className="mx-auto w-11/12">
      <div className="mx-auto flex gap-4 w-11/12 text-white">
        {/* left section  */}
        <div className="w-[45%] mx-auto flex gap-4">
          {/* 3 section in it */}
          {/* section 1 */}
          <div className="w-[30%] flex flex-col gap-3">
            <img src={LightLogo} className="w-[160px] h-[32px]" alt="logo" />
            <FooterColumn
              heading={"Company"}
              options={[
                { title: "About", link: "/about" },
                { title: "Careers", link: "/careers" },
                { title: "Affiliates", link: "/affiliates" },
              ]}
            />

            <div className="flex gap-3">
              <img src={FacebookLogo} alt="" />
              <img src={GoogleLogo} alt="" />
              <img src={XLogo} alt="" />
              <img src={YoutubeLogo} alt="" />
            </div>
          </div>
          {/* section 2 */}
          <div className="w-[30%] flex flex-col gap-8">
            <FooterColumn
              heading={"Resources"}
              options={[
                { title: "Articles", link: "/about" },
                { title: "Blog", link: "/careers" },
                { title: "Chart Sheet", link: "/affiliates" },
                { title: "Code Challenges", link: "/affiliates" },
                { title: "Docs", link: "/affiliates" },
                { title: "Projects", link: "/affiliates" },
                { title: "Videos", link: "/affiliates" },
                { title: "Workspaces", link: "/affiliates" },
              ]}
            />
            <FooterColumn
              heading={"Support"}
              options={[{ title: "Help center", link: "/about" }]}
            />
          </div>
          {/* section 3 */}
          <div className="w-[30%] flex flex-col gap-8">
            <FooterColumn
              heading={"Plans"}
              options={[
                { title: "Paid memberships", link: "/about" },
                { title: "For Students", link: "/careers" },
                { title: "Business Solutions", link: "/affiliates" },
              ]}
            />

            <FooterColumn
              heading={"Community"}
              options={[
                { title: "Forum", link: "/about" },
                { title: "Chapters", link: "/careers" },
                { title: "Events", link: "/affiliates" },
              ]}
            />
          </div>
        </div>

        {/* center line */}
        <div className="flex items-center justify-center w-[8%]">
          <div className="h-[538px] border border-[#2C333F] w-[0.2px] "></div>
        </div>

        {/* right section  */}
        <div className="w-[45%] mx-auto flex gap-4">
          {/* 3 sections */}
          {FooterLink2.map((ele, i) => {
            return (
              <div kry={i} className="w-[30%] flex flex-col">
                <FooterColumn heading={ele.title} options={ele.links} />
              </div>
            );
          })}

        </div>
      </div>
      {/* bottom line  */}
      <div className="mt-12 mx-auto w-11/12 flex justify-center items-center">
        <div className="w-full border border-[#2C333F] h-[0.2px]"></div>
      </div>
      {/* below bottom content */}
      <div className="mt-8 mx-auto w-11/12 flex justify-between">
        {/* left part */}
        <div className="font-inter font-[500] text-[14px] leading-[22px] text-[#838894] flex gap-2 items-center">
          <p>Privacy Policy</p>
          <p className="h-[12px] border border-[#2C333F] w-[0.2px]"></p>
          <p>Cookie Policy</p>
          <p className="h-[12px] border border-[#2C333F] w-[0.2px]"></p>
          <p>Terms</p>
        </div>
        {/* right part */}
        <div className="font-inter font-[500] text-[14px] leading-[22px] text-[#838894] flex items-center">
          Made with{" "}
          <IoIosHeart
            style={{ marginLeft: "4px", marginRight: "4px" }}
            color="red"
          />{" "}
          © 2024 Studynotion
        </div>
      </div>
    </div>
  );
};

export default Footer;
