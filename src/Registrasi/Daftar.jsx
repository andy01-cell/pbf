import { useState } from "react";
import * as React from "react";
// import APP from "./App";
import "./Login.css";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import Slide from "@mui/material/Slide";
import { dosen, pbf1, peringatan, tunggu } from "../assets";
import { textAlign } from "@mui/system";

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Daftar = () => {
  const [state, setState] = useState({
    namapbf: "",
    noizin: "",
    nodokumen: "",
    npwp: "",
    tgl: "",
    hp: "",
    wa: "",
    email: "",
    alamat: "",
    kota: "",
    provinsi: "",
    kecamatan: "",
    kel_desa: "",
    rt_rw: "",
    janis_dokumen: "",
    gambar_perusahaan: "",
    file_izin_pbf: "",
  });

  const onBtnDaftar = (e) => {
    e.preventDefault();
    console.log(state);
    const data = new FormData();
    data.append("nama_perusahaan", state.namapbf);
    data.append("no_izin_pbf", state.noizin);
    data.append("tahun_terakhir", state.nodokumen);
    data.append("npwp", state.npwp);
    data.append("tanggal_pendirian_kantor", state.tgl);
    data.append("no_telepon", state.hp);
    data.append("no_whatsapp", state.wa);
    data.append("email", state.email);
    data.append("jalan", state.alamat);
    data.append("kabupaten", state.kota);
    data.append("gambar_perusahaan", state.gambar_perusahaan);
    data.append("file_izin_pbf", state.file_izin_pbf);
    data.append("janis_dokumen", state.janis_dokumen);
    data.append("rt_rw", state.rt_rw);
    data.append("kel_desa", state.kel_desa);
    data.append("kecamatan", state.kecamatan);
    data.append("provinsi", state.provinsi);

    axios
      .post("http://localhost/api_pibief/public/api_pbf/auth/daftar", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("post succes : ", res);
        handleClickOpen1();
      })
      .catch((err) => {
        console.log("ERRRR:: ", err.response.data);
        // if (state.email){
        //   alert("input email anda dengan benar")
        // }
      });
  };

  const onHandledChanged = (event) => {
    const name = event.target.name;
    setCurrency(event.target.value);
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const rrequired = (e) => {
    handleClickOpen();
  };

  const onSetFile = (e) => {
    const file = e.target.files[0];
    setState({
      ...state,
      file_izin_pbf: file,
    });
  };

  const onSetimage = (e) => {
    const gambar_perusahaan = e.target.files[0];
    setState({
      ...state,
      gambar_perusahaan: gambar_perusahaan,
    });
  };

  const currencies = [
    {
      value: "Umum",
      label: "Umum",
    },
    {
      value: "Obat",
      label: "Obat",
    },
    {
      value: "Alat kesehatan",
      label: "Alat kesehatan",
    },
  ];

  const [currency, setCurrency] = React.useState("EUR");

  //Dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = (e) => {
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

  // const onsetfile = ()

  return (
    <div className="App">
      <form onSubmit={rrequired} encType="multipart/form-data">
        <Grid container>
          <Grid
            item
            xs={12}
            md={5}
            style={{
              background: "#3d9d9b",
              height: "150vh",
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
            <Grid container justifyContent="center">
              <p>Isi Data PBF Anda</p>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item xs={10} md={10}>
                <TextField
                  style={{ marginTop: "30px" }}
                  fullWidth
                  id="outlined-basic"
                  label="Nama PBF"
                  variant="outlined"
                  size="small"
                  name="namapbf"
                  onChange={onHandledChanged}
                  // placeholder="mohon lengkapi data anda"
                  required
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" margin="25px 0">
              <Grid item xs={4.75} md={4.75}>
                <TextField
                  autoComplete="nizin"
                  required
                  id="noizinpbf"
                  label="No.Izin PBF"
                  size="small"
                  fullWidth
                  type="number"
                  name="noizin"
                  onChange={onHandledChanged}
                />
              </Grid>
              <Grid item xs={0.5} md={0.5}></Grid>
              <Grid item xs={4.75} md={4.75}>
                <TextField
                  required
                  type="number"
                  id="npwp"
                  label="npwp"
                  name="npwp"
                  onChange={onHandledChanged}
                  autoComplete="npwp"
                  size="small"
                  fullWidth
                  style={{}}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center" margin="25px 0">
              <Grid item xs={4.75} md={4.75} textAlign="start">
                <TextField
                  id="outlined-select-currency"
                  select
                  fullWidth
                  name="janis_dokumen"
                  label="Jenis Dokumen"
                  size="small"
                  // value={currency}
                  onChange={onHandledChanged}
                  // helperText="Tolong pilih Jenis Dokumen Anda"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={0.5} md={0.5}></Grid>
              <Grid item xs={4.75} md={4.75}>
                <TextField
                  autoComplete="nodokumen"
                  name="nodokumen"
                  required
                  id="nodokumen"
                  label="No.Dokumen"
                  size="small"
                  fullWidth
                  type="number"
                  onChange={onHandledChanged}
                />
              </Grid>
            </Grid>
            <Grid container justifyContent="center">
              <Grid item xs={10} md={10} margin="0px 0 25px">
                <TextField
                  style={{}}
                  fullWidth
                  id="outlined-basic"
                  label="Tanggal Pendirian Kantor"
                  InputLabelProps={{ shrink: true, required: true }}
                  variant="outlined"
                  onChange={onHandledChanged}
                  type="date"
                  name="tgl"
                  required
                  size="small"
                />
              </Grid>
              <Grid item xs={4.75} md={4.75}>
                <TextField
                  // autoComplete="ntelepon"
                  name="hp"
                  required
                  id="telepon"
                  label="No.Telepon"
                  onChange={onHandledChanged}
                  size="small"
                  fullWidth
                  type="number"
                />
              </Grid>
              <Grid item xs={0.5} md={0.5}></Grid>
              <Grid item xs={4.75} md={4.75}>
                <TextField
                  required
                  type="number"
                  id="wa"
                  label="No.Whatsapp"
                  onChange={onHandledChanged}
                  autoComplete="nowa"
                  name="wa"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={10} md={10} margin="25px 0">
                <TextField
                  autoComplete="Email"
                  name="email"
                  type="email"
                  required
                  id="Email"
                  label="Email"
                  placeholder="Email"
                  onChange={onHandledChanged}
                  size="small"
                  fullWidth
                />
              </Grid>

              <Grid item xs={4.75} md={4.75}>
                <TextField
                  autoComplete="Alamat PBF"
                  name="alamat"
                  required
                  onChange={onHandledChanged}
                  id="Alamat PBF"
                  label="Alamat PBF"
                  size="small"
                  fullWidth
                  style={{}}
                />
              </Grid>
              <Grid item xs={0.5} md={0.5}></Grid>
              <Grid item xs={4.75} md={4.75}>
                <TextField
                  required
                  id="provinsi"
                  label="provinsi"
                  name="provinsi"
                  autoComplete="provinsi"
                  size="small"
                  onChange={onHandledChanged}
                  fullWidth
                  style={{}}
                />
              </Grid>
              <Grid item xs={4.75} md={4.75} margin="25px 0">
                <TextField
                  autoComplete="kota"
                  name="kota"
                  required
                  onChange={onHandledChanged}
                  id="kotaF"
                  label="Kota"
                  size="small"
                  fullWidth
                  style={{}}
                />
              </Grid>
              <Grid item xs={0.5} md={0.5} margin="25px 0"></Grid>
              <Grid item xs={4.75} md={4.75} margin="25px 0">
                <TextField
                  required
                  id="kecamatan"
                  label="Kecamatan"
                  name="kecamatan"
                  autoComplete="kecamatan"
                  size="small"
                  onChange={onHandledChanged}
                  fullWidth
                  style={{}}
                />
              </Grid>
              <Grid item xs={4.75} md={4.75}>
                <TextField
                  autoComplete="kel_desa"
                  name="kel_desa"
                  required
                  onChange={onHandledChanged}
                  id="kel_desa"
                  label="Kel/Desa"
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={0.5} md={0.5}></Grid>
              <Grid item xs={4.75} md={4.75}>
                <TextField
                  required
                  id="rt_rw"
                  label="Rt/Rw"
                  name="rt_rw"
                  autoComplete="rt_rw"
                  size="small"
                  onChange={onHandledChanged}
                  fullWidth
                />
              </Grid>
              <Grid container direction="row" justifyContent="start">
                <Grid item xs={1} md={1}></Grid>
                <Grid item xs={11} md={11}>
                  <p
                    style={{
                      textAlign: "start",
                    }}
                  >
                    Masukkan gambar Perusahaan
                  </p>
                  <Grid item xs={1} md={1}></Grid>
                  <Grid item xs={3} md={3}>
                    <input
                      // hidden
                      accept="image/*"
                      label="image"
                      required
                      onChange={onSetimage}
                      type="file"
                    />
                  </Grid>
                </Grid>
                <Grid item xs={1} md={1}></Grid>
                <Grid item xs={3} md={3} marginTop="20px">
                  <p
                    style={{
                      textAlign: "start",
                    }}
                  >
                    Masukkan File Izin PBF
                  </p>
                  <input
                    onChange={onSetFile}
                    required
                    // hidden
                    // file
                    type="file"
                  />
                  {/* <TextField InputLabelProps={{ shrink: false }} /> */}
                </Grid>
              </Grid>
              <Grid item xs={3} md={3} margin="25px 0">
                <Button
                  variant="contained"
                  color="primary"
                  type
                  style={{
                    background: "#3d9d9b",
                  }}
                  onClick={rrequired}
                >
                  Daftar
                </Button>
              </Grid>
              <Dialog
                open={open}
                TransitionComponent={Transition}
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
                    <DialogTitle sx={{ m: 2 }}>
                      <img src={peringatan} alt="peringatan" />
                    </DialogTitle>
                  </Grid>
                  <Grid item>
                    <DialogContent sx={{ m: -3 }}>
                      <DialogContentText id="alert-dialog-slide-description">
                        Apakah data anda sudah sesuai  ?
                      </DialogContentText>
                    </DialogContent>
                  </Grid>

                  <Grid item>
                    <DialogActions sx={{ m: 2, justifyContent: "center" }}>
                      <Grid item xs={1} md={1} />
                      <Button
                        // onClick={handleClose}
                        onClickCapture={handleClickOpen1}
                        onAuxClickCapture={handleClose}
                        variant="contained"
                        type="submit"
                        onClick={handleClose}
                        color="primary"
                        sx={{ width: "170px" }}
                      >
                        Ya,sesuai
                      </Button>

                      <Grid item xs={1} md={1} />
                      <Button
                        onClick={handleClose}
                        variant="outlined"
                        sx={{ width: "170px" }}
                      >
                        Tidak sesuai
                      </Button>
                      <Grid item xs={1} md={1} />
                    </DialogActions>
                  </Grid>
                </Grid>
              </Dialog>
              <Grid container justifyContent="center">
                <Grid item xs={8} md={1}>
                  <Dialog
                    open={open1}
                    TransitionComponent={Transition}
                    keepMounted
                    fullWidth
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
                        <DialogTitle sx={{ m: 2 }}>
                          <img src={tunggu} alt="tunggu" />
                        </DialogTitle>
                      </Grid>
                      <Grid item>
                        <DialogContent sx={{ m: -3 }}>
                          <DialogContentText id="alert-dialog-slide-description">
                            <b>Terimakasih telah mendaftar </b>
                          </DialogContentText>
                        </DialogContent>
                      </Grid>

                      <Grid item>
                        <DialogActions
                          sx={{
                            m: 2,

                            textAlign: "center",
                          }}
                        >
                          <Grid item xs={1} md={1} />
                          <p>
                            Silahkan menunggu <b>1 x 24 jam</b> ,kami akan
                            mengirimkan kodeverifikasi lewat email
                          </p>
                          <Grid item xs={1} md={1} />
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
export default Daftar;
