import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const stats = [
  { value: "200+", label: "Industry & Tech Experts" },
  { value: "5", label: "Countries" },
  { value: "$10.30M", label: "TTM Revenue" },
  { value: "50+", label: "Services Clients Annually" },
];

const AnimatedStats = () => {
  return (
    <Grid container spacing={3} justifyContent="flex-start">
      {stats.slice(0, 3).map((stat, idx) => (
        <Grid item xs={12} sm={4} key={stat.value}>
          <Box
            className={`stat-card slide-in-left-delay-${idx}`}
            sx={{
              p: 3,
              borderRadius: 2,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              textAlign: "center",
              boxShadow: 2,
              minWidth: 120,
              mb: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, color: "#003c4f", mb: 1 }}
            >
              {stat.value}
            </Typography>
            <Typography variant="body2" sx={{ color: "#b0b0b0" }}>
              {stat.label}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default AnimatedStats;
