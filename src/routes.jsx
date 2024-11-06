// AppRoutes.js
import { Routes, Route } from "react-router-dom";
import Privacy from "./page/Privacy";
import Index from "./page/Index";
import Terms from "./page/Terms";
import Business from "./page/Business";
import Campus from "./page/Campus";
import Contact from "./page/Contact";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/business" element={<Business />} />
      <Route path="/ambassadorship" element={<Campus />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/contact" element={<Contact />} />
      {/* Additional routes can go here */}
    </Routes>
  );
};

export default AppRoutes;
