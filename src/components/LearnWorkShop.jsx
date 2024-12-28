import React from "react";
import CustomButton1 from "../common/CustomButton1";
import CustomButton2 from "../common/CustomButton2";
import image1 from "../assets/svg/image1.svg";
import image2 from "../assets/svg/image2.svg";
import image3 from "../assets/svg/image3.svg";
import image4 from "../assets/svg/image4.svg";
import image5 from "../assets/svg/image5.svg";
import image6 from "../assets/svg/image6.svg";

const allImage = [
  {
    icon: image1,
    text1: "Enter Trades Before Big Moves Happen",
    text2:
      "Institutional trading helps you spot market trends & breakouts before they become obvious to everyone else.",
  },
  {
    icon: image2,
    text1: "Avoid Retail Traps",
    text2:
      "Learn to stay ahead of retail traders who often buy when prices are high and sell when prices are low.",
  },
  {
    icon: image3,
    text1: "Trade Like the Big Players",
    text2:
      "Understand the strategies used by banks, hedge funds, and institutions to stay profitable.",
  },
  {
    icon: image4,
    text1: "Simple, Data-Driven Approach",
    text2:
      "No need for fancy indicators or complicated charts, just focus on price, time, and volume.",
  },
  {
    icon: image5,
    text1: "Maximize Your Gains with Risk Management",
    text2:
      "Learn how to protect your capital by using stop losses and proper risk-to-reward ratios.",
  },
  {
    icon: image6,
    text1: "Master Market Psychology",
    text2:
      "Understand how market sentiment affects price movements and how to use this knowledge to your advantage.",
  },
];
const LearnWorkShop = () => {
  return (
    <div className="flex border-b-2 flex-col gap-4 w-screen  h-[170vh] bg-[#F1F1F1]">
      <div className="flex gap-6 p-4 bg-[#F9FAFB] justify-center items-center flex-row">
        Call. Offer Expires In Sign Up Now And Get 50% Discount + Free E-Book +
        Free Consultation Call. Offer Expires In
      </div>
      <div className="mt-2 font-poppins text-center text-[40px] leading-[60px] font-bold ">
        What You Will <span className="text-figmaGreen">Learn</span> in the{" "}
        <br />
        Workshop
        <div className="border-2 w-[200px] border-figmaGreen mx-auto mt-2" />
      </div>
      <div className="flex justify-center mt-8">
        <div className="grid flex-wrap grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center w-full max-w-5xl">
          {allImage.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer w-80 h-[380px] bg-white p-6 rounded-2xl flex flex-col items-center transition-all duration-300 ease-in-out ${
                index === 1
                  ? "shadow-[rgba(0,_0,_0,_0.09)_0px_2px_1px,_rgba(0,_0,_0,_0.09)_0px_4px_2px,_rgba(0,_0,_0,_0.09)_0px_8px_4px,_rgba(0,_0,_0,_0.09)_0px_16px_8px,_rgba(0,_0,_0,_0.09)_0px_32px_16px]"
                  : "shadow-md hover:shadow-[rgba(0,_0,_0,_0.09)_0px_2px_1px,_rgba(0,_0,_0,_0.09)_0px_4px_2px,_rgba(0,_0,_0,_0.09)_0px_8px_4px,_rgba(0,_0,_0,_0.09)_0px_16px_8px,_rgba(0,_0,_0,_0.09)_0px_32px_16px]"
              }`}
            >
          
              <img
                src={item.icon}
                alt={`icon-${index}`}
                className="w-full h-[150px] object-cover mb-6 rounded-md"
              />

              <div className="flex  flex-col items-start gap-4">
                <div className="font-poppins text-[20px] leading-8 text-start font-bold text-[#0E0F19]">
                  {item.text1}
                </div>
                <div className="font-poppins text-[16px] leading-6 text-start font-medium text-[#0E0F19B2]/[0.7]">
                  {item.text2}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex mt-8 justify-center gap-8">
        <CustomButton1
          sx={{
            width: "276px",
          }}
        >
          Join Now (English) at ₹199
        </CustomButton1>
        <CustomButton2
          sx={{
            width: "276px",
          }}
        >
          Join Now (Hindi) at ₹199
        </CustomButton2>
      </div>
    </div>
  );
};

export default LearnWorkShop;
