import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPasswordResetToken } from "../services/operations/authAPI";
import { FaArrowLeftLong } from "react-icons/fa6";

const ForgetPassword = () => {
  const dispatch = useDispatch();
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");

  const { loading } = useSelector((state) => state.auth);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("dekh dekh dekh");
    dispatch(getPasswordResetToken(email, setEmailSent));
  };
  return (
    <div className="font-inter h-[92.7vh] mx-auto w-11/12 flex justify-center items-center">
      {loading ? (
        <div class="text-center">
          <div class="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"></div>
          <h2 class="text-zinc-900 text-white mt-4">Loading...</h2>
        </div>
      ) : (
        <div className="mx-auto w-[508px] h-fit p-[32px] flex flex-col gap-[24px]">
          <h1 className="font-semibold text-[30px] leading-[38px] text-[#F1F2FF]">
            {!emailSent ? "Reset your password" : "Check your Email"}
          </h1>

          <p className="font-[400] text-[18px] leading-[26px] text-[#AFB2BF]">
            {!emailSent
              ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery"
              : `We have sent the reset email to your ${email}`}
          </p>

          <form onSubmit={handleOnSubmit} className="flex flex-col ">
            {!emailSent && (
              <label className="flex w-full flex-col">
                <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                  Email Address <sup className="text-pink-200">*</sup>
                </p>

                <input
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5 outline-none"
                />
              </label>
            )}

            <button
              type="submit"
              className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
            >
              {!emailSent ? "Reset Password" : "Resend Email"}
            </button>
          </form>

          <div className="font-semibold text-[16px] leading-[24px] text-start text-[#F1F2FF]  ">
            <Link to="/login" className="flex items-center gap-2">
              <FaArrowLeftLong />
              <p>Back to Login</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgetPassword;
