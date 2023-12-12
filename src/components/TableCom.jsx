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
  Container,
  TextField,
  TablePagination,
  ToggleButtonGroup,
  ToggleButton,
  Card,
  Typography,
  Modal,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import search from "../../src/assets/search.svg";
import InputAdornment from "@mui/material/InputAdornment";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import selectIcon from "../assets/selectIcon.svg";
import downIcon from "../assets/images/arrowDown.svg";
import download from "../assets/images/download.svg";
import twoArrow from "../assets/twoArrow.svg";
import checkBlur from "../assets/checkBlur.svg";
import SyncAltRoundedIcon from "@mui/icons-material/SyncAltRounded";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import closeIcon from "../assets/images/closeIcon.svg";
import fdown from "../assets/fdown.svg";
import fup from "../assets/fup.svg";
import { useSelector } from "react-redux";
import fbook from "../assets/fbook.svg";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import {
  saveTransactionData,
  fillUserDetails,
} from "../utils/store/merchantSlice";
import { useNavigate } from "react-router-dom";
import { AuthAxios } from "../helpers/axiosInstance";
import { TransactionDetails } from "./transactionDetails";

const TableCom = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [open1, setOpen1] = React.useState(false);
  const [data,setData] = useState({})
  const handleClose1 = () => setOpen1(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showPaid, setShowPaid] = useState(null);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [details, setDetails] = useState({});

  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
    setPage(0);
  };

  const handleSortByStatus = (status) => {
    setShowPaid(status);
    setPage(0);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  const dispatch = useDispatch();
const {transactionDetails} = useSelector(state=>state)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await AuthAxios({
          url: "/transaction/merchant?limit=200",
          method: "GET",
        });
        if (response) {
          setLoading(false)
          const filteredItems = response.data?.queryResult
          .filter(
            (item) =>
          {
                if (searchTerm !== null){
               return  item.transferFrom.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||item.transferFrom.lastName.toLowerCase().includes(searchTerm.toLowerCase()) 
              }
                })   
          .filter(
            (item) =>
              showPaid === null || item?.remittance?.paymentStatus === (showPaid ? "PAID" : "VERIFIED")
          );
          setTransactionData(filteredItems);
          dispatch(saveTransactionData(response?.data));
          console.log(response);
        }
      } catch (error) {
        console.log(error);
        if (error.response.status === 401){
          navigate('/')
          localStorage.clear()
        }  
      }
    };
    fetchData();
  }, [dispatch,showPaid,searchTerm]);
