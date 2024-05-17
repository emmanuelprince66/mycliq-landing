import React from 'react'
import aOne from "../assets/images/a-1.svg";
const HeaderFour = () => {
  return (
    <div className="w-full h-full p-5">
    
     
      <div className="flex items-start gap-2 justify-center mb-[3rem] md:mb-[5rem] w-full p-0">
      
        <p className="text-[48px] text-center">Why <br/> theInsight?</p>
        <sup>
          <img src={aOne} alt="a-1" className="object-cover" />
        </sup>
      </div>

      <div className="block   md:flex  gap-[5rem]  mb-[4rem]">
        <div className="flex flex-col items-start gap-2">
          <p className="text-[32px] ">New Ways To Pay!</p>
          <p className="text-[20px] text-[#535353]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className=" min-h-[50%] min-w-[50%] bg-[#F2F2F2] rounded-md" />
      </div>
      <div className="block md:flex gap-[5rem]  mb-[4rem]">
        <div className=" min-h-[50%] min-w-[50%] bg-[#FFF6EC] rounded-md" />

        <div className="flex flex-col items-start gap-2">
          <p className="text-[32px]">Secure and Encrypted</p>
          <p className="text-[20px] text-[#535353]">
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
      <div className=" block md:flex gap-[5rem]  mb-[4rem]">
        <div className="flex flex-col items-start gap-2">
          <p className="text-[32px]">Peronalize Insights</p>
          <p className="text-[20px] text-[#535353]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className=" min-h-[50%] min-w-[50%] bg-[#F2F2F2] rounded-md" />
      </div>
      <div className="block md:flex gap-[5rem]  mb-[2rem]">
        <div className=" min-h-[50%] min-w-[50%] bg-[#FFF6EC] rounded-md" />

        <div className="flex flex-col items-start gap-2">
          <p className="text-[32px]">Customer Suport</p>
          <p className="text-[20px] text-[#535353]">
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
}

export default HeaderFour