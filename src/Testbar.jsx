import * as React from "react";
import { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useHistory } from "react-router";
import Grid from "@mui/material/Grid";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import { Switch, Route } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem } from "@mui/material";
import Dashboardper from "./UserPerusahaan/Dashboardper";
import Exportdata from "./Home/exportdata";
import kadaluarsa from "./Home/pDaftardata/kadaluarsa";
import obat from "./Home/pDaftardata/obat";
import Steppersper from "./Home/pDaftardata/Steppersper";
import Penerimaan from "./Home/pDaftardata/penerimaan";
import Catatansp from "./Home/pPembelian/Catatansp";
import suratpesanan from "./Home/pPembelian/suratpesanan";
import Barang from "./Home/pPembelian/Barang";
import Index from "./Home/pDashboard/Index";
import {
  barangicon,
  bell,
  catatanicon,
  daftaricon,
  dashicon,
  exporticon,
  kadaluarsaicon,
  obaticon,
  pbf,
  penerimaanicon,
  shopicon,
} from "./assets";

const Testbar = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const history = useHistory();
  // let profile = history.location.state;
  let namaprofil = localStorage.getItem("nama");
  let gambarprofil = localStorage.getItem("gambar");
  console.log("profile => ", gambarprofil);

  const drawerWidth = 240;

  const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
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
    })
  );

  const AppBar = styled(MuiAppBar, {
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

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

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

  const [setting, setSetting] = React.useState(null);
  const opensetting = Boolean(setting);
  const handleClicksetting = (event) => {
    setSetting(event.currentTarget);
  };
  const handleClosesetting = () => {
    setSetting(null);
  };

  const BtnKeluar = () => {
    localStorage.clear();
    history.push("/");
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
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
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
                "http://localhost/api_pibief/public/public/gambar_karyawan/" +
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
              aria-controls={opensetting ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={opensetting ? "true" : undefined}
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
                mt: 7,
                ml: 150,
                position: "sticky",
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
                  right: 34,
                  width: 10,
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
            <MenuItem onClick={BtnKeluar}>Keluar</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
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
        <DrawerHeader
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
        </DrawerHeader>
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
          <ListItemButton onClick={() => history.push("/home")}>
            <ListItemIcon>
              <Box>
                <img src={dashicon} alt="dash" />
              </Box>
            </ListItemIcon>
            <ListItemText
              primary="Dashboard"
              style={{
                color: "white",
              }}
            />
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <Box>
                <img src={shopicon} alt="shop" />
              </Box>
            </ListItemIcon>
            <ListItemText
              primary="Pembelian"
              style={{
                color: "white",
              }}
            />
            {open1 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open1} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => history.push("/barang")}
              >
                <ListItemIcon>
                  <img src={barangicon} alt="barang" />
                </ListItemIcon>
                <ListItemText
                  primary="Barang"
                  style={{
                    color: "white",
                  }}
                />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => history.push("./catatansp")}
              >
                <ListItemIcon>
                  <img src={catatanicon} alt="catatan" />
                </ListItemIcon>
                <ListItemText
                  primary="Catatan SP"
                  style={{
                    color: "white",
                  }}
                />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton onClick={handleClick1}>
            <ListItemIcon>
              <img src={daftaricon} alt="daftar" />
            </ListItemIcon>
            <ListItemText
              primary="Daftar Data"
              style={{
                color: "white",
              }}
            />
            {open2 ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => history.push("./penerimaan")}
              >
                <ListItemIcon>
                  <img src={penerimaanicon} alt="penerimaan" />
                </ListItemIcon>
                <ListItemText
                  primary="Penerimaan"
                  style={{
                    color: "white",
                  }}
                />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => history.push("./obat")}
              >
                <ListItemIcon>
                  <img src={obaticon} alt="obat" />
                </ListItemIcon>
                <ListItemText
                  primary="Obat"
                  style={{
                    color: "white",
                  }}
                />
              </ListItemButton>
              <ListItemButton
                sx={{ pl: 4 }}
                onClick={() => history.push("./kadaluarsa")}
              >
                <ListItemIcon>
                  <img src={kadaluarsaicon} alt="kadaluarsa" />
                </ListItemIcon>
                <ListItemText
                  primary="Kadaluarsa"
                  style={{
                    color: "white",
                  }}
                />
              </ListItemButton>
            </List>
          </Collapse>
          <ListItemButton>
            <ListItemIcon>
              <Box>
                <img src={exporticon} alt="export" />
              </Box>
            </ListItemIcon>
            <ListItemText
              primary="Data Export"
              style={{
                color: "white",
              }}
            />
          </ListItemButton>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        {/* <Index/> */}
        <Switch>
          <Route path="/home" exact component={Index} />
          <Route path="/barang" exact component={Barang} />
          <Route path="/surat_pesanan" exact component={suratpesanan} />
          <Route path="/catatansp" exact component={Catatansp} />
          <Route path="/penerimaan" exact component={Penerimaan} />
          <Route path="/step" exact component={Steppersper} />
          <Route path="/obat" exact component={obat} />
          <Route path="/kadaluarsa" exact component={kadaluarsa} />
          <Route path="/exportdata" exact component={Exportdata} />
          <Route path="/test" exact component={Dashboardper} />
        </Switch>
      </Main>
    </Box>
  );
};

export default Testbar;
