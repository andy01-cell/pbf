import { useState } from "react";
import * as React from "react";
import "./Login.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { useHistory } from "react-router";
import { kunci1, pbf1, lupafailed, lupaSucces } from "../assets";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Lupasandi = () => {
  const [state, setState] = useState({
    email: "",
    statuss: "true",
  });

  const [bool, setBool] = useState("");

  const onBtnCheck = (e) => {
    e.preventDefault();
    console.log(state);
    const data = new FormData();
    data.append("email", state.email);
    data.append("status", state.statuss);
    // for (let [name, value] of data) {
    //   alert(`${name} = ${value}`); // key1 = value1, then key2 = value2
    // }

    axios
      .post("http://localhost/api_pibief/public/api_pbf/cek/email", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("post succes : ", res.data.responseData[1]);
        // dialogSucces();
        kirimrepass(res.data.responseData[1])
        handleClickOpen();
      })
      .catch((err) => {
        console.log("ERRRR:: ", err.response.data);
        handleClickOpen1();
      });
  };

  const kirimrepass = (e) => {
    axios
      .put(`http://localhost/api_pibief/public/api_pbf/reset/password?id_token=${e}&status=true`, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("post succes : ", res);
        // dialogSucces();
      })
      .catch((err) => {
        console.log("ERRRR:: ", err.response.data);
      });
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open1, setOpen1] = React.useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };

  const handleClose1 = () => {
    setOpen1(false);
  };

  const onHandledChanged = (prop) => (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className="App">
    <form onSubmit={onBtnCheck} encType="multipart/form-data">
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
            <img src={pbf1} alt="pbf" />
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
          <Grid container direction="column" justifyContent="center">
            <Grid item paddingTop="10%">
              <h2>Lupa Sandi</h2>
              <Box>
                <img src={kunci1} alt="kunci" />
              </Box>
              <p>
                Silahkan masukkan <b>email</b> anda untuk menerima
                <b>verifikasi</b>
              </p>
            </Grid>
            <Grid item xs={2} md={2} />
            <Grid container justifyContent="center">
              <Grid item xs={9} md={9}>
                <TextField
                  style={{
                    marginTop: "25px",
                  }}
                  id="email"
                  name="email"
                  label="email"
                  type="email"
                  variant="outlined"
                  autoComplete="Email"
                  required
                  fullWidth
                  onChange={onHandledChanged("email")}
                />
              </Grid>
            </Grid>
            <Grid item xs={2} md={2} />
            <Grid container justifyContent="center">
              <Grid item>
                <Button
                  variant="contained"
                  sx={{ m: 4, width: "15ch" }}
                  style={{
                    background: "#3d9d9b",
                  }}
                  type
                  // onClick={onBtnCheck}
                >
                  Periksa
                </Button>
                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  fullWidth
                  keepMounted
                  onClose={handleClose}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                  >
                    <Grid item>
                      <DialogTitle tyle={{ marginTop: "30px" }}>
                        <img src={lupaSucces} alt="lupaSucces" />
                      </DialogTitle>
                    </Grid>
                    <Grid item>
                      {/* <DialogContent sx={{ m: -8 }}> */}
                      <DialogContentText
                        id="alert-dialog-slide-description"
                        style={{ textAlign: "center" }}
                      >
                        <b>Email ditemukan</b> <br />
                        <br />
                        Kirim Pesan Verifikasi di Email ***@gmail.com
                      </DialogContentText>
                      {/* </DialogContent> */}
                    </Grid>

                    <Grid item>
                      <DialogActions
                        sx={{ justifyContent: "center", margin: "30px " }}
                      >
                        <Grid item xs={1} md={1} />
                        <Button
                          onClick={handleClose}
                          variant="contained"
                          type="submit"
                          color="primary"
                          sx={{ width: "170px", height: "45px" }}
                        >
                          Kirim
                        </Button>
                      </DialogActions>
                    </Grid>
                  </Grid>
                </Dialog>
                <Dialog
                  open={open1}
                  TransitionComponent={Transition}
                  fullWidth
                  keepMounted
                  onClose={handleClose1}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                  >
                    <Grid item>
                      <DialogTitle style={{ marginTop: "20px" }}>
                        <img src={lupafailed} alt="lupaSucces" />
                      </DialogTitle>
                    </Grid>
                    <Grid item>
                      {/* <DialogContent style={{textAlign:"center"}}> */}
                      <DialogContentText
                        id="alert-dialog-slide-description"
                        style={{ textAlign: "center" }}
                      >
                        <b>Email tidak ditemukan</b> <br />
                        Silahkan masukkan kembali email anda untuk verifikasi
                      </DialogContentText>
                      {/* </DialogContent> */}
                    </Grid>

                    <Grid item>
                      <DialogActions
                        sx={{ justifyContent: "center", margin: "30px " }}
                      >
                        <Grid item xs={1} md={1} />
                        <Button
                          onClick={handleClose1}
                          variant="contained"
                          type="submit"
                          color="primary"
                          sx={{
                            width: "170px",
                            height: "45px",
                            background: "#AE4F54",
                          }}
                        >
                          Kembali
                        </Button>
                      </DialogActions>
                    </Grid>
                  </Grid>
                </Dialog>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </form>
    </div>
  );
};

export default Lupasandi;
