import { Box, Typography, styled } from "@mui/material";

// Used in AIPartnersSection.jsx as the main container for the AI Partners section
export const AiPartnersContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: theme.spacing(2, 0),
  marginBottom: theme.spacing(1),
  overflow: "hidden",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(3, 0),
  },
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(4, 0),
    height: "auto",
  },
  [theme.breakpoints.up("lg")]: {
    padding: theme.spacing(3, 0),
    minHeight: "auto",
    maxHeight: "none",
  },
  [theme.breakpoints.up("xl")]: {
    padding: theme.spacing(3, 0),
  },
}));

// Used in AIPartnersSection.jsx as the section title
export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "2rem",
  textAlign: "center",
  marginBottom: theme.spacing(1),
  color: theme.palette.primary.main,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.3rem",
  },
}));

// Used in AIPartnersSection.jsx as the section description
export const Description = styled(Typography)(({ theme }) => ({
  fontWeight: 400,
  fontSize: "1.1rem",
  textAlign: "center",
  marginBottom: theme.spacing(3),
  color: theme.palette.secondary.main,
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.95rem",
  },
}));

// Used in AIPartnersSection.jsx as the animated bar under the title
export const AnimatedSliderBar = styled(Box)(({ theme }) => ({
  width: "240px",
  height: "6px",
  margin: "0 auto",
  borderRadius: "3px",
  background: `linear-gradient(90deg, 
    ${theme.palette.primary.main} 0%,
    ${theme.palette.secondary.main} 25%,
    ${theme.palette.primary.light} 50%,
    ${theme.palette.secondary.light || theme.palette.secondary.main} 75%,
    ${
      theme.palette.accent
        ? theme.palette.accent.main
        : theme.palette.secondary.main
    } 100%
  )`,
  overflow: "hidden",
  position: "relative",
  marginBottom: theme.spacing(2),
  "::before": {
    content: '""',
    position: "absolute",
    left: "-40%",
    top: 0,
    width: "60%",
    height: "100%",
    background: `linear-gradient(90deg, transparent 0%, ${theme.palette.primary.light} 50%, transparent 100%)`,
    animation: "sliderBarMove 1.5s linear infinite",
  },
  "@keyframes sliderBarMove": {
    "0%": { left: "-40%" },
    "100%": { left: "100%" },
  },
}));

// Used in AIPartnersSlider.jsx as the main container for the slider
export const SliderContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(1, 0),
  height: "8rem",
  [theme.breakpoints.down("sm")]: {
    height: "4rem",
  },
  [theme.breakpoints.up("md")]: {
    height: "7rem",
    padding: theme.spacing(1.5, 0),
  },
  [theme.breakpoints.up("lg")]: {
    height: "8rem",
  },
  [theme.breakpoints.up("xl")]: {
    height: "10rem",
  },
}));

// Used in AIPartnersSlider.jsx as the sliding track for the logos
export const SlidingTrack = styled(Box, {
  shouldForwardProp: (prop) => !["isSlideSpeedFast"].includes(prop),
})(({ theme, isSlideSpeedFast }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  animation: isSlideSpeedFast
    ? "slider 20s linear infinite"
    : "slider 30s linear infinite",
  width: "auto", // Let the track fit its content
  // [theme.breakpoints.down("sm")]: {
  //   width: isSlideSpeedFast ? "calc(25rem * 7)" : "calc(25rem * 5)",
  // },
  // [theme.breakpoints.up("md")]: {
  //   width: isSlideSpeedFast ? "calc(25rem * 10)" : "calc(25rem * 7)",
  // },
  // [theme.breakpoints.up("lg")]: {
  //   width: isSlideSpeedFast ? "calc(25rem * 12)" : "calc(25rem * 9)",
  // },
  // [theme.breakpoints.up("xl")]: {
  //   width: isSlideSpeedFast ? "calc(25rem * 14)" : "calc(25rem * 10)",
  // },
  "@keyframes slider": {
    "0%": {
      transform: "translateX(0)",
    },
    "100%": {
      transform: "translateX(-50%)",
    },
  },
}));

// Used in AIPartnersSlider.jsx as the container for each logo image
export const ImageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "120px",
  height: "48px",
  margin: "5px 15px",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  cursor: "pointer",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80px",
    height: "32px",
  },
  [theme.breakpoints.up("md")]: {
    width: "100px",
    height: "40px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "120px",
    height: "48px",
  },
}));

export const SliderImage = styled("img")(({ theme }) => ({
  width: "100px",
  height: "70%",
  cursor: "pointer",
  margin: "5px 10px",
  filter: "grayscale(100%)",
  opacity: 0.2,
  transition: "all 0.3s ease",
  objectFit: "contain",
  objectPosition: "center",
  "&:hover": {
    filter: "none",
    opacity: 1,
    transform: "scale(1.1)",
  },
}));
