import React from "react";
import HeaderTwo from "../component/HeaderTwo";
import HeaderThree from "../component/HeaderThree";
import HeaderFive from "../component/HeaderFive";
import HeaderFour from "../component/HeaderFour";
import cvOne from "../assets/images/cv-1.png";
import cvTwo from "../assets/images/cv-2.png";
import Header from "../component/Header";
import Tags from "../component/Tags";

const Home = () => {
  return (
    <>
      <div id="about" className="h-full w-full mt-[3%] bg-white">
        <div className="w-full mt-[4%]">
          <Tags />
        </div>

        <div className="w-full bg-[#F9F9F9] mt-[5%]">
          <div className="w-full md:w-[75%]  mx-auto h-full pt-[1%] ">
            <HeaderTwo />
          </div>
        </div>
      </div>
      <div
        id="features"
        className=" h-full mt-[10%] md:h-screen w-full bg-[#fff6ec] relative"
      >
        <div className=" w-full flex  justify-end absolute ">
          <img
            src={cvOne}
            alt="cv-1"
            className=" object-cover md:object-contain  w-[100px] md:w-[30rem]"
          />
        </div>

        <div className="  flex w-[200px] h-[200px] md:w-full md:h-full justify-start absolute bottom-0 ">
          <img src={cvTwo} alt="cv-2" className="object-cover" />
        </div>

        <div className=" w-full md:w-[75%] mx-auto h-full pt-[1%]">
          <HeaderThree />
        </div>
      </div>

      <div id="why" className="h-full w-full bg-white">
        <div className="w-full md:w-[75%] mx-auto h-full pt-[1%] ">
          <HeaderFour />
        </div>
      </div>
      <div className="h-full mb-[5%] w-full bg-[#FFF6EC]">
        <div className="w-full md:w-[75%] mx-auto h-full  ">
          <HeaderFive />
        </div>
      </div>
    </>
  );
};

export default Home;
