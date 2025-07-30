import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import UnderMaintenance from "./components/UnderMaintenance";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import AIPartnersSection from "./components/AiPartners/AIPartnersSection";
import CoreIndustriesSection from "./components/CoreIndustries/CoreIndustriesSection";
import WhyChooseInfoxygenSection from "./components/WhyChooseInfoxygen/WhyChooseInfoxygenSection";
import OurPresence from "./components/OurPresence";
import SiteMap from "./components/SiteMap";

const App = () => {
  useEffect(() => {
    // Ensure the page scrolls to the top when the application loads
    window.scrollTo(0, 0);
    
    // Clear any hash from the URL that might cause unwanted scrolling
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }
    
    // Prevent scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

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
        <OurPresence />
        <SiteMap />
        {/* <UnderMaintenance /> */}
      </Box>
      <Footer />
    </Box>
  );
};

export default App;
