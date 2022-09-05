import React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import axios from "axios";
import Slide from "@mui/material/Slide";
import { filter, peringatan, tunggu } from "../assets";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Tablepegawai({
  no,
  namapegawai,
  jabatan,
  idtoken,
  detail,
}) {
  let token = localStorage.getItem("token_login");

  const BeriAkses = (e) => {
    e.preventDefault();
    const data = new FormData();
    console.log("id_token = ", idtoken);
    console.log("jabatan = ", jabatan);
    console.log("akses = ", akses);

    axios
      .put(
        `http://localhost/api_pibief/public/api_pbf/perusahaan/karyawan/akses?id_token=${idtoken}&akses=${jabatan}&status=${akses}`,
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
        console.log("akses = ", akses);
        console.log("id_token = ", idtoken);
        console.log("jabatan = ", jabatan);
        // handleClickOpen2();
      })
      .catch((err) => {
        console.log("ERRRR:: ", err);
        console.log("token:: ", token);
        console.log("id_token = ", idtoken);
        console.log("jabatan = ", jabatan);
        console.log("akses = ", akses);
        // if (state.email){
        //   alert("input email anda dengan benar")
        // }
      });
  };

  const Hapusakun = (e) => {
    e.preventDefault();
    const data = new FormData();
    console.log("id_token = ", idtoken);
    console.log("jabatan = ", jabatan);
    console.log("akses = ", akses);

    axios
      .delete(
        `http://localhost/api_pibief/public/api_pbf/perusahaan/karyawan?id_token=${idtoken}`,
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
        console.log("akses = ", akses);
        console.log("id_token = ", idtoken);
        console.log("jabatan = ", jabatan);
        // handleClickOpen2();
      })
      .catch((err) => {
        console.log("ERRRR:: ", err);
        console.log("token:: ", token);
        console.log("id_token = ", idtoken);
        console.log("jabatan = ", jabatan);
        console.log("akses = ", akses);
        // if (state.email){
        //   alert("input email anda dengan benar")
        // }
      });
  };

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

  const [open2, setOpen2] = React.useState(false);
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  const [akses, setAkses] = useState("");
  const handleakses = () => {
    setAkses("Aktif");
  };
  const handlenonakses = () => {
    setAkses("Tidak Aktif");
    console.log("test = ");
  };

  return (
    <Grid container xs={12} md={12}>
      <Grid item xs={12} md={12}>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableBody>
              <TableRow key={no}>
                <StyledTableCell component="th" width="100px">
                  {no}
                </StyledTableCell>
                <StyledTableCell width="400px">{namapegawai}</StyledTableCell>
                <StyledTableCell width="200px">{jabatan}</StyledTableCell>
                <StyledTableCell width="200px">
                  <Button
                    variant="outlined"
                    style={{ textTransform: "none" }}
                    onChange={idtoken}
                    onClick={handleClickOpen}
                  >
                    Beri Akses
                  </Button>
                </StyledTableCell>
                <StyledTableCell width="200px">
                  <Button
                    variant="outlined"
                    style={{ textTransform: "none" }}
                    onClick={handleClickOpen2}
                  >
                    Detail
                  </Button>
                </StyledTableCell>
                <StyledTableCell width="200px">
                  <Button
                    variant="contained"
                    style={{ textTransform: "none" }}
                    color="error"
                    onClick={Hapusakun}
                  >
                    Hapus
                  </Button>
                </StyledTableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
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
                Beri Akses {namapegawai} !
              </DialogContentText>
            </DialogContent>
          </Grid>

          <Grid item>
            <DialogActions sx={{ m: 2, justifyContent: "center" }}>
              <Grid item xs={1} md={1} />
              <Button
                // onClick={handleClose}
                onClickCapture={handleClickOpen1}
                variant="contained"
                type="submit"
                onClick={handleakses}
                // onChange={handleakses}
                color="primary"
                sx={{ width: "250px" }}
              >
                Aktifkan Akun
              </Button>

              <Grid item xs={1} md={1} />
              <Button
                onClick={handlenonakses}
                onClickCapture={handleClickOpen1}
                variant="contained"
                color="error"
                sx={{ width: "250px" }}
              >
                Non-Aktifkan Akun
              </Button>
              <Grid item xs={1} md={1} />
            </DialogActions>
          </Grid>
        </Grid>
      </Dialog>
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
                Apakah anda Yakin?
              </DialogContentText>
            </DialogContent>
          </Grid>

          <Grid item>
            <DialogActions sx={{ m: 2, justifyContent: "center" }}>
              <Grid item xs={1} md={1} />
              <Button
                onClickCapture={handleClose1}
                variant="contained"
                type="submit"
                onClick={BeriAkses}
                color="primary"
                sx={{ width: "250px" }}
              >
                Ya
              </Button>

              <Grid item xs={1} md={1} />
              <Button
                onClick={handleClose1}
                variant="contained"
                color="error"
                sx={{ width: "250px" }}
              >
                Tidak
              </Button>
              <Grid item xs={1} md={1} />
            </DialogActions>
          </Grid>
        </Grid>
      </Dialog>
      <Dialog
        open={open2}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose2}
        aria-describedby="alert-dialog-slide-description"
        fullWidth
        maxWidth="sm"
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Grid item>
            <DialogTitle sx={{ m: 2 }}>
              <Typography fontSize="25px">Informasi Pegawai</Typography>
            </DialogTitle>
          </Grid>
          <Grid item>
            <DialogContent sx={{ m: -7 }}>
              <DialogContentText id="alert-dialog-slide-description">
              <pre>
                <Typography fontSize="17px">Nama Lengkap        : {namapegawai}</Typography>
                <Typography fontSize="17px">Tempat Lahir            : {detail.tempat_lahir} </Typography>
                <Typography fontSize="17px">Tanggal Lahir           : {detail.tanggal_lahir}</Typography>
                <Typography fontSize="17px">Jenis Kelamin          : {detail.jenis_kelamin}</Typography>
                <Typography fontSize="17px">No.HP                      : {detail.no_hp}</Typography>
                <Typography fontSize="17px">No.KTP                    : {detail.no_ktp}</Typography>
                <Typography fontSize="17px">Jalan                        : {detail.jalan}</Typography>
                <Typography fontSize="17px">RT/RW                     : {detail.rt_rw}</Typography>
                <Typography fontSize="17px">Kelurahan/Desa       : {detail.kel_desa}</Typography>
                <Typography fontSize="17px">Kecamatan               : {detail.kecamatan}</Typography>
                <Typography fontSize="17px">Kabupaten/Kota        : {detail.kabupaten}</Typography>
                <Typography fontSize="17px">Provinsi                     : {detail.provinsi}</Typography>
                <Typography fontSize="17px">Pendidikan Terakhir  : {detail.pendidikan_terakhir}</Typography>
                <Typography fontSize="17px">Tahun Lulus              : {detail.tahun_lulus}</Typography>
                <Typography fontSize="17px">Tanggal Masuk         : {detail.tanggal_masuk}</Typography>
                <Typography fontSize="17px">Jabatan                    : {detail.jabatan}</Typography>
                <Typography fontSize="17px">Status Akun              : {detail.status}</Typography>
                </pre>
              </DialogContentText>
            </DialogContent>
          </Grid>
        </Grid>
      </Dialog>
    </Grid>
  );
}
