import React from "react";
import { useState, useEffect } from "react";
import {
  Table,
  Box,
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
  Container,
  TextField,
  TablePagination,
  ToggleButtonGroup,
  ToggleButton,
  Card,
  Typography,
  Modal,
} from "@mui/material";
import avatar from "../assets/avatar.svg";

import search from "../../src/assets/search.svg";

import download from "../assets/images/download.svg";

import CircularProgress from "@mui/material/CircularProgress";
import FormattedPrice from "../components/FormattedPrice";
import fdown from "../assets/fdown.svg";
import ArrowRight from "../assets/images/arrow-right.svg";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";

import InputAdornment from "@mui/material/InputAdornment";
import side from "../assets/images/admin/side.svg";
import percent from "../assets/images/admin/percent.svg";
import upcolor from "../assets/images/admin/upcolor.svg";
import SelectDate from "../components/SelectDate";
import DoughnutChart from "../components/DoughnutChart";
import CustomerProfile from "../components/CustomerProfile";
const Customer = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);
  const [showCustomerProfile, setShowCustomerProfile] = useState(false);
  const dummyCustomers = [
    {
      id: 1,
      name: "Eleanor Poe",
      img: "",
    },
    {
      id: 2,
      name: "Pleanor Poe",
      img: "",
    },
    {
      id: 3,
      name: "Sleanor Poe",
      img: "",
    },
    {
      id: 4,
      name: "Bleanor Poe",
      img: "",
    },
    {
      id: 5,
      name: "Gleanor Poe",
      img: "",
    },
    {
      id: 6,
      name: "Gleanor Poe",
      img: "",
    },
    {
      id: 7,
      name: "Gleanor Poe",
      img: "",
    },
    {
      id: 8,
      name: "Gleanor Poe",
      img: "",
    },
    {
      id: 9,
      name: "Gleanor Poe",
      img: "",
    },
    {
      id: 10,
      name: "Gleanor Poe",
      img: "",
    },
    {
      id: 11,
      name: "Gleanor Poe",
      img: "",
    },
    {
      id: 12,
      name: "Gleanor Poe",
      img: "",
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        padding: "1rem",
        backgroundColor: "#fffcfc",
      }}
    >
      <SelectDate />
      <Box
        sx={{
          width: "1080px",
          display: "flex",
          gap: "2rem",
          mb: "1rem",
        }}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            width: "356px",
            gap: "0.8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                width: "28px",
                height: "28px",
              }}
            >
              <img src={fdown} className="fd" alt="f-down" />
            </Box>
            <Typography
              sx={{
                fomtWeight: "500",
                fontSize: "14px",
                color: "#4F4F4F",
              }}
            >
              Total <br />
              Inflow
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fomtWeight: "600",
                fontSize: "24px",
                color: "#1E1E1E",
              }}
            >
              <FormattedPrice amount={2000} />
            </Typography>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            width: "356px",
            gap: "0.8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              justifyContent: "space-between",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <Box
                sx={{
                  width: "28px",
                  height: "28px",
                }}
              >
                <img src={upcolor} className="fd" alt="f-down" />
              </Box>
              <Typography
                sx={{
                  fomtWeight: "500",
                  fontSize: "14px",
                  color: "#4F4F4F",
                }}
              >
                Total <br />
                Outflow
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                fomtWeight: "600",
                fontSize: "24px",
                color: "##1E1E1E",
              }}
            >
              <FormattedPrice amount={1000} />
            </Typography>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            width: "356px",
            gap: "0.8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                width: "28px",
                height: "28px",
              }}
            >
              <img src={percent} className="fd" alt="f-down" />
            </Box>
            <Typography
              sx={{
                fomtWeight: "500",
                fontSize: "14px",
                color: "#4F4F4F",
              }}
            >
              Commission's Total
              <br />
              Wallet Balance
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fomtWeight: "600",
                fontSize: "24px",
                color: "##1E1E1E",
              }}
            >
              <FormattedPrice amount={Number(200000 || 0)} />
            </Typography>
          </Box>
        </Card>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "16px",
            width: "356px",
            gap: "0.8rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
            }}
          >
            <Box
              sx={{
                width: "28px",
                height: "28px",
              }}
            >
              <img src={side} className="fd" alt="f-down" />
            </Box>
            <Typography
              sx={{
                fomtWeight: "500",
                fontSize: "14px",
                color: "#4F4F4F",
              }}
            >
              Commission
              <br />
              From Customers{" "}
            </Typography>
          </Box>

          <Box>
            <Typography
              sx={{
                fomtWeight: "600",
                fontSize: "24px",
                color: "##1E1E1E",
              }}
            >
              <FormattedPrice amount={Number(20000 || 0)} />
            </Typography>
          </Box>
        </Card>
      </Box>

      <Box
        className="w-full overflow-y-s
      croll max-h-[60vh]"
      >
        {!showCustomerProfile ? (
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Box className="w-full bg-white rounded-md p-2 flex-col border-grey-400 border-[1px] items-start justify-center">
                <Box className="flex w-full justify-between items-center">
                  <Typography
                    sx={{
                      color: "#1E1E1E",
                      fontWeight: "500",
                      fontSize: "15px",
                      display: "flex",
                      gap: "6px",
                      alignItems: "center",
                    }}
                  >
                    All Customers
                    <span
                      className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
                    >
                      730
                    </span>
                  </Typography>

                  <Button
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: "400",
                      fontSize: "12px",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      color: "#DC0019",
                    }}
                  >
                    <img src={download} className="d-icon" alt="d-icon" />
                    download
                  </Button>
                </Box>

                {/* search  */}
                <Box className="my-[1rem]">
                  <TextField
                    sx={{
                      borderRadius: "10px",
                      width: "100%",
                      // padding: { xs: "4px", sm: "12px 16px", md: " 12px 16px" },
                      color: "#D1D1D1",
                      "& .MuiOutlinedInput-root": {
                        padding: "8px", // Adjust padding to reduce height
                        height: "36px", // Set the desired height here
                        lineHeight: "36px", // Match the height to avoid overflow
                        "& fieldset": {
                          borderColor: "#D1D1D1", // Set the desired border color here
                          borderRadius: "10px",
                        },
                        "&:hover fieldset": {
                          borderColor: "#FF7F00", // Set the border color on hover here
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#FF7F00", // Set the border color on focus here
                        },
                      },
                    }}
                    placeholder="Search Customer..."
                    variant="outlined"
                    required
                    id="firstName-input"
                    InputProps={{
                      style: { color: "#818181" },
                      startAdornment: (
                        <InputAdornment>
                          <img src={search} alt="s-logo" />
                          &nbsp;&nbsp;&nbsp;
                        </InputAdornment>
                      ),
                    }}
                    aria-describedby="outlined-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                  />
                </Box>
                {/* search ends */}

                {/* customers  */}
                <Box sx={{ maxHeight: "100vh", overflowY: "scroll" }}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 100, padding: "8px" }}>
                      {/* <TableHead
                sx={{
                  background: "#F8F8F8",
                }}
              >
                <TableRow>
                  <TableCell>S/N</TableCell>
                  <TableCell>Item Name</TableCell>
                  <TableCell>EAN</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Size</TableCell>
                  <TableCell>Price(N) </TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead> */}
                      <TableBody>
                        {!dummyCustomers ? (
                          <CircularProgress
                            size="4.2rem"
                            sx={{
                              color: "#DC0019",
                              marginLeft: "auto",
                              padding: "1em",
                            }}
                          />
                        ) : dummyCustomers &&
                          Array.isArray(dummyCustomers) &&
                          dummyCustomers.length > 0 ? (
                          dummyCustomers.map((item, i) => (
                            <TableRow key={item.id}>
                              <TableCell>
                                {page * rowsPerPage + i + 1}
                              </TableCell>
                              <TableCell>
                                <Box className="flex items-center gap-2 ml-[-3rem] ">
                                  <Box
                                    sx={{
                                      height: "40px",
                                      width: "40px",
                                      border: "1px solid #E0E0E0",
                                      borderRadius: "8px",
                                      p: "5px",
                                    }}
                                  >
                                    {item?.img === "" ? (
                                      <img
                                        src={avatar}
                                        className="cat-img"
                                        alt="p-img"
                                      />
                                    ) : (
                                      <img
                                        src={item?.img}
                                        className="cat-img"
                                        alt="p-img"
                                      />
                                    )}
                                  </Box>
                                  <Typography
                                    sx={{
                                      fomtWeight: "400",
                                      fontSize: "16px",
                                      color: "#828282",
                                    }}
                                  >
                                    {item?.name}
                                  </Typography>
                                </Box>
                              </TableCell>
                              <TableCell>
                                <Box className="cursor-pointer mr-[-12rem]">
                                  <img src={ArrowRight} alt="a-right" />
                                </Box>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan="7">No data found</TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <TablePagination
                    rowsPerPageOptions={[]}
                    component="div"
                    count={dummyCustomers?.totalCount || 0}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={(event, newPage) => setPage(newPage)}
                    // onRowsPerPageChange is removed as the number of rows per page is fixed
                  />
                </Box>
                {/* customers end */}
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  {" "}
                  <Box className="w-full bg-white rounded-md p-2 flex-col border-grey-400 border-[1px] items-start justify-center">
                    <DoughnutChart
                      title="Customer's Activity"
                      values={[300, 30]}
                      label={["Inactive Customers", "Active Customer"]}
                      color={["#27AE60", "#E52929"]}
                    />
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box className="w-full bg-white rounded-md p-2 flex-col border-grey-400 border-[1px] items-start justify-center">
                    <DoughnutChart
                      title="Transaction Insight"
                      values={[300, 30, 50, 20]}
                      label={[
                        "Orders",
                        "Bank Transfer",
                        "Wallet To wallet",
                        "Bills",
                      ]}
                      color={["#FF4069", "#36A2EB", "#FF9F40", "#27AE60"]}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box
                    className="w-full bg-white rounded-md p-2 flex-col border-grey-400
                border-[1px] items-start justify-center"
                  >
                    <Typography
                      sx={{
                        color: "#1E1E1E",
                        fontWeight: "400",
                        fontSize: "15px",
                        py: "15px",
                      }}
                    >
                      Customers’ Daily Spending Power
                    </Typography>
                    {/* customers  */}
                    <Box sx={{ maxHeight: "55vh", overflowY: "scroll" }}>
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 100, padding: "8px" }}>
                          <TableHead
                            sx={{
                              background: "#F8F8F8",
                            }}
                          >
                            <TableRow>
                              <TableCell>S/N</TableCell>
                              <TableCell> Name</TableCell>
                              <TableCell>Avg.Daily Spending(N)</TableCell>
                              <TableCell>Action</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {!dummyCustomers ? (
                              <CircularProgress
                                size="4.2rem"
                                sx={{
                                  color: "#DC0019",
                                  marginLeft: "auto",
                                  padding: "1em",
                                }}
                              />
                            ) : dummyCustomers &&
                              Array.isArray(dummyCustomers) &&
                              dummyCustomers.length > 0 ? (
                              dummyCustomers.map((item, i) => (
                                <TableRow key={item.id}>
                                  <TableCell>
                                    {page * rowsPerPage + i + 1}
                                  </TableCell>
                                  <TableCell>
                                    <Box className="flex items-center gap-2 ml-[-1rem] ">
                                      <Box
                                        sx={{
                                          height: "40px",
                                          width: "40px",
                                          border: "1px solid #E0E0E0",
                                          borderRadius: "8px",
                                          p: "5px",
                                        }}
                                      >
                                        {item?.img === "" ? (
                                          <img
                                            src={avatar}
                                            className="cat-img"
                                            alt="p-img"
                                          />
                                        ) : (
                                          <img
                                            src={item?.img}
                                            className="cat-img"
                                            alt="p-img"
                                          />
                                        )}
                                      </Box>
                                      <Typography
                                        sx={{
                                          fomtWeight: "400",
                                          fontSize: "16px",
                                          color: "#828282",
                                        }}
                                      >
                                        {item?.name}
                                      </Typography>
                                    </Box>
                                  </TableCell>
                                  <TableCell>200,000</TableCell>
                                  <TableCell>
                                    <Button
                                      variant="outlined"
                                      sx={{
                                        textTransform: "capitalize",
                                        display: "flex",
                                        gap: "4px",
                                        width: "100px",
                                        alignItems: "center",
                                        color: "#ff7f00",
                                        fontWeight: "400",
                                        fontSize: "10px",
                                        border: "1px solid #E0E0E0",
                                        "&:hover": {
                                          backgroundColor: "#fff",
                                          border: "1px solid #E0E0E0",
                                        },
                                        // lineHeight: "26.4px",
                                      }}
                                    >
                                      View Profile
                                    </Button>
                                  </TableCell>
                                </TableRow>
                              ))
                            ) : (
                              <TableRow>
                                <TableCell colSpan="7">No data found</TableCell>
                              </TableRow>
                            )}
                          </TableBody>
                        </Table>
                      </TableContainer>

                      <TablePagination
                        rowsPerPageOptions={[]}
                        component="div"
                        count={dummyCustomers?.totalCount || 0}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={(event, newPage) => setPage(newPage)}
                        // onRowsPerPageChange is removed as the number of rows per page is fixed
                      />
                    </Box>
                    {/* customers end */}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <CustomerProfile />
        )}
      </Box>
    </Box>
  );
};

export default Customer;
