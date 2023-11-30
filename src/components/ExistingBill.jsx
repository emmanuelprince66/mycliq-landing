import React from "react";
import colorContact from "../assets/colorContact.svg";
import Badge from "@mui/material/Badge";
import { Box, Typography } from "@mui/material";
import { Switch } from "@mui/material";

const ExistingBill = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        padding: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
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
          Manage Existing Bills
        </Typography>

        <Typography
          sx={{
            fomtWeight: "500",
            fontSize: "12px",
            width: "24px",
            padding: "2px 8px 2px 8px",
            borderRadius: "8px",
            background: "#FFEFD6",
            height: "22px",
          }}
        >
          3
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          borderBottom: "1px solid #E0E0E0",
          pb: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            mt: "2rem",
          }}
        >
          <Box
            sx={{
              pb: "4px",
            }}
          >
            <img src={colorContact} alt="c-contact" />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "##000000",
                }}
              >
                COLERMSA DUES
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "12px",
                  padding: "2px 8px 2px 8px",
                  background: "#EBFFF3",
                  borderRadius: "8px",
                }}
              >
                live
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "3px",
              }}
            >
              <Typography
                htmlFor="input"
                sx={{
                  fontWeight: 600,
                  fontSize: "12px",
                  color: "#828282",
                  mb: "10px",
                }}
              >
                Created 01-05-2023 at 9:34am |
              </Typography>
              <Typography
                htmlFor="input"
                sx={{
                  fontWeight: 600,
                  fontSize: "12px",
                  color: "#828282",
                  mb: "10px",
                }}
              >
                Expires 15-06-2023 |
              </Typography>
              <Typography
                htmlFor="input"
                sx={{
                  fontWeight: 600,
                  fontSize: "12px",
                  color: "#828282",
                  mb: "10px",
                }}
              >
                1,090 Paid, 789 Verified
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <Typography
            htmlFor="input"
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              color: "#1E1E1E",
            }}
          >
            Stop Accepting Payments
          </Typography>

          <Box
            sx={{
              mb: "0.5rem",
            }}
          >
            <Switch
              // checked={darkMode}
              // onChange={onToggleDarkMode}
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#DC0019",
                  opacity: 1, // Customize track background color when checked
                },
                "& .MuiSwitch-switchBase.Mui-focusVisible .MuiSwitch-thumb": {
                  color: "#52d869", // Customize thumb color when focused
                  border: "6px solid #fff",
                },
                "& .MuiSwitch-switchBase": {
                  padding: "1px",

                  color: "#fff",
                  "&.Mui-checked": {
                    transform: "translateX(15px)",
                    color: "#fff",
                  },
                },
                "& .MuiSwitch-thumb": {
                  width: "20px",
                  height: "20px",
                  marginTop: "0.8rem",
                  marginLeft: "0.8rem",
                  backgroundColor: "#f0f0f0", // Customize thumb background color
                },
                "& .MuiSwitch-track": {
                  borderRadius: 26 / 2,
                  border: "1px solid #ccc",

                  height: "1.5rem",
                  backgroundColor: "#f8f8f8", // Customize track background color
                  opacity: 1,
                  transition:
                    "background-color 0.4s ease-in-out, border 0.4s ease-in-out",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          borderBottom: "1px solid #E0E0E0",
          pb: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            mt: "2rem",
          }}
        >
          <Box
            sx={{
              pb: "4px",
            }}
          >
            <img src={colorContact} alt="c-contact" />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "##000000",
                }}
              >
                LA VOYAGE TOUR
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "3px",
              }}
            >
              <Typography
                htmlFor="input"
                sx={{
                  fontWeight: 600,
                  fontSize: "12px",
                  color: "#828282",
                  mb: "10px",
                }}
              >
                Created 01-05-2023 at 9:34am |
              </Typography>
              <Typography
                htmlFor="input"
                sx={{
                  fontWeight: 600,
                  fontSize: "12px",
                  color: "#828282",
                  mb: "10px",
                }}
              >
                Expires 15-06-2023 |
              </Typography>
              <Typography
                htmlFor="input"
                sx={{
                  fontWeight: 600,
                  fontSize: "12px",
                  color: "#828282",
                  mb: "10px",
                }}
              >
                1,090 Paid, 789 Verified
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <Typography
            htmlFor="input"
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              color: "#1E1E1E",
            }}
          >
            Stop Accepting Payments
          </Typography>

          <Box
            sx={{
              mb: "0.5rem",
            }}
          >
            <Switch
              // checked={darkMode}
              // onChange={onToggleDarkMode}
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#DC0019",
                  opacity: 1, // Customize track background color when checked
                },
                "& .MuiSwitch-switchBase.Mui-focusVisible .MuiSwitch-thumb": {
                  color: "#52d869", // Customize thumb color when focused
                  border: "6px solid #fff",
                },
                "& .MuiSwitch-switchBase": {
                  padding: "1px",

                  color: "#fff",
                  "&.Mui-checked": {
                    transform: "translateX(15px)",
                    color: "#fff",
                  },
                },
                "& .MuiSwitch-thumb": {
                  width: "20px",
                  height: "20px",
                  marginTop: "0.8rem",
                  marginLeft: "0.8rem",
                  backgroundColor: "#f0f0f0", // Customize thumb background color
                },
                "& .MuiSwitch-track": {
                  borderRadius: 26 / 2,
                  border: "1px solid #ccc",

                  height: "1.5rem",
                  backgroundColor: "#f8f8f8", // Customize track background color
                  opacity: 1,
                  transition:
                    "background-color 0.4s ease-in-out, border 0.4s ease-in-out",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          borderBottom: "1px solid #E0E0E0",
          pb: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            mt: "2rem",
          }}
        >
          <Box
            sx={{
              pb: "4px",
            }}
          >
            <img src={colorContact} alt="c-contact" />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              alignItems: "start",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "5px",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "16px",
                  color: "##000000",
                }}
              >
                COLERMSA DINNER & AWARDS NIGHT
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: "12px",
                  padding: "2px 8px 2px 8px",
                  background: "#EBFFF3",
                  borderRadius: "8px",
                }}
              >
                live
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: "3px",
              }}
            >
              <Typography
                htmlFor="input"
                sx={{
                  fontWeight: 600,
                  fontSize: "12px",
                  color: "#828282",
                  mb: "10px",
                }}
              >
                Created 01-05-2023 at 9:34am |
              </Typography>
              <Typography
                htmlFor="input"
                sx={{
                  fontWeight: 600,
                  fontSize: "12px",
                  color: "#828282",
                  mb: "10px",
                }}
              >
                Expires 15-06-2023 |
              </Typography>
              <Typography
                htmlFor="input"
                sx={{
                  fontWeight: 600,
                  fontSize: "12px",
                  color: "#828282",
                  mb: "10px",
                }}
              >
                1,090 Paid, 789 Verified
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <Typography
            htmlFor="input"
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              color: "#1E1E1E",
            }}
          >
            Stop Accepting Payments
          </Typography>

          <Box
            sx={{
              mb: "0.5rem",
            }}
          >
            <Switch
              // checked={darkMode}
              // onChange={onToggleDarkMode}
              sx={{
                "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                  backgroundColor: "#DC0019",
                  opacity: 1, // Customize track background color when checked
                },
                "& .MuiSwitch-switchBase.Mui-focusVisible .MuiSwitch-thumb": {
                  color: "#52d869", // Customize thumb color when focused
                  border: "6px solid #fff",
                },
                "& .MuiSwitch-switchBase": {
                  padding: "1px",

                  color: "#fff",
                  "&.Mui-checked": {
                    transform: "translateX(15px)",
                    color: "#fff",
                  },
                },
                "& .MuiSwitch-thumb": {
                  width: "20px",
                  height: "20px",
                  marginTop: "0.8rem",
                  marginLeft: "0.8rem",
                  backgroundColor: "#f0f0f0", // Customize thumb background color
                },
                "& .MuiSwitch-track": {
                  borderRadius: 26 / 2,
                  border: "1px solid #ccc",

                  height: "1.5rem",
                  backgroundColor: "#f8f8f8", // Customize track background color
                  opacity: 1,
                  transition:
                    "background-color 0.4s ease-in-out, border 0.4s ease-in-out",
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ExistingBill;
