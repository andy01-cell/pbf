import * as React from "react";
import pbf from "./logo pbf.png";
import "./Login.css";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { fontSize } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { useHistory } from "react-router";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Login = () => {
  const history = useHistory();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
          <Grid container direction="column">
            <Grid item>
              <p
                style={{
                  fontSize: "50px",
                }}
              >
                Halo!
              </p>
            </Grid>
            <Grid item>
              <p
                style={{
                  fontSize: "20px",
                  marginTop: "-30px",
                }}
              >
                Masuk ke akun anda atau Daftar jika belum memiliki akun
              </p>
            </Grid>
            <Grid item>
              <TextField
                style={{
                  width: "45ch",
                }}
                id="outlined-basic"
                label="email"
                width="45ch"
                variant="outlined"
              />
              <Grid item>
                <FormControl sx={{ m: 3, width: "45ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <Grid item>
                  <p
                    style={{
                      marginTop: "-20px",
                      marginLeft: "300px",
                      color: "rgb(61, 157, 155)",
                    }}
                  >
                    Lupa sandi?
                  </p>
                  <Grid item>
                    <Button variant="contained" sx={{ m: 3, width: "50ch" }}>
                      Masuk
                    </Button>
                    <Grid container direction="rows" justifyContent="center">
                      <p
                        style={{
                          marginTop: "0px",
                        }}
                      >
                        belum mempunyai
                      </p>
                      <p
                        style={{
                          fontWeight: "bold",
                          marginTop: "0px",
                          marginLeft: "5px",
                        }}
                      >
                        akun?
                      </p>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        sx={{ m: 1, width: "50ch" }}
                        onClick={() => history.push("/daftar")}
                      >
                        Daftar
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
