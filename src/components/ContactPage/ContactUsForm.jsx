import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { apiConnector } from "../../services/apiconnector";
// import { contactusEndpoint } from '../../services/apis';
import CountryCode from "../../data/countrycode.json";

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const submitContactForm = async (data) => {
    console.log("Logging Data", data);
    try {
      setLoading(true);
      // const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
      const response = { status: "OK" };
      console.log("Logging response", response);
      setLoading(false);
    } catch (error) {
      console.log("Error:", error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <form onSubmit={handleSubmit(submitContactForm)}>
      <div className="flex flex-col gap-6 p-[32px]">
        <div className="flex gap-5 justify-between">
          {/* firstName */}
          <div className="flex flex-col w-[50%] font-inter">
            <label
              htmlFor="firstname"
              className="font-[400] text-[14px] mb-1 leading-[22px] text-[#F1F2FF]"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter first name"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5 outline-none"
              {...register("firstname", { required: true })}
            />
            {errors.firstname && (
              <span className="text-[#FF4040] text-[12px] ml-1 mt-1">
                Please enter Your name
              </span>
            )}
          </div>

          {/* lastName */}
          <div className="flex flex-col w-[50%]">
            <label
              htmlFor="lastname"
              className="font-[400] mb-1 text-[14px] leading-[22px] text-[#F1F2FF]"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter Last name"
              {...register("lastname")}
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5 outline-none"
            />
          </div>
        </div>

        {/* email */}
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="font-[400] text-[14px] mb-1 leading-[22px] text-[#F1F2FF]"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5 outline-none"
            placeholder="Enter email Address"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-[#FF4040] text-[12px] ml-1 mt-1">
              Please enter your email address
            </span>
          )}
        </div>

        {/* phoneNo */}
        <div className="flex flex-col">
          <label
            htmlFor="phonenumber"
            className="font-[400] text-[14px] mb-1 leading-[22px] text-[#F1F2FF]"
          >
            Phone Number
          </label>

          <div className="flex flex-row gap-2 text-white">
            {/* dropdown */}

            <select
              name="dropdown"
              id="dropdown"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-[80px] rounded-[0.5rem] bg-richblack-800 px-1 text-richblack-5 outline-none"
              {...register("countrycode", { required: true })}
            >
              {CountryCode.map((element, index) => {
                return (
                  <option
                    key={index}
                    value={element.code}
                    className="text-white"
                  >
                    {element.code}
                  </option>
                );
              })}
            </select>

            <input
              type="text"
              name="phonenumber"
              id="phonenumber"
              placeholder="12345 67890"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-[calc(100%-90px)] rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5 outline-none"
              {...register("phoneNo", {
                required: { value: true, message: "Please enter Phone Number" },
                maxLength: { value: 10, message: "Invalid Phone Number" },
                minLength: { value: 8, message: "Invalid Phone Number" },
              })}
            />
          </div>
          {errors.phoneNo && (
            <span className="text-[#FF4040] text-[12px] ml-1 mt-1">
              {errors.phoneNo.message}
            </span>
          )}
        </div>

        {/* message */}
        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="font-[400] text-[14px] mb-1 leading-[22px] text-[#F1F2FF]"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5 outline-none"
            rows="7"
            placeholder="Enter Your message here"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className="text-[#FF4040] text-[12px] ml-1 mt-1">
              PLease enter your message.
            </span>
          )}
        </div>

        <button
          type="submit"
          className="rounded-md font-[500]  bg-yellow-50 text-center p-[12px] text-[16px] leading-[24px] text-[#000814]"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
