import { Box, Typography, styled } from "@mui/material";

export const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: theme.palette.darkBg,
  position: "relative",
  overflow: "hidden",
  marginTop: "-64px", // Compensate for the fixed header
  paddingTop: "64px", // Add padding to account for header height
  marginBottom: 0, // Remove any bottom margin
  borderBottom: "none", // Remove any border
  [theme.breakpoints.down("sm")]: {
    marginTop: "-56px",
    paddingTop: "56px",
  },
  [theme.breakpoints.up("lg")]: {
    marginTop: "-72px",
    paddingTop: "72px",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "radial-gradient(circle at 20% 80%, rgba(0, 60, 79, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(56, 142, 60, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 40%, rgba(0, 60, 79, 0.1) 0%, transparent 50%)",
    animation: "backgroundShift 8s ease-in-out infinite",
  },
}));

export const FloatingElements = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  pointerEvents: "none",
});

export const FloatingCircle = styled("div")(
  ({ delay, size, color, theme }) => ({
    position: "absolute",
    width: size,
    height: size,
    borderRadius: "50%",
    background: color,
    opacity: 0.25,
    animation: `float 6s ease-in-out infinite`,
    animationDelay: `${delay}s`,
    filter: theme.palette.mode === "light" ? "invert(1)" : "none",
    boxShadow: `0 0 30px ${color}60, 0 0 60px ${color}40`,
  })
);

export const GlowingOrb = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  background: `radial-gradient(circle, ${theme.palette.primary.main}15 0%, transparent 70%)`,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  animation: "pulse 4s ease-in-out infinite",
  zIndex: 1,
  boxShadow: `0 0 60px ${theme.palette.primary.main}20`,
}));

export const ContentContainer = styled(Box)(({ theme }) => ({
  textAlign: "center",
  color: "white",
  zIndex: 20,
  position: "relative",
  maxWidth: "800px",
  mx: "auto",
  px: 3,
}));

export const AnimatedTitle = styled(Typography)(({ theme }) => ({
  background:
    theme.palette.mode === "light"
      ? theme.palette.primary.main
      : "linear-gradient(45deg, #fff, #f0f0f0, #fff)",
  backgroundSize: "200% 200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation:
    theme.palette.mode === "light"
      ? undefined
      : "shimmer 3s ease-in-out infinite",
  textShadow:
    theme.palette.mode === "light"
      ? "none"
      : "0 0 30px rgba(255, 255, 255, 0.5)",
}));
