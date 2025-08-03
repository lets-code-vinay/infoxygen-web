import React from "react";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
  useTheme,
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
 * Styled menu item component for dropdown menus
 * @description Menu item with hover effects and padding transitions
 * @param {Object} theme - MUI theme object
 */
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  padding: "12px 16px",
  fontSize: "0.9rem",
  fontWeight: 400,
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#f8f9fa",
    color: theme.palette.secondary.main,
    paddingLeft: "24px",
  },
}));

const DesktopMenu = ({
  theme,
  scrolled,
  servicesAnchorEl,
  industriesAnchorEl,
  handleServicesClick,
  handleIndustriesClick,
  handleClose,
}) => {
  const navigate = useNavigate();

  const handleLetsConnect = () => {
    navigate("/contact");
  };

  /**
   * Renders the main desktop navigation menu
   * @description Creates navigation buttons with hover animations and dropdown triggers
   * @returns {JSX.Element} Desktop navigation menu buttons
   */
  const renderDesktopMenu = () => (
    <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
      <Button
        component={Link}
        to="/"
        variant="text"
        sx={{
          color:
            theme.palette.mode === "light"
              ? theme.palette.primary.main
              : scrolled
              ? theme.palette.primary.main
              : theme.palette.accent.light,
          fontWeight: 500,
          position: "relative",
          transition: "color 0.3s ease",
          textDecoration: "none",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "0%",
            height: "2px",
            backgroundColor: theme.palette.secondary.main,
            transition: "width 0.3s ease",
          },
          "&:hover": {
            backgroundColor: "transparent",
            color: theme.palette.secondary.main,
            textDecoration: "none",
            "&::after": {
              width: "100%",
            },
          },
        }}
      >
        Home
      </Button>

      <Button
        variant="text"
        onClick={handleServicesClick}
        endIcon={Boolean(servicesAnchorEl) ? <ExpandLess /> : <ExpandMore />}
        sx={{
          color:
            theme.palette.mode === "light"
              ? theme.palette.primary.main
              : scrolled
              ? theme.palette.primary.main
              : theme.palette.accent.light,
          fontWeight: 500,
          position: "relative",
          transition: "color 0.3s ease",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "0%",
            height: "2px",
            backgroundColor: theme.palette.secondary.main,
            transition: "width 0.3s ease",
          },
          "&:hover": {
            backgroundColor: "transparent",
            color: theme.palette.secondary.main,
            "&::after": {
              width: "100%",
            },
          },
        }}
      >
        Services
      </Button>

      <Button
        variant="text"
        onClick={handleIndustriesClick}
        endIcon={Boolean(industriesAnchorEl) ? <ExpandLess /> : <ExpandMore />}
        sx={{
          color:
            theme.palette.mode === "light"
              ? theme.palette.primary.main
              : scrolled
              ? theme.palette.primary.main
              : theme.palette.accent.light,
          fontWeight: 500,
          position: "relative",
          transition: "color 0.3s ease",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "0%",
            height: "2px",
            backgroundColor: theme.palette.secondary.main,
            transition: "width 0.3s ease",
          },
          "&:hover": {
            backgroundColor: "transparent",
            color: theme.palette.secondary.main,
            "&::after": {
              width: "100%",
            },
          },
        }}
      >
        Industries
      </Button>

      <Button
        component={Link}
        to="/blog"
        variant="text"
        sx={{
          color:
            theme.palette.mode === "light"
              ? theme.palette.primary.main
              : scrolled
              ? theme.palette.primary.main
              : theme.palette.accent.light,
          fontWeight: 500,
          position: "relative",
          transition: "color 0.3s ease",
          textDecoration: "none",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "0%",
            height: "2px",
            backgroundColor: theme.palette.secondary.main,
            transition: "width 0.3s ease",
          },
          "&:hover": {
            backgroundColor: "transparent",
            color: theme.palette.secondary.main,
            textDecoration: "none",
            "&::after": {
              width: "100%",
            },
          },
        }}
      >
        Blog
      </Button>

      <Button
        component={Link}
        to="/career"
        variant="text"
        sx={{
          color:
            theme.palette.mode === "light"
              ? theme.palette.primary.main
              : scrolled
              ? theme.palette.primary.main
              : theme.palette.accent.light,
          fontWeight: 500,
          position: "relative",
          transition: "color 0.3s ease",
          textDecoration: "none",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "0%",
            height: "2px",
            backgroundColor: theme.palette.secondary.main,
            transition: "width 0.3s ease",
          },
          "&:hover": {
            backgroundColor: "transparent",
            color: theme.palette.secondary.main,
            textDecoration: "none",
            "&::after": {
              width: "100%",
            },
          },
        }}
      >
        Careers
      </Button>

      <ActionButton
        text="LET'S CONNECT"
        direction="left"
        radius={0}
        colorVariant={
          theme.palette.mode === "light"
            ? "primary"
            : scrolled
            ? "primary"
            : "accent"
        }
        onClick={handleLetsConnect}
      />
    </Box>
  );

  return (
    <>
      {renderDesktopMenu()}

      {/* Desktop Dropdown Menus */}
      <Menu
        anchorEl={servicesAnchorEl}
        open={Boolean(servicesAnchorEl)}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 280,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            },
          },
        }}
      >
        {SERVICES_ITEMS.map((item, index) => {
          const isAvailable = isServiceAvailable(item.name);
          return (
            <StyledMenuItem
              key={index}
              onClick={() => {
                handleClose();
                if (isAvailable) {
                  window.location.href = getServicePath(item.name);
                } else {
                  window.location.href = `/coming-soon?title=${encodeURIComponent(
                    item.name
                  )}&category=service`;
                }
              }}
              sx={{
                opacity: isAvailable ? 1 : 0.6,
                cursor: isAvailable ? "pointer" : "default",
                "&:hover": {
                  backgroundColor: isAvailable ? "#f8f9fa" : "transparent",
                  color: isAvailable ? "secondary.main" : "text.secondary",
                },
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
                <span>{item.name}</span>
                {!isAvailable && (
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", fontStyle: "italic" }}
                  >
                    Coming Soon
                  </Typography>
                )}
              </Box>
            </StyledMenuItem>
          );
        })}
      </Menu>

      <Menu
        anchorEl={industriesAnchorEl}
        open={Boolean(industriesAnchorEl)}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 280,
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            },
          },
        }}
      >
        {INDUSTRIES_ITEMS.map((item, index) => {
          const isAvailable = isIndustryAvailable(item.name);
          return (
            <StyledMenuItem
              key={index}
              onClick={() => {
                handleClose();
                if (isAvailable) {
                  window.location.href = getIndustryPath(item.name);
                } else {
                  window.location.href = `/coming-soon?title=${encodeURIComponent(
                    item.name
                  )}&category=industry`;
                }
              }}
              sx={{
                opacity: isAvailable ? 1 : 0.6,
                cursor: isAvailable ? "pointer" : "default",
                "&:hover": {
                  backgroundColor: isAvailable ? "#f8f9fa" : "transparent",
                  color: isAvailable ? "secondary.main" : "text.secondary",
                },
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
                <span>{item.name}</span>
                {!isAvailable && (
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary", fontStyle: "italic" }}
                  >
                    Coming Soon
                  </Typography>
                )}
              </Box>
            </StyledMenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default DesktopMenu;
