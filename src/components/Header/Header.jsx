import React, { useState, useEffect, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  useTheme,
  useMediaQuery,
  styled,
  Box,
} from "@mui/material";
import { Menu as MenuIcon, DarkMode, LightMode } from "@mui/icons-material";
import { Link } from "react-router-dom";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import Tooltip from "@mui/material/Tooltip";
import { ColorModeContext } from "../../index";

const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  backgroundColor: scrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
  backdropFilter: scrolled ? "blur(15px)" : "none",
  boxShadow: scrolled
    ? "rgb(2, 0, 0) 0px 8px 30px -6px inset, 0 4px 20px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)"
    : "none",
  borderBottom: scrolled ? "1px solid rgba(229, 229, 229, 0.6)" : "none",
  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  transform: scrolled ? "translateY(0)" : "translateY(0)",
  animation: scrolled ? "slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
  "@keyframes slideDown": {
    "0%": {
      transform: "translateY(-100%)",
      opacity: 0,
    },
    "100%": {
      transform: "translateY(0)",
      opacity: 1,
    },
  },
  "--Paper-overlay": "none !important",
}));

const StyledLogo = styled("img")(({ scrolled, theme }) => ({
  height: "52px",
  width: "auto",
  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
  filter: scrolled ? "none" : "none", // Natural colors when not scrolled
  animation: scrolled ? "none" : "logoColorCycle 10s ease-in-out infinite",
  "@keyframes logoColorCycle": {
    "0%, 100%": {
      filter: "none",
      transform: "scale(1)",
    },
    "25%": {
      filter:
        theme.palette.mode === "light"
          ? "invert(0) brightness(0)"
          : "brightness(0) invert(1)",
      transform: "scale(1.01)",
    },
    "50%": {
      filter: "none",
      transform: "scale(1.02)",
    },
    "75%": {
      filter:
        theme.palette.mode === "light"
          ? "invert(0) brightness(0)"
          : "brightness(0) invert(1)",
      transform: "scale(1.01)",
    },
  },
}));

/**
 * Main Header component that manages navigation state and responsive behavior
 * @description Renders the main header with logo, navigation menus, and mobile drawer
 * @returns {JSX.Element} The header component with navigation and mobile menu
 */

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [industriesAnchorEl, setIndustriesAnchorEl] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const colorMode = useContext(ColorModeContext);
  const isDarkMode = colorMode.mode === "dark";

  /**
   * Handles scroll events to update header appearance
   * @description Adds scroll event listener to detect when page is scrolled
   * @returns {void}
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /**
   * Handles Services dropdown menu click
   * @description Opens the Services dropdown menu by setting anchor element
   * @param {React.MouseEvent} event - The click event object
   * @returns {void}
   */
  const handleServicesClick = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  /**
   * Handles Industries dropdown menu click
   * @description Opens the Industries dropdown menu by setting anchor element
   * @param {React.MouseEvent} event - The click event object
   * @returns {void}
   */
  const handleIndustriesClick = (event) => {
    setIndustriesAnchorEl(event.currentTarget);
  };

  /**
   * Closes all dropdown menus
   * @description Resets anchor elements to close Services and Industries dropdowns
   * @returns {void}
   */
  const handleClose = () => {
    setServicesAnchorEl(null);
    setIndustriesAnchorEl(null);
  };

  /**
   * Toggles mobile drawer visibility
   * @description Opens or closes the mobile navigation drawer
   * @returns {void}
   */
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  /**
   * Toggles mobile Services section expansion
   * @description Expands or collapses the Services section in mobile menu
   * @returns {void}
   */
  const handleMobileServicesToggle = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  /**
   * Toggles mobile Industries section expansion
   * @description Expands or collapses the Industries section in mobile menu
   * @returns {void}
   */
  const handleMobileIndustriesToggle = () => {
    setMobileIndustriesOpen(!mobileIndustriesOpen);
  };

  return (
    <>
      <StyledAppBar position="fixed" scrolled={isScrolled ? 1 : 0}>
        <Container maxWidth="lg">
          <Toolbar
            sx={{ justifyContent: "space-between", px: { xs: 1, md: 2 } }}
          >
            {/* Logo on the left */}
            <Link to="/">
              <StyledLogo
                src={
                  new URL("../../assets/logos/logo.png", import.meta.url).href
                }
                alt="Infoxygen"
                scrolled={isScrolled ? 1 : 0}
                sx={{ mx: { xs: 0.5, md: 0 }, p: { xs: 0.5, md: 0 } }}
              />
            </Link>

            {/* All navigation and button grouped on the right */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {!isMobile && (
                <DesktopMenu
                  theme={theme}
                  scrolled={isScrolled}
                  servicesAnchorEl={servicesAnchorEl}
                  industriesAnchorEl={industriesAnchorEl}
                  handleServicesClick={handleServicesClick}
                  handleIndustriesClick={handleIndustriesClick}
                  handleClose={handleClose}
                />
              )}
              <Tooltip
                title={
                  isDarkMode ? "Change to Light Mode" : "Change to Dark Mode"
                }
              >
                <IconButton
                  color="inherit"
                  onClick={colorMode.toggleColorMode}
                  sx={{ ml: 1 }}
                  aria-label={
                    isDarkMode ? "Change to Light Mode" : "Change to Dark Mode"
                  }
                >
                  {isDarkMode ? (
                    <DarkMode
                      sx={{
                        color: isScrolled
                          ? theme.palette.primary.main
                          : theme.palette.secondary.main,
                      }}
                    />
                  ) : (
                    <LightMode
                      sx={{
                        color: isScrolled
                          ? theme.palette.primary.main
                          : theme.palette.secondary.main,
                      }}
                    />
                  )}
                </IconButton>
              </Tooltip>
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ color: theme.palette.primary.main }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Mobile Drawer */}
      <MobileMenu
        mobileOpen={mobileOpen}
        mobileServicesOpen={mobileServicesOpen}
        mobileIndustriesOpen={mobileIndustriesOpen}
        handleDrawerToggle={handleDrawerToggle}
        handleMobileServicesToggle={handleMobileServicesToggle}
        handleMobileIndustriesToggle={handleMobileIndustriesToggle}
      />

      {/* Toolbar spacer */}
      <Toolbar />
    </>
  );
};

export default Header;
