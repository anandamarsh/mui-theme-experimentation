import React, { useState } from "react";
import AppBar from "./components/AppBar";
import Login from "./pages/Login";
import Form from "./pages/Form";
import "./App.css";
import { ThemeProvider, Switch, FormControlLabel, Box } from "@mui/material";
import { clarityTheme, noTheme } from "./theme";
import { useGlobalState } from "./store";

function App() {
  const [page] = useGlobalState("page");
  const [theme, setTheme] = useState(noTheme);

  const toggleTheme = () => {
    setTheme(theme === clarityTheme ? noTheme : clarityTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
        <FormControlLabel
          control={<Switch onChange={toggleTheme} />}
          label=""
        />
      </Box>
      {page !== "login" && <AppBar />}
      {page === "login" && <Login />}
      {page === "form" && <Form />}
    </ThemeProvider>
  );
}

export default App;
