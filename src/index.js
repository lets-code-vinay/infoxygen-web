import React, { useState, createContext } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { darkTheme, lightTheme } from "./theme";
import App from "./App";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "dark",
});

const Root = () => {
  const [mode, setMode] = useState("dark");
  const colorMode = {
    mode,
    toggleColorMode: () =>
      setMode((prev) => (prev === "dark" ? "light" : "dark")),
  };
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
