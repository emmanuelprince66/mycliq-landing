import React from 'react'
import aOne from "../assets/images/a-1.svg"
import bTwo from "../assets/images/b-2.png"
const HeaderTwo = () => {
  return (
    <div className="w-full p-5 h-full">
      <div className="flex items-start gap-2 justify-center">
        <p className="text-[48px]">About</p>
        <sup>
          <img src={aOne} alt="a-1" className="object-cover" />
        </sup>
      </div>

      <div className="flex justify-between items-center ">
        <div className=" w-full max-h-[85vh] overflow-y-hidden">
          <img src={bTwo} alt="b-2" className='object-cover max-h-[100vh]'/>
        </div>
        <div className="flex flex-col items-start gap-3 w-[90%]">
          <span className="flex gap-1 items-center">
            <p className="text-black text-[32px] ">Get to Know</p>
            <p className="text-[#ff7f00] text-[32px] ">MyCliq</p>
          </span>

          <p className="text-[20px] text-[#535353]">
            MyCliq is designed to eradicate payment hassles through the use of
            QR code technology, phone number as an ATM card, NFC and
            cryptocurrency payments. Additionally, MyCliq enables users within
            communities to make transportation bookings seamlessly, pay bills,
            make inter-bank transfers and book event tickets.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderTwo
