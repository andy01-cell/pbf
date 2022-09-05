import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";

function createData(id, kode, produk, satuan, kuantitas, harga, jumlah) {
  return { id, kode, produk, satuan, kuantitas, harga, jumlah };
}

const rows = [
  createData(1, "45rts", "Frozen yoghurt", "Btl"),
  createData(2, "45rts", "Ice cream sandwich", "Btl"),
  createData(3, "45rts", "Eclair", "Btl"),
  createData(4, "45rts", "Cupcake", "Btl"),
];

const suratpesanan = () => {
  return (
    <div>
      <Grid container xs={12} md={12} style={{lineHeight:"120%"}}>
        
        <Grid item xs={12} md={12} textAlign="center">
          <Typography variant="p" fontSize="18px">
            <b>SURAT PESANAN(SP)</b>
          </Typography>
        </Grid>
        <Grid item xs={1.5} md={1.5}>
          <Typography variant="p" fontSize="14px">
            <b>Vendor</b>
          </Typography>
        </Grid>
        <Grid item xs={0.5} md={0.5} textAlign="center">
          <Typography variant="p" fontSize="14px">
            <b>:</b>
          </Typography>
        </Grid>
        <Grid item xs={10} md={10}>
          <Typography variant="p" fontSize="14px">
            <b>:</b>
          </Typography>
        </Grid>
        <br />
        <br />
        <Grid item xs={1.5} md={1.5}>
          <Typography variant="p" fontSize="14px">
            <b>Alamat Vendor</b>
          </Typography>
        </Grid>
        <Grid item xs={0.5} md={0.5} textAlign="center">
          <Typography variant="p" fontSize="14px">
            <b>:</b>
          </Typography>
        </Grid>
        <Grid item xs={10} md={10}>
          <Typography variant="p" fontSize="14px">
            <b>:</b>
          </Typography>
        </Grid>
        <br />
        <br />
        <Grid item xs={1.5} md={1.5}>
          <Typography variant="p" fontSize="14px">
            <b>Kontak Vendor</b>
          </Typography>
        </Grid>
        <Grid item xs={0.5} md={0.5} textAlign="center">
          <Typography variant="p" fontSize="14px">
            <b>:</b>
          </Typography>
        </Grid>
        <Grid item xs={10} md={10}>
          <Typography variant="p" fontSize="14px">
            <b>:</b>
          </Typography>
        </Grid>
        <br />
        <br />
        <Grid item xs={1.5} md={1.5}>
          <Typography variant="p" fontSize="14px">
            <b>Kode Pemesanan</b>
          </Typography>
        </Grid>
        <Grid item xs={0.5} md={0.5} textAlign="center">
          <Typography variant="p" fontSize="14px">
            <b>:</b>
          </Typography>
        </Grid>
        <Grid item xs={10} md={10}>
          <Typography variant="p" fontSize="14px">
            <b>:</b>
          </Typography>
        </Grid>
      </Grid>
      <Grid container xs={12} md={12} justifyContent="end" marginTop="30px">
        <Grid item xs={4} md={2}>
          <Button
            variant="contained"
            style={{ textTransform: "none" }}
            fullWidth
          >
            + Tambah Pesanan
          </Button>
        </Grid>
        <Grid item xs={12} md={12} marginTop="10px">
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">No.</TableCell>
                  <TableCell align="center">Kode</TableCell>
                  <TableCell align="center">Produk</TableCell>
                  <TableCell align="center">Satuan</TableCell>
                  <TableCell align="center">Kuantitas</TableCell>
                  <TableCell align="center">Harga&nbsp;(HJP)</TableCell>
                  <TableCell align="center">Jumlah</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.kode}</TableCell>
                    <TableCell align="right">{row.produk}</TableCell>
                    <TableCell align="right">{row.satuan}</TableCell>
                    <TableCell align="right">
                      <TextField
                        placeholder="Masukkan Jumlah"
                        variant="outlined"
                        size="small"
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        placeholder="Masukkan Jumlah"
                        variant="outlined"
                        size="small"
                      />
                    </TableCell>
                    <TableCell align="right">
                      <TextField
                        placeholder="Masukkan Jumlah"
                        variant="outlined"
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={7} md={4} marginTop="10px">
          <Grid container xs={12} md={12} justifyContent="space-between">
            <Grid item xs={4} md={3.5}>
              <Button
                variant="contained"
                style={{ textTransform: "none" }}
                fullWidth
              >
                + Catatan
              </Button>
            </Grid>
            <Grid item xs={3.5} md={3.5}>
              <Button
                variant="contained"
                style={{ textTransform: "none" }}
                fullWidth
                color="success"
              >
                Simpan
              </Button>
            </Grid>
            <Grid item xs={3.5} md={3.5}>
              <Button
                variant="contained"
                style={{ textTransform: "none" }}
                fullWidth
                color="error"
              >
                Batal
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default suratpesanan;
