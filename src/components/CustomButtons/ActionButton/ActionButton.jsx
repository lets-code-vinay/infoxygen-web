// src/components/common/ActionButton.jsx
import React from 'react';
import { Button, styled } from '@mui/material';

/**
 * Styled button component with custom animations
 * @description Button with sliding background animation and customizable border radius
 * @param {Object} theme - MUI theme object
 * @param {string} direction - Direction of sliding animation
 * @param {number} radius - Border radius in pixels
 */
const StyledButton = styled(Button)(({ theme, direction, radius = 0 }) => {
  const borderRadius = `${radius}px`;
  
  return {
    color: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: `${borderRadius} !important`,
    padding: '8px 24px',
    fontWeight: 500,
    textTransform: 'none',
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    transition: 'color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
    '&.MuiButton-root': {
      borderRadius: `${borderRadius} !important`,
    },
    '&.MuiButtonBase-root': {
      borderRadius: `${borderRadius} !important`,
    },
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'white',
      boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
      borderRadius: `${borderRadius} !important`,
    },
    '&:focus': {
      borderRadius: `${borderRadius} !important`,
    },
    '&:active': {
      borderRadius: `${borderRadius} !important`,
    },
    '&:focus-visible': {
      borderRadius: `${borderRadius} !important`,
    },
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: direction === 'right' ? '100%' : '-100%',
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.primary.main,
      transition: 'left 0.3s ease',
      zIndex: -1,
    },
    '&:hover::before': {
      left: 0,
    },
  };
});

const ActionButton = ({ 
  text, 
  direction = 'left', 
  radius = 0, 
  fullWidth = false,
  onClick,
  ...props 
}) => {
  return (
    <StyledButton
      direction={direction}
      radius={radius}
      fullWidth={fullWidth}
      onClick={onClick}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default ActionButton;
