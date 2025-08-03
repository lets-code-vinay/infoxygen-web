import React from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import AIPartnersSection from "../components/AiPartners/AIPartnersSection";
import CoreIndustriesSection from "../components/CoreIndustries/CoreIndustriesSection";
import WhyChooseInfoxygenSection from "../components/WhyChooseInfoxygen/WhyChooseInfoxygenSection";
import OurPresence from "../components/OurPresence";

const Homepage = () => {
  return (
    <Box sx={{ flex: 1 }}>
      <HeroBanner />
      {/* AI Partners Infinity Slider */}
      <AIPartnersSection />
      <WhyChooseInfoxygenSection />
      <CoreIndustriesSection />
      <OurPresence />
    </Box>
  );
};

export default Homepage;
