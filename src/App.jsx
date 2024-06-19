import "./App.css";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import HeaderTwo from "./component/HeaderTwo";
import HeaderThree from "./component/HeaderThree";

import HeaderFour from "./component/HeaderFour";
import HeaderFive from "./component/HeaderFive";
import Footer from "./component/Footer";
import { useState } from "react";
import Home from "./page/Home";
import Business from "./page/Business";
import Campus from "./page/Campus";
function App() {
  const [showMenu, setShowMenu] = useState("home");

  const renderComponent = () => {
    switch (showMenu) {
      case "home":
        return <Home />;
      case "business":
        return <Business />;
      case "campus":
        return <Campus />;
      default:
        return <div>404 Not Found</div>;
    }
  };

  return (
    <div>
      <div
        className={`w-full ${
          showMenu === "campus" ? "bg-white" : "bg-primary_black_1"
        }  h-full`}
      >
        <div className=" w-full md:w-[85%] mx-auto h-full p-3">
          <div className="h-full w-full">
            {/*  */}
            <Navbar setShowMenu={setShowMenu} showMenu={showMenu} />
            {/*  */}

            {showMenu === "home" && <Header />}
          </div>
        </div>
      </div>
      {renderComponent()}
      <div className="h-full w-full bg-primary_black_1 pt-[7%] ">
        <div className="w-full md:w-[75%] mx-auto h-full pt-[1%] ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
