import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Menu,
  MenuItem,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  useTheme,
  useMediaQuery,
  styled
} from "@mui/material";
import {
  ExpandMore,
  ExpandLess,
  Menu as MenuIcon,
  Business,
  Code,
  Psychology,
  Lightbulb,
  Analytics,
  Link,
  Computer,
  Security,
  Cloud,
  Inventory,
  AccountBalance,
  Shield,
  LocalHospital,
  Science,
  PhoneAndroid,
  Factory,
  Storage,
  Wifi
} from "@mui/icons-material";

const StyledAppBar = styled(AppBar)(({ theme, scrolled }) => ({
  backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : '#ffffff',
  backdropFilter: scrolled ? 'blur(10px)' : 'none',
  boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.08)' : '0 1px 3px rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid #e5e5e5',
  transition: 'all 0.3s ease',
}));

const StyledLogo = styled('img')({
  height: '40px',
  width: 'auto',
  filter: 'brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)',
  transition: 'all 0.3s ease',
});

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  border: `2px solid ${theme.palette.primary.main}`,
  borderRadius: '5px',
  padding: '8px 24px',
  fontWeight: 500,
  textTransform: 'none',
  position: 'relative',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
    transform: 'translateY(-1px)',
    boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    transition: 'left 0.3s ease',
    zIndex: -1,
  },
  '&:hover::before': {
    left: 0,
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '12px 16px',
  fontSize: '0.9rem',
  fontWeight: 400,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#f8f9fa',
    color: theme.palette.secondary.main,
    paddingLeft: '24px',
  },
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '12px 16px',
  fontSize: '0.9rem',
  fontWeight: 400,
  transition: 'all 0.3s ease',
  borderBottom: '1px solid #e9ecef',
  '&:hover': {
    backgroundColor: '#e9ecef',
    color: theme.palette.secondary.main,
    paddingLeft: '24px',
  },
  '&:last-child': {
    borderBottom: 'none',
  },
}));

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesAnchorEl, setServicesAnchorEl] = useState(null);
  const [industriesAnchorEl, setIndustriesAnchorEl] = useState(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const servicesItems = [
    { name: "Digital Strategy & Design", icon: <Lightbulb /> },
    { name: "Software Product Engineering", icon: <Code /> },
    { name: "Intelligent Automation", icon: <Psychology /> },
    { name: "CX Transformation", icon: <Lightbulb /> },
    { name: "Data & Analytics", icon: <Analytics /> },
    { name: "Enterprise Integration", icon: <Link /> },
    { name: "Application Development and Management", icon: <Computer /> },
    { name: "Enterprise IT Security", icon: <Security /> },
    { name: "Cloud Infrastructure", icon: <Cloud /> },
    { name: "Open Source Hub", icon: <Inventory /> }
  ];

  const industriesItems = [
    { name: "Banking & Financial Services", icon: <AccountBalance /> },
    { name: "Insurance", icon: <Shield /> },
    { name: "Healthcare", icon: <LocalHospital /> },
    { name: "Life Sciences", icon: <Science /> },
    { name: "Consumer Tech", icon: <PhoneAndroid /> },
    { name: "Industrial", icon: <Factory /> },
    { name: "Software & Hi-Tech", icon: <Storage /> },
    { name: "Telecom & Media", icon: <Wifi /> }
  ];

  const handleServicesClick = (event) => {
    setServicesAnchorEl(event.currentTarget);
  };

  const handleIndustriesClick = (event) => {
    setIndustriesAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setServicesAnchorEl(null);
    setIndustriesAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMobileServicesToggle = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  const handleMobileIndustriesToggle = () => {
    setMobileIndustriesOpen(!mobileIndustriesOpen);
  };

  const renderDesktopMenu = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      <Button
        color="inherit"
        sx={{ 
          color: theme.palette.primary.main, 
          fontWeight: 500,
          '&:hover': { color: theme.palette.secondary.main }
        }}
      >
        Home
      </Button>
      
      <Button
        color="inherit"
        onClick={handleServicesClick}
        endIcon={<ExpandMore />}
        sx={{ 
          color: theme.palette.primary.main, 
          fontWeight: 500,
          '&:hover': { color: theme.palette.secondary.main }
        }}
      >
        Services
      </Button>
      
      <Button
        color="inherit"
        onClick={handleIndustriesClick}
        endIcon={<ExpandMore />}
        sx={{ 
          color: theme.palette.primary.main, 
          fontWeight: 500,
          '&:hover': { color: theme.palette.secondary.main }
        }}
      >
        Industries
      </Button>
      
      <Button
        color="inherit"
        sx={{ 
          color: theme.palette.primary.main, 
          fontWeight: 500,
          '&:hover': { color: theme.palette.secondary.main }
        }}
      >
        About
      </Button>
      
      <Button
        color="inherit"
        sx={{ 
          color: theme.palette.primary.main, 
          fontWeight: 500,
          '&:hover': { color: theme.palette.secondary.main }
        }}
      >
        Blog
      </Button>
      
      <Button
        color="inherit"
        sx={{ 
          color: theme.palette.primary.main, 
          fontWeight: 500,
          '&:hover': { color: theme.palette.secondary.main }
        }}
      >
        Careers
      </Button>
      
      <StyledButton>
        LET'S CONNECT
      </StyledButton>
    </Box>
  );

  const renderMobileMenu = () => (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
      
      <ListItem disablePadding>
        <ListItemButton onClick={handleMobileServicesToggle}>
          <ListItemText primary="Services" />
          {mobileServicesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      
      <Collapse in={mobileServicesOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {servicesItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <StyledListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </StyledListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
      
      <ListItem disablePadding>
        <ListItemButton onClick={handleMobileIndustriesToggle}>
          <ListItemText primary="Industries" />
          {mobileIndustriesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </ListItem>
      
      <Collapse in={mobileIndustriesOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {industriesItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <StyledListItemButton sx={{ pl: 4 }}>
                <ListItemIcon sx={{ minWidth: 36 }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </StyledListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
      
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="About" />
        </ListItemButton>
      </ListItem>
      
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Blog" />
        </ListItemButton>
      </ListItem>
      
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="Careers" />
        </ListItemButton>
      </ListItem>
      
      <Box sx={{ p: 2, pt: 3 }}>
        <StyledButton fullWidth>
          LET'S CONNECT
        </StyledButton>
      </Box>
    </List>
  );

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
            {!isMobile && renderDesktopMenu()}
            
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
      
      {/* Desktop Dropdown Menus */}
      <Menu
        anchorEl={servicesAnchorEl}
        open={Boolean(servicesAnchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 280,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          }
        }}
      >
        {servicesItems.map((item, index) => (
          <StyledMenuItem key={index} onClick={handleClose}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              {item.icon}
            </ListItemIcon>
            {item.name}
          </StyledMenuItem>
        ))}
      </Menu>
      
      <Menu
        anchorEl={industriesAnchorEl}
        open={Boolean(industriesAnchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 280,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          }
        }}
      >
        {industriesItems.map((item, index) => (
          <StyledMenuItem key={index} onClick={handleClose}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              {item.icon}
            </ListItemIcon>
            {item.name}
          </StyledMenuItem>
        ))}
      </Menu>
      
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: 280,
            boxSizing: 'border-box',
          }
        }}
      >
        {renderMobileMenu()}
      </Drawer>
      
      {/* Toolbar spacer */}
      <Toolbar />
    </>
  );
};

export default Header;
