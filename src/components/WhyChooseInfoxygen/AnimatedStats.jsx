import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StatsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  flexWrap: "wrap",
  gap: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    width: "100%",
    justifyContent: "center",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
}));

const StatItem = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(2),
  borderRadius: "12px",
  background: "rgba(255, 255, 255, 0.05)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    background: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
  },
}));

const stats = [
  { value: "10+", label: "Industry & Tech Experts" },
  { value: "3", label: "Countries" },
  { value: "6+", label: "Years of Exp" },
  { value: "$80.3T", label: "TTM Revenue" },
  { value: "5+", label: "Projects" },
  { value: "5", label: "Services Clients Annually" },
];

const AnimatedStats = () => {
  return (
    <StatsContainer className="fade-in-up-delay-3" mb={2} mt={0}>
      {stats.map((stat, idx) => (
        <StatItem className="stat-item-hover" key={stat.label}>
          <Typography
            variant="h3"
            className="bounce-in"
            sx={{
              fontSize: "2.5rem",
              fontWeight: 700,
              color: idx % 2 === 0 ? "#003c4f" : "#388e3c",
              mb: 1,
              animationDelay: `${1 + idx * 0.2}s`,
            }}
          >
            {stat.value}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#b0b0b0", fontSize: "0.9rem" }}
          >
            {stat.label}
          </Typography>
        </StatItem>
      ))}
    </StatsContainer>
  );
};

export default AnimatedStats;
