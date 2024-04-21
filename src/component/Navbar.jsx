import React, { useEffect, useRef, useState } from "react";
import nOne from "../assets/images/n-1.png";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {

  return (
    <div className="w-full flex justify-between items-center">
      <img src={nOne} alt="n-img" />

      <div className="flex justify-between items-center gap-5">
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          offset={-2}
          duration={500}
        >
          <p className="text-[#D7D7D7] text-[16px] hover:text-[#ff7f00] cursor-pointer transition-colors duration-700 ease-in-out">
            About
          </p>
        </ScrollLink>
        <ScrollLink
          to="features"
          spy={true}
          smooth={true}
          offset={-2}
          duration={500}
        >
          <p className="text-[#D7D7D7] text-[16px] hover:text-[#ff7f00] cursor-pointer transition-colors duration-700 ease-in-out">
            Features
          </p>
        </ScrollLink>
        <ScrollLink
          to="why"
          spy={true}
          smooth={true}
          offset={-2}
          duration={500}
        >
          <p className="text-[#D7D7D7] text-[16px] hover:text-[#ff7f00] cursor-pointer transition-colors duration-700 ease-in-out">
            Why MyCliq?
          </p>
        </ScrollLink>
      </div>

      <button className="bg-white w-[150px] hover:text-[#ff7f00] transition-colors font-bold duration-700 ease-in-out rounded-md text-[16px] h-[50px]">
        Get The App
      </button>
    </div>
  );
};

export default Navbar;
