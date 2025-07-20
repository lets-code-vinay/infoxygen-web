import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export const MainBody = styled(Box)(({ theme }) => ({
  width: "100%",
  background: theme.palette.darkBg,
  color: "white",
  position: "relative",
  paddingTop: "4%",
  minHeight: "100vh",
}));

export const GridContainer = styled(Grid)(({ theme }) => ({
  width: "60%",
  margin: "0 auto",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: "0 1rem",
  },
}));

export const GridLeft = styled(Grid)(({ theme }) => ({
  width: "40%",
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    marginBottom: theme.spacing(4),
  },
}));

export const MapContainer = styled(Grid)(({ theme }) => ({
  width: "60%",
  margin: "auto",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
