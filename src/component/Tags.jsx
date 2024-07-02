import React from "react";
import tagOne from "../assets/images/tag-1.png";
import tagTwo from "../assets/images/tag-2.png";
import tagThree from "../assets/images/tag-2.png";
import tagFour from "../assets/images/tag-4.png";
import tagFive from "../assets/images/tag-5.png";
import tagSix from "../assets/images/tag-6.png";
import tagSeven from "../assets/images/tag-7.png";

const Tags = () => {
  return (
    <>
      <div className="my-4 flex w-full justify-center gap-3 md:justify-between items-center bg-white p-5  ">
        <div className="w-[80%] mx-auto flex  justify-center gap-3 md:justify-between items-center ">
          <div>
            <img src={tagOne} alt="t-1" className="object cover" />
          </div>

          <div>
            <img src={tagThree} alt="t-3" className="object cover" />
          </div>
          <div>
            <img src={tagFour} alt="t-4" className="object cover" />
          </div>
          <div>
            <img src={tagFive} alt="t-5" className="object cover" />
          </div>
          <div>
            <img src={tagSix} alt="t-6" className="object cover" />
          </div>
          <div>
            <img src={tagSeven} alt="t-7" className="object cover" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Tags;
