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
  backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
  backdropFilter: scrolled ? 'blur(15px)' : 'none',
  boxShadow: scrolled 
    ? 'rgb(2, 0, 0) 0px 8px 30px -6px inset, 0 4px 20px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05)' 
    : 'none',
  borderBottom: scrolled ? '1px solid rgba(229, 229, 229, 0.6)' : 'none',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: scrolled ? 'translateY(0)' : 'translateY(0)',
  animation: scrolled ? 'slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
  '@keyframes slideDown': {
    '0%': {
      transform: 'translateY(-100%)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
}));

const StyledLogo = styled('img')(({ scrolled }) => ({
  height: '52px',
  width: 'auto',
  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  filter: scrolled ? 'none' : 'brightness(0) invert(1)', // Makes logo white when transparent
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
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
          <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 1, md: 2 } }}>
            {/* Logo on the left */}
            <StyledLogo
              src={new URL("../../assets/logos/logo.png", import.meta.url).href}
              alt="Infoxygen"
              scrolled={isScrolled ? 1 : 0}
            />
           
            {/* All navigation and button grouped on the right */}
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
