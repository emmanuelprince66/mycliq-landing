import React from "react";
import { useState } from "react";
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
import closeIcon from "../assets/images/closeIcon.svg";

import Divider from "@mui/material/Divider";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import HourglassTopRoundedIcon from "@mui/icons-material/HourglassTopRounded";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "12px",
  width: "745px",
  bgcolor: "background.paper",
  p: 3,
};

const WithdrawHistory = () => {
  const [open1, setOpen1] = React.useState(false);
  const handleClose1 = () => setOpen1(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [items, setItems] = useState([
    {
      id: 1,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "sucessfull",
    },
    {
      id: 2,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "sucessfull",
    },
    {
      id: 3,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "pending",
    },
    {
      id: 4,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "sucessfull",
    },
    {
      id: 5,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "failed",
    },
    {
      id: 6,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "sucessfull",
    },
    {
      id: 7,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "pending",
    },
    {
      id: 8,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "pending",
    },
    {
      id: 9,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "failed",
    },
    {
      id: 10,
      amt: "500,000",
      date: "11-05-2023 at 11:15am",
      status: "pending",
    },
  ]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box
      sx={{
        width: "100%",
        margin: "auto",
        padding: "1rem",
        backgroundColor: "#fffcfc",
      }}
    >
      <Typography
        sx={{
          fomtWeight: "500",
          fontSize: "20px",
          color: "#1E1E1E",
          margin: "0 0 2rem 0",
        }}
      >
        Withdrawal History
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, padding: "8px" }}>
          <TableHead
            sx={{
              background: "#F8F8F8",
            }}
          >
            <TableRow>
              <TableCell>S/N</TableCell>
              <TableCell>Amount (₦)</TableCell>
              <TableCell>Date & Time</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.amt}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        textTransform: "capitalize",
                        color: "#DC0019",
                        background:
                          item.status === "sucessfull"
                            ? "#EBFFF3"
                            : item.status === "pending"
                            ? "#FFF0F0"
                            : "#FFF0F0",
                        color:
                          item.status === "sucessfull"
                            ? "#1E854A"
                            : item.status === "pending"
                            ? "#CDA11E"
                            : "#E52929",
                        width:
                          item.status === "sucessfull"
                            ? "105px"
                            : item.status === "pending"
                            ? "90px"
                            : "90px",
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
                      {item.status === "sucessfull" ? (
                        <CheckCircleOutlineRoundedIcon
                          sx={{
                            fontSize: "12px",
                          }}
                        />
                      ) : item.status === "pending" ? (
                        <HourglassTopRoundedIcon
                          sx={{
                            fontSize: "12px",
                          }}
                        />
                      ) : (
                        <InfoOutlinedIcon
                          sx={{
                            fontSize: "12px",
                          }}
                        />
                      )}

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
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={items.length}
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
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fomtWeight: "900",
                color: "#1E1E1E",
                fontWeight: "500",
                fontSize: "20px",
              }}
            >
              Withdrawal Details
            </Typography>

            <Box onClick={handleClose1}>
              <img src={closeIcon} alt="c-icon" />
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              border: "1px solid #E0E0E0",
              p: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              borderRadius: "8px",
              my: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                mt: "1rem",
                mb: "0.2rem",
              }}
            >
              <Typography
                sx={{
                  fomtWeight: "500",
                  color: "#828282",
                  fontSize: "14px",
                }}
              >
                User:
              </Typography>

              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Jenny Wilson
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fomtWeight: "500",
                  color: "#828282",
                  fontSize: "14px",
                }}
              >
                User:
              </Typography>

              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Jenny Wilson
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                mb: "0.2rem",
              }}
            >
              <Typography
                sx={{
                  fomtWeight: "500",
                  color: "#828282",
                  fontSize: "14px",
                }}
              >
                User:
              </Typography>

              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Jenny Wilson
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                mb: "0.2rem",
              }}
            >
              <Typography
                sx={{
                  fomtWeight: "500",
                  color: "#828282",
                  fontSize: "14px",
                }}
              >
                User:
              </Typography>

              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Jenny Wilson
              </Typography>
            </Box>
          </Box>

          {/* es */}

          <Box
            sx={{
              width: "100%",
              background: "#fff",
              border: "1px solid #E0E0E0",
              p: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              borderRadius: "8px",
            }}
          >
            <Typography
              sx={{
                fomtWeight: "500",
                color: "#1E1E1E",
                fontWeight: "500",
                fontSize: "14px",
              }}
            >
              DESIGNATED BANK ACCOUNT
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                mt: "1rem",
                mb: "0.2rem",
              }}
            >
              <Typography
                sx={{
                  fomtWeight: "500",
                  color: "#828282",
                  fontSize: "14px",
                }}
              >
                User:
              </Typography>

              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Jenny Wilson
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fomtWeight: "500",
                  color: "#828282",
                  fontSize: "14px",
                }}
              >
                User:
              </Typography>

              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Jenny Wilson
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                mb: "0.2rem",
              }}
            >
              <Typography
                sx={{
                  fomtWeight: "500",
                  color: "#828282",
                  fontSize: "14px",
                }}
              >
                User:
              </Typography>

              <Typography
                sx={{
                  color: "#C57600",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                Jenny Wilson
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "2rem",
                alignItems: "center",
                mb: "0.2rem",
              }}
            >
              <Typography
                sx={{
                  fomtWeight: "500",
                  color: "#828282",
                  fontSize: "14px",
                }}
              >
                User:
              </Typography>

              <Box
                sx={{
                  textTransform: "capitalize",
                  color: "#DC0019",
                  background: "#EBF3FF",
                  color: "#1367D8",
                  minWidth: "87px",
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
                <CheckCircleOutlineRoundedIcon sx={{ fontSize: "12px" }} />{" "}
                Verified
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
      {/* Modal ends */}
    </Box>
  );
};

export default WithdrawHistory;
