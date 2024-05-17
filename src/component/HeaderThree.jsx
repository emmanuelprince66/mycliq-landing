import React from "react";
import aOne from "../assets/images/a-1.svg";
import cOne from "../assets/images/c-1.svg";
import cTwo from "../assets/images/c-2.svg";
import cThree from "../assets/images/c-3.svg";
import cFour from "../assets/images/c-4.svg";
import cFive from "../assets/images/c-5.svg";
import cSix from "../assets/images/c-6.svg";

const HeaderThree = () => {
  const card = [
    {
      id: 1,
      icn: cOne,
      bTile: "Payment with Phone Number",
      sTile: "Think of your phone number as an ATM card.",
    },
    {
      id: 2,
      icn: cTwo,
      bTile: "NFC Payments",
      sTile: "Experience contactless payment.",
    },
    {
      id: 3,
      icn: cThree,
      bTile: "Event Tickerting",
      sTile: "Purchase event tickets with ease.",
    },
    {
      id: 4,
      icn: cFour,
      bTile: "Bills Payment",
      sTile: "Pay your bills seamlessley.",
    },
    {
      id: 5,
      icn: cFive,
      bTile: "Inter-bank Transfer",
      sTile: "Transfer funds to other banks.",
    },
    {
      id: 6,
      icn: cSix,
      bTile: "Wallet-to-Wallet Transfer",
      sTile: "Seamless fund transfers between theInsight users.",
    },
  ];

  return (
    <div className="w-full p-5 h-full ">
      <div className="flex items-start gap-2 justify-center">
        <p className="text-[48px]">Features</p>
        <sup>
          <img src={aOne} alt="a-1" className="object-cover" />
        </sup>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-[5rem]">
        {card.map((item) => {
          return (
            <div className="w-full h-full flex flex-col items-start gap-3 py-5 p-2 bg-white rounded-md">
              <img
                src={item.icn}
                alt="icn"
                className="object-contain w-[40px] h-[40px]"
              />

              <p className="text-[20px]">{item.bTile}</p>
              <p className="text-[13px] text-[#535353]">{item.sTile}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeaderThree;
