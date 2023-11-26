// src/Routes.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

const myRoutes = [{ component: <Home />, name: "HomePage" }];

const RoutesContainer = () => {
  return (
    <Router>
      <Routes>
        {myRoutes.map((item) => {
          return <Route key={item.name} path="/" element={item.component} />;
        })}
      </Routes>
    </Router>
  );
};

export default RoutesContainer;
