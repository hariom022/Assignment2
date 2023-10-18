import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import EditNoteIcon from "@mui/icons-material/EditNote";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LockIcon from "@mui/icons-material/Lock";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const MonthlyCard = () => {
  const theme = useTheme();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <Box sx={{ display: "flex", mt: "62px", flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Card sx={{ display: "flex", pt: "24px", boxShadow: "none" }}>
              <Box sx={{ fontSize: "82px", color: "#579e57" }}>
                <MonetizationOnIcon
                  sx={{ fontSize: "70px", color: "#6aba6a" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  // flexWrap: "wrap",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto", alignItems: "center" }}>
                  <Typography component="div" variant="p">
                    Earning
                  </Typography>
                  <Typography variant="subtitle1" component="div">
                    $198k
                  </Typography>
                  <Typography sx={{ ml: "-6px" }}>
                    <ArrowUpwardIcon color="success" />
                    <span style={{ color: "green" }}>37.8%</span>{" "}
                    <span>This Month</span>
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Card
              sx={{
                display: "flex",
                pt: "24px",
                ml: "10px",
                boxShadow: "none",
              }}
            >
              <Box sx={{ fontSize: "82px", color: "#579e57" }}>
                <EditNoteIcon sx={{ fontSize: "70px", color: "#6aba6a" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto", alignItems: "center" }}>
                  <Typography component="div" variant="p">
                    Order
                  </Typography>
                  <Typography variant="subtitle1" component="div">
                    $2.4k
                  </Typography>
                  <Typography sx={{ ml: "-6px" }}>
                    <ArrowDownwardIcon color="warning" />
                    <span style={{ color: "red" }}>2%</span>{" "}
                    <span>This Month</span>
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Card
              sx={{
                display: "flex",
                pt: "24px",
                ml: "10px",
                boxShadow: "none",
              }}
            >
              <Box sx={{ fontSize: "82px", color: "#579e57" }}>
                <AccountBalanceWalletIcon
                  sx={{ fontSize: "70px", color: "#6aba6a" }}
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto", alignItems: "center" }}>
                  <Typography component="div" variant="p">
                    Balance
                  </Typography>
                  <Typography variant="subtitle1" component="div">
                    $2.4k
                  </Typography>
                  <Typography sx={{ ml: "-6px" }}>
                    <ArrowDownwardIcon color="warning" />
                    <span style={{ color: "red" }}>2%</span>{" "}
                    <span>This Month</span>
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <Card
              sx={{
                display: "flex",
                pt: "24px",
                ml: "10px",
                boxShadow: "none",
              }}
            >
              <Box sx={{ fontSize: "82px", color: "#579e57" }}>
                <LockIcon sx={{ fontSize: "70px", color: "#6aba6a" }} />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <CardContent sx={{ flex: "1 0 auto", alignItems: "center" }}>
                  <Typography component="div" variant="p">
                    Sale
                  </Typography>
                  <Typography variant="subtitle1" component="div">
                    $29k
                  </Typography>
                  <Typography sx={{ ml: "-6px" }}>
                    <ArrowUpwardIcon color="success" />
                    <span style={{ color: "green" }}>11%</span>{" "}
                    <span>This Month</span>
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MonthlyCard;
