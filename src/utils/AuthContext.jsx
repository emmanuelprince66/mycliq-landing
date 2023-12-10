import React, { useState, useEffect} from "react";
import { useLocation, Navigate } from "react-router-dom";
import { Box } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { useDispatch } from "react-redux";
import { fillUserDetails } from "./store/merchantSlice";
import { useSelector } from "react-redux";
import { getUser } from "../helpers/getUser";
import { getCookie } from "./cookieAuth";


export function AuthProvider({ children }) {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const authPages = ["/"];
    const isAuthPage = authPages.includes(pathname);
    const getCookieValue = getCookie("authToken");
    const wrongAuth = getCookie("wrongAuth");
    const {userDetails} =  useSelector(state=>state.merchantReducer)
    console.log(userDetails)
  const location = useLocation()
  // this checks if userDetails are there and if not calls the endpoints and auths 
  const isAuthenticated = Object.keys( userDetails).length > 0
  
  useEffect(() => {
  
  console.log("uer")
    
    async function fetchUser (){
  const user   = await getUser()
  if (user){
    dispatch(fillUserDetails(user))
  }
  
    }
  
    if ( Object.keys( userDetails).length === 0){
      fetchUser()
    }
  
  
  }, [location.pathname,dispatch,userDetails])
  
  
    if (!isAuthenticated) {
      return (
        <Box
          sx={{
            maxWidth: "31%",
            margin: "auto",
            marginTop: "1rem",
            maxWidth: { xs: "100%", sm: "100%", md: "31%" },
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginTop: "10rem",
            }}
          >
            <CircularProgress size="4rem" color="error" />
          </Box>
        </Box>
      );
    }
  
    if (isAuthPage && isAuthenticated) {
      return <Navigate to="/home"  state={{prevUrl:location.pathname}}/>;
    }
  
    if (isAuthPage) {
      return <>{children}</>;
    }
  
    if (!getCookieValue || wrongAuth) {
      localStorage.clear();
      return <Navigate to="/" state={{ prevUrl: location.pathname }} />;
    }
  
    return <>{children}</>;
  }