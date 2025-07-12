import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  useTheme,
  useMediaQuery,
  styled
} from "@mui/material";
import {
  Menu as MenuIcon
} from "@mui/icons-material";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : '#ffffff',
  backdropFilter: scrolled ? 'blur(10px)' : 'none',
  boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.08)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid #e5e5e5',
  transition: 'all 0.3s ease',
}));

const StyledLogo = styled('img')({
  height: '52px',
  width: 'auto',
  transition: 'all 0.3s ease',
});

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
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  /**
   * Handles scroll events to update header appearance
   * @description Adds scroll event listener to detect when page is scrolled
   * @returns {void}
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, md: 2 } }}>
            {/* Logo on the left */}
            <StyledLogo
              src={new URL("../../assets/logos/io2-logo-light.png", import.meta.url).href}
              alt="Infoxygen"
            />
           
            {/* All navigation and button grouped on the right */}
            {!isMobile && (
              <DesktopMenu
                theme={theme}
                servicesAnchorEl={servicesAnchorEl}
                industriesAnchorEl={industriesAnchorEl}
                handleServicesClick={handleServicesClick}
                handleIndustriesClick={handleIndustriesClick}
                handleClose={handleClose}
              />
            )}
            
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
