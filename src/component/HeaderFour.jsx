import React from "react";
import aOne from "../assets/images/a-1.svg";
import picOne from "../assets/images/pic-1.png";
import picTwo from "../assets/images/pic-2.png";
import picThree from "../assets/images/pic-3.png";
import picFour from "../assets/images/pic-4.png";
const HeaderFour = () => {
  return (
    <div className="w-full h-full p-5">
      <div className="flex items-start gap-2 justify-center mb-[3rem] md:mb-[5rem] w-full p-0">
        <p className=" text-[25px] md:text-[48px] text-center">Why MyCliq?</p>
        <sup>
          <img src={aOne} alt="a-1" className="object-cover" />
        </sup>
      </div>
      <div className="flex flex-col md:flex-row gap-[5rem] mb-[4rem]">
        <div className="w-full flex-1 order-2 md:order-1">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className=" text-[25px] md:text-[32px]">Financials</p>
            <p className="text-[18px] md:text-[20px] text-center  md:text-start text-[#535353]">
              MyCliq is not just another retail app; it's a platform tailored to
              cater specifically to the needs of  communities. Individuals can
              embark on a journey of convenience, savings, and rewards. MyCliq
              offers a plethora of financial benefits. 
            </p>
          </div>
        </div>
        <div className="w-full flex-1 order-1 md:order-2">
          <img src={picOne} alt="pic-1" className="w-full h-full" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-[5rem] mb-[4rem]">
        <div className="w-full flex-1 order-2 md:order-2">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[20px] md:text-[32px]  md:my-0">
              Secure And Encrypted
            </p>
            <p className="text-[18px] md:text-start text-center md:text-[20px] text-[#535353]">
              Security is a top priority with MyCliq. All transactions are
              encrypted to safeguard your financial information.
            </p>
          </div>
        </div>
        <div className="w-full flex-1 order-1 md:order-1">
          <img src={picTwo} alt="pic-3" className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[5rem] mb-[4rem]">
        <div className="w-full flex-1 order-2 md:order-1">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[20px] md:text-[32px]  md:my-0">
              Transportation
            </p>
            <p className="text-[18px] md:text-start text-center md:text-[20px] text-[#535353]">
              MyCliq is more than just a payment app – it's a community platform
              designed to make transportation a safe and reliable environment.
              Just by scanning a drivers QR code, you can pay. With MyCliq you
              can confidently say bye to delay and cash hassle.
            </p>
          </div>
        </div>
        <div className="w-full flex-1 order-1 md:order-2">
          <img src={picThree} alt="pic-3" className="w-full h-full" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-[5rem] mb-[4rem]">
        <div className="w-full flex-1 order-2 md:order-2">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className=" text-[25px] md:text-[32px]">New Ways To Pay</p>
            <p className="text-[18px] md:text-[20px] text-center  md:text-start text-[#535353]">
              MyCliq is fast, simple and secure. You can say goodbye to cash and
              long payment processes! MyCliq makes transactions seamless with
              modern QR code payments and NFC technology. Experience the future
              of payments with MyCliq!
            </p>
          </div>
        </div>
        <div className="w-full flex-1 order-1 md:order-1">
          <img src={picOne} alt="pic-1" className="w-full h-full" />
        </div>
      </div>

      <div className="block md:flex gap-[5rem] mb-[4rem]">
        <div className="w-full flex-1 order-2 md:order-2">
          <img
            src={picFour}
            alt="pic-4"
            className="w-full h-full rounded-md  "
          />
        </div>
        <div className="flex-1 flex flex-col items-center order-2 md:order-1  md:items-start gap-2">
          <p className="text-[20px] md:text-[32px] mb-1  md:mt-0 mt-[3rem]">
            Customer Support
          </p>
          <p className="text-[18px] md:text-[20px] text-center md:text-start text-[#535353]">
            We know you need assistance! We put our users and partners first.
            That's why we offer friendly and top-notch 24/7 customer support
            that goes above and beyond your expectations. Whether you have a
            question, need assistance, or just want to say hello, our dedicated
            support team is here to meet your distinct needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderFour;
