import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { Button, TextField, Avatar } from "@mui/material";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PercentIcon from "@mui/icons-material/Percent";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import MonthlyCard from "../MonthlyCard";
import ProgressChart from "../Progress";
import PieData from "../PieChartData";
import TableData from "../TableData";
import TokenIcon from "@mui/icons-material/Token";
import WavingHandIcon from "@mui/icons-material/WavingHand";
import "./DrawerNav.css";

const drawerWidth = 240;

const DrawerNav = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div style={{ background: "#1e1e4d", color: "white" }}>
      {/* <Toolbar /> */}
      <Box sx={{ display: "flex", alignItems: "center", mt: "20px" }}>
        <TokenIcon sx={{ ml: "16px" }} />
        <Typography variant="h5" sx={{ ml: "10px" }}>
          Dashboard
        </Typography>
      </Box>
      {/* <Divider /> */}
      <List>
        <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <DashboardIcon sx={{ mr: "-20px" }} />
          Dashboard
          <Button sx={{ color: "white" }}>{">"}</Button>
        </ListItem>

        <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <ViewInArIcon sx={{ mr: "-38px" }} /> Product
          <Button sx={{ color: "white" }}>{">"}</Button>
        </ListItem>
        <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <PermContactCalendarIcon sx={{ mr: "-25px" }} /> Customer
          <Button sx={{ color: "white" }}>{">"}</Button>
        </ListItem>
        <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <AccountBalanceWalletIcon sx={{ mr: "-40px" }} /> Income
          <Button sx={{ color: "white" }}>{">"}</Button>
        </ListItem>
        <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <PercentIcon sx={{ mr: "-40px" }} /> Promote
          <Button sx={{ color: "white" }}>{">"}</Button>
        </ListItem>
        <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
          <LiveHelpIcon sx={{ mr: "-60px" }} /> Help
          <Button sx={{ color: "white" }}>{">"}</Button>
        </ListItem>
      </List>
      <Box
        sx={{
          display: "flex",
          color: "white",
          mt: "100%",
          mb: "0",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ m: "10px 10px" }}
        />
        <Box>
          <Typography sx={{ fontSize: "13px" }}>Evano</Typography>
          <Typography sx={{ fontSize: "13px" }}>Project Manager</Typography>
        </Box>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "gray",
          boxShadow: "none",
        }}
      >
        <Box className="content-input">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <div>
            <Typography variant="h6" component="div" align="center">
              Hello Hariom
              <WavingHandIcon />
            </Typography>
          </div>
          <div className="text-input">
            <TextField
              hiddenLabel
              id="filled-hidden-label-small"
              placeholder="Search..."
              variant="filled"
              size="small"
            />
          </div>
        </Box>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          background: "blue",
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#1e1e4d",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#1e1e4d",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <MonthlyCard />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <ProgressChart />
          <PieData />
        </div>

        <TableData />
        <Toolbar />
      </Box>
    </Box>
  );
};

export default DrawerNav;
