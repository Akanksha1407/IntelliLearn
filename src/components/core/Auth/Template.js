import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import frameImg from "../../../assets/Images/frame.png";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, description1, description2, image, formType }) => {
  return (
    <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
      <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
        <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
          {title}
        </h1>
        <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
          <span className="text-richblack-100">{description1}</span> <br />
          <span className="font-edu-sa font-bold italic text-blue-100">
            {description2}
          </span>
        </p>
        {formType === "signup" ? <SignupForm /> : <LoginForm />}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="w-full h-[1px] bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium leading[1.375rem]">OR</p>
          <div className="w-full h-[1px] bg-richblack-700"></div>
        </div>

        <button className="w-full flex justify-center items-center rounded-[8px] font-medium text-richblack-100 border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6 drop-shadow-[0_1.5px_rgba(255,255,255,0.25)]">
          <FcGoogle />
          <p>Sign Up With Google</p>
        </button>
      </div>
      <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
        <img
          src={frameImg}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="Students"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4 z-10"
        />
      </div>
    </div>
  );
};

export default Template;
