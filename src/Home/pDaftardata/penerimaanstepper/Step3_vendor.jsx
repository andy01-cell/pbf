import React from "react";
import Step from "@mui/material/Step";
import {
  Box,
  Button,
  Grid,
  StepLabel,
  Stepper,
  TextField,
  Typography,
} from "@mui/material";

const Step3_vendor = () => {
  return (
    <div>
      <Grid container xs={12} md={12}>
        <Grid item xs={12} md={12} marginTop="25px">
          <TextField
            fullWidth
            id="namavendor"
            name="namavendor"
            label="Nama Vendor"
            type="text"
            required
            variant="outlined"
            autoComplete="namavendor"
            size="small"
            sx={{
              background: "#E1F0F1",
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} marginTop="25px">
          <TextField
            fullWidth
            id="alamat"
            name="alamat"
            label="Alamat"
            type="text"
            required
            variant="outlined"
            autoComplete="alamat"
            size="small"
            sx={{
              background: "#E1F0F1",
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} marginTop="25px">
          <TextField
            fullWidth
            id="kodevendor"
            name="kodevendor"
            label="Kode Vendor"
            type="text"
            required
            variant="outlined"
            autoComplete="kodevendor"
            size="small"
            sx={{
              background: "#E1F0F1",
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} marginTop="25px">
          <TextField
            fullWidth
            id="noizinvendor"
            name="noizinvendor"
            label="No.Izin Vendor"
            type="number"
            required
            variant="outlined"
            autoComplete="noizinvendor"
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

export default Step3_vendor;
