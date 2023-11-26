// src/Routes.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";

const myRoutes = [{ component: <Login />, name: "Login Page" }];

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
