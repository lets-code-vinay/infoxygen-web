import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import UnderMaintenance from "./components/UnderMaintenance";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import AIPartnersSection from "./components/AiPartners/AIPartnersSection";
import CoreIndustriesSection from "./components/CoreIndustries/CoreIndustriesSection";
import WhyChooseInfoxygenSection from "./components/WhyChooseInfoxygen/WhyChooseInfoxygenSection";

const App = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box sx={{ flex: 1 }}>
        <HeroBanner />
        {/* AI Partners Infinity Slider */}
        <AIPartnersSection />
        <WhyChooseInfoxygenSection />
        <CoreIndustriesSection />
        <UnderMaintenance />
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
