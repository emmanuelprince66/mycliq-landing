import React from 'react'
import aOne from "../assets/images/a-1.svg";
import dFour from "../assets/images/d-4.png"
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import AppleIcon from "@mui/icons-material/Apple";

const HeaderFive = () => {
  return (
    <div className="w-full p-5 h-full ">
      <div className="flex items-start gap-2  w-full justify-center mb-5">
        <p className="text-[48px]">Get the App</p>
        <sup>
          <img src={aOne} alt="a-1" className="object-cover" />
        </sup>
      </div>

      <div className="w-full h-full    flex justify-center flex-col items-center">
        <img src={dFour} alt="d-four" className=" object-contain ml-[-1rem] md:ml-[-6rem]" />
        

        <div className="block md:flex gap-5 items-center ">
          <button className="flex min-w-[200px] gap-1 items-center bg-black py-1 rounded-md px-4 justify-center">
            <AppleIcon sx={{ fontSize: "50px" , color:"#fff" }} />
            <span className="flex flex-col gap-0">
              <p className="text-white text-[12px] ">Download on the</p>
              <p className="text-white text-[20px] ">App Store</p>
            </span>
          </button>
          <button className="flex gap-1 min-w-[200px] my-5 md:my-0 items-center bg-black py-1 rounded-md px-4 justify-center">
            <SmartDisplayIcon sx={{ fontSize: "50px"  , color:"#fff"}} />
            <span className="flex flex-col items-start gap-0">
              <p className="text-white text-[12px] ">Get it on</p>
              <p className="text-white text-[20px] ">Google Play</p>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderFive