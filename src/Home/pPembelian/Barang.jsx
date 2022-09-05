import { useState, useEffect } from "react";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableFooter from "@mui/material/TableFooter";
import Checkbox from "@mui/material/Checkbox";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Input,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { useHistory } from "react-router";
import { peringatan } from "../../assets";
import TabelVendor from "./TabelVendor";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

// TablePaginationActions.propTypes = {
//   count: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
//   page: PropTypes.number.isRequired,
//   rowsPerPage: PropTypes.number.isRequired,
// };

function createData(id, name) {
  return { id, name };
}

const rows = [
  createData(1, "Cupcake"),
  createData(2, "Donut"),
  createData(3, "Eclair"),
  createData(4, "Frozen yoghurt"),
  createData(5, "Gingerbread"),
  createData(6, "Honeycomb"),
  createData(7, "Ice cream sandwich"),
  createData(8, "Jelly Bean"),
  createData(9, "KitKat"),
  createData(10, "Lollipop"),
  createData(11, "Marshmallow"),
  createData(12, "Nougat"),
  createData(13, "Oreo"),
].sort((a, b) => (a.calories < b.calories ? -1 : 1));

function vendor(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Barang = () => {
  const history = useHistory();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const [currency, setCurrency] = useState();

  const [state, setState] = useState({
    //vendor
    imageVendor: "",
    namaVendor: "",
    alamatVendor: "",
    noizinusaha: "",
    masaberlakuizin: "",
    nowavendor: "",
    nohpvendor: "",
    masaberlakuvendor: "",
    //Obat
    imageObat: "",
    namaObat: "",
    hargaobat: "",
    satuanObat: "",
    jenisObat: "",
    //PJ
    imagePJ: "",
    namaApoteker: "",
    STRA: "",
    SIPA: "",
    nopegawai: "",
  });
  const [disabled, setDisabled] = useState(true);
  const [disabled1, setDisabled1] = useState(true);
  const [disabled2, setDisabled2] = useState(true);

  const [stockvendor, setStockvendor] = useState([]);
  const [stockobat, setStockobat] = useState([]);
  let token = localStorage.getItem("token_login");

  useEffect(() => {
    axios
      .get(
        "http://localhost/api_pibief/public/api_pbf/karyawan/vendor?limit=2&page=2",
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: token,
          },
        }
      )
      .then((response) => {
        // check if the data is populated
        console.log("table vendor =", response);
        setStockvendor(response.data.responseData.data);
        // console.log("namalengkap =", stock);
      })
      .catch((err) => {
        console.log("ERRRR:: ", err);
      });

    axios
      .get(
        "http://localhost/api_pibief/public/api_pbf/karyawan/obat?id=34&kode_obat=ACE-AMP_C01",
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: token,
          },
        }
      )
      .then((response) => {
        // check if the data is populated
        console.log("table obat =", response);
        setStockvendor(response.data.responseData.data);
        // console.log("namalengkap =", stock);
      })
      .catch((err) => {
        console.log("ERRRR:: ", err);
      });
  }, []);

  React.useEffect(() => {}, [state.imageObat]);

  console.log(state);

  const vendorhandleChange = (event) => {
    setCurrency(event.target.value);
  };
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const vendorcurrencies = [
    {
      value: "item 1",
      label: "item 1",
    },
    {
      value: "item 2",
      label: "item 2",
    },
    {
      value: "item 3",
      label: "item 3",
    },
    {
      value: "item 4",
      label: "item 4",
    },
  ];

  const pjcurrencies = [
    {
      value: "item 1",
      label: "item 1",
    },
    {
      value: "item 2",
      label: "item 2",
    },
    {
      value: "item 3",
      label: "item 3",
    },
    {
      value: "item 4",
      label: "item 4",
    },
  ];

  const pesananklik = (params) => {
    console.log("test => ", params);

    if (params === "nyala1") {
      setDisabled(false);
      setDisabled1(true);
      setDisabled2(true);
    } else {
      setDisabled1(true);
      setDisabled(true);
      setDisabled2(true);
    }
  };
  const vendorklik = (params) => {
    console.log("test => ", params);

    if (params === "nyala2") {
      setDisabled1(false);
      setDisabled(true);
      setDisabled2(true);
    } else {
      setDisabled1(true);
      setDisabled(true);
      setDisabled2(true);
    }
  };

  const apotekerklik = (params) => {
    console.log("test => ", params);

    if (params === "nyala3") {
      setDisabled2(false);
      setDisabled1(true);
      setDisabled(true);
    } else {
      setDisabled1(true);
      setDisabled(true);
      setDisabled2(true);
    }
  };

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

  const [open3, setOpen3] = useState(false);
  const handleClickOpen3 = () => {
    setOpen3(true);
  };
  const handleClose3 = () => {
    setOpen3(false);
  };

  const onHandledChanged = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  //____untuk Obat Pesanan
  const currenciessatuan = [
    {
      value: "Box",
      label: "Box",
    },
    {
      value: "Strip",
      label: "Strip",
    },
    {
      value: "Ampul",
      label: "Ampul",
    },
    {
      value: "Vial",
      label: "Vial",
    },
    {
      value: "Botol",
      label: "Botol",
    },
    {
      value: "Drops",
      label: "Drops",
    },
    {
      value: "Pot",
      label: "Pot",
    },
    {
      value: "Tube",
      label: "Tube",
    },
    {
      value: "Dus",
      label: "Dus",
    },
    {
      value: "Pcs",
      label: "Pcs",
    },
    {
      value: "Buah",
      label: "Buah",
    },
  ];
  const currenciesjenisobat = [
    {
      value: "Biasa",
      label: "Biasa",
    },
    {
      value: "Psikotropik",
      label: "Psikotropik",
    },
    {
      value: "Narkotik",
      label: "Narkotik",
    },
    {
      value: "OOT",
      label: "OOT",
    },
  ];

  const onBtnpostVendor = (e) => {
    e.preventDefault();
    let token = localStorage.getItem("token_login");
    console.log(state);
    const data = new FormData();
    data.append("nama", state.namaVendor);
    data.append("alamat", state.alamatVendor);
    data.append("no_whatsapp", state.nowavendor);
    data.append("no_telepon", state.nohpvendor);
    data.append("no_izin", state.noizinusaha);
    data.append("masa_berlaku", state.masaberlakuvendor);

    axios
      .post(
        "http://localhost/api_pibief/public/api_pbf/karyawan/vendor",
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
        handleClickOpen();
      })
      .catch((err) => {
        console.log("ERRRR:: ", err.response.data);
        // if (state.email){
        //   alert("input email anda dengan benar")
        // }
      });
  };

  const onBtnAPIObatpesanan = (e) => {
    e.preventDefault();
    console.log(state);
    const data = new FormData();
    data.append("nama_obat", state.namaObat);
    data.append("gambar_obat", state.imageObat);
    data.append("harga", state.hargaobat);
    data.append("satuan", state.satuanObat);
    data.append("jenis_obat", state.jenisObat);

    axios
      .post("http://localhost/api_pibief/public/api_pbf/karyawan/obat", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: token,
        },
      })
      .then((res) => {
        console.log("post succes : ", res);
        handleClickOpen();
      })
      .catch((err) => {
        console.log("ERRRR:: ", err.response.data);
        // if (state.email){
        //   alert("input email anda dengan benar")
        // }
      });
  };

  const onSetimageobat = (e) => {
    const imageObat = e.target.files[0];
    setState({
      ...state,
      imageObat: imageObat,
    });
  };

  return (
    <>
      <Container>
        <Box style={{ height: "400px" }}>
          <Grid
            container
            // alignItems="center"
            // style={{ background: "#000" }}
            xs={12}
            md={12}
            spacing={10}
            justifyContent="center"
          >
            <Grid
              item
              // style={{ height: 250 }}
              xs={12}
              md={3.9}
              onClick={() => vendorklik("nyala2")}
            >
              <Typography variant="p">Vendor</Typography> <br />
              <Button
                variant="contained"
                disabled={disabled1}
                onClick={handleClickOpen1}
              >
                Masukkan
              </Button>
              <TextField
                id="outlined-select-currency"
                select
                size="small"
                fullWidth
                value={currency}
                onChange={vendorhandleChange}
                placeholder="Pilih Vendor"
              >
                {vendorcurrencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              {/* <Box
                sx={{
                  width: "100%",
                  height: 210,
                  bgcolor: "background.paper",
                }}
              >
                <FixedSizeList
                  height={210}
                  itemSize={46}
                  itemCount={0}
                  overscanCount={5}
                >
                  {vendor}
                </FixedSizeList>
              </Box> */}
              {stockvendor.map((values, i) => (
                <TabelVendor no={i + 1} namavendor={values.nama} />
              ))}
              <TableContainer component={Paper}>
                <Table aria-label="custom pagination table">
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[4]}
                        colSpan={3}
                        count={stockvendor.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                          inputProps: {
                            "aria-label": "rows per page",
                          },
                          native: true,
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
            </Grid>
            <Grid
              item
              // style={{ height: 350 }}
              xs={12}
              md={4.2}
              onClick={() => pesananklik("nyala1")}
            >
              <Typography
                variant="p"
                textAlign="center"
                style={{ textAlign: "center" }}
              >
                Obat Pesanan
              </Typography>{" "}
              <br />
              <Button
                variant="contained"
                disabled={disabled}
                onClick={handleClickOpen}
              >
                Masukkan
              </Button>
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
              <TableContainer component={Paper}>
                <Table aria-label="custom pagination table">
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[4]}
                        colSpan={3}
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        SelectProps={{
                          inputProps: {
                            "aria-label": "rows per page",
                          },
                          native: true,
                        }}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        ActionsComponent={TablePaginationActions}
                      />
                    </TableRow>
                  </TableFooter>
                </Table>
              </TableContainer>
            </Grid>

            <Grid item xs={12} md={3.9} onClick={() => apotekerklik("nyala3")}>
              <Typography variant="p" textAlign="center">
                Penanggung Jawab
              </Typography>
              <br />
              <Button
                variant="contained"
                disabled={disabled2}
                onClick={handleClickOpen2}
              >
                Masukkan
              </Button>
              <TextField
                id="outlined-select-currency"
                select
                size="small"
                fullWidth
                value={currency}
                onChange={pjcurrencies}
                placeholder="Pilih Apoteker"
              >
                {vendorcurrencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <Box
                sx={{
                  width: "100%",
                  height: 210,
                  bgcolor: "background.paper",
                }}
              >
                <FixedSizeList
                  height={210}
                  itemSize={46}
                  itemCount={0}
                  overscanCount={5}
                >
                  {vendor}
                </FixedSizeList>
              </Box>
            </Grid>
            <Grid item xs={12} md={3} onClick={() => apotekerklik("nyala3")}>
              <Button
                variant="contained"
                color="primary"
                // type="IconButton"
                type
                style={{
                  width: 200,
                  marginTop: "15px",
                  background: "#3d9d9b",
                }}
                onClick={handleClickOpen3}
              >
                Selanjutnya
              </Button>
            </Grid>
          </Grid>
          {/* afaf */}
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
                  <b>Tambah Pesanan</b>
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
                    <Grid item xs={12} md={4}>
                      <b>Upload Foto Obat</b>
                      <Box
                        sx={{
                          border: "2px dashed",
                          borderColor: "#E1F0F1",
                          paddingLeft: "4px",
                          paddingTop: "122px",
                          background: `url("${state.imageObat}")`,
                          backgroundRepeat: "no - repeat",
                          backgroundSize: "cover",
                        }}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          hidden
                          required
                          multiple
                          id="contained-button-file"
                          // onChange={(e) => {
                          //   // console.log(e.target.files[0]);
                          //   setState({
                          //     ...state,
                          //     imageObat: URL.createObjectURL(e.target.files[0]),
                          //   });
                          // }}
                          onChange={onSetimageobat}
                        />
                        <label htmlFor="contained-button-file">
                          <Button variant="contained" component="span">
                            Pilih Foto
                          </Button>
                        </label>
                      </Box>
                      <Typography variant="p" color="#AE4F54" fontSize="11px">
                        Peringatan: Demi meningkatkan kenyamanan pelayanan, di
                        anjurkan untuk mengunggah foto yang jelas
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
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
                          <Box>
                            <TextField
                              // style={{ marginTop: "30px" }}

                              id="namaObat"
                              label="Nama Obat"
                              variant="outlined"
                              size="small"
                              name="namaObat"
                              fullWidth
                              onChange={onHandledChanged}
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item paddingTop="9px" xs={6} md={4}>
                          Harga
                        </Grid>
                        <Grid item paddingTop="9px" xs={1} md={1}>
                          <b>:</b>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box>
                            <TextField
                              // style={{ marginTop: "30px" }}

                              id="hargaobat"
                              label="Harga"
                              type="number"
                              variant="outlined"
                              size="small"
                              name="hargaobat"
                              fullWidth
                              onChange={onHandledChanged}
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item paddingTop="9px" xs={6} md={4}>
                          Satuan
                        </Grid>
                        <Grid item paddingTop="9px" xs={1} md={1}>
                          <b>:</b>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box>
                            <TextField
                              id="satuanObat"
                              select
                              fullWidth
                              name="satuanObat"
                              label="Satuan"
                              size="small"
                              onChange={onHandledChanged}
                            >
                              {currenciessatuan.map((option) => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </Box>
                        </Grid>
                        <Grid item paddingTop="9px" xs={6} md={4}>
                          Jenis Obat
                        </Grid>
                        <Grid item paddingTop="9px" xs={1} md={1}>
                          <b>:</b>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box>
                            <TextField
                              id="jenisObat"
                              select
                              fullWidth
                              name="jenisObat"
                              label="Jenis Obat"
                              size="small"
                              // value={currency}
                              onChange={onHandledChanged}
                              // helperText="Tolong pilih Jenis Dokumen Anda"
                            >
                              {currenciesjenisobat.map((option) => (
                                <MenuItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          </Box>
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
                    onClick={onBtnAPIObatpesanan}
                    color="primary"
                    sx={{ width: "170px" }}
                  >
                    Selesai
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
              direction={{
                xs: "row",
                md: "column",
              }}
              xs={12}
              md={12}
            >
              <Grid item xs={12} md={12}>
                <DialogTitle color="primary">
                  <b>Tambah Vendor</b>
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
                    <Grid item xs={12} md={4}>
                      <b>Upload Logo Vendor</b>
                      <Box
                        sx={{
                          border: "2px dashed",
                          borderColor: "#E1F0F1",
                          paddingLeft: "4px",
                          paddingTop: "122px",
                          background: `url("${state.imageVendor}")`,
                          backgroundRepeat: "no - repeat",
                          backgroundSize: "cover",
                        }}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          hidden
                          multiple
                          id="contained-button-file1"
                          onChange={(e) => {
                            console.log("vendor");

                            setState({
                              ...state,
                              imageVendor: URL.createObjectURL(
                                e.target.files[0]
                              ),
                            });
                          }}
                          // onChange={onSetimage}
                        />
                        <label htmlFor="contained-button-file1">
                          <Button variant="contained" component="span">
                            Pilih Foto
                          </Button>
                        </label>
                      </Box>
                      <Typography variant="p" color="#AE4F54" fontSize="11px">
                        Peringatan: Demi meningkatkan kenyamanan pelayanan, di
                        anjurkan untuk mengunggah foto yang jelas
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Grid
                        container
                        direction="row"
                        xs={12}
                        md={12}
                        rowSpacing={2}
                      >
                        <Grid item paddingTop="12px" xs={6} md={4}>
                          Nama Vendor
                        </Grid>
                        <Grid item paddingTop="12px" xs={1} md={1}>
                          <b>:</b>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box>
                            <TextField
                              id="namaVendor"
                              label="Nama Vendor"
                              variant="outlined"
                              size="small"
                              name="namaVendor"
                              fullWidth
                              onChange={onHandledChanged}
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item paddingTop="9px" xs={6} md={4}>
                          Alamat
                        </Grid>
                        <Grid item paddingTop="9px" xs={1} md={1}>
                          <b>:</b>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box>
                            <TextField
                              id="alamatVendor"
                              label="Alamat Vendor"
                              variant="outlined"
                              size="small"
                              name="alamatVendor"
                              fullWidth
                              onChange={onHandledChanged}
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item paddingTop="9px" xs={6} md={4}>
                          No.Whatsapp
                        </Grid>
                        <Grid item paddingTop="9px" xs={1} md={1}>
                          <b>:</b>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box>
                            <TextField
                              id="nowavendor"
                              label="No Whatsapp"
                              variant="outlined"
                              size="small"
                              name="nowavendor"
                              type="number"
                              fullWidth
                              onChange={onHandledChanged}
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item paddingTop="9px" xs={6} md={4}>
                          No.Hp
                        </Grid>
                        <Grid item paddingTop="9px" xs={1} md={1}>
                          <b>:</b>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box>
                            <TextField
                              id="nohpvendor"
                              label="No.Hp"
                              variant="outlined"
                              size="small"
                              name="nohpvendor"
                              type="number"
                              fullWidth
                              onChange={onHandledChanged}
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item paddingTop="9px" xs={6} md={4}>
                          No.Izin Usaha
                        </Grid>
                        <Grid item paddingTop="9px" xs={1} md={1}>
                          <b>:</b>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box>
                            <TextField
                              id="noizinusaha"
                              label="No Izin Usaha"
                              variant="outlined"
                              size="small"
                              name="noizinusaha"
                              type="number"
                              fullWidth
                              onChange={onHandledChanged}
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item paddingTop="9px" xs={6} md={4}>
                          Masa Berlaku
                        </Grid>
                        <Grid item paddingTop="9px" xs={1} md={1}>
                          <b>:</b>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box>
                            <TextField
                              id="masaberlakuvendor"
                              label="Masa Berlaku"
                              variant="outlined"
                              size="small"
                              name="masaberlakuvendor"
                              type="date"
                              InputLabelProps={{ shrink: true, required: true }}
                              fullWidth
                              onChange={onHandledChanged}
                              required
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </DialogContent>
              </Grid>
              <Grid item xs={12} md={12}>
                <DialogActions sx={{ m: 2, justifyContent: "center" }}>
                  <Grid item xs={1} md={1} />
                  <Button
                    // onClick={handleClose}
                    variant="contained"
                    type="submit"
                    onClick={handleClose1}
                    onClickCapture={onBtnpostVendor}
                    color="primary"
                    sx={{ width: "170px" }}
                  >
                    Selesai
                  </Button>
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
            maxWidth="md"
          >
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              direction={{
                xs: "row",
                md: "column",
              }}
              xs={12}
              md={12}
            >
              <Grid item xs={12} md={12}>
                <DialogTitle color="primary">
                  <b>Tambah Penanggung Jawab</b>
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
                    <Grid item xs={12} md={4}>
                      <b>Upload Foto Apoteker</b>
                      <Box
                        sx={{
                          border: "2px dashed",
                          borderColor: "#E1F0F1",
                          paddingLeft: "4px",
                          paddingTop: "122px",
                          background: `url("${state.imagePJ}")`,
                          backgroundRepeat: "no - repeat",
                          backgroundSize: "cover",
                        }}
                      >
                        <input
                          type="file"
                          accept="image/*"
                          hidden
                          multiple
                          id="contained-button-file2"
                          onChange={(e) => {
                            console.log(e.target.files[0]);
                            setState({
                              imagePJ: URL.createObjectURL(e.target.files[0]),
                            });
                          }}
                        />
                        <label htmlFor="contained-button-file2">
                          <Button variant="contained" component="span">
                            Pilih Foto
                          </Button>
                        </label>
                      </Box>
                      <Typography variant="p" color="#AE4F54" fontSize="11px">
                        Peringatan: Demi meningkatkan kenyamanan pelayanan, di
                        anjurkan untuk mengunggah foto yang jelas
                      </Typography>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Grid
                        container
                        direction="row"
                        xs={12}
                        md={12}
                        rowSpacing={2}
                      >
                        <Grid item paddingTop="12px" xs={6} md={4}>
                          Nama Apoteker
                        </Grid>
                        <Grid item paddingTop="12px" xs={1} md={1}>
                          <b>:</b>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box>
                            <TextField
                              // style={{ marginTop: "30px" }}

                              id="outlined-basic"
                              label="Nama PBF"
                              variant="outlined"
                              size="small"
                              name="namapbf"
                              fullWidth
                              // onChange={onHandledChanged}
                              // placeholder="mohon lengkapi data anda"
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item paddingTop="9px" xs={6} md={4}>
                          STRA
                        </Grid>
                        <Grid item paddingTop="9px" xs={1} md={1}>
                          <b>:</b>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box>
                            <TextField
                              // style={{ marginTop: "30px" }}

                              id="outlined-basic"
                              label="Nama PBF"
                              variant="outlined"
                              size="small"
                              name="namapbf"
                              fullWidth
                              // onChange={onHandledChanged}
                              // placeholder="mohon lengkapi data anda"
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item paddingTop="9px" xs={6} md={4}>
                          SIPA
                        </Grid>
                        <Grid item paddingTop="9px" xs={1} md={1}>
                          <b>:</b>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box>
                            <TextField
                              // style={{ marginTop: "30px" }}

                              id="outlined-basic"
                              label="Nama PBF"
                              variant="outlined"
                              size="small"
                              name="namapbf"
                              fullWidth
                              // onChange={onHandledChanged}
                              // placeholder="mohon lengkapi data anda"
                              required
                            />
                          </Box>
                        </Grid>
                        <Grid item paddingTop="9px" xs={6} md={4}>
                          No.Pegawai
                        </Grid>
                        <Grid item paddingTop="9px" xs={1} md={1}>
                          <b>:</b>
                        </Grid>
                        <Grid item xs={12} md={7}>
                          <Box>
                            <TextField
                              // style={{ marginTop: "30px" }}

                              id="outlined-basic"
                              label="Nama PBF"
                              variant="outlined"
                              size="small"
                              name="namapbf"
                              fullWidth
                              // onChange={onHandledChanged}
                              // placeholder="mohon lengkapi data anda"
                              required
                            />
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </DialogContent>
              </Grid>
              <Grid item xs={12} md={12}>
                <DialogActions sx={{ m: 2, justifyContent: "center" }}>
                  <Grid item xs={1} md={1} />
                  <Button
                    // onClick={handleClose}
                    variant="contained"
                    type="submit"
                    onClick={handleClose2}
                    color="primary"
                    sx={{ width: "170px" }}
                  >
                    Selesai
                  </Button>
                </DialogActions>
              </Grid>
            </Grid>
          </Dialog>
          <Dialog
            open={open3}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose3}
            aria-describedby="alert-dialog-slide-description"
            fullWidth
            maxWidth="xs"
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
                <DialogTitle sx={{ m: 2 }}>
                  <img src={peringatan} alt="peringatan" />
                </DialogTitle>
              </Grid>
              <Grid item xs={12} md={12}>
                <DialogContent sx={{ m: -3 }}>
                  <DialogContentText id="alert-dialog-slide-description">
                    Apakah data anda sudah sesuai ?
                  </DialogContentText>
                </DialogContent>
              </Grid>

              <Grid item xs={12} md={12}>
                <DialogActions sx={{ width: "400px" }}>
                  <Grid container xs={12} md={12} columnSpacing={2}>
                    <Grid item xs={5} md={5}>
                      <Button
                        // onClick={handleClose}
                        variant="contained"
                        type="submit"
                        onClick={() => history.push("/surat_pesanan")}
                        color="primary"
                        fullWidth
                        sx={{ m: 2, p: 1 }}
                      >
                        Ya,sesuai
                      </Button>
                    </Grid>
                    {/* <Grid item xs={1} md={1}/> */}
                    <Grid item xs={5} md={5}>
                      <Button
                        onClick={handleClose3}
                        variant="outlined"
                        fullWidth
                        sx={{ m: 2, p: 1 }}
                      >
                        Tidak sesuai
                      </Button>
                    </Grid>
                  </Grid>
                </DialogActions>
              </Grid>
            </Grid>
          </Dialog>
        </Box>
      </Container>
    </>
  );
};

export default Barang;
