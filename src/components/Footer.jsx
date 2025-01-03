import React from "react";
import logo from "../assets/svg/home.svg";
import whatsappLOgo from "../assets/svg/whatsapp.svg";
import instagram from "../assets/svg/instagram.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center md:h-[80vh] ld:h-[75vh] h-auto w-screen gap-8 ld:gap-12 py-8 px-4 bg-[#F1F1F1]">
      <div>
        <a href="/" className="flex justify-center items-center">
          <img src={logo} alt="MyBrand Logo" className="h-[50px] w-[167px]" />
        </a>
      </div>
      <div className="font-bold font-inter text-center md:text-[50px] text-[30px] leading-[36px] md:leading-[60px]">
        StockWiz Technologies
      </div>
      <div className="flex md:flex-row flex-col gap-4 md:gap-0 justify-center items-center">
        <div className="font-inter mr-4 font-medium text-[16px] leading-4 text-[#000000CC]/[0.8]">
          FOLLOW US ON :
        </div>
        <div className="flex gap-4 items-center justify-center">
          <a href="/" className="flex  items-center">
            <img
              src={whatsappLOgo}
              alt="MyBrand Logo"
              className="h-[46px] w-[46px]"
            />
          </a>
          <a href="/" className="flex items-center">
            <img
              src={instagram}
              alt="MyBrandLogo"
              className="h-[46px] w-[46px]"
            />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col md:w-[80%] md:gap-0 gap-4 w-full">
        <div className="text-center font-inter font-medium text-[#000000CC]/[0.8] text-[16px] leading-5">
          Disclaimer
        </div>
        <div className="text-center font-light text-[14px] leading-6 text-[#00000099]/[0.6]">
          The Training Programs are designed to teach investors about technical
          analysis and market psychology by providing various information and
          material including live cases and examples from the stock market. Such
          information and material is provided solely for educational and
          training purposes and does not constitute an advice, guarantee,
          invitation, or recommendation to buy, sell, trade, or invest in any
          stocks. Trading stocks involves significant risks, and past
          performance is not indicative of future results.*
        </div>
      </div>
      <div className="border-b-4 md:w-[90%] w-full md:gap-0 gap-4 text-[#00000033]/[0.2]" />
      <div className="flex w-[80%] gap-4 items-center justify-center flex-col">
        <div className="text-center font-light text-[14px] leading-4 text-[#00000033]/[0.7]">
          2024 StockWiz Technologies LLP. All rights reserved.
        </div>
        <div className="text-center font-light text-[14px] leading-6 text-[#00000099]/[0.6]">
          This site is not a part of the Meta™ Inc. Additionally, this site is
          not endorsed by Meta™ in any way. All content provided on this page is
          for informational and promotional purposes only. Results may vary and
          are not guaranteed. Please review our Privacy Policy and Terms of
          Service before proceeding.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
