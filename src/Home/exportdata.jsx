import React from "react";
import { useState } from "react";
import {
  Box,
  Grid,
  InputAdornment,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { dataex, obatex, pesanex, saleex, vectorex } from "../assets";

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     height: 60,
//     lineHeight: '60px',
//   }));

const Exportdata = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={3.5} md={3.5}>
          <OutlinedInput
            id="outlined-adornment-password"
            size="small"
            fullWidth
            // type={values.showPassword ? 'text' : 'password'}
            // value={values.password}
            // onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
            placeholder="cari obat"
          />
        </Grid>
      </Grid>
      <Grid container xs={12} md={12} justifyContent="space-between">
        <Grid item xs={12} md={12} />
        <Grid item xs={3.8} md={3.8} marginTop="25px" textAlign="center">
          <Paper
            elevation={3}
            sx={{
              height: "15vh",
              paddingTop: "12px",
            }}
          >
            <img src={obatex} alt="obat" />
            <br />
            <Typography variant="p" fontSize="16px">
              Export Data Obat
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3.8} md={3.8} marginTop="25px" textAlign="center">
          <Paper
            elevation={3}
            sx={{
              height: "15vh",
              paddingTop: "12px",
            }}
          >
            <img src={dataex} alt="obat" />
            <br />
            <Typography variant="p" fontSize="16px">
              Export Data Obat
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3.8} md={3.8} marginTop="25px" textAlign="center">
          <Paper
            elevation={3}
            sx={{
              height: "15vh",
              paddingTop: "12px",
            }}
          >
            <img src={vectorex} alt="obat" />
            <br />
            <Typography variant="p" fontSize="16px">
              Export Data Obat
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3.8} md={3.8} marginTop="25px" textAlign="center">
          <Paper
            elevation={3}
            sx={{
              height: "15vh",
              paddingTop: "12px",
            }}
          >
            <img src={saleex} alt="obat" />
            <br />
            <Typography variant="p" fontSize="16px">
              Export Data Obat
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3.8} md={3.8} marginTop="25px" textAlign="center">
          <Paper
            elevation={3}
            sx={{
              height: "15vh",
              paddingTop: "12px",
            }}
          >
            <img src={pesanex} alt="obat" />
            <br />
            <Typography variant="p" fontSize="16px">
              Export Data Obat
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3.8} md={3.8} marginTop="25px" textAlign="center">
          <Paper
            elevation={3}
            sx={{
              height: "15vh",
              paddingTop: "12px",
            }}
          >
            <img src={obatex} alt="obat" />
            <br />
            <Typography variant="p" fontSize="16px">
              Export Data Obat
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3.8} md={3.8} marginTop="25px" textAlign="center">
          <Paper
            elevation={3}
            sx={{
              height: "15vh",
              paddingTop: "12px",
            }}
          >
            <img src={dataex} alt="obat" />
            <br />
            <Typography variant="p" fontSize="16px">
              Export Data Obat
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3.8} md={3.8} marginTop="25px" textAlign="center">
          <Paper
            elevation={3}
            sx={{
              height: "15vh",
              paddingTop: "12px",
            }}
          >
            <img src={vectorex} alt="obat" />
            <br />
            <Typography variant="p" fontSize="16px">
              Export Data Obat
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3.8} md={3.8} marginTop="25px" textAlign="center">
          <Paper
            elevation={3}
            sx={{
              height: "15vh",
              paddingTop: "12px",
            }}
          >
            <img src={saleex} alt="obat" />
            <br />
            <Typography variant="p" fontSize="16px">
              Export Data Obat
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3.8} md={3.8} marginTop="25px" textAlign="center">
          <Paper
            elevation={3}
            sx={{
              height: "15vh",
              paddingTop: "12px",
            }}
          >
            <img src={pesanex} alt="obat" />
            <br />
            <Typography variant="p" fontSize="16px">
              Export Data Obat
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3.8} md={3.8} marginTop="25px" textAlign="center">
          <Paper
            elevation={3}
            sx={{
              height: "15vh",
              paddingTop: "12px",
            }}
          >
            <img src={obatex} alt="obat" />
            <br />
            <Typography variant="p" fontSize="16px">
              Export Data Obat
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3.8} md={3.8} marginTop="25px" textAlign="center">
          <Paper
            elevation={3}
            sx={{
              height: "15vh",
              paddingTop: "12px",
            }}
          >
            <img src={dataex} alt="obat" />
            <br />
            <Typography variant="p" fontSize="16px">
              Export Data Obat
            </Typography>
          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Exportdata;
