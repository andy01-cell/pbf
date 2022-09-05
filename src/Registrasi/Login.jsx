import * as React from "react";
import "./Login.css";
import { useState, useEffect } from "react";
import axios from "axios";
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
import { pbf1 } from "../assets";
// CEO_37781  perusahaan
// Pembelian_3642   pegawai

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Login = () => {
  let token;
  // useEffect(() => {
  //   if ((token = localStorage.getItem("token_login"))) {
  //     history.push("/home");
  //   }
  // }, []); // <- add empty brackets here

  const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password2: "",
  });
  const [bool, setBool] = useState("");
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const onBtnLogin = (e) => {
    e.preventDefault();
    console.log(state);
    const data = new FormData();
    data.append("email", state.email);
    data.append("password", state.password2);

    axios
      .post("http://localhost/api_pibief/public/api_pbf/auth/login", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("SINI : ", res);
        const result = res.data.responseData.access_token;
        const typetoken = res.data.responseData.token_type;
        const Authorization = typetoken + result;
        const account = res.data.responseData.guard;
        console.log("post succes : ", Authorization);
        console.log("post succes 2 : ", account);
        checkprofil(Authorization, account);
        localStorage.setItem("token_login", Authorization);
      })
      .catch((err) => {
        console.log("ERRRR:: ", err.response.data);
        alert("Email atau passwor salah");
      });
  };

  const checkprofil = (e, acc) => {
    let namaakun;
    let gambarakun;
    let account = acc;

    if ((account = "perusahaan")) {

      axios
      .get("http://localhost/api_pibief/public/api_pbf/perusahaan/profile", {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: e,
        },
      })
      .then((res) => {
        namaakun = res.data.responseData.nama_perusahaan;
      gambarakun = res.data.responseData.gambar_perusahaan;
      const testtt = [namaakun, gambarakun];
      // getGambar(testtt);
      console.log("test = ", res)
      localStorage.setItem("nama", namaakun);
      localStorage.setItem("gambar", gambarakun);
      history.push("/perusahaan"); 
      })

      .catch((err) => {
        console.log("ERRRR:: ", err.data.responseData);
        alert("terjadi kesalahan pada akun anda");
      });

    }
    // if ((account = "Pembelian")) {
    //   axios
    //     .get("http://localhost/api_pibief/public/api_pbf/karyawan/profile", {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //         authorization: e,
    //       },
    //     })
    //     .then((res) => {
    //       console.log("test = ", res);
    //       namaakun = res.data.responseData.nama_lengkap;
    //       gambarakun = res.data.responseData.gambar;
    //       const testtt = [namaakun, gambarakun];
    //       // getGambar(testtt);
    //       localStorage.setItem("nama", namaakun);
    //       localStorage.setItem("gambar", gambarakun);
    //       history.push("/karyawan");
    //     })

    //     .catch((err) => {
    //       console.log("ERRRR:: ", err);
    //       alert("terjadi kesalahan pada akun anda");
    //     });
    // } 
    // else {
    //   console.log("OIOIOIOI SALAH GOBLOK ");
    // }
  };

  const onHandledChanged = (prop) => (event) => {
    const name = event.target.name;
    setValues({ ...values, [prop]: event.target.value });
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  // const handleChange = (prop) => (event) => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  //------------------------------------------------------------

  return (
    <div className="App">
      <form onSubmit={onBtnLogin} encType="multipart/form-data">
        <Grid container>
          <Grid
            item
            xs={12}
            md={5}
            style={{
              background: "#3d9d9b",
              height: "100vh",
            }}
          >
            <Box display="flex  ">
              <img src={pbf1} alt="pbf1" />
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
                Selamat Datang <br />
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
                Pibief merupakan platform yang menghubungkan apotek/sarana
                layanan kesehatan dan distributor farmasi melalui System As A
                Services (SAAS).
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
                  id="email"
                  name="email"
                  error={bool}
                  label="email"
                  // value={values.email}
                  type="email"
                  required
                  width="45ch"
                  variant="outlined"
                  onChange={onHandledChanged("email")}
                  autoComplete="email"
                />
              </Grid>
              <Grid item>
                <FormControl sx={{ m: 1, width: "45ch" }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    name="password2"
                    error={bool}
                    type={values.showPassword ? "text" : "password"}
                    value={values.password}
                    onChange={onHandledChanged("password")}
                    required
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
              </Grid>
              <Grid item>
                <p
                  style={{
                    marginTop: "-10px",
                    marginLeft: "300px",
                    color: "rgb(61, 157, 155)",
                    cursor: "pointer",
                  }}
                  onClick={() => history.push("/Lupasandi")}
                >
                  Lupa sandi?
                </p>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  sx={{ m: 2, width: "50ch" }}
                  style={{
                    background: "#3d9d9b",
                  }}
                  // name="password2"
                  // name="email"
                  // onChange={onHandledChanged}
                  // onClick={() => history.push("/home")}
                  // onClick={onBtnLogin}
                  type="submit"
                >
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
                    style={{
                      borderColor: "#3d9d9b",
                      color: "#3d9d9b",
                    }}
                  >
                    Daftar
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Login;
