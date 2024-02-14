import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import { useGlobalState } from "../store";

function LoginCard() {
  const [, setPage] = useGlobalState("page");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(to bottom, pink, white)",
        }}
      >
        <Card sx={{ padding: "1rem", maxWidth: "350px", width: "100%" }}>
          <CardContent>
            <Box display="flex" justifyContent="center">
              <img
                src="zoopa.png"
                alt="Logo"
                style={{ marginTop: "1rem", width: "100px" }}
              />
            </Box>
            <Typography
              display="flex"
              justifyContent="center"
              variant="h4"
              component="h4"
              gutterBottom
              style={{ margin: "2rem 0 3rem" }}
            >
              Welcome
            </Typography>
            <form>
              <Box mb={2}>
                <TextField
                  id="username"
                  label="Username"
                  variant="outlined"
                  fullWidth
                />
              </Box>
              <Box mb={2}>
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Link
                href="#"
                underline="hover"
                style={{ display: "block", marginBottom: "3rem" }}
              >
                Forgot Username or Password?
              </Link>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => setPage("form")}
              >
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </Box>
      <Box
        sx={{
          height: "0",
          paddingBottom: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "background.paper",
          "& a:not(:last-of-type)::after": {
            content: '" | "',
            color: "text.primary",
            marginLeft: "8px",
            marginRight: "8px",
          },
        }}
      >
        <Link href="#" underline="hover">
          Help
        </Link>
        <Link href="#" underline="hover">
          Privacy
        </Link>
        <Link href="#" underline="hover">
          Terms
        </Link>
      </Box>
    </Box>
  );
}

export default LoginCard;
