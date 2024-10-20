import React from "react";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import AppleIcon from "@mui/icons-material/Apple";
import hOne from "../assets/images/h-1.png";
import hTwo from "../assets/images/h-2.png";
import l2 from "../assets/images/l2.jpg";
import wOne from "../assets/images/w-1.png";
import wTwo from "../assets/images/w-2.png";
import wThree from "../assets/images/w-3.png";
import apple from "../assets/images/apple.png";
import playstore from "../assets/images/playstore.png";
import real from "../assets/images/h-22.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full mt-[10%] h-full">
      <div className=" block md:flex  items-center justify-between ">
        <div className="flex flex-col items-start gap-3 w-full ">
          <p className="text-[64px] text-white leading-[60px] md:leading-2 ">
            Every Payment,{" "}
          </p>
          <div className="flex gap-1 md:gap-[3rem] items-center mt-[-20px] md:mt-0 ">
            <p className="text-[64px] text-white  leading-[90px] md:leading-2">
              {" "}
              a Breeze!
            </p>
            <img
              src={hOne}
              alt="h-1"
              className="object-contain w-[50px] h-[50px] md:w-[100px] md:h-[100px] "
            />
          </div>

          <p className="text-[24px] text-[#d7d7d7]   leading-7 max-w-[80%]">
            MyCliq seamlessly connects individuals and businesses within
            communities, while driving financial inclusion and promoting
            cashless society.
          </p>
          <div className="md:flex  gap-5 items-center my-3">
            <Link
              to="https://apps.apple.com/us/app/mycliq/id6514304272
"
            >
              <button className="flex gap-1 min-w-[200px] md:min-w-0 items-center bg-white py-1 rounded-md px-4 justify-center">
                <AppleIcon sx={{ fontSize: "50px" }} />
                <span className="flex flex-col gap-0">
                  <p className="text-black text-[12px] ">Download on the</p>
                  <p className="text-black text-[20px] ">App Store</p>
                </span>
              </button>
            </Link>

            <Link to="https://play.google.com/store/apps/details?id=app.mycliq.user ">
              <button className="flex gap-1 items-center min-w-[200px] md:min-w-0 my-5 bg-white py-1 rounded-md px-4 justify-center">
                <SmartDisplayIcon sx={{ fontSize: "50px" }} />
                <span className="flex flex-col items-start gap-0">
                  <p className="text-black text-[12px] ">Get it on</p>
                  <p className="text-black text-[20px] ">Google Play</p>
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="hidden md:block w-full h-full relative ">
          <img src={real} alt="h-2" className="object-cover  rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default Header;
