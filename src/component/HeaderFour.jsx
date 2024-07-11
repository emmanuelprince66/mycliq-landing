import React from "react";
import aOne from "../assets/images/a-1.svg";
import picOne from "../assets/images/pic-1.png";
import picTwo from "../assets/images/pic-2.png";
import picThree from "../assets/images/pic-3.png";
import picFour from "../assets/images/pic-4.png";
const HeaderFour = () => {
  return (
    <div className="w-full h-full p-5">
      <div className="flex items-start gap-2 justify-center mb-[3rem] md:mb-[5rem] w-full p-0">
        <p className=" text-[25px] md:text-[48px] text-center">Why MyCliq?</p>
        <sup>
          <img src={aOne} alt="a-1" className="object-cover" />
        </sup>
      </div>
      <div className="flex flex-col md:flex-row gap-[5rem] mb-[4rem]">
        <div className="w-full flex-1 order-2 md:order-1">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className=" text-[25px] md:text-[32px]">Secure and Encrypted</p>
            <p className="text-[18px] md:text-[20px] text-center  md:text-start text-[#535353]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="w-full flex-1 order-1 md:order-2">
          <img src={picOne} alt="pic-1" className="w-full h-full" />
        </div>
      </div>

      <div className="block md:flex gap-[5rem] mb-[4rem]">
        <div className="w-full flex-1">
          <img src={picTwo} alt="pic-2" className="w-full h-full" />
        </div>
        <div className="flex-1 flex flex-col text-center md:items-start gap-2">
          <p className="text-[20px] md:text-[32px] mb-1 mt-[6rem] md:my-0 ">
            New Ways To Pay!
          </p>
          <p className="text-[18px] md:text-[20px] text-[#535353]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[5rem] mb-[4rem]">
        <div className="w-full flex-1 order-2 md:order-1">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[20px] md:text-[32px]  md:my-0">
              Personalized Insight
            </p>
            <p className="text-[18px] md:text-start text-center md:text-[20px] text-[#535353]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="w-full flex-1 order-1 md:order-2">
          <img src={picThree} alt="pic-3" className="w-full h-full" />
        </div>
      </div>

      <div className="block md:flex gap-[5rem] mb-[4rem]">
        <div className="w-full flex-1">
          <img
            src={picFour}
            alt="pic-4"
            className="w-full h-full rounded-md  "
          />
        </div>
        <div className="flex-1 flex flex-col items-center  md:items-start gap-2">
          <p className="text-[20px] md:text-[32px] mb-1  md:mt-0 mt-[3rem]">
            Customer Support
          </p>
          <p className="text-[18px] md:text-[20px] text-center md:text-start text-[#535353]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderFour;
