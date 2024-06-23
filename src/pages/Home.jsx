import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/HomePage/HighlightText";
import CTAButton from "../components/core/HomePage/Button";
import BannerVideo from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import Footer from "../components/core/HomePage/Footer";
import instructor from "../assets/Images/Instructor.png";
import ReviewCard from "../components/core/HomePage/ReviewCard";
import Image1 from "../assets/Images/Image1.png";
import Image2 from "../assets/Images/Image2.png";
import Image3 from "../assets/Images/Image3.png";
import Image4 from "../assets/Images/Image4.png";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import Header from "../components/core/HomePage/Header";

function Home() {
  return (
    <div>
      {/* Section 1  */}
      <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between">
      
        <Link to={"/signup"}>
          <div className="group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit box_Shadow ">
            <div className="flex items-center rounded-full gap-4 px-10 py-[5px] transition-all duration-200 group-hover:bg-richblack-900 ">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-7">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className="mt-4 w-[90%] text-center text-lg font-bold text-[#838894]">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        {/* video part  */}
        <div className="mx-3 relative shadow-blue-200 my-12">
          <video muted loop autoPlay className="h-[515px] video_shadow">
            <source src={BannerVideo} type="video/mp4" />
          </video>
        </div>

        {/* code section 1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold">
                Unlock your <HighlightText text={"coding potential"} /> with our
                online courses.
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
              <html>
              head><>Example</
              title><linkrel="stylesheet"href="styles.css">
              /head>
              body>
              h1><ahref="/">Header</a>
              /h1>
              nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>
              /nav>
              `}
            codeColor={"text-yellow-25"}
            backgroundGradient={"bg_yellow"}
          />
        </div>

        {/* code section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold">
                Start <HighlightText text={"coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>
              <html>
              head><>Example</
              title><linkrel="stylesheet"href="styles.css">
              /head>
              body>
              h1><ahref="/">Header</a>
              /h1>
              nav><ahref="one/">One</a><ahref="two/">Two</a><ahref="three/">Three</a>
              /nav>
              `}
            codeColor={"text-yellow-25"}
            backgroundGradient={"bg_blue"}
          />
        </div>

        <div className="w-full flex flex-col items-center mb-12">
          <div className="text-center text-4xl font-semibold mt-7">
            Unlock the
            <HighlightText text={"Power of Code"} />
          </div>
          <div className="mt-3 w-[90%] text-center text-lg font-bold text-[#838894]">
            Learn to Build Anything You Can Imagine
          </div>

          <ExploreMore />
        </div>
      </div>

      {/* Section 2  */}
      <div className="bg-pure-greys-5 text-richblack-700 ">

        <div className="homepage_bg h-[333px]">
          <div className="w-11/12 max-w-maxContent mx-auto flex flex-col items-center justify-between gap-5">
            <div className="h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex gap-3 items-center">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>

              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7">


          <div className="flex flex-row gap-5 mb-10 mt-[95px]">
            <div className=" text-4xl font-semibold w-[45%]">
              Get the skills you need for a
              <HighlightText text={"job that is in demand."} />
            </div>

            <div className=" flex flex-col justify-center items-start gap-10 w-[40%]">
              <div className="font-inter font-[500] text-[16px] leading-[24px] text-[#2C333F]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <div className="">
                <CTAButton active={true} linkto={"/login"}>
                  Learn More
                </CTAButton>
              </div>
            </div>
          </div>

          <TimeLineSection />

          <LearningLanguageSection />


        </div>
        
      </div>

      {/* Section 3  */}
      <div className=" pt-36 pb-24 relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between gap-24">
        {/* upper section  */}
        <div className="flex w-full gap-16">
          {/* left section containing image  */}
          <div className="w-[50%]">
            <img
              src={instructor}
              alt="Instructor image"
              className="w-[616px] h-[545px] instructor_shadow"
            />
          </div>
          {/* right section with text  */}
          <div className="w-1/2 flex flex-col">
            <div className="text-4xl leading-[44px] font-inter font-semibold mt-7 ">
              Become an
              <div>
                <HighlightText text={"instructor"} />
              </div>
            </div>

            <div className="mt-4 pr-4 text-lg font-bold text-[#838894]">
              Instructors from around the world teach millions of students on
              StudyNotion. We provide the tools and skills to teach what you
              love.
            </div>

            <div className="self-start mt-16">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex gap-2 items-center">
                  Start Teaching Today
                  <FaArrowRight />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
        {/* lower section  */}
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
      </div>

      {/* Footer  */}
      <div className="bg-[#161D29] py-12 flex items-center">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
