import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  InputAdornment,
  Radio,
  TextField,
  Modal,
  FormControl,
  Backdrop,
  RadioGroup,
  Paper,
  FormControlLabel,
} from "@mui/material";
import NotiDetails from "./NotiDetails";

const NotiHistory = () => {
  const [notiDetails, setNotiDetails] = useState(false);
  const handleCloseNotiDetails = () => setNotiDetails(false);
  return (
    <Box className="p-3 overflow-y-auto max-h-[60vh] flex flex-col mt-2 items-start w-[100%] gap-3">
      <Box className="w-full flex gap-3 items-center justify-between mb-3">
        <Box className=" w-full gap-5 flex items-center ">
          <span>1.</span>
          <Box className=" flex-col flex items-start gap-2">
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              Inter-bank Transfer is here!!!🔥😎🎉
            </Typography>
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "400",
                fontSize: "13px",
                flexWrap: "wrap",
              }}
            >
              You asked, and we listened. We're thrilled to announce that you
              can now send funds to any bank account effortlessly. Update your
              app now to enjoy! 🎉
            </Typography>

            <Box className="flex gap-2 items-center">
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                sent to{" "}
                <span
                  className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
                >
                  All customers
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                By{" "}
                <span
                  className={` 
                
                 text-[10px]`}
                >
                  Oluwatobiloba Olosunde (Super Admin)
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                |
                <span
                  className={` 
                ml-3
                 text-[10px]`}
                >
                  Today at 09:34 AM
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button
          sx={{
            background: "#fff",
            padding: "10px",
            borderRadius: "8px",
            width: "100%",
            flex: "1",
            borderColor: "#333333",

            color: "#000",
            "&:hover": {
              borderColor: "#FF7F00",
            },
            textTransform: "capitalize",
            fontWeight: "500",
          }}
          variant="outlined"
        >
          View
        </Button>
      </Box>
      <Box className="w-full flex gap-3 items-center justify-between mb-3">
        <Box className=" w-full gap-5 flex items-center ">
          <span>2.</span>
          <Box className=" flex-col flex items-start gap-2">
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              Inter-bank Transfer is here!!!🔥😎🎉
            </Typography>
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "400",
                fontSize: "13px",
                flexWrap: "wrap",
              }}
            >
              You asked, and we listened. We're thrilled to announce that you
              can now send funds to any bank account effortlessly. Update your
              app now to enjoy! 🎉
            </Typography>

            <Box className="flex gap-2 items-center">
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                sent to{" "}
                <span
                  className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
                >
                  All customers
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                By{" "}
                <span
                  className={` 
                
                 text-[10px]`}
                >
                  Oluwatobiloba Olosunde (Super Admin)
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                |
                <span
                  className={` 
                ml-3
                 text-[10px]`}
                >
                  Today at 09:34 AM
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button
          sx={{
            background: "#fff",
            padding: "10px",
            borderRadius: "8px",
            width: "100%",
            flex: "1",
            borderColor: "#333333",

            color: "#000",
            "&:hover": {
              borderColor: "#FF7F00",
            },
            textTransform: "capitalize",
            fontWeight: "500",
          }}
          variant="outlined"
        >
          View
        </Button>
      </Box>
      <Box className="w-full flex gap-3 items-center justify-between mb-3">
        <Box className=" w-full gap-5 flex items-center ">
          <span>3.</span>
          <Box className=" flex-col flex items-start gap-2">
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              Inter-bank Transfer is here!!!🔥😎🎉
            </Typography>
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "400",
                fontSize: "13px",
                flexWrap: "wrap",
              }}
            >
              You asked, and we listened. We're thrilled to announce that you
              can now send funds to any bank account effortlessly. Update your
              app now to enjoy! 🎉
            </Typography>

            <Box className="flex gap-2 items-center">
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                sent to{" "}
                <span
                  className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
                >
                  All customers
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                By{" "}
                <span
                  className={` 
                
                 text-[10px]`}
                >
                  Oluwatobiloba Olosunde (Super Admin)
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                |
                <span
                  className={` 
                ml-3
                 text-[10px]`}
                >
                  Today at 09:34 AM
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button
          sx={{
            background: "#fff",
            padding: "10px",
            borderRadius: "8px",
            width: "100%",
            flex: "1",
            borderColor: "#333333",

            color: "#000",
            "&:hover": {
              borderColor: "#FF7F00",
            },
            textTransform: "capitalize",
            fontWeight: "500",
          }}
          variant="outlined"
        >
          View
        </Button>
      </Box>
      <Box className="w-full flex gap-3 items-center justify-between mb-3">
        <Box className=" w-full gap-5 flex items-center ">
          <span>4.</span>
          <Box className=" flex-col flex items-start gap-2">
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              Inter-bank Transfer is here!!!🔥😎🎉
            </Typography>
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "400",
                fontSize: "13px",
                flexWrap: "wrap",
              }}
            >
              You asked, and we listened. We're thrilled to announce that you
              can now send funds to any bank account effortlessly. Update your
              app now to enjoy! 🎉
            </Typography>

            <Box className="flex gap-2 items-center">
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                sent to{" "}
                <span
                  className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
                >
                  All customers
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                By{" "}
                <span
                  className={` 
                
                 text-[10px]`}
                >
                  Oluwatobiloba Olosunde (Super Admin)
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                |
                <span
                  className={` 
                ml-3
                 text-[10px]`}
                >
                  Today at 09:34 AM
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button
          sx={{
            background: "#fff",
            padding: "10px",
            borderRadius: "8px",
            width: "100%",
            flex: "1",
            borderColor: "#333333",

            color: "#000",
            "&:hover": {
              borderColor: "#FF7F00",
            },
            textTransform: "capitalize",
            fontWeight: "500",
          }}
          variant="outlined"
        >
          View
        </Button>
      </Box>
      <Box className="w-full flex gap-3 items-center justify-between mb-3">
        <Box className=" w-full gap-5 flex items-center ">
          <span>5.</span>
          <Box className=" flex-col flex items-start gap-2">
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              Inter-bank Transfer is here!!!🔥😎🎉
            </Typography>
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "400",
                fontSize: "13px",
                flexWrap: "wrap",
              }}
            >
              You asked, and we listened. We're thrilled to announce that you
              can now send funds to any bank account effortlessly. Update your
              app now to enjoy! 🎉
            </Typography>

            <Box className="flex gap-2 items-center">
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                sent to{" "}
                <span
                  className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
                >
                  All customers
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                By{" "}
                <span
                  className={` 
                
                 text-[10px]`}
                >
                  Oluwatobiloba Olosunde (Super Admin)
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                |
                <span
                  className={` 
                ml-3
                 text-[10px]`}
                >
                  Today at 09:34 AM
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button
          sx={{
            background: "#fff",
            padding: "10px",
            borderRadius: "8px",
            width: "100%",
            flex: "1",
            borderColor: "#333333",

            color: "#000",
            "&:hover": {
              borderColor: "#FF7F00",
            },
            textTransform: "capitalize",
            fontWeight: "500",
          }}
          variant="outlined"
        >
          View
        </Button>
      </Box>
      <Box className="w-full flex gap-3 items-center justify-between mb-3">
        <Box className=" w-full gap-5 flex items-center ">
          <span>6.</span>
          <Box className=" flex-col flex items-start gap-2">
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              Inter-bank Transfer is here!!!🔥😎🎉
            </Typography>
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "400",
                fontSize: "13px",
                flexWrap: "wrap",
              }}
            >
              You asked, and we listened. We're thrilled to announce that you
              can now send funds to any bank account effortlessly. Update your
              app now to enjoy! 🎉
            </Typography>

            <Box className="flex gap-2 items-center">
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                sent to{" "}
                <span
                  className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
                >
                  All customers
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                By{" "}
                <span
                  className={` 
                
                 text-[10px]`}
                >
                  Oluwatobiloba Olosunde (Super Admin)
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                |
                <span
                  className={` 
                ml-3
                 text-[10px]`}
                >
                  Today at 09:34 AM
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button
          sx={{
            background: "#fff",
            padding: "10px",
            borderRadius: "8px",
            width: "100%",
            flex: "1",
            borderColor: "#333333",

            color: "#000",
            "&:hover": {
              borderColor: "#FF7F00",
            },
            textTransform: "capitalize",
            fontWeight: "500",
          }}
          variant="outlined"
        >
          View
        </Button>
      </Box>
      <Box className="w-full flex gap-3 items-center justify-between mb-3">
        <Box className=" w-full gap-5 flex items-center ">
          <span>7.</span>
          <Box className=" flex-col flex items-start gap-2">
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              Inter-bank Transfer is here!!!🔥😎🎉
            </Typography>
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "400",
                fontSize: "13px",
                flexWrap: "wrap",
              }}
            >
              You asked, and we listened. We're thrilled to announce that you
              can now send funds to any bank account effortlessly. Update your
              app now to enjoy! 🎉
            </Typography>

            <Box className="flex gap-2 items-center">
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                sent to{" "}
                <span
                  className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
                >
                  All customers
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                By{" "}
                <span
                  className={` 
                
                 text-[10px]`}
                >
                  Oluwatobiloba Olosunde (Super Admin)
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                |
                <span
                  className={` 
                ml-3
                 text-[10px]`}
                >
                  Today at 09:34 AM
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button
          sx={{
            background: "#fff",
            padding: "10px",
            borderRadius: "8px",
            width: "100%",
            flex: "1",
            borderColor: "#333333",

            color: "#000",
            "&:hover": {
              borderColor: "#FF7F00",
            },
            textTransform: "capitalize",
            fontWeight: "500",
          }}
          variant="outlined"
        >
          View
        </Button>
      </Box>
      <Box className="w-full flex gap-3 items-center justify-between mb-3">
        <Box className=" w-full gap-5 flex items-center ">
          <span>8.</span>
          <Box className=" flex-col flex items-start gap-2">
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              Inter-bank Transfer is here!!!🔥😎🎉
            </Typography>
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "400",
                fontSize: "13px",
                flexWrap: "wrap",
              }}
            >
              You asked, and we listened. We're thrilled to announce that you
              can now send funds to any bank account effortlessly. Update your
              app now to enjoy! 🎉
            </Typography>

            <Box className="flex gap-2 items-center">
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                sent to{" "}
                <span
                  className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
                >
                  All customers
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                By{" "}
                <span
                  className={` 
                
                 text-[10px]`}
                >
                  Oluwatobiloba Olosunde (Super Admin)
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                |
                <span
                  className={` 
                ml-3
                 text-[10px]`}
                >
                  Today at 09:34 AM
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button
          sx={{
            background: "#fff",
            padding: "10px",
            borderRadius: "8px",
            width: "100%",
            flex: "1",
            borderColor: "#333333",

            color: "#000",
            "&:hover": {
              borderColor: "#FF7F00",
            },
            textTransform: "capitalize",
            fontWeight: "500",
          }}
          variant="outlined"
        >
          View
        </Button>
      </Box>
      <Box className="w-full flex gap-3 items-center justify-between mb-3">
        <Box className=" w-full gap-5 flex items-center ">
          <span>9.</span>
          <Box className=" flex-col flex items-start gap-2">
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              Inter-bank Transfer is here!!!🔥😎🎉
            </Typography>
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "400",
                fontSize: "13px",
                flexWrap: "wrap",
              }}
            >
              You asked, and we listened. We're thrilled to announce that you
              can now send funds to any bank account effortlessly. Update your
              app now to enjoy! 🎉
            </Typography>

            <Box className="flex gap-2 items-center">
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                sent to{" "}
                <span
                  className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
                >
                  All customers
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                By{" "}
                <span
                  className={` 
                
                 text-[10px]`}
                >
                  Oluwatobiloba Olosunde (Super Admin)
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                |
                <span
                  className={` 
                ml-3
                 text-[10px]`}
                >
                  Today at 09:34 AM
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button
          sx={{
            background: "#fff",
            padding: "10px",
            borderRadius: "8px",
            width: "100%",
            flex: "1",
            borderColor: "#333333",

            color: "#000",
            "&:hover": {
              borderColor: "#FF7F00",
            },
            textTransform: "capitalize",
            fontWeight: "500",
          }}
          variant="outlined"
        >
          View
        </Button>
      </Box>
      <Box className="w-full flex gap-3 items-center justify-between mb-3">
        <Box className=" w-full gap-5 flex items-center ">
          <span>10.</span>
          <Box className=" flex-col flex items-start gap-2">
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              Inter-bank Transfer is here!!!🔥😎🎉
            </Typography>
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "400",
                fontSize: "13px",
                flexWrap: "wrap",
              }}
            >
              You asked, and we listened. We're thrilled to announce that you
              can now send funds to any bank account effortlessly. Update your
              app now to enjoy! 🎉
            </Typography>

            <Box className="flex gap-2 items-center">
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                sent to{" "}
                <span
                  className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
                >
                  All customers
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                By{" "}
                <span
                  className={` 
                
                 text-[10px]`}
                >
                  Oluwatobiloba Olosunde (Super Admin)
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                |
                <span
                  className={` 
                ml-3
                 text-[10px]`}
                >
                  Today at 09:34 AM
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button
          sx={{
            background: "#fff",
            padding: "10px",
            borderRadius: "8px",
            width: "100%",
            flex: "1",
            borderColor: "#333333",

            color: "#000",
            "&:hover": {
              borderColor: "#FF7F00",
            },
            textTransform: "capitalize",
            fontWeight: "500",
          }}
          variant="outlined"
        >
          View
        </Button>
      </Box>
      <Box className="w-full flex gap-3 items-center justify-between mb-3">
        <Box className=" w-full gap-5 flex items-center ">
          <span>1.</span>
          <Box className=" flex-col flex items-start gap-2">
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              Inter-bank Transfer is here!!!🔥😎🎉
            </Typography>
            <Typography
              sx={{
                color: "#1E1E1E",
                fontWeight: "400",
                fontSize: "13px",
                flexWrap: "wrap",
              }}
            >
              You asked, and we listened. We're thrilled to announce that you
              can now send funds to any bank account effortlessly. Update your
              app now to enjoy! 🎉
            </Typography>

            <Box className="flex gap-2 items-center">
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                sent to{" "}
                <span
                  className={`p-1 px-2 rounded-full 
                  bg-orange-200 text-orange-500
                 text-[10px]`}
                >
                  All customers
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                By{" "}
                <span
                  className={` 
                
                 text-[10px]`}
                >
                  Oluwatobiloba Olosunde (Super Admin)
                </span>
              </Typography>
              <Typography
                sx={{
                  color: "#1E1E1E",
                  fontWeight: "400",
                  fontSize: "10px",
                }}
              >
                |
                <span
                  className={` 
                ml-3
                 text-[10px]`}
                >
                  Today at 09:34 AM
                </span>
              </Typography>
            </Box>
          </Box>
        </Box>

        <Button
          sx={{
            background: "#fff",
            padding: "10px",
            borderRadius: "8px",
            width: "100%",
            flex: "1",
            borderColor: "#333333",

            color: "#000",
            "&:hover": {
              borderColor: "#FF7F00",
            },
            textTransform: "capitalize",
            fontWeight: "500",
          }}
          variant="outlined"
        >
          View
        </Button>
      </Box>

      {/* Modal for  discount details */}

      <Modal
        open={notiDetails}
        onClose={handleCloseNotiDetails}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        PaperProps={{
          sx: {
            border: "none", // Remove the border
            boxShadow: "none", // Remove the box shadow
          },
        }}
      >
        <NotiDetails handleCloseNotiDetails={handleCloseNotiDetails} />
      </Modal>
      {/* Modal discount ends */}
    </Box>
  );
};

export default NotiHistory;
