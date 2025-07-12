import React from 'react';
import {
  Box,
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  useTheme,
  styled
} from '@mui/material';
import {
  ExpandMore,
  ExpandLess
} from '@mui/icons-material';
import { SERVICES_ITEMS, INDUSTRIES_ITEMS } from './constants';
import ActionButton from '../CustomButtons/ActionButton/ActionButton';

/**
 * Styled menu item component for dropdown menus
 * @description Menu item with hover effects and padding transitions
 * @param {Object} theme - MUI theme object
 */
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

const DesktopMenu = ({
  theme,
  servicesAnchorEl,
  industriesAnchorEl,
  handleServicesClick,
  handleIndustriesClick,
  handleClose
}) => {
  /**
   * Renders the main desktop navigation menu
   * @description Creates navigation buttons with hover animations and dropdown triggers
   * @returns {JSX.Element} Desktop navigation menu buttons
   */
  const renderDesktopMenu = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      <Button
        variant="text"
        sx={{ 
          color: theme.palette.primary.main, 
          fontWeight: 500,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '0%',
            height: '2px',
            backgroundColor: theme.palette.secondary.main,
            transition: 'width 0.3s ease',
          },
          '&:hover': { 
            backgroundColor: 'transparent',
            color: theme.palette.secondary.main,
            '&::after': {
              width: '100%',
            }
          }
        }}
      >
        Home
      </Button>
      
      <Button
        variant="text"
        onClick={handleServicesClick}
        endIcon={Boolean(servicesAnchorEl) ? <ExpandLess /> : <ExpandMore />}
        sx={{ 
          color: theme.palette.primary.main, 
          fontWeight: 500,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '0%',
            height: '2px',
            backgroundColor: theme.palette.secondary.main,
            transition: 'width 0.3s ease',
          },
          '&:hover': { 
            backgroundColor: 'transparent',
            color: theme.palette.secondary.main,
            '&::after': {
              width: '100%',
            }
          }
        }}
      >
        Services
      </Button>
      
      <Button
        variant="text"
        onClick={handleIndustriesClick}
        endIcon={Boolean(industriesAnchorEl) ? <ExpandLess /> : <ExpandMore />}
        sx={{ 
          color: theme.palette.primary.main, 
          fontWeight: 500,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '0%',
            height: '2px',
            backgroundColor: theme.palette.secondary.main,
            transition: 'width 0.3s ease',
          },
          '&:hover': { 
            backgroundColor: 'transparent',
            color: theme.palette.secondary.main,
            '&::after': {
              width: '100%',
            }
          }
        }}
      >
        Industries
      </Button>
      
      <Button
        variant="text"
        sx={{ 
          color: theme.palette.primary.main, 
          fontWeight: 500,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '0%',
            height: '2px',
            backgroundColor: theme.palette.secondary.main,
            transition: 'width 0.3s ease',
          },
          '&:hover': { 
            backgroundColor: 'transparent',
            color: theme.palette.secondary.main,
            '&::after': {
              width: '100%',
            }
          }
        }}
      >
        About
      </Button>
      
      <Button
        variant="text"
        sx={{ 
          color: theme.palette.primary.main, 
          fontWeight: 500,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '0%',
            height: '2px',
            backgroundColor: theme.palette.secondary.main,
            transition: 'width 0.3s ease',
          },
          '&:hover': { 
            backgroundColor: 'transparent',
            color: theme.palette.secondary.main,
            '&::after': {
              width: '100%',
            }
          }
        }}
      >
        Blog
      </Button>
      
      <Button
        variant="text"
        sx={{ 
          color: theme.palette.primary.main, 
          fontWeight: 500,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '0%',
            height: '2px',
            backgroundColor: theme.palette.secondary.main,
            transition: 'width 0.3s ease',
          },
          '&:hover': { 
            backgroundColor: 'transparent',
            color: theme.palette.secondary.main,
            '&::after': {
              width: '100%',
            }
          }
        }}
      >
        Careers
      </Button>
      
      <ActionButton text="LET'S CONNECT" direction="left" radius={0} />
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
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }
          }
        }}
      >
        {SERVICES_ITEMS.map((item, index) => (
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
        slotProps={{
          paper: {
            sx: {
              mt: 1,
              minWidth: 280,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            }
          }
        }}
      >
        {INDUSTRIES_ITEMS.map((item, index) => (
          <StyledMenuItem key={index} onClick={handleClose}>
            <ListItemIcon sx={{ minWidth: 36 }}>
              {item.icon}
            </ListItemIcon>
            {item.name}
          </StyledMenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DesktopMenu; 