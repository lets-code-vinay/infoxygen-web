import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#003c4f",
      light: "#005a7a",
      dark: "#002a35",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#388e3c",
      light: "#4caf50",
      dark: "#2e7d32",
      contrastText: "#ffffff",
    },
    accent: {
      light: "#2b89a7",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
      darkBg:
        "linear-gradient(180deg, #060110 0%, #070211 10%, #060110 20%, #04020c 40%, #090316 60%, #04020c 80%, #000406 100%)",
    },
    darkBg:
      "linear-gradient(180deg, #060110 0%, #070211 10%, #060110 20%, #04020c 40%, #090316 60%, #04020c 80%, #000406 100%)",
    text: {
      primary: "#333333",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h2: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.75rem",
    },
    h4: {
      fontWeight: 500,
      fontSize: "1.5rem",
    },
    h5: {
      fontWeight: 500,
      fontSize: "1.25rem",
    },
    h6: {
      fontWeight: 500,
      fontSize: "1rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: "0",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 500,
        },
        contained: {
          boxShadow: "0 2px 8px rgba(0, 60, 79, 0.2)",
          "&:hover": {
            boxShadow: "0 4px 12px rgba(0, 60, 79, 0.3)",
          },
        },
        outlined: {
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "5px",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRadius: "0",
        },
      },
    },
  },
});

export default theme;
