import React from "react";
import Grid from "@mui/material/Grid";
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { pensil, sampah } from "../../assets";

function createData(no, kadaluarsa, namaobat, jumlah, satuan, batch, aksi) {
  return { no, kadaluarsa, namaobat, jumlah, satuan, batch, aksi };
}

const rows = [
  createData(1, "25 Maret 2020", "Bodrex", 4, "Btl", "283 D"),
  createData(2, "25 Maret 2020", "Bodrex", 4, "Btl", "283 D"),
  createData(3, "25 Maret 2020", "Bodrex", 4, "Btl", "283 D"),
  createData(4, "25 Maret 2020", "Bodrex", 4, "Btl", "283 D"),
];

const kadaluarsa = () => {
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
        <Grid item xs={12} md={12} />
        <Grid item marginTop="30px">
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">No.</TableCell>
                  <TableCell align="center">Kadaluarsa</TableCell>
                  <TableCell align="center">Nama Obat</TableCell>
                  <TableCell align="center">Jumlah</TableCell>
                  <TableCell align="center">Satuan</TableCell>
                  <TableCell align="center">Batch</TableCell>
                  <TableCell align="center">Aksi</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.namaobat}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" align="center">
                      {row.no}
                    </TableCell>
                    <TableCell align="center">{row.kadaluarsa}</TableCell>
                    <TableCell align="center">{row.namaobat}</TableCell>
                    <TableCell align="center">{row.jumlah}</TableCell>
                    <TableCell align="center">{row.satuan}</TableCell>
                    <TableCell align="center">{row.batch}</TableCell>
                    <TableCell align="center">
                      <IconButton color="primary" component="span">
                        <img src={pensil} alt="print" />
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
    </div>
  );
};

export default kadaluarsa;
