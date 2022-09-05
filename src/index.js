import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./Registrasi/App";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const outerTheme = createTheme({
  palette: {
    primary: {
      main: "#3d9d9b",
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={outerTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
