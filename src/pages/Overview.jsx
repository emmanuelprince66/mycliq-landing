import React from "react";
import TableCom from "../components/TableCom";
import { Box , Card , Typography , Grid } from "@mui/material";
import SelectDate from "../components/SelectDate";
import purple  from "../assets/images/admin/purple.svg"
import blue  from "../assets/images/admin/blue.svg"
import { styled } from "@mui/material/styles";

import brown  from "../assets/images/admin/brown.svg"
import green  from "../assets/images/admin/green.svg"
import LineChart from "../components/LineChart";
import DoughnutChart from "../components/DoughnutChart";



const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  border: "1px solid #E0E0E0",
  color: theme.palette.text.secondary,
  borderRadius: "8px",
  maxHeight:"100%"
}));
export const Overview = () => {
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
          mb: "1rem",
        }}
      >
        <Box>
          <SelectDate />
        </Box>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "16px",
              width: "100%",
              gap: "1rem",
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
                <img src={green} className="fd" alt="f-down" />
              </Box>
              <Typography
                sx={{
                  fomtWeight: "500",
                  fontSize: "14px",
                  color: "#4F4F4F",
                }}
              >
                Total Revenue <br />
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
                mb: "0.7rem",
              }}
            >
              <Typography
                sx={{
                  fomtWeight: "500",
                  fontSize: "12px",
                  color: "#828282",
                }}
              >
                All-time :
              </Typography>

              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "16px",
                  color: "#1E1E1E",
                  display: "flex",
                  gap: "4px",
                }}
              >
                {/* {nonHomeDeliveryCount} Orders */} 5000
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
                mb: "0.7rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "#828282",
                }}
              >
                By Filter :
              </Typography>

              <Typography
                sx={{
                  fontWeight: "600",

                  fontSize: "16px",
                  color: "#1E1E1E",
                  display: "flex",
                  gap: "4px",
                }}
              >
                {/* {nonHomeDeliveryFCount} Orders */}200
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "16px",
              width: "100%",
              gap: "1rem",
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
                <img src={brown} className="fd" alt="f-down" />
              </Box>
              <Typography
                sx={{
                  fomtWeight: "500",
                  fontSize: "14px",
                  color: "#4F4F4F",
                }}
              >
                Total orders <br />
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
                mb: "0.7rem",
              }}
            >
              <Typography
                sx={{
                  fomtWeight: "500",
                  fontSize: "12px",
                  color: "#828282",
                }}
              >
                All-time :
              </Typography>

              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "16px",
                  color: "#1E1E1E",
                  display: "flex",
                  gap: "4px",
                }}
              >
                {/* {nonHomeDeliveryCount} Orders */}300
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
                mb: "0.7rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "#828282",
                }}
              >
                By Filter :
              </Typography>

              <Typography
                sx={{
                  fontWeight: "600",

                  fontSize: "16px",
                  color: "#1E1E1E",
                  display: "flex",
                  gap: "4px",
                }}
              >
                {/* {nonHomeDeliveryFCount} Orders */}400
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "16px",
              width: "100%",
              gap: "1rem",
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
                <img src={purple} className="fd" alt="f-down" />
              </Box>
              <Typography
                sx={{
                  fomtWeight: "500",
                  fontSize: "14px",
                  color: "#4F4F4F",
                }}
              >
                Total Registered Customers <br />
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
                mb: "0.7rem",
              }}
            >
              <Typography
                sx={{
                  fomtWeight: "500",
                  fontSize: "12px",
                  color: "#828282",
                }}
              >
                All-time :
              </Typography>

              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "16px",
                  color: "#1E1E1E",
                  display: "flex",
                  gap: "4px",
                }}
              >
                {/* {homeDeliveryCount} Orders */}300
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
                mb: "0.7rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "#828282",
                }}
              >
                By Filter :
              </Typography>

              <Typography
                sx={{
                  fontWeight: "600",

                  fontSize: "16px",
                  color: "#1E1E1E",
                  display: "flex",
                  gap: "4px",
                }}
              >
                {/* {homeDeliveryFCount} Orders */}200
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "16px",
              width: "100%",
              gap: "1rem",
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
                <img src={blue} className="fd" alt="f-down" />
              </Box>
              <Typography
                sx={{
                  fomtWeight: "500",
                  fontSize: "14px",
                  color: "#4F4F4F",
                }}
              >
                Total Registered Merchant
                <br />
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
                mb: "0.7rem",
              }}
            >
              <Typography
                sx={{
                  fomtWeight: "500",
                  fontSize: "12px",
                  color: "#828282",
                }}
              >
                All-time :
              </Typography>

              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "16px",
                  color: "#1E1E1E",
                  display: "flex",
                  gap: "4px",
                }}
              >
                {/* <FormattedPrice amount={revVal} /> */}3000
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "5px",
                mb: "0.7rem",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "12px",
                  color: "#828282",
                }}
              >
                By Filter :
              </Typography>

              <Typography
                sx={{
                  fontWeight: "600",

                  fontSize: "16px",
                  color: "#1E1E1E",
                  display: "flex",
                  gap: "4px",
                }}
              >
                {/* <FormattedPrice amount={revFillVal} /> */} 500
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>



      {/* chart */}

      {/* <Box sx={{ flexGrow: "1" }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>
              <Box sx={{ alignItems: "start" }}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "16px",
                    color: "#4F4F4F",
                    p: "20px",
                  }}
                >
                  Revenue Overview
                </Typography>
              </Box>
              <LineChart />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <DoughnutChart />
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>big</Item>
          </Grid>
        </Grid>
      </Box> */}
    </Box>
  );
};
