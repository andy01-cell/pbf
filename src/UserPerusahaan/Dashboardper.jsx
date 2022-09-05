import { useState, useEffect, useMemo } from "react";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { filter, peringatan, tunggu } from "../assets";
import Slide from "@mui/material/Slide";
import axios from "axios";
import Tablepegawai from "./Tablepegawai";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E1F0F1",
    color: theme.palette.common.black,
  },
}));

export default function Dashboardper() {
  const [state, setState] = useState({
    namapegawai: "",
    nohp: "",
    noktp: "",
    email: "",
    jalan: "",
    rtrw: "",
    keldesa: "",
    kecamatan: "",
    kabupaten: "",
    provinsi: "",
    jeniskelamin: "",
    pendidikantrakhir: "",
    tahunlulus: "",
    tgllahir: "",
    tempatlahir: "",
    gambar: "",
    jabatan: "",
    tglmasuk: "",
  });

  let token = localStorage.getItem("token_login");

  const onBtnDaftarpegawai = (e) => {
    e.preventDefault();
    console.log(state);
    const data = new FormData();
    data.append("nama_lengkap", state.namapegawai);
    data.append("no_hp", state.nohp);
    data.append("no_ktp", state.noktp);
    data.append("email", state.email);
    data.append("jalan", state.jalan);
    data.append("rt_rw", state.rtrw);
    data.append("kel_desa", state.keldesa);
    data.append("kecamatan", state.kecamatan);
    data.append("kabupaten", state.kabupaten);
    data.append("provinsi", state.provinsi);
    data.append("jenis_kelamin", state.jeniskelamin);
    data.append("pendidikan_terakhir", state.pendidikantrakhir);
    data.append("tahun_lulus", state.tahunlulus);
    data.append("tanggal_lahir", state.tgllahir);
    data.append("tempat_lahir", state.tempatlahir);
    data.append("jabatan", state.jabatan);
    data.append("tanggal_masuk", state.tglmasuk);
    data.append("gambar", state.gambar);

    axios
      .post(
        "http://localhost/api_pibief/public/api_pbf/perusahaan/karyawan",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: token,
          },
        }
      )
      .then((res) => {
        console.log("post succes : ", res);
        handleClickOpen2();
      })
      .catch((err) => {
        console.log("ERRRR:: ", err.response.data);
        // if (state.email){
        //   alert("input email anda dengan benar")
        // }
      });
  };

  const [stock, setStock] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost/api_pibief/public/api_pbf/perusahaan/karyawan?limit=7&page=1",
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: token,
          },
        }
      )
      .then((response) => {
        // check if the data is populated
        console.log("table =", response);
        setStock(response.data.responseData.data);
        // console.log("namalengkap =", stockdatapegawai);
      })
      .catch((err) => {
        console.log("ERRRR:: ", err);
      });
  }, []);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [open1, setOpen1] = useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  const [open2, setOpen2] = useState(false);
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const currenciesjenisklmn = [
    {
      value: "Laki-Laki",
      label: "Laki-Laki",
    },
    {
      value: "Perempuan",
      label: "Perempuan",
    },
  ];
  const currenciesjabatan = [
    {
      value: "Pembelian",
      label: "Pembelian",
    },
  ];

  const onHandledChanged = (event) => {
    const name = event.target.name;
    // setCurrency(event.target.value);
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const onSetimage = (e) => {
    const image = e.target.files[0];
    setState({
      ...state,
      gambar: image,
    });
  };

  return (
    <Box marginTop="20px">
      <Grid container xs={12} md={12} justifyContent="start">
        <Grid item xs={12} md={12}>
          <Button variant="contained" size="large" onClick={handleClickOpen}>
            + Tambah Pegawai
          </Button>
        </Grid>
        <Grid item xs={8} md={8} marginTop="40px">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell width="80px">No</StyledTableCell>
                  <StyledTableCell width="400px">Nama Pegawai</StyledTableCell>
                  <StyledTableCell width="200px">Jabatan</StyledTableCell>
                  <StyledTableCell width="200px">Akses</StyledTableCell>
                  <StyledTableCell width="200px">Detail</StyledTableCell>
                  <StyledTableCell width="200px">Hapus</StyledTableCell>
                </TableRow>
              </TableHead>
            </Table>
          </TableContainer>
          {stock.map((values, i) => (
            <Tablepegawai no={i + 1} namapegawai={values.nama_lengkap} jabatan={values.jabatan} idtoken={values.id_token} detail={values}/>
          ))}
        </Grid>
      </Grid>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        maxWidth="md"
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          xs={12}
          md={12}
        >
          <Grid item xs={12} md={12}>
            <DialogTitle color="primary">
              <b>Masukkan Data Pegawai</b>
            </DialogTitle>
          </Grid>
          <Grid item xs={12} md={12}>
            <DialogContent>
              <form onSubmit={onBtnDaftarpegawai} encType="multipart/form-data">
                <Grid container justifyContent="center">
                  <Grid item xs={10} md={10}>
                    <TextField
                      fullWidth
                      id="namapegawai"
                      label="Nama Pegawai"
                      variant="outlined"
                      size="small"
                      name="namapegawai"
                      onChange={onHandledChanged}
                      required
                    />
                  </Grid>
                </Grid>
                <Grid container justifyContent="center" margin="25px 0">
                  <Grid item xs={4.75} md={4.75}>
                    <TextField
                      autoComplete="nohp"
                      required
                      id="nohp"
                      label="No.HP"
                      size="small"
                      fullWidth
                      type="number"
                      name="nohp"
                      onChange={onHandledChanged}
                    />
                  </Grid>
                  <Grid item xs={0.5} md={0.5}></Grid>
                  <Grid item xs={4.75} md={4.75}>
                    <TextField
                      required
                      id="noktp"
                      label="No.KTP"
                      name="noktp"
                      onChange={onHandledChanged}
                      autoComplete="noktp"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container justifyContent="center" margin="25px 0">
                  <Grid item xs={4.75} md={4.75} textAlign="start">
                    <TextField
                      id="email"
                      fullWidth
                      name="email"
                      label="Emaill"
                      size="small"
                      autoComplete="email"
                      type="email"
                      onChange={onHandledChanged}
                      required
                    />
                  </Grid>
                  <Grid item xs={0.5} md={0.5}></Grid>
                  <Grid item xs={4.75} md={4.75}>
                    <TextField
                      autoComplete="jalan"
                      name="jalan"
                      required
                      id="jalan"
                      label="Jalan"
                      size="small"
                      fullWidth
                      onChange={onHandledChanged}
                    />
                  </Grid>
                </Grid>
                <Grid container justifyContent="center">
                  <Grid item xs={4.75} md={4.75}>
                    <TextField
                      fullWidth
                      id="rtrw"
                      label="RT/RW"
                      variant="outlined"
                      onChange={onHandledChanged}
                      name="rtrw"
                      required
                      size="small"
                    />
                  </Grid>
                  <Grid item xs={0.5} md={0.5}></Grid>
                  <Grid item xs={4.75} md={4.75}>
                    <TextField
                      autoComplete="keldesa"
                      name="keldesa"
                      required
                      id="keldesa"
                      label="kelurahan/Desa"
                      onChange={onHandledChanged}
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4.75} md={4.75} margin="25px 0">
                    <TextField
                      required
                      id="kecamatan"
                      label="Kecamatan"
                      onChange={onHandledChanged}
                      autoComplete="kecamatan"
                      name="kecamatan"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={0.5} md={0.5}></Grid>
                  <Grid item xs={4.75} md={4.75} margin="25px 0">
                    <TextField
                      autoComplete="kabupaten"
                      name="kabupaten"
                      required
                      id="kabupaten"
                      label="Kabupaten"
                      onChange={onHandledChanged}
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4.75} md={4.75}>
                    <TextField
                      autoComplete="provinsi"
                      name="provinsi"
                      required
                      onChange={onHandledChanged}
                      id="provinsi"
                      label="Provinsi"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={0.5} md={0.5}></Grid>
                  <Grid item xs={4.75} md={4.75}>
                    <TextField
                      required
                      id="jeniskelamin"
                      label="Jenis Kelamin"
                      name="jeniskelamin"
                      autoComplete="jeniskelamin"
                      size="small"
                      onChange={onHandledChanged}
                      fullWidth
                      select
                    >
                      {currenciesjenisklmn.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={4.75} md={4.75} margin="25px 0">
                    <TextField
                      autoComplete="pendidikantrakhir"
                      name="pendidikantrakhir"
                      required
                      onChange={onHandledChanged}
                      id="pendidikantrakhir"
                      label="Pendidikan Terakhir"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={0.5} md={0.5} margin="25px 0"></Grid>
                  <Grid item xs={4.75} md={4.75} margin="25px 0">
                    <TextField
                      autoComplete="tahunlulus"
                      name="tahunlulus"
                      required
                      onChange={onHandledChanged}
                      InputLabelProps={{ shrink: true, required: true }}
                      id="tahunlulus"
                      label="Tahun Lulus"
                      size="small"
                      fullWidth
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={4.75} md={4.75}>
                    <TextField
                      required
                      id="tgllahir"
                      label="Tanggal Lahir"
                      InputLabelProps={{ shrink: true, required: true }}
                      name="tgllahir"
                      autoComplete="tgllahir"
                      size="small"
                      onChange={onHandledChanged}
                      fullWidth
                      type="date"
                    />
                  </Grid>
                  <Grid item xs={0.5} md={0.5}></Grid>
                  <Grid item xs={4.75} md={4.75}>
                    <TextField
                      autoComplete="tempatlahir"
                      name="tempatlahir"
                      required
                      onChange={onHandledChanged}
                      id="tempatlahir"
                      label="Tempat Lahir"
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={4.75} md={4.75} margin="25px 0">
                    <TextField
                      required
                      id="jabatan"
                      label="Jabatan"
                      name="jabatan"
                      autoComplete="jabatan"
                      size="small"
                      onChange={onHandledChanged}
                      fullWidth
                      select
                      >
                      {currenciesjabatan.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item xs={0.5} md={0.5}></Grid>
                  <Grid item xs={4.75} md={4.75} margin="25px 0">
                    <TextField
                      required
                      id="tglmasuk"
                      label="Tanggal Masuk"
                      name="tglmasuk"
                      autoComplete="tglmasuk"
                      size="small"
                      onChange={onHandledChanged}
                      fullWidth
                      type="date"
                      InputLabelProps={{ shrink: true, required: true }}
                    />
                  </Grid>
                  <Dialog
                    open={open1}
                    TransitionComponent={Transition}
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
                        <DialogTitle sx={{ m: 2 }}>
                          <img src={peringatan} alt="peringatan" />
                        </DialogTitle>
                      </Grid>
                      <Grid item>
                        <DialogContent sx={{ m: -3 }}>
                          <DialogContentText id="alert-dialog-slide-description">
                            Apakah data anda sudah sesuai ?
                          </DialogContentText>
                        </DialogContent>
                      </Grid>

                      <Grid item>
                        <DialogActions sx={{ m: 2, justifyContent: "center" }}>
                          <Grid item xs={1} md={1} />
                          <Button
                            // onClick={handleClose}
                            onClickCapture={handleClickOpen2}
                            onAuxClickCapture={handleClose1}
                            variant="contained"
                            type="submit"
                            onClick={handleClose1}
                            color="primary"
                            sx={{ width: "170px" }}
                          >
                            Ya,sesuai
                          </Button>

                          <Grid item xs={1} md={1} />
                          <Button
                            onClick={handleClose1}
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
                        open={open2}
                        TransitionComponent={Transition}
                        keepMounted
                        fullWidth
                        onClose={handleClose2}
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
                <Grid container xs={12} md={12} justifyContent="center">
                  <Grid item xs={3} md={3}>
                    <p
                      style={{
                        textAlign: "center",
                      }}
                    >
                      Masukkan gambar Pegawai
                    </p>
                    <input
                      // hidden
                      accept="image/*"
                      label="image"
                      required
                      onChange={onSetimage}
                      type="file"
                    />
                  </Grid>
                  <Grid item xs={12} md={12} />
                  <Grid item xs={2} md={2} margin="25px 0" justifySelf="center">
                    <Button
                      variant="contained"
                      color="primary"
                      type=""
                      style={{
                        background: "#3d9d9b",
                      }}
                      fullWidth
                      size="large"
                      // onClick={handleClickOpen}
                      onClick={onBtnDaftarpegawai}
                    >
                      Tambah
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </DialogContent>
          </Grid>
        </Grid>
      </Dialog>
    </Box>
  );
}
