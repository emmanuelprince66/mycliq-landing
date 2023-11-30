import React from "react";
import { useState } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import seperator from "../assets/seperator.svg";
import { styled } from "@mui/material/styles";
import closeIcon from "../assets/images/closeIcon.svg";
import exLogo from "../assets/exLogo.svg";
import successIcon from "../assets/successIcon.svg";

import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  borderRadius: "12px",
  width: "640px",
  bgcolor: "background.paper",
  p: 3,
};
const WithdrawFunds = () => {
  const [open1, setOpen1] = React.useState(false);
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = React.useState(false);
  const handleClose2 = () => setOpen2(false);
  const [open3, setOpen3] = React.useState(false);
  const handleClose3 = () => setOpen3(false);
  return (
    <Box
      sx={{
        padding: "1rem",
      }}
    >
      <Typography
        sx={{
          fomtWeight: "500",
          fontSize: "20px",
          color: "#1E1E1E",
          lineHeight: "30px",
          mb: "1rem",
        }}
      >
        Withdraw Funds
      </Typography>

      <Typography
        sx={{
          fomtWeight: "400",
          fontSize: "16px",
          color: "#828282",
          mb: "1rem",
          lineHeight: "22.4px",
        }}
      >
        Amount Specified will be remitted into your designated bank account.
        Contact Check Support to change your account details.
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "560px",
            mt: "1rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "start",
                gap: "1px",
              }}
            >
              <Typography
                sx={{
                  fomtWeight: "500",
                  fontSize: "16px",
                  color: "#1E1E1E",
                  lineHeight: "22.4px",
                }}
              >
                Amount To Withdraw
              </Typography>
              <Typography
                sx={{
                  fomtWeight: "500",
                  fontSize: "16px",
                  color: "#C57600",
                  lineHeight: "22.4px",
                }}
              >
                *
              </Typography>
            </Box>

            <Typography
              sx={{
                fomtWeight: "400",
                fontSize: "16px",
                color: "#828282",
                lineHeight: "22.4px",
              }}
            >
              Your balance: ₦560,500.00
            </Typography>
          </Box>

          <TextField
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#CACACA", // Set the desired border color here
                },
                "&:hover fieldset": {
                  borderColor: "#CACACA", // Set the border color on hover here
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#C57600", // Set the border color on focus here
                },
              },
            }}
            required
            // helperText={emailError && <span>{emailError}</span>}
            placeholder="Enter amount to withdraw"
            variant="outlined"
            id="email-input"
            InputProps={{
              startAdornment: (
                <InputAdornment>
                  <PaymentsRoundedIcon /> &nbsp;&nbsp;
                  <img src={seperator} alt="s-icon" />
                  &nbsp;&nbsp;
                </InputAdornment>
              ),
            }}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />

          <Box
            sx={{
              width: "100%",
            }}
          >
            <Button
              onClick={() => setOpen1(true)}
              sx={{
                background: "#dc0019",
                padding: "10px",
                borderRadius: "8px",
                mt: "2rem",
                gap: "6px",
                textTransform: "capitalize",
                width: "100%",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#dc0019",
                },
              }}
            >
              <ArrowOutwardRoundedIcon /> Withdraw Funds
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Modal for success*/}

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
              Withdrawal Preview
            </Typography>

            <Box onClick={handleClose1}>
              <img src={closeIcon} alt="c-icon" />
            </Box>
          </Box>

          <Box
            sx={{
              border: "1px solid #E0E0E0",
              padding: "20px",
              borderRadius: "8px",
              display: "flex",
              gap: "12px",
              margin: "2rem 0 1.2rem 0",
            }}
          >
            <Typography
              sx={{
                fomtWeight: "500",
                fontSize: "14px",
                color: "#828282",
              }}
            >
              Amount TO withdraw:
            </Typography>
            <Typography
              sx={{
                fomtWeight: "600",
                fontSize: "14px",
                color: "#C57600",
              }}
            >
              ₦500,000
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              background: "#f3f3f3",
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
                fomtWeight: "900",
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
          </Box>

          <Box
            sx={{
              p: "20px",
              gap: "16px",
              borderRadius: "8px",
              background: "#FFFAEB",
              display: "flex",
              alignItems: "center",
              my: "1rem",
            }}
          >
            <img src={exLogo} alt="ex-logo" />
            <Typography
              sx={{
                fomtWeight: "400",
                color: "#CDA11E",
                fontSize: "14px",
              }}
            >
              To make withdrawal into a different account other than the one
              specified above, kindly contact Check support.
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "25px",
              mt: "2rem",
            }}
          >
            <Button
              sx={{
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                border: "1px solid #dc0019",
                color: "#dc0019",
                textTransform: "capitalize",

                borderColor: "#dc0019",
                "&:hover": {
                  borderColor: "#dc0019",
                },
              }}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              sx={{
                background: "#dc0019",
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                color: "#fff",
                textTransform: "capitalize",

                "&:hover": {
                  backgroundColor: "#dc0019",
                },
              }}
            >
              Proceed to Withdraw
            </Button>
          </Box>
        </Box>
      </Modal>
      {/* Modal ends */}

      {/* Modal for withdraw*/}

      <Modal
        open={open2}
        onClose={handleClose2}
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
              Sure to Withdraw?
            </Typography>

            <Box onClick={handleClose2}>
              <img src={closeIcon} alt="c-icon" />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              mt: "2rem",
              mb: "1.5rem",
            }}
          >
            <Typography
              sx={{
                fomtWeight: "600",
                fontSize: "16px",
                color: "#4F4F4F",
                lineHeight: "24px",
              }}
            >
              Are you sure you want to withdraw “₦500,000”? Withdrawals cannot
              be recalled once placed.
            </Typography>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "25px",
                mt: "2rem",
              }}
            >
              <Button
                sx={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  border: "1px solid #dc0019",
                  textTransform: "capitalize",

                  color: "#dc0019",
                  borderColor: "#dc0019",
                  "&:hover": {
                    borderColor: "#dc0019",
                  },
                }}
                variant="outlined"
              >
                Cancel
              </Button>
              <Button
                sx={{
                  background: "#dc0019",
                  width: "100%",
                  padding: "10px",
                  borderRadius: "8px",
                  textTransform: "capitalize",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#dc0019",
                  },
                }}
              >
                Yes, Withdraw
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      {/* Modal ends */}

      {/* Modal for withdrawal sucess*/}

      <Modal
        open={open3}
        onClose={handleClose3}
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
              Sucessfull
            </Typography>

            <Box onClick={handleClose3}>
              <img src={closeIcon} alt="c-icon" />
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              mt: "2rem",
              mb: "1.9rem",
            }}
          >
            <Box>
              <img src={successIcon} alt="success-icon" />
            </Box>

            <Typography
              sx={{
                fomtWeight: "400",
                fontSize: "16px",
                color: "#4F4F4F",
                lineHeight: "24px",
              }}
            >
              Withdrawal successfully!
            </Typography>
          </Box>
          <Box
            sx={{
              width: "100%",
              mb: "-0.7rem",
            }}
          >
            <Button
              sx={{
                background: "#dc0019",
                width: "100%",
                padding: "10px",
                borderRadius: "8px",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#dc0019",
                },
              }}
            >
              Okay
            </Button>
          </Box>
        </Box>
      </Modal>
      {/* Modal ends */}
    </Box>
  );
};

export default WithdrawFunds;
