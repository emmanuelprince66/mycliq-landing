import React, { useState, useEffect } from "react";
import TableCom from "../components/TableCom";
import { AuthAxios } from "../helpers/axiosInstance";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { Box, Button, Typography } from "@mui/material";
import { CalendarMonthOutlined } from "@mui/icons-material";
import { Calendar, DateRangePicker } from "react-date-range";
import { useDispatch } from "react-redux";
import { fillSelectedDates } from "../utils/store/merchantSlice";
import { fillUserDetails } from "../utils/store/merchantSlice";
import { useSelector } from "react-redux";
const Transaction = () => {
  const [dateVisible, setDateVisible] = useState(false);
  const [selectedRange, setSelectedRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
  const dispatch = useDispatch();
  const { selectedDates } = useSelector((state) => state);

  useEffect(() => {
    async function getUserDetails() {
      try {
        const response = await AuthAxios.get("/user");
        console.log(response);
        dispatch(fillUserDetails(response.data));
      } catch (error) {
        console.log(error);
      }
    }
    getUserDetails();
  }, [dispatch]);

  function handleSelect(ranges) {
    const dateRange = {
      startDate: ranges.selection.startDate,
      endDate: ranges.selection.endDate,
      key: "selection",
    };
    setSelectedRange(dateRange);

    console.log("Selected Date Range:", ranges);
  }
  const modStartDate = new Date(selectedDates.startDate).toLocaleDateString();
  const modEndDate = new Date(selectedDates.endDate).toLocaleDateString();

  function openDateRange() {
    setDateVisible(!dateVisible);
  }
  function showChange(data) {
  setDateVisible(!dateVisible);
  }
  function handleDateChange(){
    dispatch(
      fillSelectedDates({ startDate: new Date( selectedRange.startDate).toLocaleDateString(), endDate: new Date( selectedRange.endDate).toLocaleDateString() })
    )
    setDateVisible(false);
  }
  
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          marginLeft: "auto",
          justifyContent: "flex-end",
          width: "fit-content",
          gap: "1em",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "16px",
            color: "#4F4F4F",
          }}
        >
          Showing results for
        </Typography>

        <div className="border flex ml-auto border-grey_1 w-fit rounded-[8px] ">
          <Button
            sx={{ color: "#4F4F4F" }}
            startIcon={<CalendarMonthOutlined />}
            onClick={openDateRange}
          >
            {" "}
            {modStartDate}- {modEndDate}
          </Button>
        </div>
      </Box>
      {dateVisible && (
        <div className="absolute flex flex-col bg-white z-[2]  shadow-lg p-2 rounded-[8px] right-0">
          <DateRangePicker ranges={[selectedRange]} onShownDateChange={showChange} onChange={handleSelect} />

  <button onClick={handleDateChange} className="bg-primary_red_2 hover:bg-primary_red_3 p-2 w-1/5 ml-auto rounded-[8px] text-white" > Done </button>      
          
        </div>
      )}
      <TableCom />
    </Box>
  );
};

export default Transaction;
