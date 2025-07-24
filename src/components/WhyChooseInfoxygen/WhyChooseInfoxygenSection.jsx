import React from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SectionHeader from "../SectionHeader";
import AnimatedStats from "./AnimatedStats";
import Lock from "./Lock";

const WhyChooseInfoxygenSection = () => {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        py: { xs: 6, md: 10 },
        background:
          theme.palette.mode === "light"
            ? theme.palette.background.lightBg
            : theme.palette.darkBg,
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
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 3, md: 6 },
          }}
        >
          {/* Left Side */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              textAlign: { xs: "center", md: "left" },
              p: { xs: 0, md: 2 },
            }}
          >
            {/* AnimatedStats: 3 cards, animated in */}
            <AnimatedStats />
          </Box>
          {/* Right Side */}
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: { xs: 200, md: 320 },
              mt: { xs: 4, md: 0 },
            }}
          >
            <Lock />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WhyChooseInfoxygenSection;
