import Header from "../component/Header";
import Navbar from "../component/Navbar";
import HeaderTwo from "../component/HeaderTwo";
import HeaderThree from "../component/HeaderThree";

import HeaderFour from "../component/HeaderFour";
import HeaderFive from "../component/HeaderFive";
import Footer from "../component/Footer";
import { useState } from "react";
import Home from "../page/Home";
import Business from "../page/Business";
import Campus from "../page/Campus";
import Terms from "../page/Terms";
function Index() {
  return (
    <div>
      {/*  */}
      <Navbar />
      {/*  */}
      <div
        className={`w-full 
         bg-primary_black_1
         h-full`}
      >
        <div className=" w-full md:w-[90%] mx-auto h-full p-3">
          <div className="h-full w-full">
            <Header />
          </div>
        </div>
      </div>
      <Home />
      <div className="h-full w-full bg-primary_black_1 pt-[7%] ">
        <div className="w-full md:w-[75%] mx-auto h-full pt-[1%] ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Index;
