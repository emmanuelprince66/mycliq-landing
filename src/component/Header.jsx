import React from "react";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import AppleIcon from "@mui/icons-material/Apple";
import hOne from "../assets/images/h-1.png"
import hTwo from '../assets/images/h-2.png'
import wOne from "../assets/images/w-1.png"
import wTwo from "../assets/images/w-2.png"
import wThree from "../assets/images/w-3.png"
import apple from "../assets/images/apple.png"
import playstore from "../assets/images/playstore.png"
const Header = () => {

  return (
    <div className="w-full mt-[10%] ">
      <div className="flex  items-center justify-between">
        <div className="flex flex-col items-start gap-3 ">
          <p className="text-[64px] text-white">Every Payment, </p>
          <div className="flex gap-[3rem] items-center">
            <p className="text-[64px] text-white"> a Breeze!</p>
            <img src={hOne} alt="h-1" />
          </div>

          <p className="text-[24px] text-[#d7d7d7] leading-7 max-w-[80%]">
            MyCliq seamlessly connects individuals and businesses within
            communities, while driving financial inclusion and promoting
            cashless society.
          </p>
          <div className="flex gap-5 items-center my-3">
            <button className="flex gap-1 items-center bg-white py-1 rounded-md px-4 justify-center">
              <AppleIcon sx={{ fontSize: "50px" }} />
              <span className="flex flex-col gap-0">
                <p className="text-black text-[12px] ">Download on the</p>
                <p className="text-black text-[20px] ">App Store</p>
              </span>
            </button>
            <button className="flex gap-1 items-center bg-white py-1 rounded-md px-4 justify-center">
              <SmartDisplayIcon sx={{ fontSize: "50px" }} />
              <span className="flex flex-col items-start gap-0">
                <p className="text-black text-[12px] ">Get it on</p>
                <p className="text-black text-[20px] ">Google Play</p>
              </span>
            </button>
          </div>
        </div>

        <div className="w-full h-full relative ">
          <img src={hTwo} alt="h-2" className="object-cover " />
          <img src={wOne} alt="w-1" className="object-cover absolute bottom-[4.2rem] right-[11rem]" />
          <img src={wTwo} alt="w-2" className="object-cover absolute bottom-[-1.5rem] right-[4rem]" />
          <img src={wThree} alt="w-3" className="object-cover absolute top-[17.7rem] right-[2rem]" />
          {/* <img src={wTwo} alt="w-2" className="object-cover absolute" />
          <img src={wThree} alt="w-3" className="object-cover absolute" /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
