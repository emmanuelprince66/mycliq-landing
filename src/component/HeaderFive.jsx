import React from "react";
import aOne from "../assets/images/a-1.svg";
import dFour from "../assets/images/d-4.png";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import AppleIcon from "@mui/icons-material/Apple";

const HeaderFive = ({ img, title, type }) => {
  return (
    <div className="w-full  h-full  flex flex-col items-center justify-end  bg-[#FFF6EC]  ">
      <div className="w-full   h-full mx-auto  block md:flex justify-center md:justify-between  items-center">
        <div className="w-full">
          <img src={img} alt="phone" className="object-cover" />
        </div>
        <div className="flex items-center md:items-start flex-col gap-3 ">
          <div className="flex items-center md:justify-start justify-center md:items-start flex-wrap flex-1 gap-2   w-full mb-2">
            <p className=" text-[25px]  md:text-[37px] my-7 md:my-0">
              Get the{" "}
              <span className={`${type === "merchant" && "text-[#ff7f00]"}`}>
                {" "}
                {title}
              </span>{" "}
            </p>
            <sup>
              <img src={aOne} alt="a-1" className="object-cover" />
            </sup>
            {type === "merchant" && (
              <p className=" text-[25px] md:text-[37px] mb-4">
                for your business
              </p>
            )}
          </div>
          {type === "user" && (
            <p className="text-[#535353] font-[500] text-center text-[20px] mb-4">
              Become a MyCliq User for free today!
            </p>
          )}

          <div className="block md:flex gap-5 items-center flex-1 ">
            <button className="flex min-w-[200px] gap-1 items-center bg-black py-1 rounded-md px-4 justify-center">
              <AppleIcon sx={{ fontSize: "50px", color: "#fff" }} />
              <span className="flex flex-col gap-0">
                <p className="text-white text-[12px] ">Download on the</p>
                <p className="text-white text-[20px] ">App Store</p>
              </span>
            </button>
            <button className="flex gap-1 min-w-[200px] my-5 md:my-0 items-center bg-black py-1 rounded-md px-4 justify-center">
              <SmartDisplayIcon sx={{ fontSize: "50px", color: "#fff" }} />
              <span className="flex flex-col items-start gap-0">
                <p className="text-white text-[12px] ">Get it on</p>
                <p className="text-white text-[20px] ">Google Play</p>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderFive;
