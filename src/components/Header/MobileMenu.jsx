import React from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
  Box,
  Drawer,
  styled
} from '@mui/material';
import {
  ExpandMore,
  ExpandLess
} from '@mui/icons-material';
import { SERVICES_ITEMS, INDUSTRIES_ITEMS } from './constants';
import ActionButton from '../CustomButtons/ActionButton/ActionButton';

/**
 * Styled list item button for mobile menu
 * @description List item button with hover effects and border styling
 * @param {Object} theme - MUI theme object
 */
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

const MobileMenu = ({
  mobileOpen,
  mobileServicesOpen,
  mobileIndustriesOpen,
  handleDrawerToggle,
  handleMobileServicesToggle,
  handleMobileIndustriesToggle
}) => {
  /**
   * Renders the mobile navigation menu content
   * @description Creates the list of navigation items with expandable sections
   * @returns {JSX.Element} Mobile navigation menu list
   */
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
          {SERVICES_ITEMS.map((item, index) => (
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
          {INDUSTRIES_ITEMS.map((item, index) => (
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
        <ActionButton text="LET'S CONNECT" direction="right" radius={10} fullWidth={true}/>
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
            boxSizing: 'border-box',
          }
        }
      }}
    >
      {renderMobileMenu()}
    </Drawer>
  );
};

export default MobileMenu; 