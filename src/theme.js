import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const clarityTheme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#ff0000",
    },
    warning: {
      main: "#ffa000",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
    background: {
      default: "#fff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#333",
      secondary: "#555",
    },
  },
  typography: {
    fontFamily: '"Open Sans", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
      color: "#007bff", // Example: a shade of blue
    },
    h2: {
      fontSize: "2.0rem",
      fontWeight: 500,
      color: "#ff5722", // Example: a shade of deep orange
    },
    // ... add other typography styles
  },

  spacing: 8, // Adjust the default spacing
  shape: {
    borderRadius: 4, // Default border radius
  },
  // Add custom overrides for specific MUI components
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Removes uppercase transformation
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "20px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        },
      },
    },
    // ... more component overrides
  },
  // You can also add custom properties that can be used in your components
  custom: {
    sidebarWidth: 240,
  },
});

const noTheme = createTheme({});

export { clarityTheme, noTheme };
