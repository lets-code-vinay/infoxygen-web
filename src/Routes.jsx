import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import SiteMap from "./components/SiteMap";

// Import pages
import Homepage from "./pages/Homepage";
import Career from "./pages/Career";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
import Industries from "./pages/Industries";

// Import service pages
import DataAnalytics from "./pages/services/data-analytics";
import SoftwareProductEngineering from "./pages/services/software-product-engineering";
import WebDevelopment from "./pages/services/web-development";
import MobileAppDevelopment from "./pages/services/mobile-app-development";
import CloudSolutions from "./pages/services/cloud-solutions";

// Import industry pages
import Healthcare from "./pages/industries/healthcare";
import BankingFinancialServices from "./pages/industries/banking-financial-services";

// Import other pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import HelpCenter from "./pages/support/HelpCenter";

// Import Coming Soon page
import ComingSoon from "./pages/ComingSoon";

const AppRoutes = () => {
  return (
    <Router>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/career" element={<Career />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/services/data-analytics"
              element={<DataAnalytics />}
            />
            <Route
              path="/services/software-product-engineering"
              element={<SoftwareProductEngineering />}
            />
            <Route
              path="/services/web-development"
              element={<WebDevelopment />}
            />
            <Route
              path="/services/mobile-app-development"
              element={<MobileAppDevelopment />}
            />
            <Route
              path="/services/cloud-solutions"
              element={<CloudSolutions />}
            />
            <Route path="/industries" element={<Industries />} />
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route
              path="/industries/banking-financial-services"
              element={<BankingFinancialServices />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help-center" element={<HelpCenter />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
          </Routes>
        </Box>
        <SiteMap />
        <Footer />
      </Box>
    </Router>
  );
};

export default AppRoutes;
