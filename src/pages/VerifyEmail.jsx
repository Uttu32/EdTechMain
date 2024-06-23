import React, { useEffect, useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import ResendLogo from "../assets/Logo/Resend.png";
import NewResendLogo from "../assets/Logo/ResendLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendOtp, signUp } from "../services/operations/authAPI";
import OtpInput from "react-otp-input";

const VerifyEmail = () => {
  const { loading } = useSelector((state) => state.auth);
  const [isResendHovered, setIsResendHovered] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState("");
  const { signupData } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!signupData) {
      navigate("/signup");
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(signupData, otp, navigate));
  };

  return (
    <div className="text-white flex items-center justify-center mt-[150px]">
      {loading ? (
        <div class="text-center">
          <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
          <h2 class="text-zinc-900 text-white mt-4">Loading...</h2>
        </div>
      ) : (
        <div className="w-11/12 max-w-maxContent mx-auto flex flex-col font-inter justify-center items-center text-white">
          <div className="mx-auto w-[508px] h-[370px] p-[32px] flex flex-col gap-[24px]">
            <div className="font-semibold text-[30px] leading-[38px] text-[#F1F2FF]">
              Verify email
            </div>
            <p className="font-[400] text-[18px] leading-[26px] text-[#AFB2BF]">
              A verification code has been sent to you. Enter the code below
            </p>

            <form onSubmit={handleSubmit}>
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderInput={(props) => (
                  <input
                    {...props}
                    placeholder="-"
                    className="w20 focus:outline-[#E7C009] p-[12px] h-[48px] bg-[#161D29] login_AccountType_Shadow outline-none text-[#F1F2FF]"
                  />
                )}
                containerStyle={`w-[100%] flex justify-between`}
              />

              <button
                type="submit"
                className="mt-6 w-full rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
              >
                Verify Email
              </button>
            </form>

            {/* <OTPInput func={getOtp} />

            <div onClick={(e) => handleSubmit(e)}>
              <div className="rounded-[8px] p-[12px] bg-[#FFD60A] font-inter font-medium text-[16px] leading-[24px] text-center text-[#000814] hover:scale-95 transition-all duration-200 btn_shadow cursor-pointer">
                Verify and Register
              </div>
            </div> */}

            <div className="flex flex-row justify-between">
              <Link to="/login">
                <p className="flex items-center gap-[8px] hover:text-[#47A5C5] cursor-pointer duration-200 transition-all">
                  <GoArrowLeft className="h-[20px] w-[20px]" /> Back to login
                </p>
              </Link>

              <p
                className="font-[500] text-[16px] leading-[24px] text-center hover:text-[#47A5C5] flex items-center gap-[8px] cursor-pointer duration-200 transition-all"
                onMouseEnter={() => setIsResendHovered(!isResendHovered)}
                onMouseLeave={() => setIsResendHovered(!isResendHovered)}
                onClick={() => dispatch(sendOtp(signupData.email, navigate))}
              >
                {isResendHovered ? (
                  <img src={ResendLogo} />
                ) : (
                  <img src={NewResendLogo} alt="" />
                )}
                Resend it
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VerifyEmail;
