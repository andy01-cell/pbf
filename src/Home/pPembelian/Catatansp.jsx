import React from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  OutlinedInput,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { pensil, print, sampah } from "../../assets";

function createData(id, vendor, nosurat, tanggal, status, aksi, jenisbayar) {
  return { id, vendor, nosurat, tanggal, status, aksi, jenisbayar };
}

const rows = [
  createData(
    1,
    "PT.Kima Farma",
    "225331-SPV_PPIC02",
    "17/10/2020",
    "belum diketahui"
  ),
  createData(
    2,
    "PT.Kima Farma",
    "225331-SPV_PPIC02",
    "17/10/2020",
    "Diketahui"
  ),
  createData(
    3,
    "PT.Kima Farma",
    "225331-SPV_PPIC02",
    "17/10/2020",
    "Diketahui"
  ),
  createData(
    4,
    "PT.Kima Farma",
    "225331-SPV_PPIC02",
    "17/10/2020",
    "belum diketahui"
  ),
  createData(
    5,
    "PT.Kima Farma",
    "225331-SPV_PPIC02",
    "17/10/2020",
    "belum diketahui"
  ),
];

const Catatansp = () => {
  return (
    <div>
      <Grid container xs={12} md={12}>
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
        <Grid item xs={12} md={12} marginTop="30px">
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">No.</TableCell>
                  <TableCell align="center">Vendor</TableCell>
                  <TableCell align="center">No Surat Pesanan</TableCell>
                  <TableCell align="center">Tanggal</TableCell>
                  <TableCell align="center">Aksi</TableCell>
                  <TableCell align="center">Jenis Bayar</TableCell>
                  <TableCell align="center">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.vendor}</TableCell>
                    <TableCell align="center">{row.nosurat}</TableCell>
                    <TableCell align="center">{row.tanggal}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        color="primary"
                        component="span"
                      >
                        <img src={print} alt="print" />
                      </IconButton>
                      <IconButton
                        color="primary"
                        component="span"
                      >
                        <img src={pensil} alt="print" />
                      </IconButton>
                      <IconButton
                        color="primary"
                        component="span"
                      >
                        <img src={sampah} alt="print" />
                      </IconButton>
                    </TableCell>
                    <TableCell align="center">
                      <Button variant="outlined" color="success" >
                        cash
                      </Button>
                      &nbsp;&nbsp;
                      <Button variant="outlined" color="error">
                        kredit
                      </Button>
                    </TableCell>
                    <TableCell align="center">{row.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};

export default Catatansp;
