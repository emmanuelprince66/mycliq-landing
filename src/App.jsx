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
        <div className="w-[75%] mx-auto h-full p-3">
          <div className="h-screen w-full">
            {/*  */}
            <Navbar />
            {/*  */}
            <Header />
          </div>
        </div>
      </div>

      <div className="h-screen w-full bg-white">
        <div className="w-[75%] mx-auto h-full pt-[1%] ">
          <HeaderTwo />
        </div>
      </div>
      <div className="h-screen w-full bg-[#fff6ec] relative">
        <div className=" w-full flex justify-end absolute ">
          <img src={cvOne} alt="cv-1" className="object-contain" />
        </div>

        <div className=" w-full flex justify-start absolute bottom-0 ">
          <img src={cvTwo} alt="cv-2" className="object-contain" />
        </div>

        <div className="w-[75%] mx-auto h-full pt-[1%]">
          <HeaderThree />
        </div>
      </div>

      <div className="h-full w-full bg-white">
        <div className="w-[75%] mx-auto h-full pt-[1%] ">
          <HeaderFour />
        </div>
      </div>
      <div className="h-full w-full bg-white">
        <div className="w-[75%] mx-auto h-full  ">
          <HeaderFive />
        </div>
      </div>
      <div className="h-full w-full bg-primary_black_1">
        <div className="w-[75%] mx-auto h-full pt-[1%] ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
