import React from "react";
import nwOne from "../assets/images/nw-1.png";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Divider } from "@mui/material";

import nOne from "../assets/images/n-1.png";
import v from "../assets/images/v.svg";

const Footer = () => {
  const location = window.location.pathname;
  return (
    <div className="flex flex-col items-center gap-5 justify-center py-5 p-2">
      <div className=" block md:flex w-full ">
        <div className="flex flex-col items-start gap-2">
          <img src={nOne} alt="n-1" className="object-contain w-100 h-100" />
          <p className="text-[16px] text-[#F2F2F2] max-w-[90%]">
            MyCliq seamlessly connects individuals and businesses within
            communities, while driving financial inclusion and promoting
            cashless society.
          </p>
        </div>
        <div className=" block md:flex justify-between items-start mt-3 md:mt-0">
          <div className="flex flex-col items-start gap-4 w-[100%]">
            <p className="text-[16px] font-bold text-white">Quick Links</p>
            <Link to="/about">
              <p className="text-[#D7D7D7] text-[16px] hover:text-[#ff7f00] cursor-pointer transition-colors duration-700 ease-in-out">
                About
              </p>
            </Link>
            <Link to="/about">
              <p className="text-[#D7D7D7] text-[16px] hover:text-[#ff7f00] cursor-pointer transition-colors duration-700 ease-in-out">
                Features
              </p>
            </Link>
            <Link to="/about">
              <p className="text-[#D7D7D7] text-[16px] hover:text-[#ff7f00] cursor-pointer transition-colors duration-700 ease-in-out">
                Why MyCliq?
              </p>
            </Link>
          </div>
          <div className="flex flex-col items-start gap-2 mt-4 md:mt-0 ">
            <p className="text-[16px] text-white">Stay up to date</p>
            <p className="text-[#F2F2F2] text-[16px]">
              Be the first to know when we release new features, make
              improvements or when there is an offer. No spam.
            </p>

            <div className="flex items-center gap-3">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-white border-0 rounded-sm outline-none h-[35px] p-1 "
              />
              <button className="bg-[#ff7f00] h-[35px] text-white hover:text-black rounded-md px-3">
                Subscribe
              </button>
            </div>

            <div className="flex gap-3 items-center mt-7">
              <TwitterIcon sx={{ color: "#D1D1D1" }} />
              <FacebookIcon sx={{ color: "#D1D1D1" }} />
              <InstagramIcon sx={{ color: "#D1D1D1" }} />
              {/* <LinkedInIcon sx={{ bcolor: "#D1D1D1" }} /> */}
              <img src={v} alt="v" className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center w-full flex-col items-center  gap-2">
        <Link to="/terms">
          <p className="text-[16px] text-[#F2F2F2] hover:text-[#ff7f00] cursor-pointer">
            Terms & conditions
          </p>
        </Link>

        <Link to="/privacy">
          <p className="text-[16px]  text-[#F2F2F2] hover:text-[#ff7f00] cursor-pointer">
            Privacy
          </p>
        </Link>
      </div>

      <Divider sx={{ width: "100%", background: "#D1D1D1", my: "1rem" }} />

      <div className=" block md:flex justify-between items-center w-full ">
        <p className="text-[16px] text-[#d1d1d1]">
          © 2024 MyCliq. All rights reserved.
        </p>

        <div className="flex justify-between w-[25%] items-center">
          <p className="text-[16px] flex items-center text-[#d1d1d1]">Terms </p>
          <span className="text-[27px] text-[#d1d1d1] pb-3">.</span>
          <p className="text-[16px] flex items-center text-[#d1d1d1]">
            Privacy
          </p>
          <span className="text-[27px] text-[#d1d1d1] pb-3">.</span>
          <p className="text-[16px] flex items-center text-[#d1d1d1]">
            Cookies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
