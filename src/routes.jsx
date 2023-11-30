// src/Routes.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import { Overview } from "./pages/Overview";
import { Mainlayout } from "./layout/mainlayout";
import Students from "./pages/Students";
import Transaction from "./pages/Transaction";
import Withdrawal from "./pages/Withdrawal";
import ManageBills from "./pages/ManageBills";
import SuperAdmin from "./pages/SuperAdmin";
import Support from "./pages/Support";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const myRoutes = [
  { component: <Login />, path: "/", name: "Login Page" },
  { component: <Overview />, path: "/overview", name: "Overview Page" },
  { component: <Students />, path: "/students", name: "Students" },
  { component: <ManageBills />, path: "/manage-bills", name: "Manage Bills" },
  { component: <Transaction />, path: "/transaction", name: "transaction" },
  { component: <Withdrawal />, path: "/withdrawal", name: "withdrawal" },
  { component: <SuperAdmin />, path: "/super-admin", name: "SuperAdmin" },
  { component: <Support />, path: "/support", name: "Support" },
];

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
      },
    },
  },
});
const RoutesContainer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {myRoutes.map((item) => (
            <Route
              key={item.name}
              path={item.path}
              element={
                item.path === "/" ? (
                  item.component // If path is '/', render the component directly
                ) : (
                  <Mainlayout component={item.component} />
                )
              }
            />
          ))}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default RoutesContainer;
