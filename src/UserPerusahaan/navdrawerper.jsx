import {
  Avatar,
  Badge,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { bell, dashicon, exporticon, kadaluarsaicon, pbf } from "../assets";
import { useHistory } from "react-router";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Dashboardper from "./Dashboardper";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navdrawerper = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const history = useHistory();
  let namaprofil = localStorage.getItem("nama");
  let gambarprofil = localStorage.getItem("gambar");
  // let gambarprofil1 = localStorage.clear
  console.log("profile => ", gambarprofil);

  const drawerWidth = 240;

  const Mainper = styled("main", {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }));

  const AppBarper = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeaderper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const [setting, setSetting] = React.useState(null);
  const opensetting = Boolean(setting);
  const handleClicksetting = (event) => {
    setSetting(event.currentTarget);
  };
  const handleClosesetting = () => {
    setSetting(null);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setOpen1(!open1);
  };

  const handleClick1 = () => {
    setOpen2(!open2);
  };

  const [disabled, setDisabled] = useState("#fff");
  const [disabled1, setDisabled1] = useState("#fff");
  const [disabled2, setDisabled2] = useState("#fff");

  const informasiklik = (params) => {
    console.log("test => ", params);

    if (params === "nyala1") {
      setDisabled("#e3dede");
      setDisabled1("#fff");
      setDisabled2("#fff");
    } else {
      setDisabled1("#fff");
      setDisabled("#fff");
      setDisabled2("#fff");
    }
  };
  const diagnosaklik = (params) => {
    console.log("test => ", params);

    if (params === "nyala2") {
      setDisabled1("#e3dede");
      setDisabled("#fff");
      setDisabled2("#fff");
    } else {
      setDisabled1("#fff");
      setDisabled("#fff");
      setDisabled2("#fff");
    }
  };

  const bantuanklik = (params) => {
    console.log("test => ", params);

    if (params === "nyala3") {
      setDisabled2("#e3dede");
      setDisabled1("#fff");
      setDisabled("#fff");
    } else {
      setDisabled1("#fff");
      setDisabled("#fff");
      setDisabled2("#fff");
    }
  };

  const BtnKeluar =()=>{
    localStorage.clear();
    history.push("/")
  }

  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBarper
          position="fixed"
          open={open}
          style={{
            background: "#fff",
          }}
        >
          <Toolbar>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Grid
              container
              justifyContent="end"
              direction="row"
              alignItems="center"
            >
              <Badge color="secondary" variant="dot">
                <img src={bell} alt="bell" height="24px" />
              </Badge>
              <Grid item xs={0.1} md={0.1} />
              <Avatar
                alt="pt"
                src={
                  "http://localhost/api_pibief/public/public/gambar_perusahaan/" +
                  gambarprofil
                }
                sx={{ width: 45, height: 45 }}
              />
              {/* <img
              src={gambarprofil}
              alt="PT"
              sx={{ xs: 40, md: 40 }}
              style={{
                width: "20px",
                height: "20px",
              }}
            /> */}
              <Grid item xs={0.1} md={0.1} />
              <p
                style={{
                  color: "black",
                }}
              >
                {namaprofil}
              </p>
            </Grid>
            <Grid item>
              <IconButton
                onClick={handleClicksetting}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? "account-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <MoreVertIcon />
              </IconButton>
            </Grid>
            <Menu
              anchorEl={setting}
              id="account-menu"
              open={opensetting}
              onClose={handleClosesetting}
              onClick={handleClosesetting}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 5 ,
                  ml: 187,
                  position:"sticky",
                  // "& .MuiAvatar-root": {
                  //   // width: 50,
                  //   // height: 32,
                  //   // ml: -0.5,
                  //   // mr: 1,
                  // },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 30,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Pengaturan</MenuItem>
              <MenuItem>Versi Aplikasi</MenuItem>
              <Divider />
              <MenuItem 
              onClick={BtnKeluar}
              >Keluar</MenuItem>
            </Menu>
          </Toolbar>
        </AppBarper>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeaderper
            style={{
              background: "#3d9d9b",
            }}
          >
            <Box margin="0 20%">
              <img src={pbf} alt="pbf" />
            </Box>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeaderper>
          <Divider />
          <List
            style={{
              background: "#3d9d9b",
              height: "100vh",
            }}
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            dense
          >
            <ListItemButton onClick={() => history.push("./test")}>
              <ListItemIcon>
                <Box>
                  <img src={dashicon} alt="dashper" />
                </Box>
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                style={{
                  color: "white",
                }}
              />
            </ListItemButton>
          </List>
          <Divider />
        </Drawer>
        <Mainper open={open}>
          <DrawerHeaderper />
          <Dashboardper />
          <Switch>
            {/* <Route path="/test" component={Dashboardper} /> */}
          </Switch>
        </Mainper>
      </Box>
    </BrowserRouter>
  );
};

export default Navdrawerper;
