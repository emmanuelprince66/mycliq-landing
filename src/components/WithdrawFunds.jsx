import React, { useEffect } from "react";
import { useState } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import seperator from "../assets/seperator.svg";
import { styled } from "@mui/material/styles";
import { fillBankDetails } from "../utils/store/merchantSlice";
import closeIcon from "../assets/images/closeIcon.svg";
import exLogo from "../assets/exLogo.svg";
import { AuthAxios } from "../helpers/axiosInstance";
import successIcon from "../assets/successIcon.svg";
import { useSelector } from "react-redux";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { ToastContainer,toast } from "react-toastify";
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
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const handleClose1 = () => setOpen1(false);
  const [open2, setOpen2] = React.useState(false);
  const handleClose2 = () => setOpen2(false);
  const [open3, setOpen3] = React.useState(false);
  const handleClose3 = () => setOpen3(false);
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const { transactionDetails, bankDetails } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
   function handleWithdrawAmount(e) {
    setWithdrawAmount(e.target.value);
    console.log(e.target.value);
    if (e.target.value !== "") {
      setIsDisabled(false);
    }
  }
  function handleCheckWithdrawal() {
    const canWithdraw =
      /^\d+$/.test(withdrawAmount) &&
      parseFloat(withdrawAmount) <= transactionDetails.walletBalance;
    if (!/^\d+$/.test(withdrawAmount)) {
      setError(
        "Please enter a valid amount with only numbers and no mixed characters"
      );
    }
    console.log(canWithdraw, /^\d+$/.test(withdrawAmount));
    if (parseFloat(withdrawAmount) > transactionDetails.walletBalance) {
      setError("Amount cannot be greater than wallet balance");
      console.log("Amount cannot be greater than wallet balance");
    }
    if (canWithdraw) {
      setOpen1(true);
      setError("");
    }
  }

  useEffect(() => {
    async function getBankDetails() {
      const response = await AuthAxios.get("/transaction/bank-details");
      console.log(response);
      dispatch(fillBankDetails(response.data));
    }
    getBankDetails();
  }, []);

   function handleProceedToWithdraw() {
    // const response = await AuthAxios.post(
    // 'transaction/withdrawal',
    // )
    setOpen2(true);
  }
  const notifyError = (msg) => {
    toast.error(msg, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 6000, // Time in milliseconds
    });
  };

  async function handleWithdraw() {
    setLoading(true)
    try {
      const response = await AuthAxios.post("/transaction/nip-transfer", {
        bankCode: bankDetails.bankCode,
        accountNumber: bankDetails.accountNumber,
        accountName: bankDetails.name,
        amount: Number(withdrawAmount),
        bankName:bankDetails.bank,
        saveBeneficiary:true,
      });
      console.log(response);
      if (response.status === 201){
        setOpen3(true)
      }
    } catch (error) {
      console.log(error);
      notifyError(error.response.data.message)
      setLoading(false)
      if (error.response.status === 401){
        navigate('/')
      }
    }
  }

  return (
    <Box
      sx={{
        padding: "1rem",
      }}

    >
    <ToastContainer theme='dark' />
      <Typography
        sx={{
          fontWeight: "500",
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
              Your balance: ₦{Number(transactionDetails.walletBalance).toLocaleString()}
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
            error={Boolean(error)}
            helperText={error}
            variant="outlined"
            onChange={handleWithdrawAmount}
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
              onClick={handleCheckWithdrawal}
              disabled={isDisabled}
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
              Amount To withdraw:
            </Typography>
            <Typography
              sx={{
                fomtWeight: "600",
                fontSize: "14px",
                color: "#C57600",
              }}
            >
              ₦{withdrawAmount}
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
                  minWidth: "122px",
                }}
              >
                Bank Name:
              </Typography>

              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                {bankDetails.bank}
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
                  minWidth: "122px",
                }}
              >
                Account Number:
              </Typography>

              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                {bankDetails.accountNumber}
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
                  minWidth: "122px",
                }}
              >
                Account Name:
              </Typography>

              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "600",
                  fontSize: "14px",
                }}
              >
                {bankDetails.name}
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
              onClick={() => setOpen1(false)}
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
              onClick={handleProceedToWithdraw}
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
              Are you sure you want to withdraw “₦{withdrawAmount}”? Withdrawals
              cannot be recalled once placed.
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
                onClick={handleClose2}
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
                onClick={handleWithdraw}
                disabled={loading}
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
                    {loading ? (
                      <CircularProgress size="1.2rem" sx={{ color: "white" }} />
                    ) : (
                      "Yes,Withdraw"
                    )}
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
              Successful
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
              Okay.
            </Button>
          </Box>
        </Box>
      </Modal>
      {/* Modal ends */}
    </Box>
  );
};

export default WithdrawFunds;
