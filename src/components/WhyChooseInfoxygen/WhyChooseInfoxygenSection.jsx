import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import AnimatedTextSwitcher from "../HeroBanner/AnimatedTextSwitcher";
// import AnimatedBar from "../CoreIndustries/AnimatedBar"; // If you have a reusable bar component
import AnimatedStats from "./AnimatedStats";
import Lock from "./Lock";

const WhyChooseInfoxygenSection = () => {
  return (
    <Box
      component="section"
      sx={{ py: { xs: 6, md: 10 }, px: 2, background: "#101010" }}
    >
      <Grid container spacing={6} alignItems="center">
        {/* Left Side */}
        <Grid item xs={12} md={6}>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <AnimatedTextSwitcher
              phrases={["WHY CHOOSE INFOXYGEN?"]}
              fontSize="2.4rem"
              isNeonApplied={true}
            />
            {/* Animated bar placeholder */}
            <Box
              sx={{
                mt: 2,
                mb: 4,
                width: 120,
                height: 6,
                background: "linear-gradient(90deg, #003c4f, #388e3c)",
                borderRadius: 3,
                mx: { xs: "auto", md: 0 },
                animation: "pulse 2s infinite alternate",
              }}
            />
            {/* AnimatedStats: 3 cards, animated in */}
            <AnimatedStats />
          </Box>
        </Grid>
        {/* Right Side */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: 320,
            }}
          >
            <Lock />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseInfoxygenSection;
