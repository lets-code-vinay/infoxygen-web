import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  Box,
  Drawer,
  Typography,
  styled,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { SERVICES_ITEMS, INDUSTRIES_ITEMS } from "./constants";
import {
  isServiceAvailable,
  isIndustryAvailable,
  getServicePath,
  getIndustryPath,
} from "../../config/pagesConfig";
import ActionButton from "../CustomButtons/ActionButton/ActionButton";

/**
 * Styled list item button for mobile menu
 * @description List item button with hover effects and border styling
 * @param {Object} theme - MUI theme object
 */
const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 16px",
  fontSize: "0.9rem",
  fontWeight: 400,
  transition: "all 0.3s ease",
  borderBottom: "1px solid #e9ecef",
  "&:hover": {
    backgroundColor: "#e9ecef",
    color: theme.palette.secondary.main,
    paddingLeft: "24px",
  },
  "&:last-child": {
    borderBottom: "none",
  },
}));

const MobileMenu = ({
  mobileOpen,
  mobileServicesOpen,
  mobileIndustriesOpen,
  handleDrawerToggle,
  handleMobileServicesToggle,
  handleMobileIndustriesToggle,
}) => {
  const navigate = useNavigate();

  const handleLetsConnect = () => {
    navigate("/contact");
    handleDrawerToggle(); // Close the mobile menu
  };

  /**
   * Renders the mobile navigation menu content
   * @description Creates the list of navigation items with expandable sections
   * @returns {JSX.Element} Mobile navigation menu list
   */
  const renderMobileMenu = () => (
    <List>
      <ListItem disablePadding>
        <ListItemButton component={Link} to="/">
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
          {SERVICES_ITEMS.map((item, index) => {
            const isAvailable = isServiceAvailable(item.name);
            return (
              <ListItem key={index} disablePadding>
                <StyledListItemButton
                  sx={{
                    pl: 4,
                    opacity: isAvailable ? 1 : 0.6,
                    cursor: isAvailable ? "pointer" : "default",
                  }}
                  onClick={() => {
                    if (isAvailable) {
                      window.location.href = getServicePath(item.name);
                    } else {
                      window.location.href = `/coming-soon?title=${encodeURIComponent(
                        item.name
                      )}&category=service`;
                    }
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <ListItemText primary={item.name} />
                    {!isAvailable && (
                      <Typography
                        variant="caption"
                        sx={{ color: "text.secondary", fontStyle: "italic" }}
                      >
                        Coming Soon
                      </Typography>
                    )}
                  </Box>
                </StyledListItemButton>
              </ListItem>
            );
          })}
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
          {INDUSTRIES_ITEMS.map((item, index) => {
            const isAvailable = isIndustryAvailable(item.name);
            return (
              <ListItem key={index} disablePadding>
                <StyledListItemButton
                  sx={{
                    pl: 4,
                    opacity: isAvailable ? 1 : 0.6,
                    cursor: isAvailable ? "pointer" : "default",
                  }}
                  onClick={() => {
                    if (isAvailable) {
                      window.location.href = getIndustryPath(item.name);
                    } else {
                      window.location.href = `/coming-soon?title=${encodeURIComponent(
                        item.name
                      )}&category=industry`;
                    }
                  }}
                >
                  <ListItemIcon sx={{ minWidth: 36 }}>{item.icon}</ListItemIcon>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <ListItemText primary={item.name} />
                    {!isAvailable && (
                      <Typography
                        variant="caption"
                        sx={{ color: "text.secondary", fontStyle: "italic" }}
                      >
                        Coming Soon
                      </Typography>
                    )}
                  </Box>
                </StyledListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Collapse>

      <ListItem disablePadding>
        <ListItemButton>
          <ListItemText primary="About" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component={Link} to="/blog">
          <ListItemText primary="Blog" />
        </ListItemButton>
      </ListItem>

      <ListItem disablePadding>
        <ListItemButton component={Link} to="/career">
          <ListItemText primary="Careers" />
        </ListItemButton>
      </ListItem>

      <Box sx={{ p: 2, pt: 3 }}>
        <ActionButton
          text="LET'S CONNECT"
          direction="right"
          radius={10}
          fullWidth={true}
          onClick={handleLetsConnect}
        />
      </Box>
    </List>
  );

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      keepMounted
      slotProps={{
        paper: {
          sx: {
            width: 280,
            boxSizing: "border-box",
          },
        },
      }}
    >
      {renderMobileMenu()}
    </Drawer>
  );
};

export default MobileMenu;
