import React from "react";
import star from "../assets/images/star.svg";
import aOne from "../assets/images/a-1.svg";
import cmOne from "../assets/images/cm-1.jpg";
import cmTwo from "../assets/images/cm-2.jpg";
import cmThree from "../assets/images/cm-3.jpg";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import sparkles from "../assets/images/sparkles.svg";

const Campus = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full bg-[#F9F9F9] p-10 flex flex-col justify-center items-center gap-4 mb-[10%]">
        <div className="flex items-start gap-2 justify-center">
          <div className="h-[4rem]  flex flex-col items-center">
            <img src={star} alt="star" className="mt-8 mr-6" />
          </div>

          <p className=" text-[25px] md:text-[48px] text-[#1E1E1E] text-center leading:[1rem] md:leading-[3rem]">
            MyCliq Campus Ambassador
          </p>
          <sup>
            <img src={aOne} alt="a-1" className="object-cover" />
          </sup>
        </div>
        <p className="text-[#535353] text-[18px] md:text-[20px] text-center font-normal mb-4">
          Join the clique! Become our campus ambassador.
        </p>

        <div className=" w-full md:w-[80%] mx-auto flex flex-col-reverse md:flex-row   justify-between items-center">
          <div className="flex flex-col items-center md:items-start gap-2 md:w-1/2 w-full">
            <p className=" text-[20px] md:text-[32px] text-center font-[600] my-5 text-[#1e1e1e]">
              What is About?
            </p>

            <p className="font-normal text-[18px] md:text-[20px] text-center md:text-start w-full md:w-[80%] text-[#535353]">
              The Campus Ambassadorship Program is a community-driven initiative
              that identifies and empowers individuals who are highly
              influential and respected within their communities. These
              ambassadors serve as focal points, leveraging their leadership and
              social capital to drive positive change, foster engagement, and
              shape decisions within their respective communities.
            </p>
            <button className="cursor-pointer mx-auto md:mx-0  my-4 md:my-0 flex justify-center bg-[#333333] text-white hover:text-black px-4 py-3 border border-white rounded-md">
              Apply Now
            </button>
          </div>

          <div className="h-full w-full flex-1  justify-end flex mb-4 md:mb-0">
            <img src={cmOne} alt="c-m" className="object-cover" />
          </div>
        </div>
      </div>

      <div className="w-full bg-[#333333]  p-5 md:p-10 flex flex-col justify-center items-center gap-4 mb-[4%]">
        <div className="flex items-start gap-2 justify-center w-full">
          <div className="h-[4rem]  flex flex-col items-center">
            <img src={star} alt="star" className="mt-8 mr-6" />
          </div>

          <p className=" text-[20px] md:text-[48px] text-center text-white my-5 leading-[3rem]">
            Responsibilities
          </p>
          <sup>
            <img src={aOne} alt="a-1" className="object-cover" />
          </sup>
        </div>
        <p className="text-white text-center text-[18px] md:text-[20px] font-normal mb-3">
          What you will do as our campus ambassador.
        </p>

        <div className=" w-full md:w-[80%] mx-auto block md:flex  justify-between items-center">
          <div className="h-full w-full   justify-end  ">
            <img src={cmTwo} alt="c-m" className="object-cover rounded-md" />
          </div>
          <div className="flex flex-col items-start gap-3  my-5 md:my-0 ">
            <div className="flex gap-1 items-center">
              <FiberManualRecordRoundedIcon sx={{ color: "#F2F2F2" }} />

              <p className="md:text-[32px]  text-[#F2F2F2]">
                Community engagement.
              </p>
            </div>
            <div className="flex gap-3 items-center md:items-start  ">
              <FiberManualRecordRoundedIcon sx={{ color: "#F2F2F2" }} />

              <p className="md:text-[32px]  text-[#F2F2F2] leading-8">
                Refer students and friends to open an account.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <FiberManualRecordRoundedIcon sx={{ color: "#F2F2F2" }} />

              <p className="md:text-[32px]  text-[#F2F2F2]">
                Content creation.
              </p>
            </div>
            <div className="flex gap-3 items-center md:items-start ">
              <FiberManualRecordRoundedIcon sx={{ color: "#F2F2F2" }} />
              <p className="md:text-[32px]  text-[#F2F2F2] leading-8">
                Properly Represent the brand on campus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  bg-[#FFF6EC]  p-5 md:p-10 flex flex-col justify-center items-center gap-4 mb-[4%]">
        <div className="flex items-start gap-2 justify-center w-full">
          <div className="h-[4rem]  flex flex-col items-center">
            <img src={star} alt="star" className="mt-8 mr-6" />
          </div>

          <p className="text-[20px] md:text-[48px] text-center text-[#1E1E1E] leading-[3rem]">
            Benefits
          </p>
          <sup>
            <img src={aOne} alt="a-1" className="object-cover" />
          </sup>
        </div>
        <p className="text-[#535353] text-center text-[18px] md:text-[20px] font-normal mb-3">
          What you will do as our campus ambassador.
        </p>

        <div className=" w-full md:w-[80%] mx-auto flex flex-col-reverse md:flex-row  justify-between items-center">
          <div className="flex flex-col items-start gap-3  my-5 md:my-0 w-full md:w-[60%]  ">
            <div className="flex gap-1 items-center">
              <img src={sparkles} alt="sparkes" className="object-cover" />

              <p className="md:text-[32px] text-[18px]   text-[#535353]">
                Access to courses and training.
              </p>
            </div>
            <div className="flex gap-3 items-start  ">
              <img src={sparkles} alt="sparkes" className="object-cover" />

              <p className="md:text-[32px]  text-[18px]  text-[#535353] leading-8">
                Monthly stipend.
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img src={sparkles} alt="sparkes" className="object-cover" />

              <p className="md:text-[32px] text-[18px]   text-[#535353]">
                Promotion materials
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <img src={sparkles} alt="sparkes" className="object-cover" />

              <p className="md:text-[32px] text-[18px]   text-[#535353]">
                Internship Opportuinities
              </p>
            </div>
            <div className="flex gap-3 items-start  ">
              <img src={sparkles} alt="sparkes" className="object-cover" />

              <p className="md:text-[32px] text-[18px]  text-[#535353] leading-8">
                Experience in your Resume/CV
              </p>
            </div>
          </div>
          <div className="h-full w-full   justify-end flex-1 ">
            <img src={cmThree} alt="c-m" className="object-cover rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campus;