async function viewDetails(i){
setOpen1(true)
setIndex(i)
}
  return (
    <Box
      sx={{
        width: "1080px",
        margin: "auto",
        padding: "1rem",
        backgroundColor: "#fffcfc",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          width: "100%",
        }}
      ></Box>

      <Box
        sx={{
          width: "100%",
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
              Deposits
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
            {transactionDetails.inflow}
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
              Withdrawals
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
              {transactionDetails.outflow}
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
              <img src={fdown} className="fd" alt="f-down" />
            </Box>
            <Typography
              sx={{
                fomtWeight: "500",
                fontSize: "14px",
                color: "#4F4F4F",
              }}
            >
              Wallet
              <br />
              Balance
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
              {Number(transactionDetails?.walletBalance || 0).toLocaleString() }
            </Typography>
          </Box>
        </Card>
      </Box>

      <Box
        sx={{
          width: "1080px",
          margin: "auto",
          padding: "1rem",
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            my: "1.5rem",
          }}
        >
          {/* tt */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <Typography
              sx={{
                fomtWeight: "500",
                fontSize: "20px",
                color: "#1E1E1E",
                lineHeight: "30px",
              }}
            >
              Transactions
            </Typography>
            <Typography
              sx={{
                fomtWeight: "600",
                fontSize: "12px",
                color: "#A86500",
                lineHeight: "18px",
                padding: "2px 8px 2px 8px",
                borderRadius: "8px",
                background: "#FFEFD6",
              }}
            >
              1,090 Paid, 789 Verified
            </Typography>
          </Box>
          {/* tt end */}

          {/* search  */}
          <Box>
            <TextField
              sx={{
                borderRadius: "10px",
                width: "440px",
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
                    borderColor: "#DC0019", // Set the border color on hover here
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#DC0019", // Set the border color on focus here
                  },
                },
              }}
              placeholder="Search User, Matric No., Transaction ID"
              variant="outlined"
              value={searchTerm}
              onChange={handleSearchChange}
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

          {/* select */}
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            startIcon={<img src={selectIcon} alt="s-icon" />} // Icon before text
            endIcon={<img src={downIcon} alt="d-icon" />} // Icon after text
            style={{
              color: "#828282",
              border: "1px solid #828282",
              textTransform: "capitalize",
              padding: "8px 12px 8px 12px",
              width: "154px",
            }}
          >
            All levels
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            PaperProps={{
              style: {
                width: "154px",
              },
            }}
          >
            <Box
              sx={{
                textAlign: "start",
                fontWeight: "600",
                fontSize: "14px",
                py: "0.6rem",
                ml: "1rem",
              }}
            >
              Filter by
            </Box>
            <Divider />

            <MenuItem
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                py: "0.6rem",
              }}
              onClick={handleClose}
            >
              All levels
            </MenuItem>
            <Divider />
            <MenuItem
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                py: "0.6rem",
              }}
              onClick={handleClose}
            >
              Freshers Only
            </MenuItem>
            <Divider />
            <MenuItem
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                py: "0.6rem",
              }}
              onClick={handleClose}
            >
              Staylites Only
            </MenuItem>
          </Menu>
          {/* select ends */}

          {/* download */}
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
          {/* download end */}
        </Box>

        {/* Button box */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            mb: "1rem",
          }}
        >
          <Button
            variant={showPaid === null ? "contained" : "outlined"}
            onClick={() => handleSortByStatus(null)}
            style={{
              marginRight: "5px",
              backgroundColor: showPaid === null ? "#DC0019" : "white",
              padding: "8px 24px 8px 24px",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: "400",
              color: showPaid === null ? "#fff" : "#828282",
              border: showPaid === null ? "" : "1px solid #E0E0E0",
            }}
          >
            <SyncAltRoundedIcon
              sx={{
                color: showPaid !== null && "#828282",
                fontSize: "16px",
              }}
            />
            All Transactions
          </Button>
          <Button
            variant={showPaid === true ? "contained" : "outlined"}
            onClick={() => handleSortByStatus(true)}
            style={{
              marginRight: "5px",
              color: showPaid === true ? "white" : "#828282",
              backgroundColor: showPaid === true ? "#DC0019" : "white",
              border: showPaid === true ? "" : "1px solid #E0E0E0",
              padding: "8px 24px 8px 24px",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            <CheckCircleOutlineRoundedIcon
              sx={{
                fontSize: "16px",
              }}
            />{" "}
            Paid Only
          </Button>
          <Button
            variant={showPaid === false ? "contained" : "outlined"}
            onClick={() => handleSortByStatus(false)}
            style={{
              color: showPaid === false ? "white" : "#828282",
              backgroundColor: showPaid === false ? "#dc0019" : "#fff",
              border: showPaid === false ? "" : "1px solid #E0E0E0",

              padding: "8px 24px 8px 24px",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textTransform: "capitalize",
              fontSize: "16px",
              fontWeight: "400",
            }}
          >
            <CheckCircleOutlineRoundedIcon
              sx={{
                fontSize: "16px",
              }}
            />{" "}
            Verified Only
          </Button>
        </Box>
        {/* Button box end */}

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, padding: "8px" }}>
            <TableHead
              sx={{
                background: "#F8F8F8",
              }}
            >
              <TableRow>
                <TableCell>S/N</TableCell>
                <TableCell>Transaction ID</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Transaction Type</TableCell>
                <TableCell>Amount(N)</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {filteredItems
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id}</TableCell>
                    <TableCell>{item.tid}</TableCell>
                    <TableCell>{item.user}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.amt}</TableCell>
                    <TableCell>
                      {" "}
                      <Box
                        sx={{
                          textTransform: "capitalize",
                          color: "#DC0019",
                          background:
                            item.status === "paid" ? "#EBFFF3" : "#EBF3FF",
                          color: item.status === "paid" ? "#1E854A" : "#1367D8",
                          width: item.status === "paid" ? "67px" : "87px",
                          fontWeight: "500",
                          fontSize: "12px",
                          border: "none",
                          padding: "4px 8px 4px 8px",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                          border: "1px solid #E0E0E0",
                        }}
                      >
                        <CheckCircleOutlineRoundedIcon
                          sx={{ fontSize: "12px" }}
                        />{" "}
                        {item.status}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => setOpen1(true)}
                        variant="outlined"
                        sx={{
                          textTransform: "capitalize",
                          color: "#DC0019",
                          fontWeight: "600",
                          fontSize: "14px",
                          border: "1px solid #E0E0E0",
                          "&:hover": {
                            backgroundColor: "#fff",
                            border: "1px solid #E0E0E0",
                          },
                          // lineHeight: "26.4px",
                        }}
                      >
                        View More
                      </Button>
                    </TableCell>
                  </TableRow>
                ))} */}
              {
                loading ?
                <TableRow>
                <CircularProgress size="4.2rem" sx={{ color: "#DC0019",marginLeft:'auto',padding:'1em' }} />
                </TableRow>
:
                transactionData.length > 0 ? (
                transactionData.map((item, i) => (
                  <TableRow key={item.id}>
                    <TableCell>{i + 1}</TableCell>
                    <TableCell>{` ID:${item.id.slice(1, 12)}`}</TableCell>
                    <TableCell>
                      {item.transferFrom.firstName} {item.transferFrom.lastName}
                    </TableCell>
                    <TableCell>{item.transactionType}</TableCell>
                    <TableCell>{item.amount}</TableCell>
                    <TableCell>
                      {" "}
                      <Box
                        sx={{
                          textTransform: "capitalize",
                          background:
                            item?.remittance?.paymentStatus === "VERIFIED"
                              ? "#EBFFF3"
                              : "#EBF3FF",
                          color:
                            item?.remittance?.paymentStatus === "VERIFIED"
                              ? "#1E854A"
                              : "#1367D8",
                          width:
                            item?.remittance?.paymentStatus === "PAID"
                              ? "67px"
                              : "87px",
                          fontWeight: "500",
                          fontSize: "12px",
                          padding: "4px 8px 4px 8px",
                          borderRadius: "8px",
                          display: "flex",
                          minWidth: "fit-content",
                          alignItems: "center",
                          gap: "5px",
                          border: "1px solid #E0E0E0",
                        }}
                      >
                        <CheckCircleOutlineRoundedIcon
                          sx={{ fontSize: "12px" }}
                        />{" "}
                        {item?.remittance?.paymentStatus}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => viewDetails(i)}
                        variant="outlined"
                        sx={{
                          textTransform: "capitalize",
                          color: "#DC0019",
                          fontWeight: "600",
                          fontSize: "14px",
                          border: "1px solid #E0E0E0",
                          "&:hover": {
                            backgroundColor: "#fff",
                            border: "1px solid #E0E0E0",
                          },
                          // lineHeight: "26.4px",
                        }}
                      >
                        View More
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <Typography className="flex self-center p-3  min-w-full">
                  No transactions yet.
                </Typography>
              )}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={transactionData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

        {/* Modal for detaisl */}

        <Modal
          open={open1}
          onClose={handleClose1}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          PaperProps={{
            sx: {
              border: "none", // Remove the border
              boxShadow: "none", // Remove the box shadow
            },
          }}
        >
<TransactionDetails handleClose1={handleClose1} details={transactionData[index]} />

        </Modal>
        {/* Modal ends */}
      </Box>
    </Box>
  );
};

export default TableCom;
