// AppRoutes.js
import { Routes, Route } from "react-router-dom";
import Privacy from "./page/Privacy";
import Index from "./page/Index";
import Terms from "./page/Terms";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      {/* Additional routes can go here */}
    </Routes>
  );
};

export default AppRoutes;
