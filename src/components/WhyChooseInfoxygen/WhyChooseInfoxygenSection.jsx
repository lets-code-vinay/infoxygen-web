import React from "react";
import { Box, Grid } from "@mui/material";
import SectionHeader from "../SectionHeader";
import AnimatedStats from "./AnimatedStats";
import Lock from "./Lock";

const WhyChooseInfoxygenSection = () => {
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        px: { xs: 1, sm: 2, md: 4 },
        background: "#101010",
      }}
    >
      <SectionHeader
        titleWords={"WHY CHOOSE INFOXYGEN?"}
        description="Discover the unique advantages that set Infoxygen apart in the contact center industry, delivering exceptional value and innovative solutions."
        showUnderline={true}
        showButton={false}
        buttonProps={{
          text: "Learn More",
          direction: "left",
          radius: 0,
          colorVariant: "primary",
        }}
        isNeonApplied={false}
        fontSize="2.4rem"
      />

      <Box sx={{ width: { xs: "100%", md: "80%", lg: "60%" }, mx: "auto" }}>
        <Grid
          container
          spacing={{ xs: 3, md: 6 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Side */}
          <Grid
            item
            // xs={12}
            // md={6}
            // lg={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
              width: { xs: "100%", md: "100%", lg: "50%" },
            }}
          >
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
                p: { xs: 0, md: 2 },
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
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
                minHeight: { xs: 200, md: 320 },
                width: "100%",
                mt: { xs: 4, md: 0 },
              }}
            >
              <Lock />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default WhyChooseInfoxygenSection;
