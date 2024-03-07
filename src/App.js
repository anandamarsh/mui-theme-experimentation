import React, { useState } from "react";
import AppBar from "./components/AppBar";
import Login from "./pages/Login";
import Form from "./pages/Form";
import "./App.css";
import {
  ThemeProvider,
  Switch,
  FormControlLabel,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code"; // Make sure this is correctly imported
import { clarityThemeJson, clarityTheme, noTheme } from "./theme";
import { useGlobalState } from "./store";

function App() {
  const [page] = useGlobalState("page");
  const [theme, setTheme] = useState(clarityTheme);
  const [isThemeActive, setIsThemeActive] = useState(true);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === clarityTheme ? noTheme : clarityTheme);
    setIsThemeActive(!isThemeActive);
  };

  const handleButtonClick = async () => {
    try {
      const json = JSON.stringify(clarityThemeJson, null, 2);
      console.log(json);
      await navigator.clipboard.writeText(json);
      setOpenSnackbar(true);
    } catch (err) {
      console.error("Could not copy json");
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        control={<Switch checked={isThemeActive} onChange={toggleTheme} />}
        label=""
        sx={{
          position: "fixed",
          bottom: "0.5rem",
          right: "2.5rem",
          zIndex: 1000,
        }}
      />
      <Button
        variant="contained"
        onClick={handleButtonClick}
        disabled={!isThemeActive}
        startIcon={<CodeIcon />}
        size="small"
        sx={{
          position: "fixed",
          bottom: "1rem",
          left: "2.5rem",
          zIndex: 1000,
          textAlign: "center",
        }}
      />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          theme.json copied to clipboard
        </Alert>
      </Snackbar>
      {page !== "login" && <AppBar />}
      {page === "login" && <Login />}
      {page === "form" && <Form />}
    </ThemeProvider>
  );
}

export default App;
