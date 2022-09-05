import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Grid } from "@mui/material";
import { filter } from "../../../assets";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#E1F0F1",
    color: theme.palette.common.black,
  },
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

function createData(
  no,
  nosuratpengantar,
  nosurat,
  totalharga,
  jumlahpesanan,
  aksi
) {
  return { no, nosuratpengantar, nosurat, totalharga, jumlahpesanan, aksi };
}

const rows = [
  createData(1, "No_SP", "No Surat", 240, 4),
  createData(2, "No_SP", "No Surat", 370, 4),
  createData(3, "No_SP", "No Surat", 240, 6),
  createData(4, "No_SP", "No Surat", 670, 4),
  createData(5, "No_SP", "No Surat", 490, 3),
];

const Step1_pesanan = () => {
  return (
    <Box marginTop="20px">
      <Grid container xs={12} md={12} justifyContent="end">
        <Grid item >
          <Button variant="outlined" size="small" >
            <img src={filter} alt="filter" /> &nbsp;
            Filter
          </Button>
        </Grid>
        <Grid item xs={12} md={12} marginTop="40px">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>No</StyledTableCell>
                  <StyledTableCell align="center">
                    No Surat Pengantar
                  </StyledTableCell>
                  <StyledTableCell align="center">No Surat</StyledTableCell>
                  <StyledTableCell align="center">Total Harga</StyledTableCell>
                  <StyledTableCell align="center">
                    Jumlah Pesanan
                  </StyledTableCell>
                  <StyledTableCell align="center">Aksi</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.no}>
                    <StyledTableCell component="th" scope="row">
                      {row.no}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.nosuratpengantar}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.nosurat}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.totalharga}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.jumlahpesanan}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="outlined"
                        style={{ textTransform: "none" }}
                      >
                        Input Ke Stok
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Step1_pesanan;
