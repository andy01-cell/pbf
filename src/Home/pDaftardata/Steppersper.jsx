import React from "react";
import Step from "@mui/material/Step";
import {
  Box,
  Button,
  Grid,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import Step1_pesanan from "./penerimaanstepper/Step1_pesanan";
import Step2_detail from "./penerimaanstepper/Step2_detail";
import Step3_vendor from "./penerimaanstepper/Step3_vendor";
import Step4_tgjawab from "./penerimaanstepper/Step4_tgjawab";
import Step5_rekapitulasi from "./penerimaanstepper/Step5_rekapitulasi";

const steps = [
  "Pesanan",
  "Detail Obat",
  "Vendor",
  "Penanggung Jawab",
  "Rekapitulasi",
];

const test = [
  <Step1_pesanan />,
  <Step2_detail />,
  <Step3_vendor />,
  <Step4_tgjawab />,
  <Step5_rekapitulasi />,
];
const Steppersper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  // const

  const isStepOptional = (step) => {
    return step === 2;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          {
            /* if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          } */
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {/* <Typography sx={{ mt: 2, mb: 1 }}>maka {activeStep}</Typography> */}
          {test[activeStep]}
          <Grid container justifyContent="center" marginTop="20px">
            <Grid item>
              {/* {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )} */}

              <Button onClick={handleNext} variant="contained">
                {activeStep === steps.length - 1 ? "Finish" : "Selanjutnya "}
              </Button>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </Box>
  );
};

export default Steppersper;
