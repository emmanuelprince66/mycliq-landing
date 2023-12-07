import React, { useState,useEffect } from "react";
import TableCom from "../components/TableCom";
import { AuthAxios } from "../helpers/axiosInstance";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { Box,Button,Typography } from "@mui/material";
import { CalendarMonthOutlined } from "@mui/icons-material";
import { DateRangePicker } from "react-date-range";
import { useDispatch } from "react-redux";
import { fillUserDetails } from "../utils/store/merchantSlice";
const Transaction = () => {
  const [dateVisible, setDateVisible] = useState(false);
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const dispatch  = useDispatch()
useEffect(() => {

  async function getUserDetails(){
    try {
      const response = await AuthAxios.get('/user')
      console.log(response)
dispatch(fillUserDetails(response.data))
    } catch (error) {
      console.log(error)
    }
  }
getUserDetails()
}, [dispatch])

  function handleSelect(ranges) {
    setSelectedRange({
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: "selection",
    });

    console.log("Selected Date Range:", ranges);
  }
const modStartDate = new Date(selectedRange.startDate).toLocaleDateString()
const modEndDate = new Date(selectedRange.endDate).toLocaleDateString()

  function openDateRange() {
    setDateVisible(!dateVisible);
  }

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
    <Box sx={{
      display:'flex',
      marginLeft:'auto',
      justifyContent:'flex-end',
      width:'fit-content',
      gap:'1em',
      alignItems:'center',
      
       }} >
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              color: "#4F4F4F",
            }}
          >
            Showing results for
          </Typography>

    <div className="border flex ml-auto border-grey_1 w-fit rounded-[8px] " >


      <Button  startIcon={<CalendarMonthOutlined/>} onClick={openDateRange}> {modStartDate }- {modEndDate}</Button>
      </div>
      </Box>
      {dateVisible && (
        <div className="absolute bg-white z-[2]  shadow-lg p-2 rounded-[8px] right-0" >
        <DateRangePicker ranges={[selectedRange]} onChange={handleSelect} />
        </div>
      )}
      <TableCom />
    </Box>
  );
};

export default Transaction;
