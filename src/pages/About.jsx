import React from "react";
import HighlightText from "../components/core/HomePage/HighlightText";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import Quote from "../components/core/AboutPage/Quote";
import FoundingStory from "../assets/Images/FoundingStory.png";
import StatsComponent from "../components/core/AboutPage/StatsComponent";
import LearningGrid from "../components/core/AboutPage/LearningGrid";
import ContactFormSection from "../components/core/AboutPage/ContactFormSection ";
import Footer from "../components/core/HomePage/Footer";
import ReviewCard from "../components/core/HomePage/ReviewCard";
import Image1 from "../assets/Images/Image1.png";
import Image2 from "../assets/Images/Image2.png";
import Image3 from "../assets/Images/Image3.png";
import Image4 from "../assets/Images/Image4.png";

const About = () => {
  return (
    <div className=" text-white">
      {/* section 1 */}
      <section className="pt-[100px] bg-[#161D29] mx-auto">
        <div className=" w-11/12 max-w-maxContent mx-auto h-[475px] flex flex-col items-center justify-center gap-[52px] font-inter">
          <span className="font-[500] text-[16px] leading-[24px] text-center text-[#999DAA]">
            About us
          </span>
          <header className="font-semibold text-[36px] leading-[44px] text-center w-[809px] flex flex-col gap-[16px] text-[#F1F2FF]">
            Driving Innovation in Online Education for a
            <HighlightText text={"Brighter Future"} />
            <p className="font-[500] text-[16px] leading-[24px] text-center text-[#838894]">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>

          <div className="flex gap-[24px] mx-auto relative ">
            <div className="background_About"></div>
            <img src={BannerImage1} className="w-[384px] h-[311px]" />
            <img src={BannerImage2} className="w-[384px] h-[311px]" />
            <img src={BannerImage3} className="w-[384px] h-[311px]" />
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="flex items-center justify-center mt-[78px] h-[336px] mx-auto w-11/12 max-w-maxContent font-inter font-semibold text-[36px] leading-[52px] text-center text-[#AFB2BF] ">
        <div>
          <Quote />
        </div>
      </section>

      <hr className="text-[#838894]" />

      {/* section 3 */}
      <section className="py-[100px] w-11/12 max-w-maxContent mx-auto">
        <div className="flex flex-col gap-[35px] ">
          {/* foudning story wala div */}
          <div className="flex gap-[98px] items-center justify-center">
            {/* founding story left box */}
            <div className="w-[35%] font-inter flex flex-col gap-[24px]">
              <h1 className="font-semibold text-[36px] leading-[44px] founding_color">
                Our Founding Story
              </h1>

              <p className="font-[500] text-[16px] leading-[24px] text-[#838894]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>

              <p className="font-[500] text-[16px] leading-[24px] text-[#838894]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>
            {/* foudning story right box */}
            <div className="w-[35%] ">
              <img src={FoundingStory} />
            </div>
          </div>

          {/* vision and mission wala parent div */}
          <div className="flex gap-[98px] pt-[50px] items-center justify-center">
            {/* left box */}
            <div className="flex flex-col gap-[24px] font-inter w-[35%]">
              <h1 className="font-semibold text-[36px] leading-[36px] text-[#E65C00]">
                Our Vision
              </h1>
              <p className="font-[500] text-[16px] leading-[24px] text-[#838894]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>

            {/* right box */}
            <div className="flex flex-col gap-[24px] font-inter w-[35%]">
              <h1 className="font-semibold text-[36px] leading-[36px] text-[#F9D423]">
                Our Mission
              </h1>
              <p className="font-[500] text-[16px] leading-[24px] text-[#838894]">
                Our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <StatsComponent />

      {/* scetion 5 */}
      <section className="w-11/12 max-w-maxContent mx-auto">
        <LearningGrid />
        <ContactFormSection />
      </section>

      {/* section 6 */}
      <section className="mx-auto w-11/12 max-w-maxContent py-[30px] mb-[100px]">
      <div className="flex flex-col w-full gap-[52px]">
          <h1 className="font-inter font-[600] text-[36px] leading-[44px] text-center">
            Reviews from other learners
          </h1>

          {/* card sections  */}
          <div className="flex justify-between">
            <ReviewCard
              active={true}
              name={"Cody Fisher"}
              email={"tim.jennings@example.com"}
              body={
                "Coordination of activities improved tremendously with Learn codings ."
              }
              rating={4.5}
              image={Image1}
            />
            <ReviewCard
              active={true}
              name={"Esther Howard"}
              email={"felicia.reid@example.com"}
              body={
                "Everyone’s on the same page. Many of our people are not very organized naturally, so Learn codings is a godsend!"
              }
              rating={4.5}
              image={Image2}
            />
            <ReviewCard
              active={true}
              name={"Eleanor Pena"}
              email={"nathan.roberts@example.com"}
              body={
                "I would recommend Learn codings for anyone trying to get the word out about their business. It has saved me so much time!"
              }
              rating={4.5}
              image={Image3}
            />
            <ReviewCard
              active={true}
              name={"Kristin Watson"}
              email={"bill.sanders@example.com"}
              body={
                "With Learn codings , we have finally accomplished things that have been waiting forever to get done."
              }
              rating={4.5}
              image={Image4}
            />
          </div>
        </div>
      </section>

      <div className="bg-[#161D29] py-12 flex items-center">
        <Footer />
      </div>
    </div>
  );
};

export default About;
