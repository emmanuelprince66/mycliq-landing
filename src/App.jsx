import "./App.css";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import HeaderTwo from "./component/HeaderTwo";
import HeaderThree from "./component/HeaderThree";
import cvOne from "./assets/images/cv-1.png";
import cvTwo from "./assets/images/cv-2.png";
import HeaderFour from "./component/HeaderFour";
import HeaderFive from "./component/HeaderFive";
import Footer from "./component/Footer";
function App() {
  return (
    <div>
      <div className="w-full bg-primary_black_1 h-full">
        <div className=" w-full md:w-[75%] mx-auto h-full p-3">
          <div className="h-full w-full">
            {/*  */}
            <Navbar />
            {/*  */}
            <Header />
          </div>
        </div>
      </div>

      <div id="about" className="h-full w-full mt-[10%] bg-white">
        <div className="w-full md:w-[75%]  mx-auto h-full pt-[1%] ">
          <HeaderTwo />
        </div>
      </div>
      <div id="features" className=" h-full mt-[10%] md:h-screen w-full bg-[#fff6ec] relative">
        <div className=" w-full flex  justify-end absolute ">
          <img src={cvOne} alt="cv-1" className=" object-cover md:object-contain  w-[100px] md:w-[30rem]" />
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
      <div className="h-full w-full bg-white">
        <div className="w-full md:w-[75%] mx-auto h-full  ">
          <HeaderFive />
        </div>
      </div>
      <div className="h-full w-full bg-primary_black_1  ">
        <div className="w-full md:w-[75%] mx-auto h-full pt-[1%] ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
