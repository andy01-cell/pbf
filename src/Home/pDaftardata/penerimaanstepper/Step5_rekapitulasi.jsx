import { useState } from "react";
import React from "react";
import Step from "@mui/material/Step";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";

const satuancurrencies = [
  {
    value: "sayur",
    label: "syr",
  },
  {
    value: "Botol",
    label: "Btl",
  },
  {
    value: "Tablet",
    label: "Tablet",
  },
  {
    value: "kapsul",
    label: "kapsul",
  },
];

const Step5_rekapitulasi = () => {
  const [state, setState] = useState({
    image: "",
  });

  React.useEffect(() => {
    console.log(state.image);
  }, [state]);

  const [currency, setCurrency] = React.useState("");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div>
      <Typography
        variant="p"
        textAlign="center"
        fontSize="16px"
        alignSelf="center"
      >
        <b>Detail Obat</b>
      </Typography>
      <br />
      <Typography
        variant="p"
        textAlign="center"
        fontSize="14px"
        alignSelf="center"
      >
        Upload foto Obat
      </Typography>

      <Grid
        container
        xs={12}
        md={2.25}
        justifyContent="center"
        textAlign="center"
      >
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              border: "2px dashed",
              borderColor: "#E1F0F1",
              paddingTop: "200px",
              background: `url("${state.image}")`,
              backgroundRepeat: "no - repeat",
              backgroundSize: "cover",
            }}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography
            variant="p"
            textAlign="center"
            fontSize="14px"
            alignSelf="center"
          >
            File JPG/PNG maks 2mb
          </Typography>
        </Grid>
        <Grid item justifySelf="center">
          <input
            type="file"
            accept="image/*"
            hidden
            multiple
            id="contained-button-file"
            onChange={(e) => {
              console.log(e.target.files[0]);
              setState({
                image: URL.createObjectURL(e.target.files[0]),
              });
            }}
          />
          <label htmlFor="contained-button-file">
            <Button variant="outlined" component="span" size="small">
              Ganti Foto
            </Button>
          </label>
        </Grid>
      </Grid>
      <Grid container xs={12} md={12} justifyContent="space-between">
        <Grid item xs={11} md={5.75}>
          <TextField
            fullWidth
            id="namaobat"
            name="namaobat"
            label="Nama Obat"
            // value={values.email}
            type="text"
            required
            variant="outlined"
            autoComplete="namaobat"
            size="small"
            sx={{
              background: "#E1F0F1",
            }}
          />
        </Grid>
        <Grid item xs={11} md={5.75}>
          <TextField
            fullWidth
            id="nobets"
            name="nobets"
            label="No.Bets"
            // value={values.email}
            type="number"
            required
            variant="outlined"
            autoComplete="nobets"
            size="small"
            sx={{
              background: "#E1F0F1",
            }}
          />
        </Grid>

        <Grid item xs={11} md={5.75} marginTop="25px">
          <Grid container xs={12} md={12} justifyContent="space-between">
            <Grid item xs={12} md={5.75}>
              <TextField
                fullWidth
                id="jumlah"
                name="jumlah"
                label="Jumlah"
                // value={values.email}
                type="number"
                required
                variant="outlined"
                autoComplete="jumlah"
                size="small"
                sx={{
                  background: "#E1F0F1",
                }}
              />
            </Grid>
            <Grid item xs={12} md={5.75}>
              <TextField
                fullWidth
                id="satuan"
                select
                name="satuan"
                label="Satuan"
                value={currency}
                onChange={handleChange}
                required
                variant="outlined"
                size="small"
                sx={{
                  background: "#E1F0F1",
                }}
              >
                {satuancurrencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={11} md={5.75} marginTop="25px">
          <TextField
            fullWidth
            id="kodeobat"
            name="kodeobat"
            label="Kode Obat"
            type="text"
            required
            variant="outlined"
            autoComplete="kodeobat"
            size="small"
            sx={{
              background: "#E1F0F1",
            }}
          />
        </Grid>
        <Grid item xs={11} md={5.75} marginTop="25px">
          <TextField
            fullWidth
            id="hargaobat"
            name="hargaobat"
            label="Harga Obat"
            // value={values.email}
            type="number"
            required
            variant="outlined"
            autoComplete="hargaobat"
            size="small"
            sx={{
              background: "#E1F0F1",
            }}
          />
        </Grid>
        <Grid item xs={11} md={5.75} marginTop="25px">
          <TextField
            fullWidth
            id="diskonvendor"
            name="diskonvendor"
            label="Diskon Vendor"
            type="number"
            required
            variant="outlined"
            autoComplete="diskonvendor"
            size="small"
            sx={{
              background: "#E1F0F1",
            }}
          />
        </Grid>
        <Grid item xs={11} md={5.75} marginTop="25px">
          <TextField
            fullWidth
            id="tanggalkadaluarsa"
            name="tanggalkadaluarsa"
            label="Tanggal Kadaluarsa"
            type="date"
            placeholder="tes"
            required
            variant="outlined"
            autoComplete="tanggalkadaluarsa"
            size="small"
            sx={{
              background: "#E1F0F1",
            }}
          />
        </Grid>
        <Grid item xs={11} md={5.75} marginTop="25px">
          <TextField
            fullWidth
            id="pajak"
            name="pajak"
            label="Pajak"
            // value={values.email}
            type="number"
            required
            variant="outlined"
            autoComplete="pajak"
            size="small"
            sx={{
              background: "#E1F0F1",
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} marginTop="25px">
          <TextField
            fullWidth
            id="jenispembayaran"
            name="jenispembayaran"
            label="Jenis Pembayaran"
            // value={values.email}
            type="text"
            required
            variant="outlined"
            autoComplete="jenispembayaran"
            size="small"
            sx={{
              background: "#E1F0F1",
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default Step5_rekapitulasi;
