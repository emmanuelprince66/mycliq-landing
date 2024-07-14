import React from "react";
import star from "../assets/images/star.svg";
import buOne from "../assets/images/bu-1.svg";
import buTwo from "../assets/images/bu-2.svg";
import buThree from "../assets/images/bu-3.svg";
import buFour from "../assets/images/bu-4.svg";
import buSix from "../assets/images/bu-6.svg";
import buSeven from "../assets/images/bu-7.svg";
import buEight from "../assets/images/bu-8.svg";
import aOne from "../assets/images/a-1.svg";
import HeaderFive from "../component/HeaderFive";
import merchant from "../assets/images/merchant.png";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const Business = () => {
  const card = [
    {
      id: 1,
      icn: buThree,
      bTile: "QR Code Payment",
      sTile: "Get paid instantly with just a QR code scan. Yes, just a scan!",
    },
    {
      id: 2,
      icn: buFour,
      bTile: "Accept Payment with MyCliqID",
      sTile: "Use your MyCliqID to receive payments quickly and securely!",
    },
    {
      id: 3,
      icn: buSix,
      bTile: "MyCliq Soft POS",
      sTile:
        "Turn your NFC-enabled mobile device to a POS with MyCliq. No terminal required!",
    },
    {
      id: 4,
      icn: buSeven,
      bTile: "MyCliq Soft POS",
      sTile:
        "Turn your NFC-enabled mobile device to a POS with MyCliq. No terminal required!",
    },
    {
      id: 5,
      icn: buEight,
      bTile: "POS Terminal",
      sTile: "Collect card payment with MyCliq NFC-enabled POS terminal.",
    },
  ];
  return (
    <>
      <Navbar />
      <div
        id="features"
        className=" h-full  md:h-full w-full bg-primary_black_1 relative "
      >
        <div className=" w-full flex  justify-end absolute ">
          <img
            src={buOne}
            alt="cv-1"
            className=" object-cover md:object-contain  w-[100px] md:w-[20rem]"
          />
        </div>

        <div className=" w-full md:w-[75%] mx-auto h-full pt-[12%] md:pt-[1%] relative">
          <div className="w-full p-5 h-full ">
            <div className="flex items-start gap-1 md:gap-2 justify-center">
              <div className="h-[4rem]  flex flex-col items-center">
                <img src={star} alt="star" className="mt-8 mr-6" />
              </div>

              <p className="text-[25px] md:text-[48px] text-white text-center leading-8 md:leading-[3rem]">
                MyCliq for your Business
              </p>
              <sup>
                <img src={aOne} alt="a-1" className="object-cover " />
              </sup>
            </div>

            <p className="text-center text-[#D1D1D1] font-normal mt-4">
              With MyCliq, you have the best tool needed to elevate your retail
              business. Your business enjoys seamless transactions and financial
              solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-[5rem]">
              {card.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-full h-full flex flex-col items-start gap-3 py-5 p-2 bg-[#1E1E1E] rounded-md"
                  >
                    <img
                      src={item.icn}
                      alt="icn"
                      className="object-contain w-[40px] h-[40px]"
                    />

                    <p className="text-[20px] text-white">{item.bTile}</p>
                    <p className="text-[13px] text-[#D1D1D1]">{item.sTile}</p>
                  </div>
                );
              })}
            </div>

            <div className="w-full flex flex-col justify-center mt-8 mb-[20%] items-center gap-3 ">
              <p className=" text-[18px] md:text-[20px] text-white font-[600]">
                Start accepting payment in minutes!
              </p>
              <div className=" my-3 mx-auto justify-center w-full  md:flex items-center gap-4">
                <button className="cursor-pointer mx-auto mb-4 md:mx-0 md:mb-0  flex justify-center bg-transparent text-white hover:text-black px-4 py-3 border border-white rounded-md">
                  Talk to our sales Team
                </button>
                <button className="cursor-pointer mx-auto md:mx-0  flex justify-center bg-white text-[#1E1E1E] hover:text-black px-4 py-3 border border-white rounded-md">
                  Create an Account for your Business
                </button>
              </div>
            </div>
          </div>

          <div className=" flex  absolute bottom-[0rem] left-[-16rem]">
            <img src={buTwo} alt="cv-2" className="  w-[500px] h-[500px] " />
          </div>
        </div>

        <div className="w-full bg-white pt-[5%]">
          <div className="h-full mb-[5%] w-full bg-[#FFF6EC]">
            <div className="w-full md:w-[75%] mx-auto h-full  ">
              <HeaderFive
                img={merchant}
                title="Merchant App"
                glink=""
                alink=""
                type="merchant"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full bg-primary_black_1 pt-[7%] ">
        <div className="w-full md:w-[75%] mx-auto h-full pt-[1%] ">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Business;
