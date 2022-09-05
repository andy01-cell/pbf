import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Input,
  InputAdornment,
  OutlinedInput,
  Paper,
  Slide,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { mata, pensil, print, sampah } from "../../assets";
import React, { useState } from "react";
import { useHistory } from "react-router";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function createData(id, namaobat, nobets, harga, vendor, stok, satuan, aksi) {
  return { id, namaobat, nobets, harga, vendor, stok, satuan, aksi };
}

const rows = [
  createData(1, "Bodrex", "1abc", 10000, "PT. Ismut Fito Indo", 4, "Btl"),
  createData(2, "Bodrex", "1abc", 10000, "PT. Ismut Fito Indo", 4, "Btl"),
  createData(3, "Bodrex", "1abc", 10000, "PT. Ismut Fito Indo", 4, "Btl"),
  createData(4, "Bodrex", "1abc", 10000, "PT. Ismut Fito Indo", 4, "Btl"),
];

const Penerimaan = () => {
  const history = useHistory();
  const [state, setState] = useState({
    image: "",
  });

  React.useEffect(() => {
    console.log(state.image);
  }, [state]);

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

  return (
    <div>
      <form onSubmit={handleClose} encType="multipart/form-data">
        <Grid
          container
          justifyContent={{ xs: "center", md: "space-between" }}
          direction={{ xs: "column", md: "row" }}
        >
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
          <Grid item xs={4} md={2}>
            <Button
              variant="contained"
              style={{ textTransform: "none" }}
              fullWidth
              onClick={() => history.push("/step")}
            >
              + Tambah Pesanan
            </Button>
          </Grid>
        </Grid>
        <Grid container xs={12} md={12}>
          <Grid item xs={12} md={12} marginTop="30px">
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">No.</TableCell>
                    <TableCell align="center">Nama Obat</TableCell>
                    <TableCell align="center">No.Bets</TableCell>
                    <TableCell align="center">Harga</TableCell>
                    <TableCell align="center">vendor</TableCell>
                    <TableCell align="center">Stok</TableCell>
                    <TableCell align="center">satuan</TableCell>
                    <TableCell align="center">Aksi</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.nobets}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {row.id}
                      </TableCell>
                      <TableCell align="center">{row.namaobat}</TableCell>
                      <TableCell align="center">{row.nobets}</TableCell>
                      <TableCell align="center">{row.harga}</TableCell>
                      <TableCell align="center">{row.vendor}</TableCell>
                      <TableCell align="center">{row.stok}</TableCell>
                      <TableCell align="center">{row.satuan}</TableCell>
                      <TableCell align="center">
                        <IconButton color="primary" component="span">
                          <img
                            src={pensil}
                            alt="print"
                            onClick={handleClickOpen1}
                          />
                        </IconButton>
                        <IconButton
                          color="primary"
                          component="span"
                          onClick={handleClickOpen}
                        >
                          <img src={mata} alt="print" />
                        </IconButton>
                        <IconButton color="primary" component="span">
                          <img src={sampah} alt="print" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
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
                <b>Detail Obat</b>
              </DialogTitle>
            </Grid>
            <Grid item xs={12} md={12}>
              <DialogContent>
                <Grid
                  container
                  direction="row"
                  columnSpacing={3}
                  xs={12}
                  md={12}
                >
                  <Grid item xs={12} md={4.5}>
                    <Box
                      sx={{
                        border: "2px dashed",
                        borderColor: "#E1F0F1",
                        paddingLeft: "4px",
                        paddingTop: "172px",
                        background: `url("${state.image}")`,
                        backgroundRepeat: "no - repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      {/* <img src={state.image} alt="File JPG/PNG maks 2mb" /> */}
                      <input
                        type="file"
                        // hidden
                        onChange={(e) => {
                          console.log(e.target.files[0]);
                          setState({
                            image: URL.createObjectURL(e.target.files[0]),
                          });
                        }}
                      />
                      <Button onClick={Input} type="file">
                        Pilih Foto
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={7.5}>
                    <Grid
                      container
                      direction="row"
                      xs={12}
                      md={12}
                      rowSpacing={3}
                    >
                      <Grid item paddingTop="12px" xs={6} md={4}>
                        Nama Obat
                      </Grid>
                      <Grid item paddingTop="12px" xs={1} md={1}>
                        <b>:</b>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        Bodrex
                      </Grid>
                      <Grid item paddingTop="9px" xs={6} md={4}>
                        No.Bets
                      </Grid>
                      <Grid item paddingTop="9px" xs={1} md={1}>
                        <b>:</b>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        1abc
                      </Grid>
                      <Grid item paddingTop="9px" xs={6} md={4}>
                        Harga
                      </Grid>
                      <Grid item paddingTop="9px" xs={1} md={1}>
                        <b>:</b>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        10000
                      </Grid>
                      <Grid item paddingTop="9px" xs={6} md={4}>
                        Vendor
                      </Grid>
                      <Grid item paddingTop="9px" xs={1} md={1}>
                        <b>:</b>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        PT.Ismut Fito Indo
                      </Grid>
                      <Grid item paddingTop="9px" xs={6} md={4}>
                        Stok
                      </Grid>
                      <Grid item paddingTop="9px" xs={1} md={1}>
                        <b>:</b>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        4
                      </Grid>
                      <Grid item paddingTop="9px" xs={6} md={4}>
                        Satuan
                      </Grid>
                      <Grid item paddingTop="9px" xs={1} md={1}>
                        <b>:</b>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        Btl
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </DialogContent>
            </Grid>
            <Grid item>
              <DialogActions sx={{ m: 2, justifyContent: "center" }}>
                <Grid item xs={1} md={1} />
                <Button
                  // onClick={handleClose}
                  variant="contained"
                  type="submit"
                  onClick={handleClose}
                  color="primary"
                  sx={{ width: "100px" }}
                >
                  Tutup
                </Button>
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
                <b>Edit Detail Obat</b>
              </DialogTitle>
            </Grid>
            <Grid item xs={12} md={12}>
              <DialogContent>
                <Grid
                  container
                  direction="row"
                  columnSpacing={3}
                  xs={12}
                  md={12}
                >
                  <Grid item xs={12} md={4.5}>
                    <Box
                      sx={{
                        border: "2px dashed",
                        borderColor: "#E1F0F1",
                        paddingLeft: "4px",
                        paddingTop: "172px",
                        background: `url("${state.image}")`,
                        backgroundRepeat: "no - repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      {/* <img src={state.image} alt="File JPG/PNG maks 2mb" /> */}
                      <input
                        type="file"
                        // hidden
                        onChange={(e) => {
                          console.log(e.target.files[0]);
                          setState({
                            image: URL.createObjectURL(e.target.files[0]),
                          });
                        }}
                      />
                      <Button onClick={Input} type="file">
                        Pilih Foto
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={7.5}>
                    <Grid
                      container
                      direction="row"
                      xs={12}
                      md={12}
                      rowSpacing={3}
                    >
                      <Grid item paddingTop="12px" xs={6} md={4}>
                        Nama Obat
                      </Grid>
                      <Grid item paddingTop="12px" xs={1} md={1}>
                        <b>:</b>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <TextField variant="outlined" size="small" sx={{height:20}}/>
                      </Grid>
                      <Grid item paddingTop="9px" xs={6} md={4}>
                        No.Bets
                      </Grid>
                      <Grid item paddingTop="9px" xs={1} md={1}>
                        <b>:</b>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <TextField variant="outlined" size="small" sx={{height:20}}/>
                      </Grid>
                      <Grid item paddingTop="9px" xs={6} md={4}>
                        Harga
                      </Grid>
                      <Grid item paddingTop="9px" xs={1} md={1}>
                        <b>:</b>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <TextField
                          variant="outlined"
                          size="small"
                          type="number"
                          sx={{height:20}}
                        />
                      </Grid>
                      <Grid item paddingTop="9px" xs={6} md={4}>
                        Vendor
                      </Grid>
                      <Grid item paddingTop="9px" xs={1} md={1}>
                        <b>:</b>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <TextField variant="outlined" size="small" sx={{height:20}}/>
                      </Grid>
                      <Grid item paddingTop="9px" xs={6} md={4}>
                        Stok
                      </Grid>
                      <Grid item paddingTop="9px" xs={1} md={1}>
                        <b>:</b>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <TextField
                          variant="outlined"
                          size="small"
                          type="number"
                          sx={{height:20}}
                        />
                      </Grid>
                      <Grid item paddingTop="9px" xs={6} md={4}>
                        Satuan
                      </Grid>
                      <Grid item paddingTop="9px" xs={1} md={1}>
                        <b>:</b>
                      </Grid>
                      <Grid item xs={12} md={7}>
                        <TextField variant="outlined" size="small" sx={{height:20}}/>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </DialogContent>
            </Grid>
            <Grid item>
              <DialogActions sx={{ m: 2, justifyContent: "center" }}>
                <Grid item xs={1} md={1} />
                <Button
                  // onClick={handleClose}
                  variant="contained"
                  type="submit"
                  onClick={handleClose1}
                  color="primary"
                  sx={{ width: "100px" }}
                >
                  Tutup
                </Button>
              </DialogActions>
            </Grid>
          </Grid>
        </Dialog>
      </form>
    </div>
  );
};

export default Penerimaan;
