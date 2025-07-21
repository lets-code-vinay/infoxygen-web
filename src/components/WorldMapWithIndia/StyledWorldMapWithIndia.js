import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const ChartDiv = styled(Box)(({ theme }) => ({
  padding: "0 2%",
  width: "100%",
  height: "70vh",
  [theme.breakpoints.down("sm")]: {
    height: "50vh",
  },
  // Hide amCharts watermark
  '& .amcharts-chart-div a[aria-label*="amCharts"]': {
    display: "none !important",
  },
}));

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "47%",
  margin: "20px auto 0 auto",
  cursor: "pointer",
  color: "white",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
    marginTop: 0,
  },
}));

export const CountyName = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  color: theme.palette.secondary.main,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
  },
}));
