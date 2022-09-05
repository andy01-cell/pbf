import { useState } from "react";
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

const Step4_tgjawab = () => {
  const [state, setState] = useState({
    image: "",
  });

  React.useEffect(() => {
    console.log(state.image);
  }, [state]);
  return (
    <div>
      <Grid container xs={12} md={12}>
        <Grid item xs={12} md={12} marginTop="25px">
          <TextField
            fullWidth
            id="namaadmin"
            name="namaadmin"
            label="Nama Admin"
            type="text"
            required
            variant="outlined"
            autoComplete="namaadmin"
            size="small"
            sx={{
              background: "#E1F0F1",
            }}
          />
        </Grid>
        <Grid item xs={12} md={12} marginTop="25px">
          <TextField
            fullWidth
            id="idpegawai"
            name="idpegawai"
            label="Id Pegawai"
            type="number"
            required
            variant="outlined"
            autoComplete="idpegawai"
            size="small"
            sx={{
              background: "#E1F0F1",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          md={2.5}
          marginTop="25px"
          justifySelf="center"
        ></Grid>
      </Grid>
      <p>Upload Foto Pegawai</p>
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
              paddingTop: "250px",
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
            fontSize="15px"
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
            <Button variant="outlined" component="span">
              Ganti Foto
            </Button>
          </label>
        </Grid>
      </Grid>
    </div>
  );
};

export default Step4_tgjawab;
