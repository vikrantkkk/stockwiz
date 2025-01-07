import React from "react";
import CustomButton4 from "../common/CustomButton4";
import CustomButton3 from "../common/CustomButton3";

const GrabSeat = () => {
  return (
    <div className="flex flex-col border-b-2 gap-8 md:gap-12 justify-center bg-[#F1F1F1] items-center md:py-20">
      <div className="md:flex hidden flex-col md:gap-8 gap-4">
        <CustomButton4 />
        <CustomButton3 />
      </div>
      <div className="font-poppins p-2 font-normal text-figmaGreen rounded-[8px] w-auto bg-greenbackgrond">
        Last Few Seats Left ! Grab your seat now
      </div>
    </div>
  );
};

export default GrabSeat;
