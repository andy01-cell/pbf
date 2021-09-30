import * as React from "react";
// import APP from "./App";
import pbf from "./logo pbf.png";
import "./Login.css";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Daftar = () => {
  return (
    <div className="App">
      <Grid container>
        <Grid
          item
          xs={12}
          md={5}
          style={{
            background: "#3d9d9b",
            height: "103vh",
          }}
        >
          <Box display="flex  ">
            <img src={pbf} alt="pbf" />
          </Box>
          <Grid item>
            <Typography
              variant="h5"
              textAlign="start"
              style={{
                fontFamily: "Mulish",
                // width: "60vh",
                padding: "80px 40px 16px",
                color: "#fff",
              }}
            >
              Selamar Datang <br />
              Pedagang Besar Farmasi(PBF)
            </Typography>
            <Typography
              variant="h6"
              textAlign="start"
              style={{
                // width: "60vh",
                color: "#fff",
                padding: "0px 40px",
                fontSize: "15px",
              }}
            >
              Pibief merupakan platform yang menghubungkan apotek/sarana layanan
              kesehatan dan distributor farmasi melalui System As A Services
              (SAAS).
              <br />
              Pibief dapat menjadi solusi sistem distribusi obat agar lebih
              efisien dan menguntungkan bagi kedua stake holders.
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={7}>
          <Grid container justifyContent="center">
            <p>Isi Data PBF Anda</p>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={10} md={10}>
              <TextField
                style={{}}
                fullWidth
                id="outlined-basic"
                label="Nama PBF"
                variant="outlined"
                size="small"
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center" margin="20px 0">
            <Grid item xs={5} md={5}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                id="firstName"
                label="First Name"
                autoFocus
                size="small"
                fullWidth
                style={{}}
              />
            </Grid>
            <Grid item xs={5} md={5}>
              <TextField
                required
                type="number"
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                size="small"
                fullWidth
                style={{}}
              />
            </Grid>
          </Grid>
          <Grid></Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Daftar;
